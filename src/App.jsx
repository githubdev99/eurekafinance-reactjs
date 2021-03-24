import React, { useState, useEffect, Fragment, memo } from 'react';
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { setTitlePage, setInitUrl } from './redux/actions/Auth';
import Sidebar from './components/sidebar/index';
import Navbar from './components/navbar/index';
import Footer from './components/footer/index';
import { BrowserRouter as Router, Route, Switch, useHistory, useLocation, useRouteMatch, Redirect, withRouter } from "react-router-dom";

import Login from './components/content/auth/login';
import Register from './components/content/auth/register';
import ForgotPassword from './components/content/auth/forgot_password';

import Dashboard from './components/content/dashboard';
import Account from './components/content/account';
import Invoice from './components/content/invoice';
import Purchase from './components/content/purchase';
import Expense from './components/content/expense';
import Contact from './components/content/contact';
import Product from './components/content/product';
import Asset from './components/content/asset';
import Setting from './components/content/setting';

const RestrictedRoute = ({ component: Component, location, authUser, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				return authUser ? <Component {...props} /> : <Redirect
					to={{
						pathname: '/login',
						state: { from: location }
					}}
				/>;
			}}
		/>
	);
};

function MainApp(props) {
	return (
		<Fragment>
			<Sidebar splitFullUrl={window.location.pathname.split('/')} />
			<div className="page-wrapper">
				<Navbar />
				<div className="page-content" style={{ backgroundColor: '#f5f5f5' }}>
					<div className="container-fluid">
						<Switch>
							{(props.location.pathname === '/') ? <Redirect to="/dashboard" /> : ''}
							<Route path="/dashboard" component={Dashboard} />
							<Route path="/account" component={Account} />
							<Route path="/invoice" component={Invoice} />
							<Route path="/purchase" component={Purchase} />
							<Route path="/expense" component={Expense} />
							<Route path="/contact" component={Contact} />
							<Route path="/product" component={Product} />
							<Route path="/asset" component={Asset} />
							<Route path="/setting" component={Setting} />
						</Switch>
					</div>
					<Footer />
				</div>
			</div>
		</Fragment>
	);
}

function App() {
	const dispatch = useDispatch()
	const stateAuth = useSelector(({ auth }) => auth)

	const location = useLocation();
	const history = useHistory();
	const match = useRouteMatch()

	const $ = window.$

	useEffect(() => {
		if (location.pathname === '/') {
			if (!stateAuth.authUser) {
				history.push('/login');
			} else if (stateAuth.initURL === '' || stateAuth.initURL === '/' || stateAuth.initURL === '/login' || stateAuth.initURL === '/register' || stateAuth.initURL === '/forgot-password') {
				history.push('/dashboard');
			} else {
				history.push(stateAuth.initURL);
			}
		}
	}, [stateAuth.authUser, stateAuth.initURL, location, history]);

	useEffect(() => {
		const splitFullUrl = window.location.pathname.split('/')

		if (stateAuth.initURL === '') {
			dispatch(setInitUrl(location.pathname));
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
		} else if (splitFullUrl[1] === 'invoice') {
			dispatch(setTitlePage('Penjualan'));
		} else if (splitFullUrl[1] === 'purchase') {
			dispatch(setTitlePage('Pembelian'));
		} else if (splitFullUrl[1] === 'setting') {
			dispatch(setTitlePage('Pengaturan'));
		} else if (splitFullUrl[1] === 'register') {
			dispatch(setTitlePage('Buat Akun'));
		} else if (splitFullUrl[1] === '/forgot-password') {
			dispatch(setTitlePage('Lupa Password'));
		} else {
			dispatch(setTitlePage('Login'));
		}
	}, [])

	return (
		<Router>
			<Helmet>
				<link rel="icon" href={`${stateAuth.baseURL}${process.env.REACT_APP_LOGO_MINI}`} />
				<link rel="apple-touch-icon" href={`${stateAuth.baseURL}${process.env.REACT_APP_LOGO_MINI}`} />
				<title>{stateAuth.titlePage}</title>
			</Helmet>
			<Switch>
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/forgot-password" component={ForgotPassword} />
				<RestrictedRoute path={`${match.url}`} authUser={stateAuth.authUser} location={location} history={history} component={MainApp} />
			</Switch>
		</Router>
	);
}

export default withRouter(memo(App))