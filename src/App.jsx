import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { changeTitlePage } from './actions/config';
import Sidebar from './components/sidebar/index';
import Navbar from './components/navbar/index';
import Footer from './components/footer/index';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes';
function App(props) {
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
			<Sidebar splitFullUrl={splitFullUrl} />
			<div className="page-wrapper">
				<Navbar />
				<div className="page-content" style={{ backgroundColor: '#f5f5f5' }}>
					<div className="container-fluid">
						<Routes />
					</div>
					<Footer />
				</div>
			</div>
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
