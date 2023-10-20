import styled from "@emotion/styled";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 16px;
  padding-top: 32px;
  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

export { AppWrapper };
