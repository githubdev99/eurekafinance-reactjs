import React, { useState, useEffect, Fragment } from 'react';
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { changeTitlePage } from './redux/actions/config';
import Sidebar from './components/sidebar/index';
import Navbar from './components/navbar/index';
import Footer from './components/footer/index';
import { BrowserRouter as Router } from "react-router-dom";
import PrivateRoute from './routes/private/PrivateRoute';
import ListPrivateRoute from './routes/private';
import PublicRoute from './routes/public/PublicRoute';
import ListPublicRoute from './routes/public';

function App(props) {
	const [auth, set_auth] = useState(false)
	const splitFullUrl = window.location.pathname.split('/')

	useEffect(() => {
		if (splitFullUrl[1] === 'dashboard') {
			props.changeTitlePage('Dashboard')
		} else if (splitFullUrl[1] === 'report') {
			props.changeTitlePage('Laporan')
		} else if (splitFullUrl[1] === 'account') {
			if (splitFullUrl[2] === 'chart') {
				props.changeTitlePage('Daftar Akun')
			} else {
				props.changeTitlePage('Kas & Bank')
			}
		} else if (splitFullUrl[1] === 'expense') {
			props.changeTitlePage('Biaya')
		} else if (splitFullUrl[1] === 'contact') {
			props.changeTitlePage('Kontak')
		} else if (splitFullUrl[1] === 'product') {
			props.changeTitlePage('Produk')
		} else if (splitFullUrl[1] === 'asset') {
			props.changeTitlePage('Pengaturan Aset')
		} else if (splitFullUrl[1] === 'setting') {
			props.changeTitlePage('Pengaturan')
		} else {
			props.changeTitlePage('Login')
		}
	}, [])

	return (
		<Router>
			<Helmet>
				<link rel="icon" href={`${props.baseUrl}${process.env.REACT_APP_LOGO_MINI}`} />
				<link rel="apple-touch-icon" href={`${props.baseUrl}${process.env.REACT_APP_LOGO_MINI}`} />
				<title>{props.titlePage}</title>
			</Helmet>
			<PublicRoute auth={auth} component={<ListPublicRoute />} />
			<PrivateRoute auth={auth} component={(
				<Fragment>
					<Sidebar splitFullUrl={splitFullUrl} />
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
			)} />
		</Router>
	);
}

const mapStateToProps = state => ({
	titlePage: state.titlePage,
	baseUrl: state.baseUrl
})

const mapDispatchToProps = {
	changeTitlePage: changeTitlePage
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
