import apiVersion from './apiVersion';

export const getAllShoppingItems = async (req, res, next) => {
  try {
    const data = []; // TODO

    res.json({ apiVersion, data });
  } catch (e) {
    next(e);
  }
};

export const createShoppingItem = async (req, res, next) => {
  try {
    const itemDTO = req.body;

    const data = itemDTO; // TODO

    res.json({ apiVersion, data });
  } catch (e) {
    next(e);
  }
};

export const updateShoppingItem = async (req, res, next) => {
  try {
    const itemId = req.params.itemId;
    const itemDTO = req.body;

    const data = itemDTO; // TODO

    res.json({ apiVersion, data });
  } catch (e) {
    next(e);
  }
};

export const deleteShoppingItem = async (req, res, next) => {
  try {
    const itemId = req.params.itemId;

    // TODO

    res.json({ apiVersion });
  } catch (e) {
    next(e);
  }
};
