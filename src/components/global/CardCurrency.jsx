import React, { useState, useEffect } from 'react';

function CardCurrency(props) {
    const [title, set_title] = useState('')

    const handleTitle = () => {
        // let text = props.setting.title;
        // let limitLength = 0;
        // let limitText = '';

        // if (props.setting.limit == 'col-lg-3') {
        //     limitLength = (window.width() < 1400) ? 20 : 35;
        // } else {
        //     limitLength = 35;
        // }

        // if (text.length > limitLength) {
        //     limitText = props.setting.title.substr(0, limitLength) + "...";
        // } else {
        //     limitText = text;
        // }

        // return limitText
        return 'pemasukan'
    }

    useEffect(() => {
        set_title(handleTitle())
    }, [])

    return (
        <div className={`card card-${props.setting.type}`}>
            <div className={`card-header card-header-${props.setting.type}`}>
                <h4 className="card-title float-left">{title}</h4>
                <span className={`badge badge-${props.setting.type} float-right font-weight-bold`}>{props.setting.total}</span>
                <div className="clearfix" />
            </div>
            {/*end card-header*/}
            <div className="card-body">
                <small>Total :</small>
                <p className="card-text font-24">{props.setting.currency}</p>
            </div>
        </div>
    )
}

export default CardCurrency
