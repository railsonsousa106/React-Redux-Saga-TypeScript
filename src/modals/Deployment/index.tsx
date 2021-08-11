import React, { lazy, Suspense } from 'react';
// const Deployment = lazy(() => import(/* webpackChunkName: "DeploymentModal" */ './Deployment'));
import Deployment from './Deployment';

const DeploymentModal = () => (
  <Suspense fallback={<div />}>
    <Deployment />
  </Suspense>
);

export default DeploymentModal;
export { DeploymentModal };
