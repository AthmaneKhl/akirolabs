import { FC } from "react";
import { TokenListItem, TokenListSection } from "./tokenList.style";


const TokenList: FC<{ tokens: string[] }> = ({ tokens }) => {
    return <TokenListSection>
        {tokens.map(t => <TokenListItem>{t}</TokenListItem>)}
    </TokenListSection>
}

export { TokenList }