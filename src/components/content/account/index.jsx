import React, { Fragment } from 'react'
import CardCurrency from '../../global/CardCurrency'

function Account() {
    return (
        <Fragment>
            <div className="row">
                <div className="col-sm-12">
                    <div className="page-title-box">
                        <div className="row">
                            <div className="col">
                                <small className="text-muted font-14">
                                    <b>Kas &amp; Bank</b>
                                </small>
                                <h3 style={{ marginTop: 0 }}>
                                    Akun Kas
                                </h3>
                            </div>
                            {/*end col*/}
                            <div className="col-auto align-self-top">
                                <a href="#" className="btn btn-info waves-effect waves-light"><i className="fas fa-plus mr-2" />Buat Akun Baru</a>
                            </div>
                            {/*end col*/}
                        </div>
                        {/*end row*/}
                    </div>
                    {/*end page-title-box*/}
                </div>
                {/*end col*/}
            </div>

            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <CardCurrency setting={{
                        title: 'Pemasukan 30-Hari Mendatang (dalam IDR)',
                        type: 'success',
                        limit: 'col-lg-3',
                        total: 2005,
                        currency: 10000
                    }} />
                </div>
            </div>
        </Fragment>
    )
}

export default Account
