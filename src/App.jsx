import React, { useState, useEffect, Fragment, memo } from 'react';
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { setTitlePage, setInitUrl } from './redux/actions/Auth';
import Sidebar from './components/sidebar/index';
import Navbar from './components/navbar/index';
import Footer from './components/footer/index';
import { BrowserRouter as Router, Route, Switch, useHistory, useLocation, useRouteMatch, withRouter, Redirect } from "react-router-dom";
import MainRoute from './routes';
import Login from './components/content/auth/login';
import Register from './components/content/auth/register';
import ForgotPassword from './components/content/auth/forgot_password';

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

function MainApp() {
	return (
		<Fragment>
			<Sidebar splitFullUrl={window.location.pathname.split('/')} />
			<div className="page-wrapper">
				<Navbar />
				<div className="page-content" style={{ backgroundColor: '#f5f5f5' }}>
					<div className="container-fluid">
						<MainRoute />
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
			} else if (stateAuth.initURL === '' || stateAuth.initURL === '/' || stateAuth.initURL === '/login') {
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

		if (stateAuth.authUser) {
			$('body').addClass('dark-sidenav');
		} else {
			$('body').addClass('account-body accountbg');
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

	return (
		<Router>
			<Helmet>
				<link rel="icon" href={`${stateAuth.baseURL}${process.env.REACT_APP_LOGO_MINI}`} />
				<link rel="apple-touch-icon" href={`${stateAuth.baseURL}${process.env.REACT_APP_LOGO_MINI}`} />
				<title>{stateAuth.titlePage}</title>
			</Helmet>
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/forgot-password" component={ForgotPassword} />
				<RestrictedRoute path={`${match.url}`} authUser={stateAuth.authUser} location={location} component={MainApp} />
			</Switch>
		</Router>
	);
}

export default withRouter(memo(App))
