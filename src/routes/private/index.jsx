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
import { setTitlePage } from './../../redux/actions/Auth';

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
            dispatch(setTitlePage('Dashboard'));
        } else if (splitFullUrl[1] === 'report') {
            dispatch(setTitlePage('Laporan'));
        } else if (splitFullUrl[1] === 'account') {
            if (splitFullUrl[2] === 'chart') {
                dispatch(setTitlePage('Daftar Akun'));
            } else {
                dispatch(setTitlePage('Kas & Bank'));
            }
        } else if (splitFullUrl[1] === 'expense') {
            dispatch(setTitlePage('Biaya'));
        } else if (splitFullUrl[1] === 'contact') {
            dispatch(setTitlePage('Kontak'));
        } else if (splitFullUrl[1] === 'product') {
            dispatch(setTitlePage('Produk'));
        } else if (splitFullUrl[1] === 'asset') {
            dispatch(setTitlePage('Pengaturan Aset'));
        } else if (splitFullUrl[1] === 'setting') {
            dispatch(setTitlePage('Pengaturan'));
        } else {
            dispatch(setTitlePage('Login'));
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