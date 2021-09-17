const express = require('express');
const router = express.Router();

import {
  getAllShoppingItems,
  createShoppingItem,
  updateShoppingItem,
  deleteShoppingItem
} from '../controllers/shopping-items';


router.route('/shopping_items')
  .get(getAllShoppingItems)
  .post(createShoppingItem);

router.route('/shopping_items/:itemId')
  .put(updateShoppingItem)
  .delete(deleteShoppingItem);


router.all('/',
function(req, res, next) {
  res.json({'message': 'TODO'});
});


export default router;
