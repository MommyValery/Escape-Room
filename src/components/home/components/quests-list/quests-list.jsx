import * as S from '../quests-catalog/quests-catalog.styled';
import QuestItem from '../quest-item/quest-item';
import { questArr } from 'components/mocks';

const COUNT = 6;

const QuestsList = () => {

    return (
        <S.QuestsList>
            {questArr.map(quest => <QuestItem props={quest} id={quest.id} />)}
        </S.QuestsList>
)
}

export default QuestsList;