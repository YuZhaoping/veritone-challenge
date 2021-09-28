import React, { Suspense } from 'react';

const Home = React.lazy(() => import(/* webpackChunkName: "home" */ './Home'));
const ShoppingList = React.lazy(() => import(/* webpackChunkName: "shopping-list" */ './ShoppingList'));

export const HomePage = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Home {...props}/>
  </Suspense>
);

export const ShoppingListPage = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <ShoppingList {...props}/>
  </Suspense>
);
