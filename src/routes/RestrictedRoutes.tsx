import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';

const RestrictedRoutes = () => {
  return (
    <Suspense fallback={<div />}>
      <Switch></Switch>
    </Suspense>
  );
};

export default RestrictedRoutes;
export { RestrictedRoutes };
