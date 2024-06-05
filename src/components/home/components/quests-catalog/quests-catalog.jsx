import QuestTabs from '../quests-tabs/quests-tabs';
import QuestsList from '../quests-list/quests-list';
import { getQuests } from 'store/quests-data/selectors';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const QuestsCatalog = () => {
  const quests = useSelector(getQuests);
  const [, setActiveQuest] = useState(null);
  const handleQuestClick = (id) => {
    setActiveQuest(id);
  };

  return (
    <>
      <QuestTabs />
      <QuestsList onClick={handleQuestClick} quests={quests} />
    </>
  )
}

export default QuestsCatalog;
