-- ==================== ==================== --

CREATE SEQUENCE IF NOT EXISTS customer_id_seq
    START WITH 10001
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE TABLE IF NOT EXISTS customers (
    customer_id INTEGER PRIMARY KEY DEFAULT nextval('customer_id_seq'),
    customer_name TEXT
);

-- ==================== ==================== --

CREATE OR REPLACE FUNCTION create_customer (VARCHAR)
    RETURNS INTEGER AS $$
DECLARE
    v_name ALIAS FOR $1;
    v_id INTEGER;
BEGIN
    v_id := nextval('customer_id_seq');
    INSERT INTO customers (customer_id, customer_name) VALUES (v_id, v_name);
    RETURN v_id;
END;
$$ LANGUAGE plpgsql;

-- ==================== ==================== --
