import { useEffect, useRef, useState } from 'react'
import { DigitTable } from '../digit/DigitTable'
import { getToken } from '../utils/generator'
import { AppWrapper } from './app.style'
import { Token, TokenList } from '../token/TokenList'
import { useApi } from '../api'
import { StatisticsSection } from '../statistics/Statistics'

function App() {
  const [selectedDigits, setSelectedDigits] = useState<number[]>([])
  const [tokens, setTokens] = useState<Token[]>([])
  const [infiniteGeneration, setInfiniteGeneration] = useState(false)
  const [validate] = useApi()
  const intervalRef = useRef<number>(0)

  useEffect(() => {
    if (!infiniteGeneration) {
      clearInterval(intervalRef.current)
      return
    }

    intervalRef.current = setInterval(() => {
      const newToken = getToken(selectedDigits)
      setTokens(tokens => [...tokens, newToken])
      handleValidateToken(newToken.token)
    }, 1000)
  }, [infiniteGeneration])

  const handleSelectedDigits = (digit: number) => {
    if (selectedDigits.includes(digit)) {
      setSelectedDigits(selectedDigits.filter(d => d !== digit))
    } else {
      setSelectedDigits([...selectedDigits, digit])
    }
  }

  const handleGenerateSingle = () => {
    setTokens([...tokens, getToken(selectedDigits)])
  }

  const handleValidateToken = async (token: string) => {
    const res = await validate(token)

    setTokens(tokens => tokens.map(t => {
      if (t.token === token) {
        return { token, valid: res }
      }
      return t
    }))

  }

  const isDisabled = !selectedDigits.length

  return (
    <AppWrapper>
      <TokenList tokens={tokens} onValidate={handleValidateToken} />
      <div>
        <DigitTable selected={selectedDigits} onSelect={handleSelectedDigits} />
        <button disabled={isDisabled} onClick={() => setInfiniteGeneration(!infiniteGeneration)}>{infiniteGeneration ? "stop generation" : "Generate indefinetely"}</button>
        <button disabled={isDisabled} onClick={handleGenerateSingle}>Generate single token</button>
        <button onClick={() => setTokens([])}>Clear all tokens</button>
        <StatisticsSection tokens={tokens} />
      </div>

    </AppWrapper>
  )
}

export default App
