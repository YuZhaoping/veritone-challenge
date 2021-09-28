import React, { Suspense } from 'react';

import LoadingSpinner from '../components/LoadingSpinner';

const Home = React.lazy(() => import(/* webpackChunkName: "home" */ './Home'));
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
