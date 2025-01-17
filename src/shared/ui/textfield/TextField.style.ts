import { styled } from 'styled-components';
import type { TextFieldSize } from '@/shared/ui/textfield/TextField';

export const Container = styled.div<{ size: TextFieldSize }>`
  ${({ size }) => `
    width: ${size === 'sm' ? '28.8rem' : size === 'md' ? '49.6rem' : '80.8rem'};
  `}
  ${({ theme }) => theme.device.MOBILE} {
    width: 100%;
  }
`;

export const Input = styled.input<{ $hasValue: boolean }>`
  background-color: ${({ theme }) => theme.color.WHITE};
  width: 100%;
  height: 4.8rem;
  outline: none;
  border-radius: 0.8rem;
  border: 0.1rem solid ${({ theme }) => theme.color.GRAY_30};
  padding: 0 1.6rem;

  &::placeholder {
    color: ${({ theme }) => theme.color.GRAY_50};
  }

  ${({ theme }) => theme.typo.CAPTION_14};

  ${({ $hasValue, theme }) =>
    $hasValue &&
    `
      color: ${theme.color.BLACK_80};
    `}

  &:focus {
    border-color: ${({ theme }) => theme.color.BLUE_50};
    color: ${({ theme }) => theme.color.BLACK_80};
  }

  ${({ theme }) => theme.device.MOBILE} {
    height: 4.2rem;
    ${({ theme }) => theme.typo.CAPTION_12};
  }
`;
