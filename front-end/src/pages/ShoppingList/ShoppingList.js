import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import ViewEntry from './ViewEntry';

import mallAPIs from '../../services/mall/apis';

import publishErrorAction from '../../actions/errorsAction';


const defaultItemsState = {
  data: [],
  loading: true,
};

// Only for test
const mockAPIaccess = (__MOCK_API_ACCESS__) ? true : false;
let itemIdSeq = 1000;


const ShoppingList = (props) => {
  const { publishError } = props;

  const [itemsState, setItemsState] = useState(() => defaultItemsState);

  useEffect(() => {
    queryRowData();
  }, []);

  const handleError = error => {
    publishError(error);
    setItemsState(prevState => ({...prevState, loading: false}));
  };

  const onLoading = () => {
    setItemsState(prevState => ({...prevState, loading: true}));
  };

  const queryRowData = () => {
    new Promise((resolve, reject) => {
      if (mockAPIaccess) {
        const items = [];
        resolve(items);
      } else {
        mallAPIs.getAllShoppingItems().then(
          apiData => {
            resolve(apiData);
          },
          error => {
            reject(error);
          }
        );
      }
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
      if (mockAPIaccess) {
        const itemId = ++itemIdSeq;
        // NOTE: just for test
        const itemName = `${itemId}-${newItem.itemName}`;
        const item = {...newItem, itemId, itemName};
        resolve(item);
      } else {
        mallAPIs.createShoppingItem(newItem).then(
          apiData => {
            resolve(apiData);
          },
          error => {
            reject(error);
          }
        );
      }
    }).then(
      item => {
        const data = itemsState.data;
        data.unshift(item);
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
      if (mockAPIaccess) {
        const item = {...oldItem, ...newItem};
        // NOTE: just for test ErrorMessage
        publishError(new Error(`Warning: ${oldItem.itemName} changed`));
        resolve(item);
      } else {
        mallAPIs.updateShoppingItem(oldItem.itemId, newItem).then(
          apiData => {
            resolve(apiData);
          },
          error => {
            reject(error);
          }
        );
      }
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
      if (mockAPIaccess) {
        resolve(oldItem);
      } else {
        mallAPIs.deleteShoppingItem(oldItem.itemId).then(
          apiData => {
            resolve(oldItem);
          },
          error => {
            reject(error);
          }
        );
      }
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
    <ViewEntry
      items={itemsState.data}
      handleRowAdd={handleRowAdd}
      handleRowUpdate={handleRowUpdate}
      handleRowDelete={handleRowDelete}
      loading={itemsState.loading}
    />
  );
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  publishError: (error) => dispatch(publishErrorAction(error)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingList);
