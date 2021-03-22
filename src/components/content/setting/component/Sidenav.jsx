import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Sidenav(props) {
    const $ = window.$

    useEffect(() => {
    }, [])

    return (
        <div className="menu-content h-100" data-simplebar>
            <ul className="metismenu left-sidenav-menu" style={{ padding: 0 }}>
                <li className="mb-2">
                    <Link to="/dashboard" className={`custom-nav-mini text-white active`}>
                        <i className="fas fa-building align-self-center" /><span>Perusahaan</span>
                    </Link>
                </li>
                <li className="mb-2">
                    <Link to="/dashboard" className={`custom-nav-mini`}>
                        <i className="fas fa-tags align-self-center" /><span>Penjualan</span>
                        <span class="menu-arrow"><i class="mdi mdi-chevron-right text-black-50"></i></span>
                    </Link>
                    <ul className="dropdown-sidenav-menu">
                        <li className="sidenav-menu-item active">
                            <a href="#sales">
                                Format Pengaturan
                            </a>
                        </li>
                        <li className="sidenav-menu-item">
                            <a href="#invoice_reminder">
                                Pengingat Faktur
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="mb-2">
                    <Link to="/dashboard" className={`custom-nav-mini`}>
                        <i className="fas fa-cart-arrow-down align-self-center" /><span>Pembelian</span>
                    </Link>
                </li>
                <li className="mb-2">
                    <Link to="/dashboard" className={`custom-nav-mini`}>
                        <i className="fas fa-pallet align-self-center" /><span>Produk & Jasa</span>
                    </Link>
                </li>
                <li className="mb-2">
                    <Link to="/dashboard" className={`custom-nav-mini`}>
                        <i className="far fa-file-alt align-self-center" /><span>Template</span>
                        <span class="menu-arrow"><i class="mdi mdi-chevron-right text-black-50"></i></span>
                    </Link>
                    <ul className="dropdown-sidenav-menu">
                        <li class="menu-label">TEMPLATE EMAIL</li>
                        <li className="sidenav-menu-item active">
                            <a href="#sales">
                                Faktur Penjualan
                            </a>
                        </li>
                        <li className="sidenav-menu-item">
                            <a href="#invoice_reminder">
                                Penawaran Penjualan
                            </a>
                        </li>
                        <li className="sidenav-menu-item">
                            <a href="#invoice_reminder">
                                Pemesanan Penjualan
                            </a>
                        </li>
                        <li className="sidenav-menu-item">
                            <a href="#invoice_reminder">
                                Pemesanan Pembelian
                            </a>
                        </li>
                        <hr className="hr-dashed hr-menu" />
                        <li class="menu-label">PENGATURAN PDF</li>
                        <li className="sidenav-menu-item">
                            <a href="#invoice_reminder">
                                Pengaturan PDF
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="mb-2">
                    <Link to="/dashboard" className={`custom-nav-mini`}>
                        <i className="fas fa-map-marked-alt align-self-center" /><span>Pemetaan Akun</span>
                    </Link>
                </li>
                <li className="mb-2">
                    <Link to="/dashboard" className={`custom-nav-mini`}>
                        <i className="fas fa-user-friends align-self-center" /><span>Pengaturan Pengguna</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidenav