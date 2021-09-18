let dataStore;

const init = async (props) => {
  dataStore = props.dataStore;
};

const getAllShoppingItems = async (customerId) => {
  return await dataStore.getAllShoppingItems(customerId);
};

const createShoppingItem = async (customerId, itemDTO) => {
  const itemId = await dataStore.createShoppingItem(customerId, itemDTO);
  return {...itemDTO, itemId};
};

const updateShoppingItem = async (customerId, itemId, itemDTO) => {
  await dataStore.updateShoppingItem(customerId, itemId, itemDTO);
  return {...itemDTO, itemId};
};

const deleteShoppingItem = async (customerId, itemId) => {
  await dataStore.deleteShoppingItem(customerId, itemId);
};

const shoppingItemsModel = {
  init,
  getAllShoppingItems,
  createShoppingItem,
  updateShoppingItem,
  deleteShoppingItem
};

export default shoppingItemsModel;
