import React, { memo, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Account from './../../components/content/account/index';
import Dashboard from './../../components/content/dashboard/index';
import Invoice from './../../components/content/invoice/index';
import Purchase from './../../components/content/purchase/index';
import Expense from './../../components/content/expense/index';
import Contact from './../../components/content/contact/index';
import Product from './../../components/content/product/index';
import Asset from './../../components/content/asset/index';
import Setting from './../../components/content/setting/index';
import { useDispatch } from 'react-redux';
import { changeTitlePage } from './../../redux/actions/Auth';

function ListPrivateRoute() {
    const dispatch = useDispatch()
    const $ = window.$

    useEffect(() => {
        const splitFullUrl = window.location.pathname.split('/')

        if (splitFullUrl[1] !== 'dashboard') {
            $('body').addClass('account-body accountbg');
        } else {
            $('body').addClass('dark-sidenav');
        }

        if (splitFullUrl[1] === 'dashboard') {
            dispatch(changeTitlePage('Dashboard'));
        } else if (splitFullUrl[1] === 'report') {
            dispatch(changeTitlePage('Laporan'));
        } else if (splitFullUrl[1] === 'account') {
            if (splitFullUrl[2] === 'chart') {
                dispatch(changeTitlePage('Daftar Akun'));
            } else {
                dispatch(changeTitlePage('Kas & Bank'));
            }
        } else if (splitFullUrl[1] === 'expense') {
            dispatch(changeTitlePage('Biaya'));
        } else if (splitFullUrl[1] === 'contact') {
            dispatch(changeTitlePage('Kontak'));
        } else if (splitFullUrl[1] === 'product') {
            dispatch(changeTitlePage('Produk'));
        } else if (splitFullUrl[1] === 'asset') {
            dispatch(changeTitlePage('Pengaturan Aset'));
        } else if (splitFullUrl[1] === 'setting') {
            dispatch(changeTitlePage('Pengaturan'));
        } else {
            dispatch(changeTitlePage('Login'));
        }
    }, [])

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

export default memo(ListPrivateRoute)