/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, Fragment, memo } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';

function Dashboard() {
    const stateAuth = useSelector(({ auth }) => auth)

    useEffect(() => {
        <Helmet>
            <script src={`${stateAuth.baseURL}assets/pages/jquery.analytics_dashboard.init.js`}></script>
            <script src={`${stateAuth.baseURL}assets/pages/jquery.analytics_dashboard.init.js`}></script>
            <script src={`${stateAuth.baseURL}assets/plugins/apex-charts/apexcharts.min.js`}></script>
            <script src={`${stateAuth.baseURL}assets/plugins/apex-charts/irregular-data-series.js`}></script>
            <script src={`${stateAuth.baseURL}assets/plugins/apex-charts/ohlc.js`}></script>
            <script src={`${stateAuth.baseURL}assets/pages/jquery.apexcharts.init.js`}></script>
        </Helmet>
    }, [])

    return (
        <Fragment>
            {/* Page-Title */}
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
                                    <span className="ay-name" id="Day_Name">Today:</span>
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
            {/*end row*/}

        </Fragment>
    )
}

export default memo(Dashboard)