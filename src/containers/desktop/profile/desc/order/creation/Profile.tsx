import React from 'react';


export default function () {
    return (
        <div>
            <td>#[renderAmount cents c]#</td>
            <td>
                <span>_[MsgOrderCreated]#</span>
                <span>: #</span>
                <a
                    href="@{ClientOrderViewR eid}"
                    title="_{MsgViewOrderDetails}"
                >\_[MsgOrder] ##[requestIdStr eRequest]
                </a>
            </td>
        </div>
    )
}