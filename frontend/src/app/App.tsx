import { useState } from 'react'
import { DigitTable } from '../digit/DigitTable'
import { getToken } from '../utils/generator'
import { AppWrapper } from './app.style'
import { TokenList } from '../token/TokenList'

function App() {
  const [selectedDigits, setSelectedDigits] = useState<number[]>([])
  const [tokens, setTokens] = useState<string[]>([])

  const handleSelectedDigits = (digit: number) => {
    if (selectedDigits.includes(digit)) {
      setSelectedDigits(selectedDigits.filter(d => d !== digit))
    } else {
      setSelectedDigits([...selectedDigits, digit])
    }
  }

  return (
    <AppWrapper>
      <DigitTable selected={selectedDigits} onSelect={handleSelectedDigits} />
      <button disabled={!selectedDigits.length && true} onClick={() => setTokens([...tokens, getToken(selectedDigits)])}>Generate</button>
      <TokenList tokens={tokens} />

    </AppWrapper>
  )
}

export default App
