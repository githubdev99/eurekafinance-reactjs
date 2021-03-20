/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, Fragment } from 'react';
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
import { useDispatch } from 'react-redux';
import { setTitlePage } from '../../../redux/actions/Auth';

function Purchase() {
    let { path, url } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path} component={PurchaseList} />
        </Switch>
    )
}

function PurchaseList() {
    const dispatch = useDispatch()

    const $ = window.$

    useEffect(() => {
        dispatch(setTitlePage('Pembelian'));

        $('[data-toggle="tooltip"]').tooltip()

        $("#tableFakturPembelian").DataTable()
        $("#tablePengirimanPembelian").DataTable()
        $("#tablePemesananPembelian").DataTable()
        $("#tablePenawaranPembelian").DataTable()
    }, [])

    return (
        <Fragment>
            <div className="row">
                <div className="col-sm-12">
                    <div className="page-title-box">
                        <div className="row">
                            <div className="col">
                                <small className="text-muted font-14">
                                    <b>Transaksi</b>
                                </small>
                                <h3 style={{ marginTop: 0 }}>
                                    Pembelian
                                </h3>
                            </div>
                            {/*end col*/}
                            <div className="col-auto align-self-top">
                                <div className="btn-group dropleft mb-2 mb-md-0">
                                    <button type="button" className="btn btn-info waves-effect waves-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-plus mr-2" />Buat Pembelian Baru</button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Penagihan Pembelian</a>
                                        <a className="dropdown-item" href="#">Pemesanan Pembelian</a>
                                        <a className="dropdown-item" href="#">Penawaran Pembelian</a>
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
                        title: 'Pembelian Belum Dibayar (dalam IDR)',
                        type: 'warning',
                        limit: 'col-lg-4',
                        total: 2005,
                        currency: 10000
                    }} />
                </div>
                <div className="col-lg-4">
                    <CardCurrency setting={{
                        title: 'Pembelian Jatuh Tempo (dalam IDR)',
                        type: 'danger',
                        limit: 'col-lg-4',
                        total: 2005,
                        currency: 10000
                    }} />
                </div>
                <div className="col-lg-4">
                    <CardCurrency setting={{
                        title: 'Pelunasan Dibayar 30 Hari Terakhir (dalam IDR)',
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
                                    <h3>Transaksi Pembelian</h3>
                                </div>
                                <div className="col text-right">
                                    <button type="button" className="btn btn-success waves-effect waves-light"><i className="fas fa-file-excel mr-2" />Ekspor ke excel</button>
                                </div>
                            </div>
                            {/* Nav tabs */}
                            <ul className="nav nav-tabs mt-3" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link nav-link-tab active" data-toggle="tab" href="#fakturPembelian" role="tab" aria-selected="true" data-type="fakturPembelian">
                                        Faktur Pembelian
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav-link-tab" data-toggle="tab" href="#pengirimanPembelian" role="tab" aria-selected="false" data-type="pengirimanPembelian">
                                        Pengiriman Pembelian
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav-link-tab" data-toggle="tab" href="#pemesananPembelian" role="tab" aria-selected="false" data-type="pemesananPembelian">
                                        Pemesanan Pembelian
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav-link-tab" data-toggle="tab" href="#penawaranPembelian" role="tab" aria-selected="false" data-type="penawaranPembelian">
                                        Penawaran Pembelian
                                    </a>
                                </li>
                            </ul>
                            {/* Tab panes */}
                            <div className="tab-content">
                                <div className="tab-pane pt-3 active" id="fakturPembelian" role="tabpanel">
                                    <div className="table-responsive">
                                        <table id="tableFakturPembelian" className="table table-bordered table-hover dt-responsive nowrap" style={{ borderCollapse: 'collapse', borderSpacing: 0, width: '100%' }}>
                                            <thead>
                                                <tr className="table-info">
                                                    <th>Tanggal</th>
                                                    <th>Nomor</th>
                                                    <th>Supplier</th>
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
                                <div className="tab-pane pt-3" id="pengirimanPembelian" role="tabpanel">
                                    <div className="table-responsive">
                                        <table id="tablePengirimanPembelian" className="table table-bordered table-hover dt-responsive nowrap" style={{ borderCollapse: 'collapse', borderSpacing: 0, width: '100%' }}>
                                            <thead>
                                                <tr className="table-info">
                                                    <th>Tanggal</th>
                                                    <th>Nomor</th>
                                                    <th>Supplier</th>
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
                                <div className="tab-pane pt-3" id="pemesananPembelian" role="tabpanel">
                                    <div className="table-responsive">
                                        <table id="tablePemesananPembelian" className="table table-bordered table-hover dt-responsive nowrap" style={{ borderCollapse: 'collapse', borderSpacing: 0, width: '100%' }}>
                                            <thead>
                                                <tr className="table-info">
                                                    <th>Tanggal</th>
                                                    <th>Nomor</th>
                                                    <th>Supplier</th>
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
                                <div className="tab-pane pt-3" id="penawaranPembelian" role="tabpanel">
                                    <div className="table-responsive">
                                        <table id="tablePenawaranPembelian" className="table table-bordered table-hover dt-responsive nowrap" style={{ borderCollapse: 'collapse', borderSpacing: 0, width: '100%' }}>
                                            <thead>
                                                <tr className="table-info">
                                                    <th>Tanggal</th>
                                                    <th>Nomor</th>
                                                    <th>Supplier</th>
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
        </Fragment>
    )
}

export default Purchase
