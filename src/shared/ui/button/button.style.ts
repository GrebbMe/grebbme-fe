import { styled } from 'styled-components';
import { ButtonProps } from '@/shared/ui/button/Button';

const StyledButton = styled.button<ButtonProps>`
  &:hover {
    background-color: ${({ theme }) => theme.color.BLUE_30};
    color: ${({ theme }) => theme.color.PRIMARY_BLUE};
    border: 0.15rem solid ${({ theme }) => theme.color.PRIMARY_BLUE};
    img {
      filter: invert(15%) sepia(16%) saturate(2513%) hue-rotate(180deg) brightness(99%)
        contrast(90%);
    }
  }

  &:active {
    background-color: ${({ theme }) => theme.color.WHITE};
    color: ${({ theme }) => theme.color.PRIMARY_BLUE};
    border: 0.15rem solid ${({ theme }) => theme.color.PRIMARY_BLUE};
    img {
      filter: invert(15%) sepia(16%) saturate(2513%) hue-rotate(180deg) brightness(99%)
        contrast(90%);
    }
  }

  img {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(134deg) brightness(102%) contrast(101%);
  }
  background-color: ${({ theme }) => theme.color.PRIMARY_BLUE};
  color: white;
  border: ${({ isThin }) => (isThin ? '0.1rem' : '0.15rem')} solid
    ${({ theme }) => theme.color.PRIMARY_BLUE};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  height: 3.8rem;
  border-radius: 0.8rem;
  white-space: nowrap;
  width: ${({ width }) => width};
  ${({ theme }) => theme.typo.BODY_SEMIBOLD};
`;

export { StyledButton };
