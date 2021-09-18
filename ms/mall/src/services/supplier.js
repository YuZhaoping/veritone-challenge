/**
 * The services' supplier
 */

 import shoppingItemsService from './shopping-items';

 const initServices = async ({ providers }) => {
   await shoppingItemsService.init({ providers });
 };

 const getShoppingItemsService = () => (shoppingItemsService);

 const supplier = {
   initServices,
   getShoppingItemsService
 };

 export default supplier;
