import React from 'react';


export default function () {
    return (
        <div>
            <tr className="data-row">
                <td className="text-center">
                    <small>
                        #[renderDateTimeRow l tzo (exchangeOrderExecutionTime op)]
                    </small>
                </td>
                <td>
                    <small>_[MsgExchange] #</small>
                    <span>
                        <b>#[cents2dblT transfered]#</b>
                        <small className="text-muted">#[renderPairOut pair]</small>
                        <small>_[MsgOrderWasExecuted] #</small>
                    </span>
                </td>
                <td className="text-center align-middle">+#<span>
                        <b>#[cents2dblT (income - fee)]#</b>
                        <small className="text-muted">#[renderPairIn pair]</small>
                    </span>
                    <br className="d-md-none"/>
                    <small className="d-md-none">-#
                        <span>#[cents2dblT fee]
                            <small className="text-muted">#[renderPairIn pair]</small>
                        </span>
                    </small>
                </td>
                <td className="d-none d-md-table-cell text-center align-middle">-#
                    <span>#[cents2dblT fee]
                        <small className="text-muted">#[renderPairIn pair]</small>
                    </span>
                </td>
            </tr>
        </div>
    )
}