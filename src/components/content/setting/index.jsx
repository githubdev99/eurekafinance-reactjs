/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect, memo } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import { getCurrentDate } from '../../../helper/custom'
import { useDispatch } from 'react-redux';
import { setTitlePage } from '../../../redux/actions/Auth';
import Sidenav from './component/Sidenav';
import SettingCompany from './company/index';

function Setting() {
    let { path, url } = useRouteMatch();

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setTitlePage('Pengaturan'));
    }, [])

    return (
        <Fragment>
            <div className="row">
                <div className="col-sm-12">
                    <div className="page-title-box">
                        <div className="row">
                            <div className="col">
                                <small className="text-muted font-14">
                                    <b>Pengaturan</b>
                                </small>
                                <h3 style={{ marginTop: 0 }}>
                                    Pengaturan Perusahaan
                                </h3>
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
                <div className="col-12">
                    {/* Left sidebar */}
                    <div className="email-leftbar">
                        <div className="card">
                            <div className="card-body">
                                <Sidenav splitFullUrl={window.location.pathname.split('/')} />
                            </div>{/* end card-body */}
                        </div>{/* end card */}
                    </div>
                    {/* End Left sidebar */}
                    {/* Right Sidebar */}
                    <div className="email-rightbar">
                        <div className="card">
                            <Switch>
                                <Route exact path={path} component={SettingCompany} />
                                <Route path={`${path}/company`} component={SettingCompany} />
                            </Switch>
                        </div> {/* panel */}
                    </div> {/* end email-rightbar */}
                </div>{/* end Col */}
            </div>
        </Fragment>
    )
}

export default Setting
