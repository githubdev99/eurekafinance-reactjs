import React from "react";
import { Switch, Route } from "react-router-dom";

import Account from './../components/content/account/index';
import Dashboard from './../components/content/dashboard/index';
import Invoice from './../components/content/invoice/index';
import Purchase from './../components/content/purchase/index';
import Expense from './../components/content/expense/index';
import Contact from './../components/content/contact/index';
import Product from './../components/content/product/index';
import Asset from './../components/content/asset/index';
import Setting from './../components/content/setting/index';

export default function Routes() {
    return (
        <Switch>
            <Route path="/dashboard" render={() => <Dashboard />} />
            <Route path="/account" render={() => <Account />} />
            <Route path="/invoice" render={() => <Invoice />} />
            <Route path="/purchase" render={() => <Purchase />} />
            <Route path="/expense" render={() => <Expense />} />
            <Route path="/contact" render={() => <Contact />} />
            <Route path="/product" render={() => <Product />} />
            <Route path="/asset" render={() => <Asset />} />
            <Route path="/setting" render={() => <Setting />} />
        </Switch>
    );
}