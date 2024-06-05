import QuestTabs from '../quests-tabs/quests-tabs';
import QuestsList from '../quests-list/quests-list';
import { getQuests } from 'store/quests-data/selectors';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const QuestsCatalog = () => {
    const quests = useSelector(getQuests);
    //const areQuestsLoading = useSelector(getAreQuestsLoading);
    const [, setActiveQuest] = useState(null);
    const onQuestClick = (id) => {
        setActiveQuest(id);
      };
   
  return (
    <>
        <QuestTabs />
          <QuestsList onClick={onQuestClick} quests={quests} />
      </>
  )
}

export default QuestsCatalog;
