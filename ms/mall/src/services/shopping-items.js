/* The shopping items' service */

let shoppingItemsModel;

const init = async ({ providers }) => {
  const modelSupplier = providers.modelSupplier;

  shoppingItemsModel = modelSupplier.getShoppingItemsModel();
};

const getAllShoppingItems = async (customerId) => {
  return await shoppingItemsModel.getAllShoppingItems(customerId);
};

const createShoppingItem = async (customerId, itemDTO) => {
  return await shoppingItemsModel.createShoppingItem(customerId, itemDTO);
};

const updateShoppingItem = async (customerId, itemId, itemDTO) => {
  return await shoppingItemsModel.updateShoppingItem(customerId, itemId, itemDTO);
};

const deleteShoppingItem = async (customerId, itemId) => {
  await shoppingItemsModel.deleteShoppingItem(customerId, itemId);
};

const shoppingItemsService = {
  init,
  getAllShoppingItems,
  createShoppingItem,
  updateShoppingItem,
  deleteShoppingItem
};

export default shoppingItemsService;
