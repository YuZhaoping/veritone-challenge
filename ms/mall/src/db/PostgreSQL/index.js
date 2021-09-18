const { Pool } = require('pg');

import modelSupplier from '../../models/supplier';
import shoppingItemsSQL from './shopping-items';

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

  shoppingItemsSQL.setPgPool(pool);

  await modelSupplier.initModels({ dataStore: self, config });
};

const getModelSupplier = () => (modelSupplier);

const dataStore = {
  init,
  getModelSupplier,
  getAllShoppingItems: shoppingItemsSQL.getAllShoppingItems,
  createShoppingItem: shoppingItemsSQL.createShoppingItem,
  updateShoppingItem: shoppingItemsSQL.updateShoppingItem,
  deleteShoppingItem: shoppingItemsSQL.deleteShoppingItem
};

export default dataStore;
