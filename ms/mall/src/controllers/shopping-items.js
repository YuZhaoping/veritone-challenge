import apiVersion from './apiVersion';
import serviceSupplier from '../services/supplier';
import {
  getUserIdFromReqToken
} from './util';

const getShoppingItemsService = () => serviceSupplier.getShoppingItemsService();

export const getAllShoppingItems = async (req, res, next) => {
  try {
    const customerId = getUserIdFromReqToken(req);
    const shoppingItemsService = getShoppingItemsService();

    const data = await shoppingItemsService.getAllShoppingItems(customerId);

    res.json({ apiVersion, data });
  } catch (e) {
    next(e);
  }
};

export const createShoppingItem = async (req, res, next) => {
  try {
    const itemDTO = req.body;

    const customerId = getUserIdFromReqToken(req);
    const shoppingItemsService = getShoppingItemsService();

    const data = await shoppingItemsService.createShoppingItem(customerId, itemDTO);

    res.json({ apiVersion, data });
  } catch (e) {
    next(e);
  }
};

export const updateShoppingItem = async (req, res, next) => {
  try {
    const itemId = req.params.itemId;
    const itemDTO = req.body;

    const customerId = getUserIdFromReqToken(req);
    const shoppingItemsService = getShoppingItemsService();

    const data = await shoppingItemsService.updateShoppingItem(customerId, itemId, itemDTO);

    res.json({ apiVersion, data });
  } catch (e) {
    next(e);
  }
};

export const deleteShoppingItem = async (req, res, next) => {
  try {
    const itemId = req.params.itemId;

    const customerId = getUserIdFromReqToken(req);
    const shoppingItemsService = getShoppingItemsService();

    await shoppingItemsService.deleteShoppingItem(customerId, itemId);

    res.json({ apiVersion });
  } catch (e) {
    next(e);
  }
};
