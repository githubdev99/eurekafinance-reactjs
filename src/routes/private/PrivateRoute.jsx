import React, { memo, Component, useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setTitlePage } from './../../redux/actions/Auth';

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
