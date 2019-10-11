import React from 'react';


export default function () {
    return (
        <div>
            <tr
                className="data-row"
                id="data-row-#{fromSqlKey ident}"
            >
                <td>^[dateTimeRowW withdrawalRequestCreated\</td>
                <td className="align-middle">
                    <s>^[valueW]</s>          
                    <b>^[valueW]</b>
                    <span>^[valueW]</span>
                    <br/>
                    <small className="text-muted">
                        _[transferMethodMsg withdrawalRequestMethod]
                    </small>
                </td>
                <td className="align-middle">^[expected]</td>
                <td className="align-middle">^[status]</td>
                <td className="controls align-middle">
                    <i
                        className="request-cancel-button control fas fa-times-circle"
                        title="_{MsgCancelRequest}"
                    />
                    <form
                        className="request-cancel-form d-none"
                        method="post"
                        action="@{ClientCancelWithdrawalR}"
                    >
                        <input
                            type="hidden"
                            name="request-id"
                            value="#{fromSqlKey ident}"
                        />
                    </form>
                </td>
            </tr>
        </div>
    )
}