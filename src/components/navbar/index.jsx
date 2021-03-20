/* eslint-disable no-unused-expressions */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, memo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import { setLoginUser } from './../../redux/actions/Auth';

function Navbar() {
    const dispatch = useDispatch()
    const stateAuth = useSelector(({ auth }) => auth)
    const history = useHistory()

    const $ = window.$

    useEffect(() => {
        $(".button-menu-mobile").on("click", function (e) {
            e.preventDefault(), $("body").toggleClass("enlarge-menu")
        });
    }, [])

    const doLogout = () => {
        dispatch(setLoginUser(false));

        history.push('/login')
    }

    return (
        <div className="topbar">
            {/* Navbar */}
            <nav className="navbar-custom">
                <ul className="list-unstyled topbar-nav float-right mb-0">
                    <li className="dropdown notification-list">
                        <a className="nav-link dropdown-toggle arrow-none waves-light waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <img src={`${stateAuth.baseURL}assets/images/icons/clock.svg`} alt="icon-feather" className="align-self-center topbar-icon" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-lg pt-0">
                            <h6 className="dropdown-item-text font-15 m-0 py-3 border-bottom d-flex justify-content-between align-items-center">
                                Riwayat Aktifitas
                            </h6>
                            <div className="notification-menu" data-simplebar>
                                {/* item*/}
                                <a href="#" className="dropdown-item py-3">
                                    <small className="float-right text-muted pl-2">2 min ago</small>
                                    <div className="media">
                                        <div className="avatar-md bg-soft-primary">
                                            <img src={`${stateAuth.baseURL}assets/images/icons/shopping-cart.svg`} alt="icon-feather" className="align-self-center icon-xs" />
                                        </div>
                                        <div className="media-body align-self-center ml-2 text-truncate">
                                            <h6 className="my-0 font-weight-normal text-dark">Your order is placed</h6>
                                            <small className="text-muted mb-0">Dummy text of the printing and industry.</small>
                                        </div>
                                        {/*end media-body*/}
                                    </div>
                                    {/*end media*/}
                                </a>
                                {/*end-item*/}
                                {/* item*/}
                                <a href="#" className="dropdown-item py-3">
                                    <small className="float-right text-muted pl-2">10 min ago</small>
                                    <div className="media">
                                        <div className="avatar-md bg-soft-primary">
                                            <img src={`${stateAuth.baseURL}assets/images/users/user-4.jpg`} alt="icon" className="thumb-sm rounded-circle" />
                                        </div>
                                        <div className="media-body align-self-center ml-2 text-truncate">
                                            <h6 className="my-0 font-weight-normal text-dark">Meeting with designers</h6>
                                            <small className="text-muted mb-0">It is a long established fact that a reader.</small>
                                        </div>
                                        {/*end media-body*/}
                                    </div>
                                    {/*end media*/}
                                </a>
                                {/*end-item*/}
                                {/* item*/}
                                <a href="#" className="dropdown-item py-3">
                                    <small className="float-right text-muted pl-2">40 min ago</small>
                                    <div className="media">
                                        <div className="avatar-md bg-soft-primary">
                                            <img src={`${stateAuth.baseURL}assets/images/icons/users.svg`} alt="icon-feather" className="align-self-center icon-xs" />
                                        </div>
                                        <div className="media-body align-self-center ml-2 text-truncate">
                                            <h6 className="my-0 font-weight-normal text-dark">UX 3 Task complete.</h6>
                                            <small className="text-muted mb-0">Dummy text of the printing.</small>
                                        </div>
                                        {/*end media-body*/}
                                    </div>
                                    {/*end media*/}
                                </a>
                                {/*end-item*/}
                                {/* item*/}
                                <a href="#" className="dropdown-item py-3">
                                    <small className="float-right text-muted pl-2">1 hr ago</small>
                                    <div className="media">
                                        <div className="avatar-md bg-soft-primary">
                                            <img src={`${stateAuth.baseURL}assets/images/users/user-5.jpg`} alt="icon" className="thumb-sm rounded-circle" />
                                        </div>
                                        <div className="media-body align-self-center ml-2 text-truncate">
                                            <h6 className="my-0 font-weight-normal text-dark">Your order is placed</h6>
                                            <small className="text-muted mb-0">It is a long established fact that a reader.</small>
                                        </div>
                                        {/*end media-body*/}
                                    </div>
                                    {/*end media*/}
                                </a>
                                {/*end-item*/}
                                {/* item*/}
                                <a href="#" className="dropdown-item py-3">
                                    <small className="float-right text-muted pl-2">2 hrs ago</small>
                                    <div className="media">
                                        <div className="avatar-md bg-soft-primary">
                                            <img src={`${stateAuth.baseURL}assets/images/icons/check-circle.svg`} alt="icon-feather" className="align-self-center icon-xs" />
                                        </div>
                                        <div className="media-body align-self-center ml-2 text-truncate">
                                            <h6 className="my-0 font-weight-normal text-dark">Payment Successfull</h6>
                                            <small className="text-muted mb-0">Dummy text of the printing.</small>
                                        </div>
                                        {/*end media-body*/}
                                    </div>
                                    {/*end media*/}
                                </a>
                                {/*end-item*/}
                                <a href="#" className="dropdown-item py-3">
                                    <small className="float-right text-muted pl-2">2 hrs ago</small>
                                    <div className="media">
                                        <div className="avatar-md bg-soft-primary">
                                            <img src={`${stateAuth.baseURL}assets/images/icons/check-circle.svg`} alt="icon-feather" className="align-self-center icon-xs" />
                                        </div>
                                        <div className="media-body align-self-center ml-2 text-truncate">
                                            <h6 className="my-0 font-weight-normal text-dark">Payment Successfull</h6>
                                            <small className="text-muted mb-0">Dummy text of the printing.</small>
                                        </div>
                                        {/*end media-body*/}
                                    </div>
                                    {/*end media*/}
                                </a>
                                {/*end-item*/}
                                <a href="#" className="dropdown-item py-3">
                                    <small className="float-right text-muted pl-2">2 hrs ago</small>
                                    <div className="media">
                                        <div className="avatar-md bg-soft-primary">
                                            <img src={`${stateAuth.baseURL}assets/images/icons/check-circle.svg`} alt="icon-feather" className="align-self-center icon-xs" />
                                        </div>
                                        <div className="media-body align-self-center ml-2 text-truncate">
                                            <h6 className="my-0 font-weight-normal text-dark">Payment Successfull</h6>
                                            <small className="text-muted mb-0">Dummy text of the printing.</small>
                                        </div>
                                        {/*end media-body*/}
                                    </div>
                                    {/*end media*/}
                                </a>
                                {/*end-item*/}
                                <a href="#" className="dropdown-item py-3">
                                    <small className="float-right text-muted pl-2">2 hrs ago</small>
                                    <div className="media">
                                        <div className="avatar-md bg-soft-primary">
                                            <img src={`${stateAuth.baseURL}assets/images/icons/check-circle.svg`} alt="icon-feather" className="align-self-center icon-xs" />
                                        </div>
                                        <div className="media-body align-self-center ml-2 text-truncate">
                                            <h6 className="my-0 font-weight-normal text-dark">Payment Successfull</h6>
                                            <small className="text-muted mb-0">Dummy text of the printing.</small>
                                        </div>
                                        {/*end media-body*/}
                                    </div>
                                    {/*end media*/}
                                </a>
                                {/*end-item*/}
                                <a href="#" className="dropdown-item py-3">
                                    <small className="float-right text-muted pl-2">2 hrs ago</small>
                                    <div className="media">
                                        <div className="avatar-md bg-soft-primary">
                                            <img src={`${stateAuth.baseURL}assets/images/icons/check-circle.svg`} alt="icon-feather" className="align-self-center icon-xs" />
                                        </div>
                                        <div className="media-body align-self-center ml-2 text-truncate">
                                            <h6 className="my-0 font-weight-normal text-dark">Payment Successfull</h6>
                                            <small className="text-muted mb-0">Dummy text of the printing.</small>
                                        </div>
                                        {/*end media-body*/}
                                    </div>
                                    {/*end media*/}
                                </a>
                                {/*end-item*/}
                                <a href="#" className="dropdown-item py-3">
                                    <small className="float-right text-muted pl-2">2 hrs ago</small>
                                    <div className="media">
                                        <div className="avatar-md bg-soft-primary">
                                            <img src={`${stateAuth.baseURL}assets/images/icons/check-circle.svg`} alt="icon-feather" className="align-self-center icon-xs" />
                                        </div>
                                        <div className="media-body align-self-center ml-2 text-truncate">
                                            <h6 className="my-0 font-weight-normal text-dark">Payment Successfull</h6>
                                            <small className="text-muted mb-0">Dummy text of the printing.</small>
                                        </div>
                                        {/*end media-body*/}
                                    </div>
                                    {/*end media*/}
                                </a>
                                {/*end-item*/}
                            </div>
                        </div>
                    </li>
                    <li className="dropdown notification-list">
                        <a className="nav-link dropdown-toggle arrow-none waves-light waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <img src={`${stateAuth.baseURL}assets/images/icons/bell.svg`} alt="icon-feather" className="align-self-center topbar-icon" />
                            <span className="badge badge-danger badge-pill noti-icon-badge">2</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-lg pt-0">
                            <h6 className="dropdown-item-text font-15 m-0 py-3 border-bottom d-flex justify-content-between align-items-center">
                                Notifikasi <span className="badge badge-primary badge-pill">2</span>
                            </h6>
                            <div className="notification-menu" data-simplebar>
                                {/* item*/}
                                <a href="#" className="dropdown-item py-3">
                                    <small className="float-right text-muted pl-2">2 min ago</small>
                                    <div className="media">
                                        <div className="avatar-md bg-soft-primary">
                                            <img src={`${stateAuth.baseURL}assets/images/icons/shopping-cart.svg`} alt="icon-feather" className="align-self-center icon-xs" />
                                        </div>
                                        <div className="media-body align-self-center ml-2 text-truncate">
                                            <h6 className="my-0 font-weight-normal text-dark">Your order is placed</h6>
                                            <small className="text-muted mb-0">Dummy text of the printing and industry.</small>
                                        </div>
                                        {/*end media-body*/}
                                    </div>
                                    {/*end media*/}
                                </a>
                                {/*end-item*/}
                                {/* item*/}
                                <a href="#" className="dropdown-item py-3">
                                    <small className="float-right text-muted pl-2">10 min ago</small>
                                    <div className="media">
                                        <div className="avatar-md bg-soft-primary">
                                            <img src={`${stateAuth.baseURL}assets/images/users/user-4.jpg`} alt="icon" className="thumb-sm rounded-circle" />
                                        </div>
                                        <div className="media-body align-self-center ml-2 text-truncate">
                                            <h6 className="my-0 font-weight-normal text-dark">Meeting with designers</h6>
                                            <small className="text-muted mb-0">It is a long established fact that a reader.</small>
                                        </div>
                                        {/*end media-body*/}
                                    </div>
                                    {/*end media*/}
                                </a>
                                {/*end-item*/}
                                {/* item*/}
                                <a href="#" className="dropdown-item py-3">
                                    <small className="float-right text-muted pl-2">40 min ago</small>
                                    <div className="media">
                                        <div className="avatar-md bg-soft-primary">
                                            <img src={`${stateAuth.baseURL}assets/images/icons/users.svg`} alt="icon-feather" className="align-self-center icon-xs" />
                                        </div>
                                        <div className="media-body align-self-center ml-2 text-truncate">
                                            <h6 className="my-0 font-weight-normal text-dark">UX 3 Task complete.</h6>
                                            <small className="text-muted mb-0">Dummy text of the printing.</small>
                                        </div>
                                        {/*end media-body*/}
                                    </div>
                                    {/*end media*/}
                                </a>
                                {/*end-item*/}
                                {/* item*/}
                                <a href="#" className="dropdown-item py-3">
                                    <small className="float-right text-muted pl-2">1 hr ago</small>
                                    <div className="media">
                                        <div className="avatar-md bg-soft-primary">
                                            <img src={`${stateAuth.baseURL}assets/images/users/user-5.jpg`} alt="icon" className="thumb-sm rounded-circle" />
                                        </div>
                                        <div className="media-body align-self-center ml-2 text-truncate">
                                            <h6 className="my-0 font-weight-normal text-dark">Your order is placed</h6>
                                            <small className="text-muted mb-0">It is a long established fact that a reader.</small>
                                        </div>
                                        {/*end media-body*/}
                                    </div>
                                    {/*end media*/}
                                </a>
                                {/*end-item*/}
                                {/* item*/}
                                <a href="#" className="dropdown-item py-3">
                                    <small className="float-right text-muted pl-2">2 hrs ago</small>
                                    <div className="media">
                                        <div className="avatar-md bg-soft-primary">
                                            <img src={`${stateAuth.baseURL}assets/images/icons/check-circle.svg`} alt="icon-feather" className="align-self-center icon-xs" />
                                        </div>
                                        <div className="media-body align-self-center ml-2 text-truncate">
                                            <h6 className="my-0 font-weight-normal text-dark">Payment Successfull</h6>
                                            <small className="text-muted mb-0">Dummy text of the printing.</small>
                                        </div>
                                        {/*end media-body*/}
                                    </div>
                                    {/*end media*/}
                                </a>
                                {/*end-item*/}
                                <a href="#" className="dropdown-item py-3">
                                    <small className="float-right text-muted pl-2">2 hrs ago</small>
                                    <div className="media">
                                        <div className="avatar-md bg-soft-primary">
                                            <img src={`${stateAuth.baseURL}assets/images/icons/check-circle.svg`} alt="icon-feather" className="align-self-center icon-xs" />
                                        </div>
                                        <div className="media-body align-self-center ml-2 text-truncate">
                                            <h6 className="my-0 font-weight-normal text-dark">Payment Successfull</h6>
                                            <small className="text-muted mb-0">Dummy text of the printing.</small>
                                        </div>
                                        {/*end media-body*/}
                                    </div>
                                    {/*end media*/}
                                </a>
                                {/*end-item*/}
                                <a href="#" className="dropdown-item py-3">
                                    <small className="float-right text-muted pl-2">2 hrs ago</small>
                                    <div className="media">
                                        <div className="avatar-md bg-soft-primary">
                                            <img src={`${stateAuth.baseURL}assets/images/icons/check-circle.svg`} alt="icon-feather" className="align-self-center icon-xs" />
                                        </div>
                                        <div className="media-body align-self-center ml-2 text-truncate">
                                            <h6 className="my-0 font-weight-normal text-dark">Payment Successfull</h6>
                                            <small className="text-muted mb-0">Dummy text of the printing.</small>
                                        </div>
                                        {/*end media-body*/}
                                    </div>
                                    {/*end media*/}
                                </a>
                                {/*end-item*/}
                                <a href="#" className="dropdown-item py-3">
                                    <small className="float-right text-muted pl-2">2 hrs ago</small>
                                    <div className="media">
                                        <div className="avatar-md bg-soft-primary">
                                            <img src={`${stateAuth.baseURL}assets/images/icons/check-circle.svg`} alt="icon-feather" className="align-self-center icon-xs" />
                                        </div>
                                        <div className="media-body align-self-center ml-2 text-truncate">
                                            <h6 className="my-0 font-weight-normal text-dark">Payment Successfull</h6>
                                            <small className="text-muted mb-0">Dummy text of the printing.</small>
                                        </div>
                                        {/*end media-body*/}
                                    </div>
                                    {/*end media*/}
                                </a>
                                {/*end-item*/}
                                <a href="#" className="dropdown-item py-3">
                                    <small className="float-right text-muted pl-2">2 hrs ago</small>
                                    <div className="media">
                                        <div className="avatar-md bg-soft-primary">
                                            <img src={`${stateAuth.baseURL}assets/images/icons/check-circle.svg`} alt="icon-feather" className="align-self-center icon-xs" />
                                        </div>
                                        <div className="media-body align-self-center ml-2 text-truncate">
                                            <h6 className="my-0 font-weight-normal text-dark">Payment Successfull</h6>
                                            <small className="text-muted mb-0">Dummy text of the printing.</small>
                                        </div>
                                        {/*end media-body*/}
                                    </div>
                                    {/*end media*/}
                                </a>
                                {/*end-item*/}
                                <a href="#" className="dropdown-item py-3">
                                    <small className="float-right text-muted pl-2">2 hrs ago</small>
                                    <div className="media">
                                        <div className="avatar-md bg-soft-primary">
                                            <img src={`${stateAuth.baseURL}assets/images/icons/check-circle.svg`} alt="icon-feather" className="align-self-center icon-xs" />
                                        </div>
                                        <div className="media-body align-self-center ml-2 text-truncate">
                                            <h6 className="my-0 font-weight-normal text-dark">Payment Successfull</h6>
                                            <small className="text-muted mb-0">Dummy text of the printing.</small>
                                        </div>
                                        {/*end media-body*/}
                                    </div>
                                    {/*end media*/}
                                </a>
                                {/*end-item*/}
                            </div>
                            {/* All*/}
                            <a href="javascript:void(0);" className="dropdown-item text-center text-info">
                                Lihat Semua
                            </a>
                        </div>
                    </li>
                    <li className="dropdown">
                        <a className="nav-link dropdown-toggle waves-effect waves-light nav-user" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <span className="ml-1 mr-2 nav-user-name hidden-sm">PT. Raja Cepat Nusantara</span>
                            <img src={`${stateAuth.baseURL}assets/images/users/user-5.jpg`} alt="profile-user" className="rounded-circle thumb-xs" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="javascript:void(0);">
                                <img src={`${stateAuth.baseURL}assets/images/icons/user.svg`} alt="icon-feather" className="align-self-center icon-xs icon-dual mr-1" /> Profil Akun
                            </a>
                            <a className="dropdown-item" href="javascript:void(0);">
                                <img src={`${stateAuth.baseURL}assets/images/icons/settings.svg`} alt="icon-feather" className="align-self-center icon-xs icon-dual mr-1" /> Settings
                            </a>
                            <div className="dropdown-divider mb-0" />
                            <Link className="dropdown-item" onClick={doLogout}>
                                <img src={`${stateAuth.baseURL}assets/images/icons/power.svg`} alt="icon-feather" className="align-self-center icon-xs icon-dual mr-1" /> Logout
                            </Link>
                        </div>
                    </li>
                </ul>
                {/*end topbar-nav*/}
                <ul className="list-unstyled topbar-nav mb-0">
                    <li>
                        <button className="nav-link button-menu-mobile">
                            <img src={`${stateAuth.baseURL}assets/images/icons/menu.svg`} alt="icon-feather" className="align-self-center topbar-icon" />
                        </button>
                    </li>
                    <li className="creat-btn">
                        <div className="nav-link">
                            <Link to="/dashboard" className="btn btn-outline-info waves-effect waves-light mr-3" role="button"><i className="mdi mdi-tag-multiple align-self-center mr-2" />Tambah Penjualan</Link>
                            <Link to="/dashboard" className="btn btn-outline-info waves-effect waves-light mr-3" role="button"><i className="mdi mdi-cart align-self-center mr-2" />Tambah Pembelian</Link>
                            <Link to="/dashboard" className="btn btn-outline-info waves-effect waves-light mr-3" role="button"><i className="mdi mdi-card-plus align-self-center mr-2" />Tambah Biaya</Link>
                        </div>
                    </li>
                </ul>
            </nav>
            {/* end navbar*/}
        </div>
    )
}

export default memo(Navbar);