import React, { ReactHTML } from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */

const StyledList = styled.ul`
  text-align: center;
  list-style: none;
  padding: 0;
  display: grid;
  grid-gap: 9px;
  grid-template-columns: 1fr 1fr;
`;

export const List: React.FC<any> = (props) => {
  return (
    <StyledList>
      { props.children }
    </StyledList>
  );
};

export default List;
