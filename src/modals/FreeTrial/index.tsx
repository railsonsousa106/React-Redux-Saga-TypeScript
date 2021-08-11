import React, { lazy, Suspense } from 'react';
// const FreeTrial = lazy(() => import(/* webpackChunkName: "FreeTrialModal" */ './FreeTrial'));
import FreeTrial from './FreeTrial';

const FreeTrialModal = () => (
  <Suspense fallback={<div />}>
    <FreeTrial />
  </Suspense>
);

export default FreeTrialModal;
export { FreeTrialModal };
