import React, { useState, useEffect } from 'react';
import { rupiah } from '../../helper/custom';

function CardTransaction(props) {
    return (
        <div className={`card report-card card-border-left-${props.setting.type}`}>
            <div className="card-body">
                <p className="text-dark mb-0 font-weight-semibold">{props.setting.title}</p>
                <p className="m-0 font-18 font-weight-semibold">{rupiah(props.setting.currency)}</p>
            </div>
        </div>
    )
}

export default CardTransaction
