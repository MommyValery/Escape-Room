import { useEffect, useState } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { adaptJSONlevel, adaptJSONtype } from '../../utils';
import { getQuestById } from 'store/quests-data/selectors';
import { fetchQuestById } from 'store/action';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch, useSelector } from 'react-redux';

const DetailedQuest = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false)
  const activeQuest = useSelector(getQuestById);

  useEffect(() => {
    const { id } = params;
    if (id) {
      const parseId = Number(id);
      dispatch(fetchQuestById(parseId));
    }
  }, [params, dispatch]);

  if (!activeQuest) {
    return null;
  }

  const { title, description, id, coverImg, type, level, duration, peopleCount } = activeQuest;

  const handleBookingBtnClick = () => {
    setIsBookingModalOpened(!isBookingModalOpened);
  };
      
  return (
    <MainLayout>
      <S.Main key={id}>
        <S.PageImage
          src={`../${coverImg}`}
          alt={`Квест ${title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{title}</S.PageTitle>
            <S.PageSubtitle>{adaptJSONtype(type)}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{`${duration} мин`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{peopleCount} чел</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                              <S.FeatureTitle>{adaptJSONlevel(level)}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={handleBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        { isBookingModalOpened &&
         <BookingModal isBookingModalOpened={isBookingModalOpened} 
         onBookingModalCloseClick={handleBookingBtnClick} />}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
