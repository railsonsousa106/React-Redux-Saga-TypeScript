import React, { useEffect } from 'react';
import { RouteComponentProps, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { parseOAuthQuery } from '../../assets/OAuth/parseOAuthQuery';

import { digitalEmployeeActions } from '../../redux/digitalEmployee/actions';

import styles from './OAuth.module.scss';
import { selectDigitalEmployeeUI } from '../../redux/digitalEmployee/selectors';

const OAuth: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  const dispatch = useDispatch();
  const { exchangeTokenError } = useSelector(selectDigitalEmployeeUI) || {};
  const { search } = useLocation();

  const searchParams = parseOAuthQuery(search);

  useEffect(() => {
    dispatch(digitalEmployeeActions.exchangeTokens({ params: searchParams }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className={styles.OAuth}>
      <section>
        {!exchangeTokenError && (
          <div>
            <h3>Redirecting...</h3>
          </div>
        )}
        {exchangeTokenError && (
          <div>
            <h3>Something went wrong...</h3>
            <div>Please, try to login again</div>
          </div>
        )}
      </section>
    </main>
  );
};

export default OAuth;
export { OAuth };
