import React, { useState, useEffect, Fragment, memo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    useHistory,
} from "react-router-dom";
import { setTitlePage, setLoginUser } from './../../../../redux/actions/Auth';
import { Spinner } from 'react-bootstrap';

function Login() {
    const dispatch = useDispatch()
    const stateAuth = useSelector(({ auth }) => auth)
    const history = useHistory()
    const $ = window.$

    useEffect(() => {
        dispatch(setTitlePage('Login'))

        if (stateAuth.authUser) {
            history.push('/dashboard');
        }

        $('.spinner-border').hide()
    }, [])

    const doLogin = () => {
        dispatch(setLoginUser(true));

        $(`button[name="${document.activeElement.name}"]`).attr('disabled', 'true');
        $(`button[name="${document.activeElement.name}"] .spinner-border`).show();

        setTimeout(() => {
            $(`button[name="${document.activeElement.name}"]`).removeAttr('disabled');
            $(`button[name="${document.activeElement.name}"]`).html(document.activeElement.textContent)

            history.push('/dashboard')
        }, 2000);
    }

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
                                            <p className="text-muted  mb-0">Log in untuk melanjutkan ke {process.env.REACT_APP_NAME}.</p>
                                        </div>
                                    </div>
                                    <div className="card-body p-3">
                                        <form action="true" method="post" encType="multipart/form-data">
                                            <div className="form-group mb-2">
                                                <label htmlFor="email">Email</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" name="email" id="email" />
                                                </div>
                                            </div>
                                            {/*end form-group*/}
                                            <div className="form-group mb-2">
                                                <label htmlFor="password">Password</label>
                                                <div className="input-group">
                                                    <input type="password" className="form-control" name="password" id="password" />
                                                </div>
                                            </div>
                                            {/*end form-group*/}
                                            <div className="form-group mt-4 row">
                                                <div className="col-12">
                                                    <button className="btn btn-primary btn-block waves-effect waves-light" type="button" name="login" onClick={doLogin}>
                                                        <Spinner
                                                            as="span"
                                                            animation="border"
                                                            size="sm"
                                                            role="status"
                                                            aria-hidden="true"
                                                            className="mr-2"
                                                        />
                                                        Log in
                                                    </button>
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
                                            <button className="btn btn-light btn-block waves-effect waves-light" type="button"><i className="mr-3"><img src={`${stateAuth.baseURL}assets/images/logo-google.svg`} alt="logo-google" /></i>Log in dengan Google </button>
                                        </div>
                                        <div className="m-3 text-center text-muted">
                                            <p className="mb-0">
                                                <Link to="/forgot-password" className="text-primary">Lupa password</Link>
                                                <span className="dot mx-2" />
                                                <Link to="/register" className="text-primary">Buat akun</Link>
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

export default memo(Login)
