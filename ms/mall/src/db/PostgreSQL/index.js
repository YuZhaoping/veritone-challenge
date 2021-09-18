import modelSupplier from '../../models/supplier';

const init = async ({ self, config }) => {
  await modelSupplier.initModels({ dataStore: self, config });
};

const getModelSupplier = () => (modelSupplier);

const dataStore = {
  init,
  getModelSupplier
};

export default dataStore;
