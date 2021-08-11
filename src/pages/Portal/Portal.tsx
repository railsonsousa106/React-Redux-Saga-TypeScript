import React from 'react';
import { useLocation } from 'react-router-dom';
import { Wrapper } from './Portal.style';
import { portalURL } from '../../config';

const Portal: React.FC = () => {
  const { search } = useLocation();

  return (
    <Wrapper>
      <iframe src={`${portalURL}${search}`} frameBorder="0" />
    </Wrapper>
  );
};

export default Portal;
export { Portal };
