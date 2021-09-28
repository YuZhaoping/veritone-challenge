import React, { Suspense } from 'react';

const Home = React.lazy(() => import(/* webpackChunkName: "home" */ './Home'));
const ShoppingList = React.lazy(() => import(/* webpackChunkName: "shopping-list" */ './ShoppingList'));

export const HomePage = () => (
  <React.Fragment>
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  </React.Fragment>
);

export const ShoppingListPage = () => (
  <React.Fragment>
    <Suspense fallback={<div>Loading...</div>}>
      <ShoppingList />
    </Suspense>
  </React.Fragment>
);
