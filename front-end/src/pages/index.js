import React, { Suspense } from 'react';

const ShoppingList = React.lazy(() => import(/* webpackChunkName: "shopping-list" */ './ShoppingList'));

export const ShoppingListPage = () => (
  <React.Fragment>
    <Suspense fallback={<div>Loading...</div>}>
      <ShoppingList />
    </Suspense>
  </React.Fragment>
);
