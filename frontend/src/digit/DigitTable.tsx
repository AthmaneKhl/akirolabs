import { FC } from 'react'
import { Digit } from './Digit'
import { DigitTableGrid } from './digit.style'

const DigitTable: FC<{ selected: number[], onSelect: (digit: number) => void }> = ({ selected, onSelect }) => {
    return (
        <>
            <h4>Select allowed digits</h4>
            <DigitTableGrid >
                {new Array(10).fill(null).map((_, i) => <Digit key={i} value={i} selected={selected.includes(i)} onClick={() => onSelect(i)} />)}
            </DigitTableGrid>
        </>
    )
}

export { DigitTable }
