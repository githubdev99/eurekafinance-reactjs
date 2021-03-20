/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, Fragment, memo } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from "react-redux";
import { setTitlePage } from './../../../redux/actions/Auth';

function Dashboard() {
    const dispatch = useDispatch()
    const stateAuth = useSelector(({ auth }) => auth)

    useEffect(() => {
        dispatch(setTitlePage('Dashboard'));
    }, [])

    return (
        <Fragment>
            <div className="row">
                <div className="col-sm-12">
                    <div className="page-title-box">
                        <div className="row">
                            <div className="col">
                                <h3>Ringkasan Bisnis</h3>
                            </div>
                            {/*end col*/}
                            <div className="col-auto align-self-center">
                                <a href="#" className="btn btn-sm btn-outline-primary mr-2" id="Dash_Date">
                                    <span className="ay-name" id="Day_Name">Today:</span>&nbsp;
                                    <span className id="Select_date">Jan 11</span>
                                    <i className="far fa-calendar align-self-center icon-xs ml-1" />
                                </a>
                                <a href="#" className="btn btn-sm btn-outline-primary">
                                    <i class="fas fa-download align-self-center icon-xs" />
                                </a>
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
                <div className="col-lg-9">
                    <div className="card">
                        <div className="card-header">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h4 className="card-title">Arus Kas</h4>
                                </div>
                                {/*end col*/}
                                <div className="col-auto">
                                    <div className="dropdown">
                                        <a href="#" className="btn btn-sm btn-outline-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            This Year<i className="las la-angle-down ml-1" />
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="#">Today</a>
                                            <a className="dropdown-item" href="#">Last Week</a>
                                            <a className="dropdown-item" href="#">Last Month</a>
                                            <a className="dropdown-item" href="#">This Year</a>
                                        </div>
                                    </div>
                                </div>
                                {/*end col*/}
                            </div>
                            {/*end row*/}
                        </div>
                        {/*end card-header*/}
                        <div className="card-body">
                            <div className="chart-demo">
                                <div id="apex_mixed" className="apex-charts" />
                            </div>
                        </div>
                        {/*end card-body*/}
                    </div>
                    {/*end card*/}
                </div>
                {/*end col*/}
                <div className="col-lg-3">col-lg-3</div>
                {/*end col*/}
            </div>

            <div className="row">
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h4 className="card-title">Pages View by Users</h4>
                                </div>
                                {/*end col*/}
                                <div className="col-auto">
                                    <div className="dropdown">
                                        <a href="#" className="btn btn-sm btn-outline-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Today<i className="las la-angle-down ml-1" />
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="#">Today</a>
                                            <a className="dropdown-item" href="#">Yesterday</a>
                                            <a className="dropdown-item" href="#">Last Week</a>
                                        </div>
                                    </div>
                                </div>
                                {/*end col*/}
                            </div>
                            {/*end row*/}
                        </div>
                        {/*end card-header*/}
                        <div className="card-body">
                            <ul className="list-group custom-list-group mb-n3">
                                <li className="list-group-item align-items-center d-flex justify-content-between pt-0">
                                    <div className="media">
                                        <img src="assets/images/small/rgb.svg" height={30} className="mr-3 align-self-center rounded" alt="..." />
                                        <div className="media-body align-self-center">
                                            <h6 className="m-0">Dastone - Admin Dashboard</h6>
                                            <p className="mb-0 text-muted">analytic-index.html</p>
                                        </div>
                                        {/*end media body*/}
                                    </div>
                                    <div className="align-self-center">
                                        <a href="#" className="btn btn-sm btn-soft-primary">4.3k <i className="las la-external-link-alt font-15" /></a>
                                    </div>
                                </li>
                                <li className="list-group-item align-items-center d-flex justify-content-between">
                                    <div className="media">
                                        <img src="assets/images/small/cobweb.svg" height={30} className="mr-3 align-self-center rounded" alt="..." />
                                        <div className="media-body align-self-center">
                                            <h6 className="m-0">Metrica Simple- Admin Dashboard</h6>
                                            <p className="mb-0 text-muted">sales-index.html</p>
                                        </div>
                                        {/*end media body*/}
                                    </div>
                                    <div className="align-self-center">
                                        <a href="#" className="btn btn-sm btn-soft-primary">3.7k <i className="las la-external-link-alt font-15" /></a>
                                    </div>
                                </li>
                                <li className="list-group-item align-items-center d-flex justify-content-between">
                                    <div className="media">
                                        <img src="assets/images/small/blocks.svg" height={30} className="mr-3 align-self-center rounded" alt="..." />
                                        <div className="media-body align-self-center">
                                            <h6 className="m-0">Crovex - Admin Dashboard</h6>
                                            <p className="mb-0 text-muted">helpdesk-index.html</p>
                                        </div>
                                        {/*end media body*/}
                                    </div>
                                    <div className="align-self-center">
                                        <a href="#" className="btn btn-sm btn-soft-primary">2.9k <i className="las la-external-link-alt font-15" /></a>
                                    </div>
                                </li>
                                <li className="list-group-item align-items-center d-flex justify-content-between">
                                    <div className="media">
                                        <img src="assets/images/small/atom.svg" height={30} className="mr-3 align-self-center rounded" alt="..." />
                                        <div className="media-body align-self-center">
                                            <h6 className="m-0">Annex - Admin Dashboard</h6>
                                            <p className="mb-0 text-muted">calendar.html</p>
                                        </div>
                                        {/*end media body*/}
                                    </div>
                                    <div className="align-self-center">
                                        <a href="#" className="btn btn-sm btn-soft-primary">1.6k <i className="las la-external-link-alt font-15" /></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/*end card-body*/}
                    </div>
                    {/*end card*/}
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex">
                                <h2 className="m-0 align-self-center">80</h2>
                                <div className="d-block ml-2 align-self-center">
                                    <span className="text-warning">Right now</span>
                                    <h5 className="my-1">Traffic Sources</h5>
                                    <p className="mb-0 text-muted">It is a long established fact that a reader will
                                    be of a page when looking at its layout.
                                        <a href="#" className="text-primary">Read More <i className="las la-arrow-right" /></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/*end card-body*/}
                    </div>
                    {/*end card*/}
                </div>
                {/*end col*/}
                <div className="col-lg-4">col-lg-4</div>
                {/*end col*/}
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h4 className="card-title">Activity</h4>
                                </div>
                                {/*end col*/}
                                <div className="col-auto">
                                    <div className="dropdown">
                                        <a href="#" className="btn btn-sm btn-outline-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            All<i className="las la-angle-down ml-1" />
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="#">Purchases</a>
                                            <a className="dropdown-item" href="#">Emails</a>
                                        </div>
                                    </div>
                                </div>
                                {/*end col*/}
                            </div>
                            {/*end row*/}
                        </div>
                        {/*end card-header*/}
                        <div className="card-body">
                            <div className="analytic-dash-activity" data-simplebar>
                                <div className="activity">
                                    <div className="activity-info">
                                        <div className="icon-info-activity">
                                            <i className="las la-user-clock bg-soft-primary" />
                                        </div>
                                        <div className="activity-info-text">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="text-muted mb-0 font-13 w-75"><span>Donald</span>
                                                    updated the status of <a href="#">Refund #1234</a> to awaiting customer response
                                                </p>
                                                <small className="text-muted">10 Min ago</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="activity-info">
                                        <div className="icon-info-activity">
                                            <i className="mdi mdi-timer-off bg-soft-primary" />
                                        </div>
                                        <div className="activity-info-text">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="text-muted mb-0 font-13 w-75"><span>Lucy Peterson</span>
                                                    was added to the group, group name is <a href="#">Overtake</a>
                                                </p>
                                                <small className="text-muted">50 Min ago</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="activity-info">
                                        <div className="icon-info-activity">
                                            <img src="assets/images/users/user-5.jpg" alt className="rounded-circle thumb-sm" />
                                        </div>
                                        <div className="activity-info-text">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="text-muted mb-0 font-13 w-75"><span>Joseph Rust</span>
                                                    opened new showcase <a href="#">Mannat #112233</a> with theme market
                                                </p>
                                                <small className="text-muted">10 hours ago</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="activity-info">
                                        <div className="icon-info-activity">
                                            <i className="mdi mdi-clock-outline bg-soft-primary" />
                                        </div>
                                        <div className="activity-info-text">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="text-muted mb-0 font-13 w-75"><span>Donald</span>
                                                    updated the status of <a href="#">Refund #1234</a> to awaiting customer response
                                                </p>
                                                <small className="text-muted">Yesterday</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="activity-info">
                                        <div className="icon-info-activity">
                                            <i className="mdi mdi-alert-outline bg-soft-primary" />
                                        </div>
                                        <div className="activity-info-text">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="text-muted mb-0 font-13 w-75"><span>Lucy Peterson</span>
                                                    was added to the group, group name is <a href="#">Overtake</a>
                                                </p>
                                                <small className="text-muted">14 Nov 2019</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="activity-info">
                                        <div className="icon-info-activity">
                                            <img src="assets/images/users/user-4.jpg" alt className="rounded-circle thumb-sm" />
                                        </div>
                                        <div className="activity-info-text">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="text-muted mb-0 font-13 w-75"><span>Joseph Rust</span>
                                                    opened new showcase <a href="#">Mannat #112233</a> with theme market
                                                </p>
                                                <small className="text-muted">15 Nov 2019</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*end activity*/}
                            </div>
                            {/*end analytics-dash-activity*/}
                        </div>
                        {/*end card-body*/}
                    </div>
                    {/*end card*/}
                </div>
                {/*end col*/}
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h4 className="card-title">Browser Used &amp; Traffic Reports</h4>
                                </div>
                                {/*end col*/}
                            </div>
                            {/*end row*/}
                        </div>
                        {/*end card-header*/}
                        <div className="card-body">
                            <div className="table-responsive browser_users">
                                <table className="table mb-0">
                                    <thead className="thead-light">
                                        <tr>
                                            <th className="border-top-0">Channel</th>
                                            <th className="border-top-0">Sessions</th>
                                            <th className="border-top-0">Prev.Period</th>
                                            <th className="border-top-0">% Change</th>
                                        </tr>
                                        {/*end tr*/}
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><a href="#" className="text-primary">Organic search</a></td>
                                            <td>10853<small className="text-muted">(52%)</small></td>
                                            <td>566<small className="text-muted">(92%)</small></td>
                                            <td> 52.80% <i className="fas fa-caret-up text-success font-16" /></td>
                                        </tr>
                                        {/*end tr*/}
                                        <tr>
                                            <td><a href="#" className="text-primary">Direct</a></td>
                                            <td>2545<small className="text-muted">(47%)</small></td>
                                            <td>498<small className="text-muted">(81%)</small></td>
                                            <td> -17.20% <i className="fas fa-caret-down text-danger font-16" /></td>
                                        </tr>
                                        {/*end tr*/}
                                        <tr>
                                            <td><a href="#" className="text-primary">Referal</a></td>
                                            <td>1836<small className="text-muted">(38%)</small></td>
                                            <td>455<small className="text-muted">(74%)</small></td>
                                            <td> 41.12% <i className="fas fa-caret-up text-success font-16" /></td>
                                        </tr>
                                        {/*end tr*/}
                                        <tr>
                                            <td><a href="#" className="text-primary">Email</a></td>
                                            <td>1958<small className="text-muted">(31%)</small></td>
                                            <td>361<small className="text-muted">(61%)</small></td>
                                            <td> -8.24% <i className="fas fa-caret-down text-danger font-16" /></td>
                                        </tr>
                                        {/*end tr*/}
                                        <tr>
                                            <td><a href="#" className="text-primary">Social</a></td>
                                            <td>1566<small className="text-muted">(26%)</small></td>
                                            <td>299<small className="text-muted">(49%)</small></td>
                                            <td> 29.33% <i className="fas fa-caret-up text-success" /></td>
                                        </tr>
                                        {/*end tr*/}
                                    </tbody>
                                </table>
                                {/*end table*/}
                            </div>
                            {/*end /div*/}
                        </div>
                        {/*end card-body*/}
                    </div>
                    {/*end card*/}
                </div>
                {/*end col*/}
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h4 className="card-title">Browser Used &amp; Traffic Reports</h4>
                                </div>
                                {/*end col*/}
                            </div>
                            {/*end row*/}
                        </div>
                        {/*end card-header*/}
                        <div className="card-body">
                            <div className="table-responsive browser_users">
                                <table className="table mb-0">
                                    <thead className="thead-light">
                                        <tr>
                                            <th className="border-top-0">Browser</th>
                                            <th className="border-top-0">Sessions</th>
                                            <th className="border-top-0">Bounce Rate</th>
                                            <th className="border-top-0">Transactions</th>
                                        </tr>
                                        {/*end tr*/}
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><img src="assets/images/browser_logo/chrome.png" alt height={16} className="mr-2" />Chrome</td>
                                            <td>10853<small className="text-muted">(52%)</small></td>
                                            <td> 52.80%</td>
                                            <td>566<small className="text-muted">(92%)</small></td>
                                        </tr>
                                        {/*end tr*/}
                                        <tr>
                                            <td><img src="assets/images/browser_logo/micro-edge.png" alt height={16} className="mr-2" />Microsoft Edge</td>
                                            <td>2545<small className="text-muted">(47%)</small></td>
                                            <td> 47.54%</td>
                                            <td>498<small className="text-muted">(81%)</small></td>
                                        </tr>
                                        {/*end tr*/}
                                        <tr>
                                            <td><img src="assets/images/browser_logo/in-explorer.png" alt height={16} className="mr-2" />Internet-Explorer</td>
                                            <td>1836<small className="text-muted">(38%)</small></td>
                                            <td> 41.12%</td>
                                            <td>455<small className="text-muted">(74%)</small></td>
                                        </tr>
                                        {/*end tr*/}
                                        <tr>
                                            <td><img src="assets/images/browser_logo/opera.png" alt height={16} className="mr-2" />Opera</td>
                                            <td>1958<small className="text-muted">(31%)</small></td>
                                            <td> 36.82%</td>
                                            <td>361<small className="text-muted">(61%)</small></td>
                                        </tr>
                                        {/*end tr*/}
                                        <tr>
                                            <td><img src="assets/images/browser_logo/chrome.png" alt height={16} className="mr-2" />Chrome</td>
                                            <td>10853<small className="text-muted">(52%)</small></td>
                                            <td> 52.80%</td>
                                            <td>566<small className="text-muted">(92%)</small></td>
                                        </tr>
                                        {/*end tr*/}
                                    </tbody>
                                </table>
                                {/*end table*/}
                            </div>
                            {/*end /div*/}
                        </div>
                        {/*end card-body*/}
                    </div>
                    {/*end card*/}
                </div>
                {/*end col*/}
            </div>
        </Fragment>
    )
}

export default memo(Dashboard)