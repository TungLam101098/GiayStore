import CART_CONST from "../constants/cart.constant";
import { createAction } from 'redux-actions';

const cartAction = {
    Cart: createAction(CART_CONST.CART),
    Copy: createAction(CART_CONST.COPY),
    Eye: createAction(CART_CONST.EYE),
}

export default cartAction;