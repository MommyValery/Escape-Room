import * as S from '../quests-catalog/quests-catalog.styled';
import QuestItem from '../quest-item/quest-item';
import { useSelector } from 'react-redux';
import { getFiltredQuests } from 'store/quests-options/selectors';
import { DEFAULT_TYPE } from 'const';
import { useState } from 'react';


const QuestsList = ({quests}, activeType) => {
    //const filtredQuests = useSelector(getFiltredQuests);
    const [detailedQuest, setDetailedQuest] = useState(null);
    const onQuestClick = (id) => {
        setDetailedQuest(id);
    }
    return (
        <S.QuestsList>
           {/*{((activeType.name === DEFAULT_TYPE.name) ? quests : filtredQuests)*/}
        {quests.map((quest) => <QuestItem onClick={onQuestClick} props={quest} key={quest.id} />)}
        </S.QuestsList>
)
}

export default QuestsList;