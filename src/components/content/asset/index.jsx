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

function Asset() {
    let { path, url } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path} render={() => <AssetList />} />
        </Switch>
    )
}

function AssetList() {
    const $ = window.$

    useEffect(() => {
        $('[data-toggle="tooltip"]').tooltip()

        $("#tablePendingAsset").DataTable()
        $("#tableActiveAsset").DataTable()
        $("#tableSoldAsset").DataTable()
        $("#tableDepreciation").DataTable()
    }, [])

    return (
        <Fragment>
            <div className="row">
                <div className="col-sm-12">
                    <div className="page-title-box">
                        <div className="row">
                            <div className="col">
                                <small className="text-muted font-14">
                                    <b>Manajemen Aset</b>
                                </small>
                                <h3 style={{ marginTop: 0 }}>
                                    Aset Tetap
                                </h3>
                            </div>
                            {/*end col*/}
                            <div className="col-auto align-self-top">
                                <a href="#" className="btn btn-info waves-effect waves-light"><i className="fas fa-plus mr-2" />Simpan Aset</a>
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
                    <div className="clearfix" />
                    <div className="card card-default">
                        <div className="card-body">
                            {/* Nav tabs */}
                            <ul className="nav nav-tabs mt-3" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link nav-link-tab active" data-toggle="tab" href="#pendingAsset" role="tab" aria-selected="true" data-type="pendingAsset">
                                        Aset Tertunda
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav-link-tab" data-toggle="tab" href="#activeAsset" role="tab" aria-selected="false" data-type="activeAsset">
                                        Aset Aktif
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav-link-tab" data-toggle="tab" href="#soldAsset" role="tab" aria-selected="false" data-type="soldAsset">
                                        Dijual/Dilepas
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav-link-tab" data-toggle="tab" href="#depreciation" role="tab" aria-selected="false" data-type="depreciation">
                                        Penyusutan
                                    </a>
                                </li>
                            </ul>
                            {/* Tab panes */}
                            <div className="tab-content">
                                <div className="tab-pane pt-3 active" id="pendingAsset" role="tabpanel">
                                    <div className="mb-3">
                                        <h4>Aset Belum Tersimpan</h4>
                                    </div>
                                    <div className="table-responsive">
                                        <table id="tablePendingAsset" className="table table-bordered table-hover dt-responsive nowrap" style={{ borderCollapse: 'collapse', borderSpacing: 0, width: '100%' }}>
                                            <thead>
                                                <tr className="table-info">
                                                    <th>Tanggal Akuisisi</th>
                                                    <th>Barang</th>
                                                    <th>Faktur</th>
                                                    <th>Biaya Akuisisi</th>
                                                    <th>Opsi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane pt-3" id="activeAsset" role="tabpanel">
                                    <div className="mb-3">
                                        <h4>Daftar Aset</h4>
                                    </div>
                                    <div className="table-responsive">
                                        <table id="tableActiveAsset" className="table table-bordered table-hover dt-responsive nowrap" style={{ borderCollapse: 'collapse', borderSpacing: 0, width: '100%' }}>
                                            <thead>
                                                <tr className="table-info">
                                                    <th>Tanggal Akuisisi</th>
                                                    <th>Detail Aset</th>
                                                    <th>Akun Aset</th>
                                                    <th>Biaya Akuisisi (dalam IDR)</th>
                                                    <th>Nilai Buku (dalam IDR)</th>
                                                    <th>Opsi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane pt-3" id="soldAsset" role="tabpanel">
                                    <div className="mb-3">
                                        <h4>Daftar Aset</h4>
                                    </div>
                                    <div className="table-responsive">
                                        <table id="tableSoldAsset" className="table table-bordered table-hover dt-responsive nowrap" style={{ borderCollapse: 'collapse', borderSpacing: 0, width: '100%' }}>
                                            <thead>
                                                <tr className="table-info">
                                                    <th>Tanggal</th>
                                                    <th>Detail Aset</th>
                                                    <th>No. Transaksi</th>
                                                    <th>Harga Jual</th>
                                                    <th>Untung/(Rugi)</th>
                                                    <th>Opsi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane pt-3" id="depreciation" role="tabpanel">
                                    <div className="mb-3">
                                        <h4>Jadwal Penyusutan</h4>
                                    </div>
                                    <div className="table-responsive">
                                        <table id="tableDepreciation" className="table table-bordered table-hover dt-responsive nowrap" style={{ borderCollapse: 'collapse', borderSpacing: 0, width: '100%' }}>
                                            <thead>
                                                <tr className="table-info">
                                                    <th>Detail Aset</th>
                                                    <th>Periode</th>
                                                    <th>Nilai</th>
                                                    <th>Metode</th>
                                                    <th>Penyusutan (dalam IDR)</th>
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

export default Asset
