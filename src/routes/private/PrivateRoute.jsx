import React, { memo, Component, useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { changeTitlePage } from './../../redux/actions/Auth';

const PrivateRoute = ({ component: Component, location, authUser, ...rest }) => {
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
        <Route
            {...rest}
            render={(props) => {
                return authUser ? <Component {...props} /> : <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }}
                />;
            }}
        />
    );
};

export default memo(PrivateRoute)
