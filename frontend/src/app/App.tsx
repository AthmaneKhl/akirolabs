import { useEffect, useRef, useState } from 'react'
import { DigitTable } from '../digit/DigitTable'
import { getToken } from '../utils/generator'
import { AppWrapper } from './app.style'
import { TokenList } from '../token/TokenList'

function App() {
  const [selectedDigits, setSelectedDigits] = useState<number[]>([])
  const [tokens, setTokens] = useState<string[]>([])
  const [infiniteGeneration, setInfiniteGeneration] = useState(false)
  const intervalRef = useRef<number>(0)

  useEffect(() => {
    if (!infiniteGeneration) {
      clearInterval(intervalRef.current)
      return
    }

    intervalRef.current = setInterval(() => {
      setTokens(tokens => [...tokens, getToken(selectedDigits)])
    }, 1000)
  }, [infiniteGeneration])

  const handleSelectedDigits = (digit: number) => {
    if (selectedDigits.includes(digit)) {
      setSelectedDigits(selectedDigits.filter(d => d !== digit))
    } else {
      setSelectedDigits([...selectedDigits, digit])
    }
  }

  const isDisabled = !selectedDigits.length

  return (
    <AppWrapper>
      <DigitTable selected={selectedDigits} onSelect={handleSelectedDigits} />
      <button disabled={isDisabled} onClick={() => setInfiniteGeneration(!infiniteGeneration)}>{infiniteGeneration ? "stop generation" : "Generate indefinetely"}</button>
      <button disabled={isDisabled} onClick={() => setTokens([...tokens, getToken(selectedDigits)])}>Generate</button>
      <TokenList tokens={tokens} />

    </AppWrapper>
  )
}

export default App
