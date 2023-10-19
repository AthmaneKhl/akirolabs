import { FC } from 'react'
import { DigitBox } from './digit.style'

const Digit: FC<{ value: number, selected: boolean, onClick: () => void }> = ({ value, selected, onClick }) => {
    console.log(selected);

    return (
        <DigitBox selected={selected} onClick={onClick}>
            {value}
        </DigitBox >
    )
}

export { Digit }
