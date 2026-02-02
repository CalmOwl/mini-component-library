import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';


const Wrapper = styled.div`
  position: relative; 
  width: fit-content;

`

const SelectElem = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1;
  letter-spacing: 0%;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  border: none;
  border-radius: 8px;
  padding: 12px 54px 12px 16px;
  width: fit-content;

  &:hover {
  color:${COLORS.black}
  }
`

const ChevronIcon = styled(Icon)`
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${COLORS.gray700};
  
  ${Wrapper}:hover & {
  color: ${COLORS.black};
  }
`

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectElem value={value} onChange={onChange} aria-label={label}>
        {children}
      </SelectElem>
      <ChevronIcon id="chevron-down" size={16} strokeWidth={2} />
    </Wrapper>
  );
};

export default Select;
