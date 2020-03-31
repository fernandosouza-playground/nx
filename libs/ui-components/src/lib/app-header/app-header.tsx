import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AppHeaderProps {
  children: JSX.Element
}

const StyledAppHeader = styled.header``;

export const AppHeader = (props: AppHeaderProps) => {
  return (
    <StyledAppHeader className="flex">
    {props.children}
  </StyledAppHeader>
  );
};

export default AppHeader;
