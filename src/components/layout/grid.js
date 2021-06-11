import * as React from "react";
import styled from "styled-components";

const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
`;

const grid = (props) => {
  return <GridWrapper>{props.children}</GridWrapper>;
};

export default grid;