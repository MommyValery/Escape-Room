import * as S from '../quests-catalog/quests-catalog.styled';
import { DEFAULT_TYPE, TYPES_TABS } from 'const';
import TabItem from '../tab/tab-item';
import { useDispatch, useSelector } from 'react-redux';
import { getType } from 'store/quests-options/selectors';
import { getTypeToFilter, resetState } from 'store/action';
import { useState } from 'react';

const QuestTabs = () => {
  const dispatch = useDispatch();
  const activeType = useSelector(getType);
  const [, setIsActiveType] = useState(TYPES_TABS[0]);
  const handleTypeClick = (type) => {
    setIsActiveType(type);
    if (type === DEFAULT_TYPE) {
      dispatch(resetState());
    } else {
      dispatch(getTypeToFilter(type));
    }
  }
  return (
    <S.Tabs>
      {TYPES_TABS.map((tab) => <TabItem tab={tab} key={tab.name}
        isActive={tab.name === activeType.name} onClick={handleTypeClick} />)}
    </S.Tabs>
  )
}

export default QuestTabs;