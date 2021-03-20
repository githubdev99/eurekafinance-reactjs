import React, { useState, useEffect, Fragment, memo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    useHistory
} from "react-router-dom";
import { getCurrentDate, inputNumberOnly } from '../../../../helper/custom'
import { setTitlePage } from './../../../../redux/actions/Auth';
import SelectOption from './../../../global/SelectOption';

function Register() {
    const dispatch = useDispatch()
    const stateAuth = useSelector(({ auth }) => auth)
    const history = useHistory()

    const $ = window.$

    useEffect(() => {
        dispatch(setTitlePage('Buat Akun'))

        if (stateAuth.authUser) {
            history.push('/dashboard');
        }

        $(() => {
            var w = window,
                C = '___grecaptcha_cfg',
                cfg = w[C] = w[C] || {},
                N = 'grecaptcha';
            var gr = w[N] = w[N] || {};
            gr.ready = gr.ready || function (f) {
                (cfg['fns'] = cfg['fns'] || []).push(f);
            };
            w['__recaptcha_api'] = 'https://www.google.com/recaptcha/api2/';
            (cfg['render'] = cfg['render'] || []).push('onload');
            w['__google_recaptcha_client'] = true;
            var d = document,
                po = d.createElement('script');
            po.type = 'text/javascript';
            po.async = true;
            po.src = 'https://www.gstatic.com/recaptcha/releases/a7xT2d71Jli62wQMfeUUrLcO/recaptcha__id.js';
            po.crossOrigin = 'anonymous';
            po.integrity = 'sha384-uy1Gb7HTz7168uOKy5gBTFWBDVeUmUGusRDObDxN+gwqyN4lzdwBlpNNyno3+XLW';
            var e = d.querySelector('script[nonce]'),
                n = e && (e['nonce'] || e.getAttribute('nonce'));
            if (n) {
                po.setAttribute('nonce', n);
            }
            var s = d.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(po, s);
        })
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
                                            <p className="text-muted  mb-0">Buat akun jika belum memiliki akun di {process.env.REACT_APP_NAME}.</p>
                                        </div>
                                    </div>
                                    <div className="card-body p-3">
                                        <form action="true" method="post" encType="multipart/form-data" name="register">
                                            <div className="form-group mb-2">
                                                <label htmlFor="company_name">Pilih Perusahaan</label>
                                                <SelectOption options={[
                                                    {
                                                        value: 1,
                                                        label: 'PT. Eureka Bookhouse'
                                                    },
                                                    {
                                                        value: 2,
                                                        label: 'PT. Eureka Logistics'
                                                    },
                                                    {
                                                        value: 3,
                                                        label: 'PT. Master Diskon Internasional'
                                                    },
                                                    {
                                                        value: 4,
                                                        label: 'PT. Jaja.id'
                                                    },
                                                    {
                                                        value: 5,
                                                        label: 'Kata Rasa'
                                                    },
                                                ]} />
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
                                                <input type="password" className="form-control" name="confirm_password" id="confirm_password" required pattern="[0-9]*" />
                                                <small className="form-text text-danger" id="errorConfirmPassword" />
                                            </div>
                                            {/*end form-group*/}
                                            <div className="form-group mb-2">
                                                <label htmlFor="phone_number">Nomor Telepon</label>
                                                <input type="text" className="form-control" name="phone_number" id="phone_number" required onKeyPress={inputNumberOnly} />
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
                                            <button className="btn btn-light btn-block waves-effect waves-light" type="button"><i className="mr-3"><img src={`${stateAuth.baseURL}assets/images/logo-google.svg`} alt="logo-google" /></i>Register dengan Google </button>
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

export default memo(Register);
