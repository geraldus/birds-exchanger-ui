import React from 'react';


export default function () {
    return (
        <div>
            <td>#[renderAmount cents c]</td>
            <td>
                <span>_[MsgBalanceDeposit]#</span>
                <span>: #</span>
                <a
                    href="@{DepositR}/#data-row-#{requestIdStr eRequest}"
                    title="_{MsgViewRequestDetails}"
                >\_[MsgRequest] ##[requestIdStr eRequest]
                </a>
            </td>
        </div>
    )
}