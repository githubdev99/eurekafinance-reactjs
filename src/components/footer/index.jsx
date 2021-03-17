import React, { useState, useEffect, memo } from 'react';

function Footer(props) {
    return (
        <footer className="footer text-center text-sm-left" style={{ backgroundColor: 'white' }}>
            &copy; {new Date().getFullYear()} Eureka Developer All Rights Reserved.
        </footer>
    )
}

export default memo(Footer);