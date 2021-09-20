import baseUrl from './baseUrl';

import {
  doGet,
  doCreate,
  doUpdate,
  doDelete
} from '../api/helpers';


const shoppingItemsUrl = `${baseUrl}/shopping_items`;


export const getAllShoppingItems = () => {
  const url = shoppingItemsUrl;

  return doGet(url);
};

export const createShoppingItem = (data) => {
  const url = shoppingItemsUrl;

  return doCreate(url, data);
};


const shoppingItemIdUrl = (itemId) => (`${shoppingItemsUrl}/${itemId}`);


export const updateShoppingItem = (itemId, data) => {
  const url = shoppingItemIdUrl(itemId);

  return doUpdate(url, data, false);
};

export const deleteShoppingItem = (itemId) => {
  const url = shoppingItemIdUrl(itemId);

  return doDelete(url);
};


const mallAPIs = {
  getAllShoppingItems,
  createShoppingItem,
  updateShoppingItem,
  deleteShoppingItem,
};


export default mallAPIs;
