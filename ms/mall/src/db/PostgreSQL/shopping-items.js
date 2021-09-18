
let pgPool;

const setPgPool = (pool) => {
  pgPool = pool;
};

const mapItemRowToDTO = (row) => ({
  itemId: row.item_id,
  itemName: row.item_name,
  itemDesc: row.item_desc,
  amount: row.amount
});

const emptyItemDTO = {
  itemId: 0,
  itemName: '',
  itemDesc: '',
  amount: 0
};

const getAllShoppingItems = async (customerId) => {
  const items = [];

  const sql = 'SELECT * FROM shopping_items WHERE customer_id = $1::int ORDER BY item_id DESC';
  const params = [customerId];

  const client = await pgPool.connect();
  try {
    const { rowCount, rows } = await client.query(sql, params);

    items.length = rowCount;
    rows.forEach((row, index) => {
      items[index] = mapItemRowToDTO(row);
    });
  } finally {
    client.release();
  }

  return items;
};

const getShoppingItemById = async (customerId, itemId) => {
  const sql = 'SELECT * FROM shopping_items WHERE item_id = $1::int';
  const params = [itemId];

  const client = await pgPool.connect();
  try {
    const { rowCount, rows } = await client.query(sql, params);
    if (rowCount > 0) {
      return mapItemRowToDTO(rows[0]);
    }
  } finally {
    client.release();
  }

  return emptyItemDTO;
};

const createShoppingItem = async (customerId, itemDTO) => {
  const sql = 'SELECT insert_shopping_item ($1::int, $2::varchar, $3::varchar, $4::int)';
  const dto = {...emptyItemDTO, ...itemDTO};
  const params = [customerId, dto.itemName, dto.itemDesc, dto.amount];

  const client = await pgPool.connect();
  let itemId = 0;
  try {
    const { rowCount, rows } = await client.query(sql, params);
    if (rowCount > 0) {
      itemId = rows[0]['insert_shopping_item'];
    }
  } finally {
    client.release();
  }

  return itemId;
};

const formSettingClause = (e, count, base) => {
  let col = e;
  switch (e) {
    case 'itemName':
      col = 'item_name';
      break;
    case 'itemDesc':
      col = 'item_desc';
      break;
  }
  let str = (count > 0) ? ', ' : '';
  str += col;
  return str + ' = $' + (count + base);
};

const updateShoppingItem = async (customerId, itemId, itemDTO) => {
  const params = [itemId];
  const clauses = ['UPDATE shopping_items SET '];

  const props = ['itemName', 'itemDesc', 'amount'];
  let count = 0;
  props.forEach(e => {
    if (itemDTO.hasOwnProperty(e)) {
      params.push(itemDTO[e]);
      clauses.push(formSettingClause(e, count, 2));
      count++;
    }
  });

  clauses.push(' WHERE item_id=$1::int');

  if (count <= 0) {
    return;
  }

  const sql = clauses.join('');

  const client = await pgPool.connect();
  try {
    await client.query(sql, params);
  } finally {
    client.release();
  }
};

const deleteShoppingItem = async (customerId, itemId) => {
  const sql = 'DELETE FROM shopping_items WHERE item_id=$1::int';
  const params = [itemId];

  const client = await pgPool.connect();
  try {
    await client.query(sql, params);
  } finally {
    client.release();
  }
};

const shoppingItemsDAO = {
  setPgPool,
  getAllShoppingItems,
  getShoppingItemById,
  createShoppingItem,
  updateShoppingItem,
  deleteShoppingItem
};

export default shoppingItemsDAO;
