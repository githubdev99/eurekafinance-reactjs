import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";

function Navbar(props) {
    return (
        <div className="topbar">
            {/* Navbar */}
            <nav className="navbar-custom">
                <ul className="list-unstyled topbar-nav float-right mb-0">
                    <li className="dropdown notification-list">
                        <a className="nav-link dropdown-toggle arrow-none waves-light waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <i data-feather="clock" className="align-self-center topbar-icon" />
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
                                            <i data-feather="shopping-cart" className="align-self-center icon-xs" />
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
                                            <img src={`${props.baseUrl}assets/images/users/user-4.jpg`} alt className="thumb-sm rounded-circle" />
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
                                            <i data-feather="users" className="align-self-center icon-xs" />
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
                                            <img src={`${props.baseUrl}assets/images/users/user-5.jpg`} alt className="thumb-sm rounded-circle" />
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
                                            <i data-feather="check-circle" className="align-self-center icon-xs" />
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
                                            <i data-feather="check-circle" className="align-self-center icon-xs" />
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
                                            <i data-feather="check-circle" className="align-self-center icon-xs" />
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
                                            <i data-feather="check-circle" className="align-self-center icon-xs" />
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
                                            <i data-feather="check-circle" className="align-self-center icon-xs" />
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
                                            <i data-feather="check-circle" className="align-self-center icon-xs" />
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
                            <i data-feather="bell" className="align-self-center topbar-icon" />
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
                                            <i data-feather="shopping-cart" className="align-self-center icon-xs" />
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
                                            <img src={`${props.baseUrl}assets/images/users/user-4.jpg`} alt className="thumb-sm rounded-circle" />
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
                                            <i data-feather="users" className="align-self-center icon-xs" />
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
                                            <img src={`${props.baseUrl}assets/images/users/user-5.jpg`} alt className="thumb-sm rounded-circle" />
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
                                            <i data-feather="check-circle" className="align-self-center icon-xs" />
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
                                            <i data-feather="check-circle" className="align-self-center icon-xs" />
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
                                            <i data-feather="check-circle" className="align-self-center icon-xs" />
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
                                            <i data-feather="check-circle" className="align-self-center icon-xs" />
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
                                            <i data-feather="check-circle" className="align-self-center icon-xs" />
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
                                            <i data-feather="check-circle" className="align-self-center icon-xs" />
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
                            <span className="ml-1 nav-user-name hidden-sm">PT. Raja Cepat Nusantara</span>
                            <img src={`${props.baseUrl}assets/images/users/user-5.jpg`} alt="profile-user" className="rounded-circle thumb-xs" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#"><i data-feather="user" className="align-self-center icon-xs icon-dual mr-1" /> Profil Akun</a>
                            <a className="dropdown-item" href="#"><i data-feather="settings" className="align-self-center icon-xs icon-dual mr-1" /> Settings</a>
                            <div className="dropdown-divider mb-0" />
                            <a className="dropdown-item" href="#"><i data-feather="power" className="align-self-center icon-xs icon-dual mr-1" /> Logout</a>
                        </div>
                    </li>
                </ul>
                {/*end topbar-nav*/}
                <ul className="list-unstyled topbar-nav mb-0">
                    <li>
                        <button className="nav-link button-menu-mobile">
                            <i data-feather="menu" className="align-self-center topbar-icon" />
                        </button>
                    </li>
                    <li className="creat-btn">
                        <div className="nav-link">
                            <a className="btn btn-outline-info waves-effect waves-light mr-2" href="#" role="button"><i className="mdi mdi-tag-multiple align-self-center mr-2" />Tambah Penjualan</a>
                            <a className="btn btn-outline-info waves-effect waves-light mr-2" href="#" role="button"><i className="mdi mdi-cart align-self-center mr-2" />Tambah Pembelian</a>
                            <a className="btn btn-outline-info waves-effect waves-light mr-2" href="#" role="button"><i className="mdi mdi-card-plus align-self-center mr-2" />Tambah Biaya</a>
                        </div>
                    </li>
                </ul>
            </nav>
            {/* end navbar*/}
        </div>
    )
}

const mapStateToProps = state => ({
    baseUrl: state.baseUrl
})

export default connect(mapStateToProps, null)(Navbar);