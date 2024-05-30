import * as S from '../quests-catalog/quests-catalog.styled';
import QuestItem from '../quest-item/quest-item';
import { questArr } from 'components/mocks';
import { nanoid } from 'nanoid';

const COUNT = 6;

const QuestsList = () => {

    return (
        <S.QuestsList>
            {questArr.map(quest => <QuestItem props={quest} key={nanoid()} />)}
        </S.QuestsList>
)
}

export default QuestsList;