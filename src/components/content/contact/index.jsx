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
import CardTransaction from '../../global/CardTransaction'

function Contact() {
    let { path, url } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path} render={() => <ContactList />} />
        </Switch>
    )
}

function ContactList() {
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
                                    <b>Master</b>
                                </small>
                                <h3 style={{ marginTop: 0 }}>
                                    Kontak
                                    </h3>
                            </div>
                            {/*end col*/}
                            <div className="col-auto align-self-top">
                                <a href="#" className="btn btn-info waves-effect waves-light"><i className="fas fa-plus mr-2" />Buat Kontak Baru</a>
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
                    <div className="card card-default">
                        <div className="card-body">
                            {/* Nav tabs */}
                            <ul className="nav nav-tabs mb-4" role="tablist">
                                <li className="nav-item custom-width">
                                    <a className="nav-link active" data-toggle="tab" href="#" role="tab" aria-selected="true" data-type="customer">
                                        <span className="color-contact customer" />
                                        <span className="ml-3">Pelanggan</span>
                                    </a>
                                </li>
                                <li className="nav-item custom-width">
                                    <a className="nav-link" data-toggle="tab" href="#" role="tab" aria-selected="true" data-type="vendor">
                                        <span className="color-contact vendor" />
                                        <span className="ml-3">Supplier</span>
                                    </a>
                                </li>
                                <li className="nav-item custom-width">
                                    <a className="nav-link" data-toggle="tab" href="#" role="tab" aria-selected="true" data-type="employee">
                                        <span className="color-contact employee" />
                                        <span className="ml-3">Karyawan</span>
                                    </a>
                                </li>
                                <li className="nav-item custom-width">
                                    <a className="nav-link" data-toggle="tab" href="#" role="tab" aria-selected="true" data-type="other">
                                        <span className="color-contact other" />
                                        <span className="ml-3">Lainnya</span>
                                    </a>
                                </li>
                                <li className="nav-item custom-width">
                                    <a className="nav-link" data-toggle="tab" href="#" role="tab" aria-selected="true" data-type="all">
                                        <span>Semua Tipe</span>
                                    </a>
                                </li>
                            </ul>
                            <h4 className="font-weight-bold">Total Transaksi</h4>
                            <div className="row">
                                <div className="col">
                                    <CardTransaction setting={{
                                        title: 'Piutang Belum Dibayar',
                                        type: 'warning',
                                        currency: 10000
                                    }} />
                                </div>
                                {/*end col*/}
                                <div className="col">
                                    <CardTransaction setting={{
                                        title: 'Piutang Jatuh Tempo',
                                        type: 'danger',
                                        currency: 10000
                                    }} />
                                </div>
                                {/*end col*/}
                            </div>
                            {/*end row*/}
                            <div className="row mb-3">
                                <div className="col">
                                    <h4>Daftar Pelanggan</h4>
                                </div>
                                <div className="col text-right">
                                    <button type="button" className="btn btn-success waves-effect waves-light"><i className="fas fa-file-excel mr-2" />Ekspor ke excel</button>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table id="tableDefault" className="table table-bordered table-hover dt-responsive nowrap" style={{ borderCollapse: 'collapse', borderSpacing: 0, width: '100%' }}>
                                    <thead>
                                        <tr className="table-info">
                                            <th>Nama</th>
                                            <th>Nama Perusahaan</th>
                                            <th>NPWP</th>
                                            <th>Alamat</th>
                                            <th>Email</th>
                                            <th>No. HP</th>
                                            <th>Telepon</th>
                                            <th>Saldo</th>
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

export default Contact
