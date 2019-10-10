import React from 'react';


export default function () {
    return (
        <div>
            <td>
            #[renderAmount cents c]#
            </td>
            <td>
                <span>
                    _[MsgOrderExecution]#
                </span>
                <span>
                    : #
                </span>
                <a
                    href="@{ClientOrderViewR (exchangeOrderExecutionOrderId e)}"
                    title="_{MsgViewOrderDetails}"
                >
                    \_[MsgOrder] ##[requestIdStr eRequest]
                </a>
            </td>
        </div>
    )
}