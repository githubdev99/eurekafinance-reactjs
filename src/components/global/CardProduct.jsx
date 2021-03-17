/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { rupiah } from '../../helper/custom';

function CardProduct(props) {
    return (
        <div className="card report-card">
            <div className="card-body">
                <div className="d-flex bd-highlight">
                    <div className="flex-shrink-1 bd-highlight align-self-center">
                        <i className={`${props.setting.icon} align-self-center fa-2x mr-1 text-${props.setting.type}`} />
                    </div>
                    <div className="flex-fill bd-highlight ml-2">
                        <p className="m-0 font-18 font-weight-bold">{props.setting.total}</p>
                        <p className="text-dark mb-0 font-weight-semibold">{props.setting.title}</p>
                    </div>
                    <div className="flex-fill bd-highlight text-right">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="Lihat Laporan"><i className="far fa-file-alt" /></a>
                    </div>
                </div>
            </div>
            {/*end card-body*/}
        </div>
    )
}

export default CardProduct
