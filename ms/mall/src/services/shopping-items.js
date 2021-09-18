/* The shopping items' service */

let shoppingItemsModel;

const init = async ({ providers }) => {
  const modelSupplier = providers.modelSupplier;

  shoppingItemsModel = modelSupplier.getShoppingItemsModel();
};

const shoppingItemsService = {
  init
};

export default shoppingItemsService;
