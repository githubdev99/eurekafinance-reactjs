import React, { useState, useEffect, memo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { changeTitlePage } from './../../redux/actions/Auth';

function Sidebar(props) {
    const dispatch = useDispatch()
    const { titlePage, initURL, authUser, baseURL } = useSelector(({ auth }) => auth)

    return (
        <div className="left-sidenav">
            <div className="brand mt-2">
                <Link to="/dashboard" onClick={() => dispatch(changeTitlePage('Dashboard'))} className="logo">
                    <span style={{ marginRight: 5 }}>
                        <img src={`${baseURL}${process.env.REACT_APP_LOGO_MINI}`} alt="logo-small" className="logo-sm" style={{ width: 55, height: 50 }} />
                    </span>
                    <span className="text-white font-18">
                        {process.env.REACT_APP_NAME}
                    </span>
                </Link>
            </div>
            <div className="menu-content h-100" data-simplebar>
                <ul className="metismenu left-sidenav-menu">
                    <li className="mb-2">
                        <Link to="/dashboard" onClick={() => dispatch(changeTitlePage('Dashboard'))} className={`custom-nav text-white ${(props.splitFullUrl[1] === 'dashboard') ? 'active' : ''}`}>
                            <i className="mdi mdi-monitor-dashboard align-self-center" /><span>Dashboard</span>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/report" onClick={() => dispatch(changeTitlePage('Laporan'))} className={`custom-nav text-white ${(props.splitFullUrl[1] === 'report') ? 'active' : ''}`}>
                            <i className="mdi mdi-clipboard-text-outline align-self-center" /><span>Laporan</span>
                        </Link>
                    </li>
                    <hr className="hr-dashed hr-menu" />
                    <li className="mb-2">
                        <Link to="/account" onClick={() => dispatch(changeTitlePage('Kas & Bank'))} className={`custom-nav text-white ${(props.splitFullUrl[1] === 'account' && !props.splitFullUrl[2]) ? 'active' : ''}`}>
                            <i className="mdi mdi-bank align-self-center" /><span>Kas &amp; Bank</span>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/invoice" onClick={() => dispatch(changeTitlePage('Penjualan'))} className={`custom-nav text-white ${(props.splitFullUrl[1] === 'invoice') ? 'active' : ''}`}>
                            <i className="mdi mdi-tag-multiple align-self-center" /><span>Penjualan</span>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/purchase" onClick={() => dispatch(changeTitlePage('Pembelian'))} className={`custom-nav text-white ${(props.splitFullUrl[1] === 'purchase') ? 'active' : ''}`}>
                            <i className="mdi mdi-cart align-self-center" /><span>Pembelian</span>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/expense" onClick={() => dispatch(changeTitlePage('Biaya'))} className={`custom-nav text-white ${(props.splitFullUrl[1] === 'expense') ? 'active' : ''}`}>
                            <i className="mdi mdi-card-plus align-self-center" /><span>Biaya</span>
                        </Link>
                    </li>
                    <hr className="hr-dashed hr-menu" />
                    <li className="mb-2">
                        <Link to="/contact" onClick={() => dispatch(changeTitlePage('Kontak'))} className={`custom-nav text-white ${(props.splitFullUrl[1] === 'contact') ? 'active' : ''}`}>
                            <i className="mdi mdi-contacts align-self-center" /><span>Kontak</span>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/product" onClick={() => dispatch(changeTitlePage('Produk'))} className={`custom-nav text-white ${(props.splitFullUrl[1] === 'product') ? 'active' : ''}`}>
                            <i className="mdi mdi-archive align-self-center" /><span>Produk</span>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/asset" onClick={() => dispatch(changeTitlePage('Pengaturan Aset'))} className={`custom-nav text-white ${(props.splitFullUrl[1] === 'asset') ? 'active' : ''}`}>
                            <i className="mdi mdi-garage align-self-center" /><span>Pengaturan Aset</span>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/account/chart" onClick={() => dispatch(changeTitlePage('Daftar Akun'))} className={`custom-nav text-white ${(props.splitFullUrl[2] === 'chart') ? 'active' : ''}`}>
                            <i className="mdi mdi-clipboard-text align-self-center" /><span>Daftar Akun</span>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/setting" onClick={() => dispatch(changeTitlePage('Pengaturan'))} className={`custom-nav text-white ${(props.splitFullUrl[1] === 'setting') ? 'active' : ''}`}>
                            <i className="mdi mdi-settings align-self-center" /><span>Settings</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default memo(Sidebar);