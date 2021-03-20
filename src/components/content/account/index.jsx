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
import AccountChart from './chart/index'
import { useDispatch } from "react-redux";
import { setTitlePage } from '../../../redux/actions/Auth';

function Account() {
    let { path, url } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path} component={AccountList} />
            <Route path={`${path}/chart`} component={AccountChart} />
        </Switch>
    )
}

function AccountList() {
    const dispatch = useDispatch()

    const $ = window.$

    useEffect(() => {
        dispatch(setTitlePage('Kas & Bank'));

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
                                    <b>Kas &amp; Bank</b>
                                </small>
                                <h3 style={{ marginTop: 0 }}>
                                    Akun Kas
                                    </h3>
                            </div>
                            {/*end col*/}
                            <div className="col-auto align-self-top">
                                <a href="#" className="btn btn-info waves-effect waves-light"><i className="fas fa-plus mr-2" />Buat Akun Baru</a>
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
                <div className="col-lg-3 col-md-6">
                    <CardCurrency setting={{
                        title: 'Pemasukan 30-Hari Mendatang (dalam IDR)',
                        type: 'success',
                        limit: 'col-lg-3',
                        total: 2005,
                        currency: 10000
                    }} />
                </div>
                <div className="col-lg-3 col-md-6">
                    <CardCurrency setting={{
                        title: 'Pengeluaran 30-Hari Mendatang (dalam IDR)',
                        type: 'danger',
                        limit: 'col-lg-3',
                        total: 2005,
                        currency: 10000
                    }} />
                </div>
                <div className="col-lg-3 col-md-6">
                    <CardCurrency setting={{
                        title: 'Saldo Kas (dalam IDR)',
                        type: 'info',
                        limit: 'col-lg-3',
                        total: 2005,
                        currency: 10000
                    }} />
                </div>
                <div className="col-lg-3 col-md-6">
                    <CardCurrency setting={{
                        title: 'Saldo Kartu Kredit (dalam IDR)',
                        type: 'info',
                        limit: 'col-lg-3',
                        total: 2005,
                        currency: 10000
                    }} />
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <span className="float-right font-12 font-weight-bold">Saldo berdasarkan tanggal {getCurrentDate('/')}, kecuali ada pernyataan lain</span>
                    <div className="clearfix" />
                    <div className="card card-default">
                        <div className="card-body">
                            <div className="row mb-3">
                                <div className="col">
                                    <h3>Daftar Akun Kas</h3>
                                </div>
                                <div className="col text-right">
                                    <div className="btn-group dropleft mb-2 mb-md-0">
                                        <button type="button" className="btn btn-info waves-effect waves-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-plus mr-2" />Buat Transaksi</button>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Transfer Uang</a>
                                            <a className="dropdown-item" href="#">Terima Uang</a>
                                            <a className="dropdown-item" href="#">Kirim Uang</a>
                                        </div>
                                    </div>{/* /btn-group */}
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table id="tableDefault" className="table table-bordered table-hover dt-responsive nowrap" style={{ borderCollapse: 'collapse', borderSpacing: 0, width: '100%' }}>
                                    <thead>
                                        <tr className="table-info">
                                            <th>Kode Akun</th>
                                            <th>Nama Akun</th>
                                            <th>Saldo Bank</th>
                                            <th>Saldo Di Eureka Finance</th>
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

export default Account
