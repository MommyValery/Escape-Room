import * as S from '../quests-catalog/quests-catalog.styled';
import { TYPES_TABS } from 'const';
import TabItem from '../tab/tab-item';
import { nanoid } from 'nanoid';
import { useCallback } from 'react';
//import { useAppDispatch, useAppSelector } from '../../hooks';

const QuestTabs = () => {
    //const dispatch = useAppDispatch(); 
    //const activeCity = useAppSelector(getCity);
    //const handleClick = useCallback((city) => {
    //  dispatch(setCityAction(city));
    //}, [dispatch]);
    const handleClick = () => {

    }

    return (
        <S.Tabs>
          {TYPES_TABS.map((tab) => <TabItem tab={tab} key={tab.name}
              isActive={false} onClick={handleClick} />)}
        </S.Tabs>
    )
}
export default QuestTabs;