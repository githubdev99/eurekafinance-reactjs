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
import { getCurrentDate } from './../../../../helper/custom'

function AccountChart() {
    let { path, url } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path} render={() => <AccountChartList />} />
        </Switch>
    )
}

function AccountChartList() {
    const $ = window.$

    useEffect(() => {
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
                                    <b>Akun</b>
                                </small>
                                <h3 style={{ marginTop: 0 }}>
                                    Daftar Akun
                                </h3>
                            </div>
                            {/*end col*/}
                            <div className="col-auto align-self-top">
                                <a href="#" className="btn btn-info waves-effect waves-light mr-2"><i className="fas fa-plus mr-2" />Buat Jurnal Umum</a>
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
                <div className="col-lg-12">
                    <span className="float-right font-12 font-weight-bold">Saldo berdasarkan tanggal {getCurrentDate('/')}, kecuali ada pernyataan lain</span>
                    <div className="clearfix" />
                    <div className="card card-default">
                        <div className="card-body">
                            <div className="mb-3 text-right">
                                <div className="btn-group dropleft mb-2 mb-md-0">
                                    <button type="button" className="btn btn-info waves-effect waves-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tindakan<i className="fas fa-bars ml-2" /></button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#"><i className="fas fa-tools mr-2" />Pengaturan Akun</a>
                                        <a className="dropdown-item" href="#"><i className="fas fa-book mr-2" />Atur Saldo Awal</a>
                                        <a className="dropdown-item" href="#"><i className="fas fa-book mr-2" />Penutupan Buku</a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#"><i className="fas fa-download mr-2" />Import Jurnal Umum</a>
                                        <a className="dropdown-item" href="#"><i className="fas fa-file-excel mr-2" />Ekspor Akun</a>
                                    </div>
                                </div>{/* /btn-group */}
                            </div>
                            <div className="table-responsive">
                                <table id="tableDefault" className="table table-bordered table-hover dt-responsive nowrap" style={{ borderCollapse: 'collapse', borderSpacing: 0, width: '100%' }}>
                                    <thead>
                                        <tr className="table-info">
                                            <th>Kunci</th>
                                            <th>Kode Akun</th>
                                            <th>Nama Akun</th>
                                            <th>Kategori Akun</th>
                                            <th>Pajak</th>
                                            <th>Saldo (dalam IDR)</th>
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

export default AccountChart
