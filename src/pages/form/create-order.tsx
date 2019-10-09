import React from 'react';


export default function () {
    return (
        <div>
            <div
                id="#{wrapid}"
                className="action-take"
            >
                #[extra]
                ^[fvInput hiddenPairView]
                ^[fvInput hiddenFeeView]
                <div
                    className="form-group row justify-content-center no-gutters"
                >
                    <div className="col-8 col-sm-7 col-md-3 col-lg-2 mx-1">
                        ^[fvInput actionView]
                    </div>
                    <div
                        className="input-group col-8 col-sm-7 col-md-4 col-lg-2 mx-1 mt-3 mt-md-0"
                    >
                        ^[fvInput amountView]
                        <div className="input-group-append">
                            <span
                                className="input-group-text"
                                id="#{wrapid}-out-currency-append"
                            >
                                #[currSign currencyOut]
                            </span>
                        </div>
                    </div>
                    <div
                        className="input-group col-8 col-sm-7 col-md-3 col-lg-2 mx-1 mt-3 mt-md-0"
                    >
                        ^[fvInput ratioView]
                        <div className="input-group-append">
                            <span
                                className="input-group-text"
                                id="#{wrapid}-rate-append"
                            >
                                #[currSign currencyIn]/#[currSign currencyOut]
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center order-form-stats">
                    <table
                        className="col-11 col-sm-6 table table-borderless text-white-50"
                    >
                        <thead>
                            <tr>
                                <td className="text-right #{sumid}-take">
                                    ПОЛУЧАЮ
                                </td>
                                <td className="text-right #{sumid}-give">
                                    ОТДАЮ
                                </td>
                                <td>КОМИССИЯ</td>
                                <th className="text-left">ИТОГО</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr id="#{sumid}-info-row">
                                <td id="#{sumid}-tbl" className="text-right">
                                    <span className="val">-</span>
                                    &nbsp;
                                    <span
                                        id="#{wrapid}-in-currency-sum"
                                        className="cur-sign"
                                    >
                                        #[currSign currencyIn]
                                    </span>
                                </td>
                                <td id="#{feeid}-tbl">
                                    <span className="val take">-</span>
                                    <span className="val give">-</span>
                                    &nbsp;
                                    <span
                                        id="#{wrapid}-out-currency-fee"
                                        className="cur-sign-give"
                                    >
                                        #[currSign currencyOut]
                                    </span>
                                    <span
                                        id="#{wrapid}-in-currency-fee"
                                        className="cur-sign-take"
                                    >
                                        #[currSign currencyIn]
                                    </span>
                                </td>
                                <th
                                    id="#{sumid}-total-tbl"
                                    className="text-left text-warning font-weight-bold"
                                >
                                    <span className="val take">-</span>
                                    <span className="val give">-</span>
                                    &nbsp;
                                    <span
                                        className="cur-sign-give"
                                        id="#{wrapid}-out-currency-total"
                                    >
                                        #[currSign currencyOut]
                                    </span>
                                    <span
                                        className="cur-sign-take"
                                        id="#{wrapid}-in-currency-total"
                                    >
                                        #[currSign currencyIn]
                                    </span>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
