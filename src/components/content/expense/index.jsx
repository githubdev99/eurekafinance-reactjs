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

function Expense() {
    let { path, url } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path} component={ExpenseList} />
        </Switch>
    )
}

function ExpenseList() {
    const dispatch = useDispatch()

    const $ = window.$

    useEffect(() => {
        dispatch(setTitlePage('Biaya'));

        $('[data-toggle="tooltip"]').tooltip()
        $("#tableDefault").DataTable()
    }, [])

    return (
        <Fragment>
            <div className="row">
                <div className="col-sm-12">
                    <div className="page-title-box">
                        <div className="row">
                            <div className="col">
                                <small className="text-muted font-14">
                                    <b>Biaya</b>
                                </small>
                                <h3 style={{ marginTop: 0 }}>
                                    Pengeluaran
                                </h3>
                            </div>
                            {/*end col*/}
                            <div className="col-auto align-self-top">
                                <a href="#" className="btn btn-info waves-effect waves-light"><i className="fas fa-plus mr-2" />Buat Biaya Baru</a>
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
                        title: 'Total Biaya Bulan Ini (dalam IDR)',
                        type: 'info',
                        limit: 'col-lg-4',
                        total: 2005,
                        currency: 10000
                    }} />
                </div>
                <div className="col-lg-4">
                    <CardCurrency setting={{
                        title: 'Biaya 30 Hari Terakhir (dalam IDR)',
                        type: 'info',
                        limit: 'col-lg-4',
                        total: 2005,
                        currency: 10000
                    }} />
                </div>
                <div className="col-lg-4">
                    <CardCurrency setting={{
                        title: 'Biaya Belum Dibayar (dalam IDR)',
                        type: 'info',
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
                            <div className="row mb-3">
                                <div className="col">
                                    <h3>Daftar Biaya</h3>
                                </div>
                                <div className="col text-right">
                                    <button type="button" className="btn btn-success waves-effect waves-light"><i className="fas fa-file-excel mr-2" />Ekspor ke excel</button>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table id="tableDefault" className="table table-bordered table-hover dt-responsive nowrap" style={{ borderCollapse: 'collapse', borderSpacing: 0, width: '100%' }}>
                                    <thead>
                                        <tr className="table-info">
                                            <th>Tanggal</th>
                                            <th>Nomor</th>
                                            <th>Kategori</th>
                                            <th>Penerima</th>
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
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Expense
