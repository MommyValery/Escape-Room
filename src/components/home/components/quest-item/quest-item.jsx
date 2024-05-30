import * as S from '../quests-catalog/quests-catalog.styled';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';

const QuestItem = ({props}) => {
   const { level, title, previewImg, peopleCount } = props;
    return (
        <S.QuestItem>
<S.QuestItemLink to="/quest">
    <S.Quest>
        <S.QuestImage
            src={previewImg}
            width="344"
            height="232"
            alt={`квест ${title}`}
        />

        <S.QuestContent>
            <S.QuestTitle>{title}</S.QuestTitle>

            <S.QuestFeatures>
                <S.QuestFeatureItem>
                    <IconPerson />
                    {`${peopleCount[0]}– ${peopleCount[1]} чел`}
                </S.QuestFeatureItem>
                <S.QuestFeatureItem>
                    <IconPuzzle />
                    {level}
                </S.QuestFeatureItem>
            </S.QuestFeatures>
        </S.QuestContent>
    </S.Quest>
</S.QuestItemLink>
</S.QuestItem>

)
}

export default QuestItem;