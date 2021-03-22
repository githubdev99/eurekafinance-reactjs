import React, { useState, useEffect } from 'react';
import { rupiah, useWindowDimensions } from './../../helper/custom';

function CardCurrency(props) {
    const { height, width } = useWindowDimensions()
    const [title, settitle] = useState('')
    let isMouseEnter = false

    const mouseEnter = () => {
        isMouseEnter = true
        handleTitle()
    }

    const mouseLeave = () => {
        isMouseEnter = false
        handleTitle()
    }

    const handleTitle = () => {
        let text = props.setting.title;
        let limitLength = 0;
        let limitText = '';

        if (props.setting.limit === 'col-lg-3') {
            limitLength = (width < 1400) ? 20 : 35;
        } else {
            limitLength = (width < 1400) ? 35 : 60;
        }

        if (text.length > limitLength) {
            limitText = props.setting.title.substr(0, limitLength) + "...";
        } else {
            limitText = text;
        }

        if (isMouseEnter) {
            limitText = text;
        } else {
            if (text.length > limitLength) {
                limitText = props.setting.title.substr(0, limitLength) + "...";
            } else {
                limitText = text;
            }
        }

        settitle(limitText)
    }

    useEffect(() => {
        handleTitle()
    }, [])

    return (
        <div className={`card card-${props.setting.type}`}>
            <div className={`card-header card-header-${props.setting.type}`}>
                <h4 className="card-title float-left" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>{title}</h4>
                <span className={`badge badge-${props.setting.type} float-right font-weight-bold`}>{props.setting.total}</span>
                <div className="clearfix" />
            </div>
            {/*end card-header*/}
            <div className="card-body">
                <small>Total :</small>
                <p className="card-text font-22">{rupiah(props.setting.currency)}</p>
            </div>
        </div>
    )
}

export default CardCurrency
