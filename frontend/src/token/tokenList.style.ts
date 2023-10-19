import styled from "@emotion/styled";

const TokenListSection = styled.div`
  max-height: 70vh;
  overflow-y: scroll;
  width: 250px;
  gap: 8px;
  display: flex;
  flex-direction: column;
`;

const TokenListItem = styled.div`
  padding: 8px;
  border: 1px solid lightgray;
  border-radius: 8px;
  text-align: center;
`;

export { TokenListSection, TokenListItem };
