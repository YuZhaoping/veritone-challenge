import dbLoader from '../db/loader';

const load = async ({ config }) => {

  const dataStore = await dbLoader.load({ config });

  const modelSupplier = dataStore.getModelSupplier();

  const providers = {
    dataStore,
    modelSupplier
  };

  return providers;
};

const loaders = {
  load
};

export default loaders;
