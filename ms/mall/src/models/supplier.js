/**
 * The models' supplier
 */

import shoppingItemsModel from './shopping-items';

const initModels = async ({ dataStore }) => {
  await shoppingItemsModel.init({ dataStore });
};

const getShoppingItemsModel = () => (shoppingItemsModel);

const supplier = {
  initModels,
  getShoppingItemsModel
};

export default supplier;
