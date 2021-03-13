import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { changeTitlePage } from './../../actions/config';

function Sidebar(props) {
    const handleBaseUrl = (value) => {
        props.changeTitlePage(value)
    }

    return (
        <div className="left-sidenav">
            <div className="brand mt-2">
                <a href="#" className="logo">
                    <span style={{ marginRight: 5 }}>
                        <img src={`${props.baseUrl}${process.env.REACT_APP_LOGO_MINI}`} alt="logo-small" className="logo-sm" style={{ width: 55, height: 50 }} />
                    </span>
                    <span className="text-white font-18">
                        {process.env.REACT_APP_NAME}
                    </span>
                </a>
            </div>
            <div className="menu-content h-100" data-simplebar>
                <ul className="metismenu left-sidenav-menu">
                    <li className="mb-2">
                        <a href="#" onClick={() => handleBaseUrl('Dashboard')} className="custom-nav text-white">
                            <i className="mdi mdi-monitor-dashboard align-self-center" /><span>Dashboard</span>
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" onClick={() => handleBaseUrl('Laporan')} className="custom-nav text-white">
                            <i className="mdi mdi-clipboard-text-outline align-self-center" /><span>Laporan</span>
                        </a>
                    </li>
                    <hr className="hr-dashed hr-menu" />
                    <li className="mb-2">
                        <a href="#" onClick={() => handleBaseUrl('Kas & Bank')} className="custom-nav text-white">
                            <i className="mdi mdi-bank align-self-center" /><span>Kas &amp; Bank</span>
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" onClick={() => handleBaseUrl('Penjualan')} className="custom-nav text-white">
                            <i className="mdi mdi-tag-multiple align-self-center" /><span>Penjualan</span>
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" onClick={() => handleBaseUrl('Pembelian')} className="custom-nav text-white">
                            <i className="mdi mdi-cart align-self-center" /><span>Pembelian</span>
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" onClick={() => handleBaseUrl('Biaya')} className="custom-nav text-white">
                            <i className="mdi mdi-card-plus align-self-center" /><span>Biaya</span>
                        </a>
                    </li>
                    <hr className="hr-dashed hr-menu" />
                    <li className="mb-2">
                        <a href="#" onClick={() => handleBaseUrl('Kontak')} className="custom-nav text-white">
                            <i className="mdi mdi-contacts align-self-center" /><span>Kontak</span>
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" onClick={() => handleBaseUrl('Produk')} className="custom-nav text-white">
                            <i className="mdi mdi-archive align-self-center" /><span>Produk</span>
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" onClick={() => handleBaseUrl('Pengaturan Aset')} className="custom-nav text-white">
                            <i className="mdi mdi-garage align-self-center" /><span>Pengaturan Aset</span>
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" onClick={() => handleBaseUrl('Daftar Akun')} className="custom-nav text-white">
                            <i className="mdi mdi-clipboard-text align-self-center" /><span>Daftar Akun</span>
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" onClick={() => handleBaseUrl('Pengaturan')} className="custom-nav text-white">
                            <i className="mdi mdi-settings align-self-center" /><span>Settings</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    titlePage: state.titlePage,
    baseUrl: state.baseUrl
})

const mapDispatchToProps = {
    changeTitlePage: changeTitlePage
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);