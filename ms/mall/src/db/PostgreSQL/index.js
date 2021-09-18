const { Pool } = require('pg');

import modelSupplier from '../../models/supplier';
import shoppingItemsDAO from './shopping-items';

const init = async ({ self, config }) => {
  const pool = new Pool(config.pg);

  // test pg connection
  const client = await pool.connect();
  try {
    const { rows } = await client.query('SELECT NOW()');
    console.log(rows);
  } finally {
    client.release();
  }

  shoppingItemsDAO.setPgPool(pool);

  await modelSupplier.initModels({ dataStore: self, config });
};

const getModelSupplier = () => (modelSupplier);

const dataStore = {
  init,
  getModelSupplier,
  getAllShoppingItems: shoppingItemsDAO.getAllShoppingItems,
  getShoppingItemById: shoppingItemsDAO.getShoppingItemById,
  createShoppingItem: shoppingItemsDAO.createShoppingItem,
  updateShoppingItem: shoppingItemsDAO.updateShoppingItem,
  deleteShoppingItem: shoppingItemsDAO.deleteShoppingItem
};

export default dataStore;
