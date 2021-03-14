import React from "react";
import Account from './../components/content/account/index';
import Dashboard from './../components/content/dashboard/index';
import Invoice from './../components/content/invoice/index';
import Purchase from './../components/content/purchase/index';
import Expense from './../components/content/expense/index';
import Contact from './../components/content/contact/index';
import Product from './../components/content/product/index';
import Asset from './../components/content/asset/index';
import Setting from './../components/content/setting/index';
import { Switch, Route } from "react-router-dom";

export default function Routes() {
    return (
        <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/account" component={Account} />
            <Route path="/invoice" component={Invoice} />
            <Route path="/purchase" component={Purchase} />
            <Route path="/expense" component={Expense} />
            <Route path="/contact" component={Contact} />
            <Route path="/product" component={Product} />
            <Route path="/asset" component={Asset} />
            <Route path="/setting" component={Setting} />
        </Switch>
    );
}