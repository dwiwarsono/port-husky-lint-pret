import React, { lazy, Suspense } from 'react';
import LazyFallback from '../components/elements/LazyFallback';

const Suspensed = (Element) => function suspense(props) {
  return (
    <Suspense fallback={<LazyFallback />}>
      <Element {...props} />
    </Suspense>
  );
};

export default {
  Main: Suspensed(lazy(() => import('./Main'))),
  Skills: Suspensed(lazy(() => import('./Skills'))),
  Blog: Suspensed(lazy(() => import('./Blog'))),
  Works: Suspensed(lazy(() => import('./Works'))),
  About: Suspensed(lazy(() => import('./About'))),
};
