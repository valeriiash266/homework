
import { createStore } from 'redux';
import rootReducer from './src/reducers';
import { Router } from './src/router';

const store = createStore(rootReducer);
const router = new Router(store);
router.init();
