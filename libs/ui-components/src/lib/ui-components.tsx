import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UiComponentsProps {}

const StyledUiComponents = styled.div`
  color: pink;
`;

export const UiComponents = (props: UiComponentsProps) => {
  return (
    <StyledUiComponents>
      <h1>Welcome to ui-components component!</h1>
    </StyledUiComponents>
  );
};

export default UiComponents;
