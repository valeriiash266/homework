
import { CategoryPage } from './components/CategoryPage';
import { GoodPage } from './components/GoodPage';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';
import { CartPage } from './components/CartPage';
import { HistoryPage } from './components/HistoryPage';

export class Router {
    constructor(store) {
        this.store = store;
    }

    init() {
        window.addEventListener('hashchange', this.handleRouteChange.bind(this));
        this.handleRouteChange();
    }

    handleRouteChange() {
        const hash = window.location.hash;
        switch (hash) {
            case '#/category':
                CategoryPage.render();
                break;
            case '#/good':
                GoodPage.render();
                break;
            case '#/login':
                LoginPage.render();
                break;
            case '#/register':
                RegisterPage.render();
                break;
            case '#/cart':
                CartPage.render();
                break;
            case '#/history':
                HistoryPage.render();
                break;
            default:
                CategoryPage.render();
        }
    }
}
