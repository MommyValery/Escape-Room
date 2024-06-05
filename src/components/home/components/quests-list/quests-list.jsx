import * as S from '../quests-catalog/quests-catalog.styled';
import QuestItem from '../quest-item/quest-item';
import { useSelector } from 'react-redux';
import { getFilteredQuests, getType } from 'store/quests-options/selectors';
import { getQuests } from 'store/quests-data/selectors';
import { DEFAULT_TYPE } from 'const';
import { useState } from 'react';


const QuestsList = () => {
  const activeType = useSelector(getType);
  const quests = useSelector(getQuests);
  const filtredQuests = useSelector(getFilteredQuests);
  const [, setDetailedQuest] = useState(null);
  const handleQuestClick = (id) => setDetailedQuest(id);

  return (
    <S.QuestsList>
      {((activeType.name === DEFAULT_TYPE.name) ? quests : filtredQuests)
      .map((quest) => <QuestItem onClick={handleQuestClick} {...quest} key={quest.id} />)}
    </S.QuestsList>
  )
}

export default QuestsList;