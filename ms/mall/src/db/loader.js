import postgreSQL from './PostgreSQL';

const load = async ({ config }) => {
  let dataStore = postgreSQL;

  try {
    await dataStore.init({ self: dataStore, config });
  } catch (err) {
    throw err;
  }

  return dataStore;
};

const loader = {
  load
};

export default loader;
