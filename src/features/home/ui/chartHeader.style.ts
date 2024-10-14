import styled from 'styled-components';
import { typo } from '@/app/styles';

export const ChartHeaderContainer = styled.div`
  width: 79.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.6rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.color.GRAY_30};

  .title-container {
    display: flex;
    gap: 0.8rem;
    align-items: baseline;
  }
`;

export const HeaderTitle = styled.h1`
  ${typo.BODY_SEMIBOLD};
  color: ${({ theme }) => theme.color.BLACK_100};
`;

export const HeaderDescription = styled.p`
  ${typo.CAPTION_12};
  color: ${({ theme }) => theme.color.GRAY_50};
`;

export const DateContainer = styled.div`
  display: flex;
  width: 14.2rem;
  height: 2.4rem;
  justify-content: space-between;
  align-items: center;
`;

export const IcArrow = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`;

export const YearMonth = styled.h2`
  ${typo.SUBTITLE_14};
  color: ${({ theme }) => theme.color.BLACK_100};
`;