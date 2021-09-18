let dataStore;

const init = async (props) => {
  dataStore = props.dataStore;
};

const getAllShoppingItems = async (customerId) => {
  // TODO
  return [];
};

const createShoppingItem = async (customerId, itemDTO) => {
  // TODO
  return itemDTO;
};

const updateShoppingItem = async (customerId, itemId, itemDTO) => {
  // TODO
  return itemDTO;
};

const deleteShoppingItem = async (customerId, itemId) => {
  // TODO
};

const shoppingItemsModel = {
  init,
  getAllShoppingItems,
  createShoppingItem,
  updateShoppingItem,
  deleteShoppingItem
};

export default shoppingItemsModel;
