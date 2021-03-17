import React, { useState, useEffect, Fragment, memo } from 'react';
import { Helmet } from "react-helmet";
import { connect, useDispatch, useSelector } from "react-redux";
import { setTitlePage, setInitUrl } from './redux/actions/Auth';
import Sidebar from './components/sidebar/index';
import Navbar from './components/navbar/index';
import Footer from './components/footer/index';
import { BrowserRouter as Router, useHistory, useLocation, useRouteMatch } from "react-router-dom";
import PrivateRoute from './routes/private/PrivateRoute';
import ListPrivateRoute from './routes/private';
import PublicRoute from './routes/public/PublicRoute';
import ListPublicRoute from './routes/public';

function MainApp() {
	return (
		<Fragment>
			<Sidebar splitFullUrl={window.location.pathname.split('/')} />
			<div className="page-wrapper">
				<Navbar />
				<div className="page-content" style={{ backgroundColor: '#f5f5f5' }}>
					<div className="container-fluid">
						<ListPrivateRoute />
					</div>
					<Footer />
				</div>
			</div>
		</Fragment>
	);
}

function App() {
	const dispatch = useDispatch()
	const { titlePage, initURL, authUser, baseURL } = useSelector(({ auth }) => auth)

	const location = useLocation();
	const history = useHistory();
	const match = useRouteMatch()

	const $ = window.$

	useEffect(() => {
		if (initURL === '') {
			dispatch(setInitUrl(location.pathname));
		}

		const splitFullUrl = window.location.pathname.split('/')

		if (splitFullUrl[1] !== 'dashboard') {
			$('body').addClass('account-body accountbg');
		} else {
			$('body').addClass('dark-sidenav');
		}

		if (splitFullUrl[1] === 'dashboard') {
			dispatch(setTitlePage('Dashboard'));
		} else if (splitFullUrl[1] === 'report') {
			dispatch(setTitlePage('Laporan'));
		} else if (splitFullUrl[1] === 'account') {
			if (splitFullUrl[2] === 'chart') {
				dispatch(setTitlePage('Daftar Akun'));
			} else {
				dispatch(setTitlePage('Kas & Bank'));
			}
		} else if (splitFullUrl[1] === 'expense') {
			dispatch(setTitlePage('Biaya'));
		} else if (splitFullUrl[1] === 'contact') {
			dispatch(setTitlePage('Kontak'));
		} else if (splitFullUrl[1] === 'product') {
			dispatch(setTitlePage('Produk'));
		} else if (splitFullUrl[1] === 'asset') {
			dispatch(setTitlePage('Pengaturan Aset'));
		} else if (splitFullUrl[1] === 'setting') {
			dispatch(setTitlePage('Pengaturan'));
		} else {
			dispatch(setTitlePage('Login'));
		}
	}, [])

	useEffect(() => {
		if (location.pathname === '/') {
			if (authUser) {
				history.push('/dashboard');
			} else if (initURL === '' || initURL === '/' || initURL === '/login') {
				history.push('/login');
			} else {
				history.push(initURL);
			}
		}
	}, [authUser, initURL, location, history]);

	return (
		<Router>
			<Helmet>
				<link rel="icon" href={`${baseURL}${process.env.REACT_APP_LOGO_MINI}`} />
				<link rel="apple-touch-icon" href={`${baseURL}${process.env.REACT_APP_LOGO_MINI}`} />
				<title>{titlePage}</title>
			</Helmet>
			<PublicRoute path={`${match.url}`} authUser={authUser} location={location} component={ListPublicRoute} />
			<PrivateRoute path={`${match.url}`} authUser={authUser} location={location} component={MainApp} />
		</Router>
	);
}

export default memo(App);
