import React from 'react';
export default function () {
    return (
        <div>
            <div className="deposit-guide container-fluid">
                <div className="row mb-5">
                    <div className="col-12 col-md-8 mx-auto alert alert-warning" role="alert">
                        <h4 className="alert-heading">
                            _[MsgTransfer]
                            <span className="font-weight-bold">
                                #[cents2dblT cents]
                                <small>
                                    #[currSign curr]
                                </small>
                            </span>
                            #[desc]
                            <span 
                                className="font-weight-bold" 
                                style={{ wordBreak: 'break-all' }}
                            >
                                #[addr]
                            </span>
                        </h4>
                        <hr/>
                        _[MsgDepositPayerAddressPrompt]
                    </div>
                </div>
                <dl className="row justify-content-center">
                    <dt className="d-none d-md-block col-md-3 text-right">
                        _[MsgTransferMethod]
                    </dt>
                    <dt className="col-12 d-md-none text-center">
                        _[MsgTransferMethod]
                    </dt>
                    <dd className="col-12 col-md-5">
                        #[title]
                    </dd>
                </dl>
                <dl className="row justify-content-center">
                    <dt className="d-none d-md-block col-md-3 text-right">
                        _[MsgAddressee]
                    </dt>
                    <dt className="col-12 d-md-none text-center">
                        _[MsgAddressee]
                    </dt>
                    <dd className="col-12 col-md-5">
                        <div className="form-group">
                            <div className="input-group">
                                <input
                                    className="form-control"
                                    readOnly={true}
                                    value="#[addr]"
                                />
                                <div className="input-group-append">
                                    <span className="input-group-text" onClick="copyAddressAction(this)">
                                        <i className="far fa-clipboard" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </dd>
                </dl>
                <dl className="row justify-content-center">
                    <dt className="d-none d-md-block col-md-3 text-right">
                        _[MsgAmount]
                    </dt>
                    <dt className="col-12 d-md-none text-center">
                        _[MsgAmount]
                    </dt>
                    <dd className="col-12 col-md-5">
                        <div className="form-group">
                            <div className="input-group">
                                <input
                                    className="form-control"
                                    readOnly={true}
                                    value="#[cents2dblT cents]"
                                />
                                <div className="input-group-append">
                                    <span className="input-group-text">
                                        #[currSign curr]
                                    </span>
                                </div>
                            </div>
                        </div>
                    </dd>
                </dl>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 alert alert-warning" role="alert">
                        _[MsgDepositConfirmPrompt]
                    </div>
                </div>
            </div>
        </div>
    );
}
