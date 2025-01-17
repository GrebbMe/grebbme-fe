import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.color.BLUE_10};
  border-top: 1px solid ${({ theme }) => theme.color.BLUE_30};
  ${({ theme }) => theme.typo.TITLE};
  width: 100%;
  height: 20.1rem;
  user-select: none;
`;

export const LogoBox = styled.div`
  grid-column: 1 / span 2;
  display: flex;
  align-items: center;
  margin-top: 4.1rem;
`;
export const TextLinkBox = styled.div`
  grid-row: 2;
  grid-column: 1 / span 3;
  display: flex;
  align-items: center;
  column-gap: 3.2rem;
  margin-top: 3.2rem;
`;
export const TextLink = styled(Link)`
  color: ${({ theme }) => theme.color.BLACK_80};
  ${({ theme }) => theme.typo.SUBTITLE_14};
  text-decoration: none;

  &:hover,
  &:active {
    text-decoration: underline;
    color: ${({ theme }) => theme.color.PRIMARY_BLUE};
  }
`;
export const GithubLink = styled(Link)`
  margin-top: 3.2rem;
  grid-row: 2;
  grid-column: 12 / span 1;
  justify-self: end;
  display: flex;
  align-items: center;
`;
export const ProgrammersLink = styled(Link)`
  margin-top: 3.2rem;
  grid-row: 2;
  display: flex;
  align-items: center;
  grid-column: 10 / span 2;
  justify-self: end;
`;

export const CopyrightBox = styled.div`
  grid-row: 3;
  grid-column: 1 / 4;
  color: ${({ theme }) => theme.color.GRAY_50};
  margin-top: 2.4rem;
  ${({ theme }) => theme.typo.CAPTION_12};
`;

export const FooterWrapper = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(12, 8rem);
  column-gap: 2.4rem;
  max-width: 122.4rem;
  /* 
  ${({ theme }) => theme.device.TABLET} {
    grid-template-columns: repeat(6, 1fr);
    column-gap: 2.4rem;
    margin: 2.4rem;
  }

  ${({ theme }) => theme.device.MOBILE} {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1.6rem;
    margin: 1.6rem;
  } */
`;
