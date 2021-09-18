let dataStore;

const init = async (props) => {
  dataStore = props.dataStore;
};

const evalItemUpdatingProps = (oldItem, newItem) => {
  const updating = {};
  const props = ['itemName', 'itemDesc', 'amount'];

  props.forEach(e => {
    if (oldItem[e] !== newItem[e]) {
      updating[e] = newItem[e];
    }
  });

  return updating;
};

const getAllShoppingItems = async (customerId) => {
  return await dataStore.getAllShoppingItems(customerId);
};

const createShoppingItem = async (customerId, itemDTO) => {
  const itemId = await dataStore.createShoppingItem(customerId, itemDTO);
  return {...itemDTO, itemId};
};

const updateShoppingItem = async (customerId, itemId, itemDTO) => {
  const oldItem = await dataStore.getShoppingItemById(customerId, itemId);
  if (oldItem.itemId === 0) {
    // TODO
    return {...itemDTO, itemId};
  }
  const updatingDTO = evalItemUpdatingProps(oldItem, itemDTO);
  await dataStore.updateShoppingItem(customerId, itemId, updatingDTO);
  return {...oldItem, ...updatingDTO};
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
