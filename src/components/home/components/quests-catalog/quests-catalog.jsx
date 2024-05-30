import QuestTabs from '../quests-tabs/quests-tabs';
import QuestsList from '../quests-list/quests-list';

const QuestsCatalog = () => {
    function onClick(evt) {
      evt.preventDefault();
      console.log(evt.target);
        //evt.target.isActive = !isActive;
    }

  return (
    <>
      <QuestTabs />
      <QuestsList />
      </>
  )
}

export default QuestsCatalog;
