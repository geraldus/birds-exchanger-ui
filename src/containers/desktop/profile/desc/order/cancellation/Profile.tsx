import React from 'react';


export default function () {
    return (
        <div>
            <td>
                #[renderAmount cents c]#
            </td>
            <td>
                <span>
                    _[MsgOrderCancellation]#
                </span>
                <span>
                    : #
                </span>
                <a
                    href="@{ClientOrderViewR (exchangeOrderCancellationOrderId ec)}"
                    title="_{MsgViewOrderDetails}"
                >
                    \_[MsgOrder] ##[requestIdStr eRequest]
                </a>
            </td>
        </div>
    )
}