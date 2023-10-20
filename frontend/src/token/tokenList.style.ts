import styled from "@emotion/styled";

const TokenListSection = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    max-height: 80vh;
    overflow-y: scroll;
    width: 250px;
    gap: 8px;
    display: flex;
    flex-direction: column;
  }
`;

const TokenListItem = styled.div`
  padding: 8px;
  border: 1px solid lightgray;
  border-radius: 8px;
  text-align: center;
`;

const TokenValidateBox = styled.span<{ valid?: boolean; onClick?: () => void }>`
  padding: 4px;
  margin-left: 8px;
  cursor: ${({ onClick }) => (!!onClick ? "pointer" : "initial")};
  background: ${({ onClick }) => (!!onClick ? "whitesmoke" : "initial")};
  border: ${({ onClick }) => (!!onClick ? "1px solid lightgray" : "initial")};
  border-radius: 8px;
  color: ${({ valid }) =>
    valid ? "green" : valid === false ? "red" : "initial"};
`;

export { TokenListSection, TokenListItem, TokenValidateBox };
