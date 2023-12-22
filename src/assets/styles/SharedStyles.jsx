// styles
import { css } from 'styled-components';

export const containerStyles = css`
  max-width: 1380px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;

export const titleStyles = css`
  font-family: ${({ theme }) => theme.family.vazi};
  font-size: ${({ theme }) => theme.sizes.xl};
  font-weight: ${({ theme }) => theme.weight.bold};
  letter-spacing: ${({ theme }) => theme.letterSpacing.l};
`;