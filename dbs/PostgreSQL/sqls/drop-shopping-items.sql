-- ==================== ==================== --

DROP FUNCTION IF EXISTS insert_shopping_item CASCADE;

-- ==================== ==================== --

DROP INDEX IF EXISTS shopping_items_customer_idx CASCADE;
DROP TABLE IF EXISTS shopping_items CASCADE;

DROP SEQUENCE IF EXISTS shopping_item_id_seq CASCADE;

-- ==================== ==================== --
