import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import { getCurrentDate } from '../../../helper/custom'
import CardCurrency from '../../global/CardCurrency'

function Invoice() {
    let { path, url } = useRouteMatch();
    const $ = window.$

    useEffect(() => {
        $('[data-toggle="tooltip"]').tooltip()

        $("#tableFakturPenjualan").DataTable()
        $("#tablePengirimanPenjualan").DataTable()
        $("#tablePemesananPenjualan").DataTable()
        $("#tablePenawaranPenjualan").DataTable()
    }, [])

    return (
        <Switch>
            <Route exact path={path}>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="page-title-box">
                            <div className="row">
                                <div className="col">
                                    <small className="text-muted font-14">
                                        <b>Transaksi</b>
                                    </small>
                                    <h3 style={{ marginTop: 0 }}>
                                        Penjualan
                                </h3>
                                </div>
                                {/*end col*/}
                                <div className="col-auto align-self-top">
                                    <div className="btn-group dropleft mb-2 mb-md-0">
                                        <button type="button" className="btn btn-info waves-effect waves-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-plus mr-2" />Buat Penjualan Baru</button>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Penagihan Penjualan</a>
                                            <a className="dropdown-item" href="#">Pemesanan Penjualan</a>
                                            <a className="dropdown-item" href="#">Penawaran Penjualan</a>
                                        </div>
                                    </div>{/* /btn-group */}
                                </div>
                                {/*end col*/}
                            </div>
                            {/*end row*/}
                        </div>
                        {/*end page-title-box*/}
                    </div>
                    {/*end col*/}
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <CardCurrency setting={{
                            title: 'Penjualan Belum Dibayar (dalam IDR)',
                            type: 'warning',
                            limit: 'col-lg-4',
                            total: 2005,
                            currency: 10000
                        }} />
                    </div>
                    <div className="col-lg-4">
                        <CardCurrency setting={{
                            title: 'Penjualan Jatuh Tempo (dalam IDR)',
                            type: 'danger',
                            limit: 'col-lg-4',
                            total: 2005,
                            currency: 10000
                        }} />
                    </div>
                    <div className="col-lg-4">
                        <CardCurrency setting={{
                            title: 'Pelunasan Diterima 30 Hari Terakhir (dalam IDR)',
                            type: 'success',
                            limit: 'col-lg-4',
                            total: 2005,
                            currency: 10000
                        }} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <span className="float-right font-12 font-weight-bold">Saldo adalah untuk semua jangka waktu, kecuali ada pernyataan lain</span>
                        <div className="clearfix" />
                        <div className="card card-default">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <h3>Transaksi Penjualan</h3>
                                    </div>
                                    <div className="col text-right">
                                        <button type="button" className="btn btn-success waves-effect waves-light"><i className="fas fa-file-excel mr-2" />Ekspor ke excel</button>
                                    </div>
                                </div>
                                {/* Nav tabs */}
                                <ul className="nav nav-tabs mt-3" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link nav-link-tab active" data-toggle="tab" href="#fakturPenjualan" role="tab" aria-selected="true" data-type="fakturPenjualan">
                                            Faktur Penjualan
                                    </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link nav-link-tab" data-toggle="tab" href="#pengirimanPenjualan" role="tab" aria-selected="false" data-type="pengirimanPenjualan">
                                            Pengiriman Penjualan
                                    </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link nav-link-tab" data-toggle="tab" href="#pemesananPenjualan" role="tab" aria-selected="false" data-type="pemesananPenjualan">
                                            Pemesanan Penjualan
                                    </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link nav-link-tab" data-toggle="tab" href="#penawaranPenjualan" role="tab" aria-selected="false" data-type="penawaranPenjualan">
                                            Penawaran Penjualan
                                    </a>
                                    </li>
                                </ul>
                                {/* Tab panes */}
                                <div className="tab-content">
                                    <div className="tab-pane pt-3 active" id="fakturPenjualan" role="tabpanel">
                                        <div className="table-responsive">
                                            <table id="tableFakturPenjualan" className="table table-bordered table-hover dt-responsive nowrap" style={{ borderCollapse: 'collapse', borderSpacing: 0, width: '100%' }}>
                                                <thead>
                                                    <tr className="table-info">
                                                        <th>Tanggal</th>
                                                        <th>Nomor</th>
                                                        <th>Pelanggan</th>
                                                        <th>Tgl Jatuh Tempo</th>
                                                        <th>Status</th>
                                                        <th>Sisa Tagihan (dalam IDR)</th>
                                                        <th>Total (dalam IDR)</th>
                                                        <th>Tags</th>
                                                        <th>Opsi</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="tab-pane pt-3" id="pengirimanPenjualan" role="tabpanel">
                                        <div className="table-responsive">
                                            <table id="tablePengirimanPenjualan" className="table table-bordered table-hover dt-responsive nowrap" style={{ borderCollapse: 'collapse', borderSpacing: 0, width: '100%' }}>
                                                <thead>
                                                    <tr className="table-info">
                                                        <th>Tanggal</th>
                                                        <th>Nomor</th>
                                                        <th>Pelanggan</th>
                                                        <th>Status</th>
                                                        <th>Tags</th>
                                                        <th>Opsi</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="tab-pane pt-3" id="pemesananPenjualan" role="tabpanel">
                                        <div className="table-responsive">
                                            <table id="tablePemesananPenjualan" className="table table-bordered table-hover dt-responsive nowrap" style={{ borderCollapse: 'collapse', borderSpacing: 0, width: '100%' }}>
                                                <thead>
                                                    <tr className="table-info">
                                                        <th>Tanggal</th>
                                                        <th>Nomor</th>
                                                        <th>Pelanggan</th>
                                                        <th>Tgl Jatuh Tempo</th>
                                                        <th>Status</th>
                                                        <th>Jumlah DP (dalam IDR)</th>
                                                        <th>Total (dalam IDR)</th>
                                                        <th>Tags</th>
                                                        <th>Opsi</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="tab-pane pt-3" id="penawaranPenjualan" role="tabpanel">
                                        <div className="table-responsive">
                                            <table id="tablePenawaranPenjualan" className="table table-bordered table-hover dt-responsive nowrap" style={{ borderCollapse: 'collapse', borderSpacing: 0, width: '100%' }}>
                                                <thead>
                                                    <tr className="table-info">
                                                        <th>Tanggal</th>
                                                        <th>Nomor</th>
                                                        <th>Pelanggan</th>
                                                        <th>Tgl Jatuh Tempo</th>
                                                        <th>Status</th>
                                                        <th>Total (dalam IDR)</th>
                                                        <th>Tags</th>
                                                        <th>Opsi</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Route>
        </Switch>
    )
}

export default Invoice
