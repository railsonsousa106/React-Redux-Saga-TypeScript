// core
import React, { useEffect, useState, useCallback, MouseEvent } from 'react';

// library
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

// components
import { UI_ROUTES as routes } from '../../constants/routes';
import { SignUp } from '../../modals/AuthModals';
import { CommonAuthModal } from '../../modals/CommonAuthModal';
import { Profile } from '../Profile';
import { HirePopup } from './HirePopup/HirePopup';
import { modalsActions } from '../../redux/modals/actions';
import HeaderBlogCreate from 'pages/Blog/Create/HeaderBlogCreate';

// assets
import styles from './Header.module.scss';
import logo from '../../assets/home/images/logo.svg';
import logoWhite from '../../assets/home/images/logo-white.svg';
import { push } from 'connected-react-router';
import { useScrollPosition } from '../../customHooks/useScroll';
import { OpenModalStatus } from '../../constants/modals';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { selectAuthModalData } from '../../redux/modals/selectors';

let classname: boolean;

const menus = [
  { link: routes.plugAndPlay, label: 'Plug-and-Play' },
  { link: routes.buildYourOwn, label: 'Build-Your-Own' },
  { link: routes.pricing, label: 'Pricing' },
  { link: routes.blog, label: 'Blog' },
  { link: routes.about, label: 'About Us' },
  { link: routes.faq, label: 'Support' },
];

export const Header = ({ showPopupHire, setShowPopupHire }: any) => {
  const [scroll] = useScrollPosition();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const isBlogCreate = pathname == '/blog/create';

  const { status: openedModal } = useSelector(selectAuthModalData);
  const isLogged = useSelector(selectIsLoggedIn);

  const [activeMobile, setActiveMobile] = useState(false);

  useEffect(() => {
    classname = scroll < 120;
  }, [scroll]);

  const addClass = () => {
    setActiveMobile(!activeMobile);
  };

  const setOpenedModal = (status: OpenModalStatus) => {
    dispatch(modalsActions.authModalStatusRefresh(status));
  };

  const onClickFreeTrial = useCallback(() => {
    dispatch(modalsActions.freeTrialModalToggle(true));
  }, [dispatch]);

  const linkClick = useCallback(
    link => (e: MouseEvent) => {
      e.preventDefault();
      dispatch(push(link));
    },
    [dispatch]
  );

  return (
    <header className={classname ? `${styles.header} global` : `${styles.header} ${styles.headerFixed} global`}>
      <CommonAuthModal isOpen={openedModal === 'signUp'} onClose={() => setOpenedModal('')} maxWidth={'lg'}>
        <SignUp setOpenedModal={setOpenedModal} />
      </CommonAuthModal>
      {showPopupHire.show && <HirePopup showPopupHire={showPopupHire} setShowPopupHire={setShowPopupHire} />}
      <div className="container">
        <div className={styles.headerContainer}>
          <div className={styles.headerInner}>
            <a onClick={linkClick(routes.home)} href={routes.home}>
              <img className={styles.desktop} src={logo} alt="" />
              <img src={logoWhite} alt="" />
            </a>
            {isBlogCreate && <HeaderBlogCreate />}
            {!isBlogCreate && (<nav>
              <div className={activeMobile ? `${styles.show} ${styles.menu}` : styles.menu}>
                <ul>
                  {menus.map(menu => (
                    <li key={menu.label}>
                      <a
                        onClick={linkClick(menu.link)}
                        href={menu.link}
                        className={`${window.location.pathname.includes(menu.link) ? styles.active : ''}`}
                      >
                        {menu.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={activeMobile ? `${styles.burgerMenu}  ${styles.active}` : styles.burgerMenu}
                  onClick={() => addClass()}
                >
                  <span className={styles.burgerMenuLines} />
                </button>
              </div>
              {!isLogged ? (
                <div className={styles.buttons}>
                  <button type="button" className="btn btnGreen" onClick={onClickFreeTrial}>
                    Request Demo
                  </button>
                </div>
              ) : (
                <Profile />
              )}
              <button
                type="button"
                className={activeMobile ? `${styles.burgerMenu}  ${styles.active}` : styles.burgerMenu}
                onClick={() => addClass()}
              >
                <span className={styles.burgerMenuLines} />
              </button>
            </nav>)}
          </div>
        </div>
      </div>
    </header>
  );
};
