import React, { useState, useEffect, Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    Redirect
} from "react-router-dom";
import { getCurrentDate } from '../../../../helper/custom'
import { connect } from "react-redux";
import { changeTitlePage } from '../../../../redux/actions/config';

function Register(props) {
    const $ = window.$

    useEffect(() => {
        props.changeTitlePage('Buat Akun')

        $(".select2").each(function () {
            $(this).select2();
        });
    }, [])

    return (
        <Fragment>
            {/* Log In page */}
            <div className="container">
                <div className="row vh-100 d-flex justify-content-center">
                    <div className="col-12 align-self-center">
                        <div className="row">
                            <div className="col-lg-5 mx-auto">
                                <div className="card">
                                    <div className="card-body p-0 auth-header-box">
                                        <div className="text-center p-3">
                                            <a href="index-2.html" className="logo logo-admin">
                                                <img src={`${props.baseUrl}${process.env.REACT_APP_LOGO_MINI}`} height={50} alt="logo" className="auth-logo" />
                                            </a>
                                            <h4 className="mt-3 mb-1 font-weight-semibold text-white font-18">{process.env.REACT_APP_NAME}</h4>
                                            <p className="text-muted  mb-0">Buat akun jika belum memiliki akun di {process.env.REACT_APP_NAME}.</p>
                                        </div>
                                    </div>
                                    <div className="card-body p-3">
                                        <form method="post" encType="multipart/form-data" name="register">
                                            <div className="form-group mb-2">
                                                <label htmlFor="company_name">Pilih Perusahaan</label>
                                                <select className="select2 form-control mb-3 custom-select" style={{ width: '100%' }} data-placeholder="Pilih salah satu" name="company_name" id="company_name" required>
                                                    <option />
                                                    <option value={1}>PT. Eureka Bookhouse</option>
                                                    <option value={1}>PT. Eureka Logistics</option>
                                                    <option value={1}>PT. Master Diskon Internasional</option>
                                                    <option value={1}>PT. Jaja.id</option>
                                                    <option value={1}>Kata Rasa</option>
                                                </select>
                                            </div>
                                            {/*end form-group*/}
                                            <div className="form-group mb-2">
                                                <label htmlFor="pic_name">Nama PIC</label>
                                                <input type="text" className="form-control" name="pic_name" id="pic_name" required />
                                            </div>
                                            {/*end form-group*/}
                                            <div className="form-group mb-2">
                                                <label htmlFor="email">Email</label>
                                                <input type="email" className="form-control" name="email" id="email" required />
                                            </div>
                                            {/*end form-group*/}
                                            <div className="form-group mb-2">
                                                <label htmlFor="password">Password</label>
                                                <input type="password" className="form-control" name="password" id="password" required />
                                            </div>
                                            {/*end form-group*/}
                                            <div className="form-group mb-2">
                                                <label htmlFor="confirm_password">Konfirmasi Password</label>
                                                <input type="password" className="form-control" name="confirm_password" id="confirm_password" required />
                                                <small className="form-text text-danger" id="errorConfirmPassword" />
                                            </div>
                                            {/*end form-group*/}
                                            <div className="form-group mb-2">
                                                <label htmlFor="phone_number">Nomor Telepon</label>
                                                <input type="text" className="form-control" name="phone_number" id="phone_number" onkeypress="number_only(event)" required />
                                                <small className="form-text text-muted">Hanya berisi angka (0-9)</small>
                                            </div>
                                            {/*end form-group*/}
                                            <div className="g-recaptcha" data-sitekey="6LdGWnYaAAAAAFRdgCfX6a7fmg59lIeu0wSDRWtP" />
                                            <div className="form-group mt-4 row">
                                                <div className="col-12">
                                                    <button className="btn btn-primary btn-block waves-effect waves-light" type="submit" name="register">Register</button>
                                                </div>
                                                {/*end col*/}
                                            </div>
                                            {/*end form-group*/}
                                        </form>
                                        {/*end form*/}
                                        <div className="account-social">
                                            <h6 className="mb-3">Atau</h6>
                                        </div>
                                        <div className="text-center">
                                            <button className="btn btn-light btn-block waves-effect waves-light" type="button"><i className="mr-3"><img src={`${props.baseUrl}assets/images/logo-google.svg`} alt="logo-google" /></i>Register dengan Google </button>
                                        </div>
                                        <div className="m-3 text-center text-muted">
                                            <p className="mb-0">
                                                <Link to="/login" className="text-primary">Sudah memiliki akun?</Link>
                                            </p>
                                        </div>
                                    </div>
                                    {/*end card-body*/}
                                    <div className="card-body bg-light-alt text-center">
                                        <span className="text-muted d-none d-sm-inline-block">
                                            &copy; {new Date().getFullYear()} Eureka Developer All Rights Reserved.
                                        </span>
                                    </div>
                                </div>
                                {/*end card*/}
                            </div>
                            {/*end col*/}
                        </div>
                        {/*end row*/}
                    </div>
                    {/*end col*/}
                </div>
                {/*end row*/}
            </div>
            {/*end container*/}
            {/* End Log In page */}
        </Fragment>
    )
}

const mapStateToProps = state => ({
    titlePage: state.titlePage,
    baseUrl: state.baseUrl
})

const mapDispatchToProps = {
    changeTitlePage: changeTitlePage
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
