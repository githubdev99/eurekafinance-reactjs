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
import CardProduct from '../../global/CardProduct'

function Product() {
    let { path, url } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path} render={() => <ProductList />} />
        </Switch>
    )
}

function ProductList() {
    const $ = window.$

    useEffect(() => {
        $('[data-toggle="tooltip"]').tooltip()

        $("#tableProductOrService").DataTable()
        $("#tableGudang").DataTable()
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
                                    Produk
                                    </h3>
                            </div>
                            {/*end col*/}
                            <div className="col-auto align-self-top">
                                <div className="btn-group dropleft mb-2 mb-md-0">
                                    <button type="button" className="btn btn-info waves-effect waves-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-plus mr-2" />Buat Baru</button>
                                    <div className="dropdown-menu">
                                        <div className="dropdown-header">Produk</div>
                                        <a className="dropdown-item" href="#">Produk Baru</a>
                                        <div className="dropdown-divider" />
                                        <div className="dropdown-header">Gudang</div>
                                        <a className="dropdown-item" href="#">Gudang Baru</a>
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
                <div className="col-lg-12">
                    <div className="card card-default">
                        <div className="card-body">
                            {/* Nav tabs */}
                            <ul className="nav nav-tabs mb-4" role="tablist">
                                <li className="nav-item custom-width">
                                    <a className="nav-link active" data-toggle="tab" href="#productOrService" role="tab" aria-selected="true" data-type="productOrService">
                                        <span>Barang &amp; Jasa</span>
                                    </a>
                                </li>
                                <li className="nav-item custom-width">
                                    <a className="nav-link" data-toggle="tab" href="#warehouse" role="tab" aria-selected="true" data-type="warehouse">
                                        <span>Gudang</span>
                                    </a>
                                </li>
                            </ul>
                            <h4 className="font-weight-bold">Ringkasan</h4>
                            <div className="row">
                                <div className="col-3">
                                    <CardProduct setting={{
                                        icon: 'fas fa-box',
                                        type: 'default',
                                        title: 'Stok Tersedia',
                                        total: `155 Jenis`
                                    }} />
                                </div>
                                {/*end col*/}
                                <div className="col-3">
                                    <CardProduct setting={{
                                        icon: 'fas fa-box',
                                        type: 'warning',
                                        title: 'Stok Segera Habis',
                                        total: `155 Jenis`
                                    }} />
                                </div>
                                {/*end col*/}
                                <div className="col-3">
                                    <CardProduct setting={{
                                        icon: 'fas fa-box',
                                        type: 'danger',
                                        title: 'Stok Habis',
                                        total: `155 Jenis`
                                    }} />
                                </div>
                                {/*end col*/}
                                <div className="col-3">
                                    <CardProduct setting={{
                                        icon: 'fas fa-warehouse',
                                        type: 'default',
                                        title: 'Daftar Gudang',
                                        total: `155`
                                    }} />
                                </div>
                                {/*end col*/}
                            </div>
                            {/*end row*/}
                            <div className="tab-content">
                                <div className="tab-pane pt-3 active" id="productOrService" role="tabpanel">
                                    <div className="row mb-3">
                                        <div className="col">
                                            <h4>Daftar Barang &amp; Jasa</h4>
                                        </div>
                                        <div className="col text-right">
                                            <button type="button" className="btn btn-success waves-effect waves-light"><i className="fas fa-file-excel mr-2" />Ekspor ke excel</button>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table id="tableProductOrService" className="table table-bordered table-hover dt-responsive nowrap" style={{ borderCollapse: 'collapse', borderSpacing: 0, width: '100%' }}>
                                            <thead>
                                                <tr className="table-info">
                                                    <th>Kode</th>
                                                    <th>Nama</th>
                                                    <th>Qty</th>
                                                    <th>Batas Minimum</th>
                                                    <th>Unit</th>
                                                    <th>Harga Rata-Rata</th>
                                                    <th>Harga Beli Terakhir</th>
                                                    <th>Harga Beli</th>
                                                    <th>Harga Jual</th>
                                                    <th>Kategori</th>
                                                    <th>Opsi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane pt-3" id="warehouse" role="tabpanel">
                                    <div className="row mb-3">
                                        <div className="col">
                                            <h4>Daftar Gudang</h4>
                                        </div>
                                        <div className="col text-right">
                                            <button type="button" className="btn btn-success waves-effect waves-light"><i className="fas fa-file-excel mr-2" />Ekspor ke excel</button>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table id="tableGudang" className="table table-bordered table-hover dt-responsive nowrap" style={{ borderCollapse: 'collapse', borderSpacing: 0, width: '100%' }}>
                                            <thead>
                                                <tr className="table-info">
                                                    <th>Kode</th>
                                                    <th>Nama</th>
                                                    <th>Alamat</th>
                                                    <th>Keterangan</th>
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

export default Product
