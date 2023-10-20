import { FC } from "react";
import { StatBox, StatsWrapper } from "./statistics.style";
import { Token } from "../token/TokenList";


const StatisticsSection: FC<{ tokens: Token[] }> = ({ tokens }) => {
    const totalTokens = tokens.length
    const validTokens = tokens.filter(t => t.valid).length
    const invalidTokens = totalTokens - validTokens

    return <StatsWrapper>
        <h4>Total</h4>
        <StatBox>
            {totalTokens}
        </StatBox>
        <hr />
        <h4>Valid</h4>
        <StatBox>
            {validTokens}
        </StatBox>
        <hr />
        <h4>Invalid</h4>
        <StatBox>
            {invalidTokens}
        </StatBox>
    </StatsWrapper>
}

export { StatisticsSection }
