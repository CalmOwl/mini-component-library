import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--height": 24 + "px",
    "--font-size": 14 / 16 + "rem",
    "--border-width": 1 + "px",
    "--padding": "4px 8px 4px 24px",

  },
  large: {
    "--height": 36 + "px",
    "--font-size": 18 / 16 + "rem",
    "--border-width": 2 + "px",
    "--padding": "8px 12px 7px 36px",
  },
}

const Wrapper = styled.div`
  position: relative; 
`

const InputElem = styled.input`
  width: var(--width);
  height: var(--height);
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: var(--font-size);
  line-height: 1;
  color: ${COLORS.gray700};
  border: none;
  border-bottom: var(--border-width) solid ${COLORS.black};
  padding: var(--padding);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:hover {
    color:${COLORS.black};
  }
`

const IconElem = styled(Icon)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${COLORS.gray700};

  ${Wrapper}:hover & {
    color: ${COLORS.black};
  }
`

const IconInput = ({ label, icon, width = 250, size, placeholder, }) => {
  const styles = {
    ...SIZES[size],
    "--width": `${width}px`,
  };
  return (
    <Wrapper style={styles}>
      <VisuallyHidden><label htmlFor='search-field'>Search</label></VisuallyHidden>
      <InputElem id="search-field" type='text' placeholder={placeholder}></InputElem>
      <IconElem
        id={icon}
        size={size === "small" ? 16 : 24}
        strokeWidth={size === "small" ? 1 : 2}
      />
    </Wrapper>
  );
};

export default IconInput;
