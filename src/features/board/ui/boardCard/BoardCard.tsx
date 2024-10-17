import { useEffect, useState } from 'react';
import * as S from '@/features/board/ui/boardCard/BoardCard.style';
import { IcBookmark, IcViewSmall, IcBookmarkSmall, IcChatSmall } from '@/shared/assets';
import { Button, CountLabel, Tag } from '@/shared/ui';
import { SelectItem } from '@/shared/ui/select/MultiSelect';

export interface BoardCard {
  id: number;
  title: string;
  content: string;
  expiredAt?: string;
  career?: string;
  stacks: string[];
  viewCount: number;
  bookmarkCount: number;
  chatCount: number;
  isBookmarked: boolean;
}

const BoardCard = ({
  content,
  title,
  expiredAt,
  career,
  stacks,
  viewCount,
  bookmarkCount,
  chatCount,
  isBookmarked,
}: BoardCard) => {
  // const { techStackList, isLoading } = useFetchCategories();
  const [stackNames, setStackNames] = useState<SelectItem[]>([]);

  //TODO : 테스트 코드 API 연동 후 삭제 필요
  // useEffect(() => {
  //   if (!isLoading && techStackList.length > 0) {
  //     const convertedStacks = convertIdToStackName(stacks, techStackList);
  //     setStackNames(convertedStacks);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isLoading]);

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.TitleLayout>
            <S.Title>{title}</S.Title>
            {expiredAt ? (
              <S.Information>{expiredAt}</S.Information>
            ) : (
              <S.Information>{career}</S.Information>
            )}
          </S.TitleLayout>
          <S.CountLayout>
            <CountLabel icon={<IcViewSmall />} count={viewCount} hasBorder={true} />
            <CountLabel icon={<IcBookmarkSmall />} count={bookmarkCount} hasBorder={true} />
            <CountLabel icon={<IcChatSmall />} count={chatCount} hasBorder={true} />
          </S.CountLayout>
        </S.Wrapper>
        <S.Content>{content}</S.Content>
        <S.Wrapper>
          <S.StackLayout>
            {stackNames.map((stack) => (
              <Tag key={stack.id}>{stack.item}</Tag>
            ))}
          </S.StackLayout>
          {isBookmarked ? (
            <S.BookmarkWrapper>
              <Button type="button" variant="primary" icon={<IcBookmark />} size="sm">
                북마크
              </Button>
            </S.BookmarkWrapper>
          ) : (
            <Button type="button" variant="primary" icon={<IcBookmark />} size="sm">
              북마크
            </Button>
          )}
        </S.Wrapper>
      </S.Container>
    </>
  );
};

export default BoardCard;
