// core
import React, { Fragment, useState, useCallback, useEffect } from 'react';

// library
import { Switch, Route, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//routes
import { PublicRoutes, RestrictedRoutes } from '../routes';

//store
import { digitalEmployeeActions } from '../redux/digitalEmployee/actions';

// assets
import styles from 'pages/app.module.scss';
import 'pages/index.scss';
import { UI_ROUTES } from 'constants/routes';

// Modals
import { DeploymentModal } from '../modals/Deployment';
import { FreeTrialModal } from '../modals/FreeTrial';
import { Header } from '../containers/Header/Header';
import { Footer } from '../containers/Footer/Footer';
import { OAuth } from './OAuth';
import { CONTROL_SUM } from 'constants/digitalEmployee';

const Pages = () => {
  const dispatch = useDispatch();
  const [showPopupHire, setShowPopupHire] = useState({
    show: false,
    name: '',
    id: '',
  });

  const { pathname } = useLocation();
  const currentRoute = `/${pathname.split('/')[1]}`;
  const isOAuth = currentRoute === UI_ROUTES.oAuth;

  const listener = useCallback(
    ({ data, origin }) => {
      const { controlSum, ...restData } = data;
      if (window.origin === origin && data.controlSum === CONTROL_SUM) {
        dispatch(digitalEmployeeActions.completeOAuth(restData));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    window.removeEventListener('message', listener);
    window.addEventListener('message', listener);
    return () => {
      window.removeEventListener('message', listener);
    };
  }, [listener]);

  if (isOAuth) {
    return (
      <Switch>
        <Route path={UI_ROUTES.oAuth} component={OAuth} />
      </Switch>
    );
  }

  return (
    <Fragment>
      <div className={styles.app}>
        <div style={{ minHeight: '30vh' }}>
          <Header showPopupHire={showPopupHire} setShowPopupHire={setShowPopupHire} />
          <PublicRoutes />
          <RestrictedRoutes />
          <DeploymentModal />
          <FreeTrialModal />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Pages;
export { Pages };
