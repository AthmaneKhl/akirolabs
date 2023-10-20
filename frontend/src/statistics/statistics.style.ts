import styled from "@emotion/styled";

const StatBox = styled.div<{ selected?: boolean }>`
  font-size: 3rem;
`;

const StatsWrapper = styled.div<{ selected?: boolean }>`
  text-align: center;
  border-radius: 8px;
  padding: 24px;
  border: 3px solid whitesmoke;
  hr {
    border: 1px solid whitesmoke;
  }
`;

export { StatBox, StatsWrapper };
