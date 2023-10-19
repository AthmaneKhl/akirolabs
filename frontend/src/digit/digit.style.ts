import styled from "@emotion/styled";

const DigitBox = styled.div<{ selected?: boolean }>`
  border: 1px solid lightgray;
  padding: 8px 16px;
  border-radius: 8px;
  background: ${({ selected }) => (selected ? "lightgray" : "white")};
`;

const DigitTableGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  gap: 8px;
  cursor: pointer;
`;

export { DigitBox, DigitTableGrid };
