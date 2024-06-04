import QuestTabs from '../quests-tabs/quests-tabs';
import QuestsList from '../quests-list/quests-list';
import { getFiltredQuests, getType } from 'store/quests-options/selectors';
import { getAreQuestsLoading, getIsQuestLoading, getQuests } from 'store/quests-data/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

const QuestsCatalog = () => {
    const activeType = useSelector(getType);
    console.log(activeType);
    const quests = useSelector(getQuests);
    console.log(quests);
    //const areQuestsLoading = useSelector(getAreQuestsLoading);
    const [activeQuest, setActiveQuest] = useState(null);
    const onQuestClick = (id) => {
        setActiveQuest(id);
      };
   
  return (
    <>
        <QuestTabs />
          <QuestsList onClick={onQuestClick} activeType={activeType} quests={quests} />
      </>
  )
}

export default QuestsCatalog;
