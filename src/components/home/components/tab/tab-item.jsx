import * as S from '../quests-catalog/quests-catalog.styled';
import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';

const renderIcon = (type) => {
    switch (type) {
        case 'AllQuests':
          return <IconAllQuests />;
        case 'Adventures':
          return  <IconAdventures />;
        case 'Horrors':
           return <IconHorrors/>;
        case 'Mystic':
           return <IconMystic />;
        case 'Detective':
           return <IconDetective />;
        case 'Scifi':
           return <IconScifi />;
    }
}

const TabItem = ({ tab, isActive, onClick }) => {
    const handleClick = () => {
        onClick(tab);
    };

    return (
               isActive ? <S.TabItem onClick={handleClick}>
                    <S.TabBtn isActive>
                {renderIcon(tab.type)}
                        <S.TabTitle>{tab.name}</S.TabTitle>
                    </S.TabBtn>
        </S.TabItem> :
            <S.TabItem onClick={handleClick}>
            <S.TabBtn >
        {renderIcon(tab.type)}
                <S.TabTitle>{tab.name}</S.TabTitle>
            </S.TabBtn>
</S.TabItem>
        )
}


export default TabItem;