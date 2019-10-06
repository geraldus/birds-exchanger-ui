import React from 'react';
export default function () {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-xs-11 col-md-10 mx-auto">
                        ^[paymentGuide]
                    </div>
                </div>
                <div className="row">
                    <div className="col-11 col-md-8 mx-auto">
                        <form method='post' action='@[DepositConfirmRequestR]' className="mt-3">
                            <input type='hidden' name="transaction-id" value="#{fromSqlKey transactionId}"/>
                            <div className="form-group row">
                                <label htmlFor="payer-address-input">
                                    _[MsgFormPayerAddressLabel]
                                </label>
                                <input name="payer-address" className="form-control" aria-describedby="payer-address-input-help" required/>
                                <small id="payer-address-input-help" className="form-text text-muted">
                                    _[MsgFormPayerAddressHelp]
                                </small>
                            </div>
                            <div className="form-group row">
                                <button className="mx-auto btn btn-primary" type='submit'>
                                    _[MsgFormDepositConfirmSubmit]
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
