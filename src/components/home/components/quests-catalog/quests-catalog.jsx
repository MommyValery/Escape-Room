import QuestTabs from '../quests-tabs/quests-tabs';
import QuestsList from '../quests-list/quests-list';
import { useState } from 'react';

const QuestsCatalog = () => {
  const [, setActiveQuest] = useState(null);
  const handleQuestClick = (id) => {
    setActiveQuest(id);
  };

  return (
    <>
      <QuestTabs />
      <QuestsList onClick={handleQuestClick}/>
    </>
  )
}

export default QuestsCatalog;
