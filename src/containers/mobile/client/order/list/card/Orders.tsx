import React from 'react';


export default function () {
    return (
        <div>
            <div
                className="order-card mobile container-fluid my-1"
                data-order="#{fromSqlKey oid}"
            >
                <div className="row">
                    <div className="col-3 text-right">
                        <small>#[dbl2MoneyT exchangeOrderNormalizedRatio]</small>
                    </div>
                    <div className="col-5 text-right">
                        <a href="@{ClientOrderViewR oid}">
                            <small>#[cents2dblT exchangeOrderAmountCents]
                                <small className="text-muted">#[currSign outCurrency]</small>
                            </small>
                        </a>
                    </div>
                    <div className="col-4 text-right">
                        <a href="@{ClientOrderViewR oid}">
                            <small>#[cents2dblT inAmountCents]&nbsp;#
                                <small className="text-muted">#[currSign inCurrency]</small>
                            </small>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}