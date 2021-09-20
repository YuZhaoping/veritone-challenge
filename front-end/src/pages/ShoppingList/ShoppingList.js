import React, { useState, useEffect } from 'react';

import EmptyView from './EmptyView';

const defaultItemsState = {
  data: [],
  loading: true,
};

// Only for test
let itemIdSeq = 1000;

const ShoppingList = () => {

  const [itemsState, setItemsState] = useState(() => defaultItemsState);

  useEffect(() => {
    queryRowData();
  }, []);

  const handleError = error => {
    // TODO
    setItemsState(prevState => ({...prevState, loading: false}));
  };

  const onLoading = () => {
    setItemsState(prevState => ({...prevState, loading: true}));
  };

  const queryRowData = () => {
    new Promise((resolve, reject) => {
      // TODO
      const items = [];
      resolve(items);
    }).then(
      data => {
        setItemsState(prevState => ({data, loading: false}));
      },
      error => {
        handleError(error);
      }
    );
  };

  const handleRowAdd = (newItem) => {
    onLoading();
    new Promise((resolve, reject) => {
      // TODO
      const itemId = ++itemIdSeq;
      const item = {...newItem, itemId};
      resolve(item);
    }).then(
      item => {
        const data = itemsState.data;
        data.unshift(item);
        console.log(data);
        setItemsState(prevState => ({data, loading: false}));
      },
      error => {
        handleError(error);
      }
    );
  };

  const handleRowUpdate = (oldItem, newItem) => {
    onLoading();
    new Promise((resolve, reject) => {
      // TODO
      const item = {...oldItem, ...newItem};
      resolve(item);
    }).then(
      item => {
        const data = itemsState.data;
        data.some((element, index) => {
          if (element.itemId === item.itemId) {
            data[index] = item;
            return true;
          }
        });
        setItemsState(prevState => ({data, loading: false}));
      },
      error => {
        handleError(error);
      }
    );
  };

  const handleRowDelete = (oldItem) => {
    onLoading();
    new Promise((resolve, reject) => {
      // TODO
      resolve(oldItem);
    }).then(
      item => {
        const data = itemsState.data;
        data.some((element, index) => {
          if (element.itemId === item.itemId) {
            data.splice(index, 1);
            return true;
          }
        });
        setItemsState(prevState => ({data, loading: false}));
      },
      error => {
        handleError(error);
      }
    );
  };

  return (
    <React.Fragment>
      <EmptyView onRowAdd={handleRowAdd} />
    </React.Fragment>
  );
};

export default ShoppingList;
