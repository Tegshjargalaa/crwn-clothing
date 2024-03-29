import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directortyReducer from './directory/directory.reducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import shopReducer from '../redux/shop/shop.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers ({
    user: userReducer,
    cart: cartReducer,
    directory: directortyReducer,
    shop: shopReducer

});

export default persistReducer(persistConfig, rootReducer);