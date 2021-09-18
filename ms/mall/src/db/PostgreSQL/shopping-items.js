
let pgPool;

const setPgPool = (pool) => {
  pgPool = pool;
};

const getAllShoppingItems = async (customerId) => {
  // TODO
  return [];
};

const createShoppingItem = async (customerId, itemDTO) => {
  // TODO
  return 1000;
};

const updateShoppingItem = async (customerId, itemId, itemDTO) => {
  // TODO
};

const deleteShoppingItem = async (customerId, itemId) => {
  // TODO
};

const shoppingItemsSQL = {
  setPgPool,
  getAllShoppingItems,
  createShoppingItem,
  updateShoppingItem,
  deleteShoppingItem
};

export default shoppingItemsSQL;
