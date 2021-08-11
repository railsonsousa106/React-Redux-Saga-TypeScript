import React, { FC, useEffect } from 'react';
import { RouteComponentProps, match as IMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Wrapper } from './PlatformRedirect.style';
import { digitalEmployeeActions } from '../../redux/digitalEmployee/actions';

interface IMatchProps {
  messenger: string;
  appID: string;
}

const PlatformRedirect: FC<RouteComponentProps> = props => {
  const dispatch = useDispatch();

  const match: IMatch<IMatchProps> = props.match as IMatch<IMatchProps>;
  const { location } = props;
  const { params } = match;
  const { messenger, appID } = params;

  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get('code');

  useEffect(() => {
    if (messenger && appID && code) {
      dispatch(
        digitalEmployeeActions.platformRedirect({
          messenger,
          appID,
          code,
        })
      );
    }
  }, [appID, code, dispatch, messenger]);

  return (
    <Wrapper>
      <span>Loading...</span>
    </Wrapper>
  );
};

export default PlatformRedirect;
export { PlatformRedirect };
