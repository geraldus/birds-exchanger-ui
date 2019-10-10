import React from 'react';


export default function () {
    return (
        <div>
            <tr
                id="order-data-#{fromSqlKey orderId}"
                className="data-row"
            >
                <td
                    className="text-muted text-center"
                >
                    <small>
                        #[renderDateTimeRow l tzo (exchangeOrderCreated order)]
                    </small>
                </td>
                <td
                    className="text-center"
                >
                    <big>
                        #[renderOrderExchange order]
                    </big>
                </td>
                <td
                    className="text-center"
                >
                    <small
                        className="text-muted"
                    >
                        x#
                    \#[renderOrderRate order]&nbsp;#
                    </small>
                    <small
                        className="text-muted"
                    >
                        #[renderOrderNRatioSign order]
                    </small>
                </td>
                <td>
                    #[renderOrderRemainderExecuted l tzo order]
                </td>
                <td
                    className="controls"
                >
                    <a
                        href="#{urlRender (ClientOrderViewR orderId)}"
                    >
                        <i
                            className="control fas fa-info-circle"
                            title="#{messageRender MsgViewOrderHistory}"
                        />
                        <i
                            className="order-cancel-button control fas fa-times-circle"
                            title="#{messageRender MsgCancelOrder}"
                        />
                        <form
                            method="post"
                            action="#{urlRender ClientOrderCancelR}"
                        >
                            <input
                                type="hidden"
                                name="order-id"
                                value="#{fromSqlKey orderId}"
                            />
                        </form>
                    </a>
                </td>
            </tr>
        </div>
    )
}