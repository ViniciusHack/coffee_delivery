import styled, { css } from 'styled-components'

interface RadioButtonContainerProps {
  selected: boolean
}

export const RadioButtonContainer = styled.button<RadioButtonContainerProps>`
  text-transform: uppercase;

  background-color: ${(props) => props.theme['base-400']};
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.8125rem;
  padding: 1rem;
  transition: background-color 0.1s;

  border: 1px solid transparent;

  p {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 160%;

    text-transform: uppercase;
    color: ${(props) => props.theme['base-700']};
  }

  svg {
    color: ${(props) => props.theme['secondary-400']};
  }

  :hover {
    background-color: ${(props) => props.theme['base-500']};
  }

  ${(props) =>
    props.selected &&
    css`
      background-color: ${(props) => props.theme['secondary-100']};
      border: 1px solid ${(props) => props.theme['secondary-400']};
    `}
`
