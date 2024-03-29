import styled from 'styled-components'

export const CoffeeItemContainer = styled.div`
  padding: 0 1.25rem 1.25rem;
  text-align: center;
  width: 16rem;
  background-color: ${(props) => props.theme['base-200']};
  border-radius: 6px 36px;

  h3 {
    font-size: 1.25rem;
    padding-bottom: 0.5rem;
  }

  p {
    padding-bottom: 2.0625rem;
    color: ${(props) => props.theme['base-600']};
    font-size: 0.875rem;
  }
`

export const ImageBox = styled.div`
  position: relative;
  bottom: 14px;
`

export const Badge = styled.div`
  background-color: ${(props) => props.theme['primary-100']};
  color: ${(props) => props.theme['primary-700']};
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  margin: 0.075rem 0 1rem 0;
  display: inline-block;

  font-weight: bold;
  font-size: 0.625rem;
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.25rem;

  > span {
    font-size: 0.875rem;
  }

  strong {
    font-size: 1.5rem;
    font-family: 'Baloo 2';
    line-height: 1.6;
    font-weight: 800;
    color: ${(props) => props.theme['base-700']};
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`
