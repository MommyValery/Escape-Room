import logo from 'assets/img/logo.svg';
import * as S from './header.styled';
import { useState } from 'react';
import { getMenuItems } from 'const';

const Header = () => {
 //const dispatch = useAppDispatch();
    //const activeCity = useAppSelector(getCity);
    //const handleClick = useCallback((city) => {
    //  dispatch(setCityAction(city));
    //}, [dispatch]);
    const [isActiveLink, setIsActiveLink] = useState(window.location.pathname)
    const handleClick = (activeItem) => {
        if (window.location.pathname === '/') {
            return;
          } else {
            setIsActiveLink(activeItem);
            //dispatch(resetState());
          }
    }
  
    return (
        <S.StyledHeader>
            <S.HeaderWrapper>
                <S.Logo>
                    <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
                </S.Logo>

                <S.Navigation>
                    <S.Links>      
                        {getMenuItems().map((link) => (
                            <S.LinkItem key={link.name}>
                                <S.Link
                                    onClick={() => {
                                        handleClick(link.name);
                                    }}
                                    to={link.path}
                                    $isActiveLink={isActiveLink === link.path ? true : false}>
                                    {link.name}
                                </S.Link>
                            </S.LinkItem>
  ))}
                    </S.Links>
                    </S.Navigation>
                    <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
                    </S.HeaderWrapper>
                    </S.StyledHeader>
                );
}
export default Header;
