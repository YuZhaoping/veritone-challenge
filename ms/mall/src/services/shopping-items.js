/* The shopping items' service */

let shoppingItemsModel;

const init = async ({ providers }) => {
  const modelSupplier = providers.modelSupplier;

  shoppingItemsModel = modelSupplier.getShoppingItemsModel();
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

const shoppingItemsService = {
  init,
  getAllShoppingItems,
  createShoppingItem,
  updateShoppingItem,
  deleteShoppingItem
};

export default shoppingItemsService;
