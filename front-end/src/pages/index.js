import React, { Suspense } from 'react';

import LoadingSpinner from '../components/LoadingSpinner';

const isMockLoadSlow = (__MOCK_LOAD_SLOW__) ? true : false;

const mockLoadSlow = (Comp, delay = 3000) => {
  if (isMockLoadSlow) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(Comp), delay);
    });
  } else {
    return Comp;
  }
};

const Home = React.lazy(() => mockLoadSlow(import(/* webpackChunkName: "home" */ './Home')));
const ShoppingList = React.lazy(() => import(/* webpackChunkName: "shopping-list" */ './ShoppingList'));

export const HomePage = (props) => (
  <Suspense fallback={<LoadingSpinner />}>
    <Home {...props}/>
  </Suspense>
);

export const ShoppingListPage = (props) => (
  <Suspense fallback={<LoadingSpinner />}>
    <ShoppingList {...props}/>
  </Suspense>
);
