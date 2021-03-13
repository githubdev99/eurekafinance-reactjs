import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";

function Footer(props) {
    return (
        <footer className="footer text-center text-sm-left" style={{ backgroundColor: 'white' }}>
            &copy; 2021 Eureka Developer All Rights Reserved.
        </footer>
    )
}

const mapStateToProps = state => ({
    baseUrl: state.baseUrl
})

export default connect(mapStateToProps, null)(Footer);