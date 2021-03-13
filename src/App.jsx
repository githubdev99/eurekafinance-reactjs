import React, { useState, useEffect, Fragment } from 'react';
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { changeTitlePage } from './actions/config';
import Sidebar from './components/sidebar/index';
import Navbar from './components/navbar/index';
import Footer from './components/footer/index';

function App(props) {
	const splitFullUrl = window.location.pathname.split('/')

	useEffect(() => {
		if (splitFullUrl[1]) {
		} else {
			props.changeTitlePage('Login')
		}
	}, [])

	return (
		<div style={{ width: '100%' }}>
			<Helmet>
				<link rel="icon" href={`${props.baseUrl}${process.env.REACT_APP_LOGO_MINI}`} />
				<link rel="apple-touch-icon" href={`${props.baseUrl}${process.env.REACT_APP_LOGO_MINI}`} />
				<title>{props.titlePage}</title>
			</Helmet>
			<Sidebar />
			<div className="page-wrapper">
				<Navbar />
				<div className="page-content" style={{ backgroundColor: '#f5f5f5' }}>
					<div className="container-fluid">
					</div>
					<Footer />
				</div>
			</div>
		</div>
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
