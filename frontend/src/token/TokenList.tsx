import { FC } from "react";
import { TokenListItem, TokenListSection, TokenValidateBox } from "./tokenList.style";

interface Token {
    token: string;
    valid: true | false | undefined
}

const TokenList: FC<{ tokens: Token[], onValidate: (token: string) => void }> = ({ tokens, onValidate }) => {
    return <>
        <TokenListSection>
            <h4>Tokens list</h4>
            <div>

                {tokens.map((t, i) => <TokenListItem key={`${t.token}-${i}`}>
                    {t.token}
                    {t.valid === true && <TokenValidateBox valid={t.valid}>✔</TokenValidateBox>}
                    {t.valid === false && <TokenValidateBox valid={t.valid}>✖</TokenValidateBox>}
                    {t.valid === undefined && <TokenValidateBox valid={t.valid} onClick={() => onValidate(t.token)}>➤</TokenValidateBox>}

                </TokenListItem>)}
            </div>
        </TokenListSection>
    </>
}

export { TokenList }
export type { Token }