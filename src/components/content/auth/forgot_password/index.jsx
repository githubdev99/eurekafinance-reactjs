import React, { useState, useEffect, Fragment, memo } from 'react';
import { useDispatch, useSelector } from "react-redux";
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
import { setTitlePage } from '../../../../redux/actions/Auth';

function ForgotPassword() {
    const dispatch = useDispatch()
    const stateAuth = useSelector(({ auth }) => auth)
    const $ = window.$

    useEffect(() => {
        dispatch(setTitlePage('Lupa Password'))
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
                                                <img src={`${stateAuth.baseURL}${process.env.REACT_APP_LOGO_MINI}`} height={50} alt="logo" className="auth-logo" />
                                            </a>
                                            <h4 className="mt-3 mb-1 font-weight-semibold text-white font-18">{process.env.REACT_APP_NAME}</h4>
                                            <p className="text-muted  mb-0">Masukkan email yang Anda lupa passwordnya.</p>
                                        </div>
                                    </div>
                                    <div className="card-body p-3">
                                        <form action="true" method="post" encType="multipart/form-data">
                                            <div className="form-group mb-2">
                                                <label htmlFor="email">Email</label>
                                                <div className="input-group">
                                                    <input type="email" className="form-control" name="email" id="email" />
                                                </div>
                                            </div>
                                            {/*end form-group*/}
                                            <div className="form-group mt-4 row">
                                                <div className="col-12">
                                                    <button className="btn btn-primary btn-block waves-effect waves-light" type="button" name="forgot_password">Kirim email reset password</button>
                                                </div>
                                                {/*end col*/}
                                            </div>
                                            {/*end form-group*/}
                                        </form>
                                        {/*end form*/}
                                        <div className="text-muted">
                                            Cek kotak spam jika Anda tidak menerima email untuk reset password di kotak masuk.
                                        </div>
                                        <div className="m-3 text-center text-muted">
                                            <p className="mb-0">
                                                <Link to="/login" className="text-primary">Kembali ke halaman log in</Link>
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

export default memo(ForgotPassword);