/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--height": 8 + "px",
    "--border-radius": 4 + "px",
  },

  medium: {
    "--height": 12 + "px",
    "--border-radius": 4 + "px",
  },

  large: {
    "--height": 24 + "px",
    "--border-radius": 8 + "px",
    "--padding": 4 + "px",
  },
}

const ProgressBarElem = styled.div`
  width: 370px;
  height: var(--height);
  background: ${COLORS.transparentGray15};
  padding: var(--padding);
  border: none;
  border-radius: var(--border-radius);
  box-shadow: 0px 2px 4px 0px ${COLORS.transparentGray35} inset;
`

const ProgressBarValue = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;

  &::after {
    position: absolute;
    content: '';
    width: var(--progress);
    height: 100%;
    background-color: ${COLORS.primary};
  }
`

const ProgressBar = ({ value, size }) => {
  const styles = {
    ...SIZES[size],
    "--progress": `${value}%`,
  };

  return (
    <>
      <ProgressBarElem role="progressbar" aria-label='progress bar' style={styles}>
        <ProgressBarValue aria-valuenow={value}/>
      </ProgressBarElem>
    </>
  );
};

export default ProgressBar;
