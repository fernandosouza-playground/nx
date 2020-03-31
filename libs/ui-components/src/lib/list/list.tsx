import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ListProps {
  children: JSX.Element
}

const StyledList = styled.ul`
  text-align: center;
  list-style: none;
  padding: 0;
  display: grid;
  grid-gap: 9px;
  grid-template-columns: 1fr 1fr;
`;

export const List = (props: ListProps) => {
  return (
    <StyledList>
      {props.children}
    </StyledList>
  );
};

export default List;
