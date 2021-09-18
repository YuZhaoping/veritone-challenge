-- ==================== ==================== --

CREATE SEQUENCE IF NOT EXISTS shopping_item_id_seq
    START WITH 1000
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE TABLE IF NOT EXISTS shopping_items (
    item_id INTEGER PRIMARY KEY DEFAULT nextval('shopping_item_id_seq'),
    customer_id INTEGER DEFAULT 0,
    item_name TEXT,
    item_desc TEXT,
    amount INTEGER
);
CREATE INDEX IF NOT EXISTS shopping_items_customer_idx
    ON shopping_items (customer_id);

-- ==================== ==================== --

CREATE OR REPLACE FUNCTION insert_shopping_item (INTEGER, VARCHAR, VARCHAR, INTEGER)
    RETURNS INTEGER AS $$
DECLARE
    v_customer_id ALIAS FOR $1;
    v_name ALIAS FOR $2;
    v_desc ALIAS FOR $3;
    v_amount ALIAS FOR $4;
    v_id INTEGER;
BEGIN
    v_id := nextval('shopping_item_id_seq');
    INSERT INTO shopping_items (item_id, customer_id, item_name, item_desc, amount)
        VALUES (v_id, v_customer_id, v_name, v_desc, v_amount);
    RETURN v_id;
END;
$$ LANGUAGE plpgsql;

-- ==================== ==================== --
