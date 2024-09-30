import { css, styled } from 'styled-components';

// 스타일 정의
const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 16px;

  .prev-button,
  .next-button {
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.color.BLUE_50};
    img {
      width: 24px;
    }
    &:disabled {
      cursor: not-allowed;
    }
  }

  .prev-button {
    transform: rotate(270deg);
  }
  .next-button {
    transform: rotate(90deg);
  }

  .year-month {
    width: 130px;
    ${({ theme }) => css`
      ${theme.typo.SUBTITE_20}
    `};
  }
`;

export { HeaderContainer };