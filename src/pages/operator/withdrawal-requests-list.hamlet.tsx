import React from 'react';
export default function () {
    return (
        <div>
            <table
                className="request-list table table-striped"
            >
                <thead>
                    <tr>
                        <th
                            className="align-top"
                        >
                            Создана
                        </th>
                        <th
                            className="align-top"
                        >
                            <span>
                                Сумма к выводу
                            </span>
                            <br/>
                            <small>
                                Пользователь
                            </small>
                        </th>
                        <th
                            className="align-top"
                        >
                            <span>
                                Адрес получателя
                            </span>
                            <br/>
                            <small>
                                Способ перевода
                            </small>
                        </th>
                        <th
                            className="align-top"
                        />
                    </tr>
                </thead>
                <tbody>
                    <tr
                        className="request-data-row"
                        title="_{MsgProcessRequest}"
                        data-target="#req-modal-#{fromSqlKey reqId}"
                    >
                        <td
                            className="text-muted"
                        >
                            <small>
                                #[reqDateT req]
                            </small>
                        </td>
                        <td>
                            <b>
                                #[cents2dblT withdrawalRequestCentsAmount]
                                &nbsp;#[currSign userWalletCurrency]
                            </b>
                            <br/>
                            <small>
                                <a
                                    className="user-profile-link"
                                    target="_blank"
                                    href="/operator/user-history/#{fromSqlKey userId}"
                                    title="Информация о пользователе"
                                >
                                    #[userIdent]
                                </a>
                            </small>
                        </td>
                        <td>
                            <small>
                                #[tmTShort withdrawalRequestMethod]
                            </small>
                            <br/>
                            <span>
                                #[renderAddress withdrawalRequestAddressee]
                            </span>
                        </td>
                        <td
                            className="align-middle"
                        />
                    </tr>
                    <i
                        className="accept-icon fas fa-check"
                    />
                </tbody>
                <div
                    id="req-modal-#{fromSqlKey reqId}"
                    className="modal request-modal withdrawal-modal"
                    tabIndex={-1}
                    role="dialog"
                >
                    <div
                        className="modal-dialog modal-lg"
                        role="document"
                    >
                        <div
                            className="modal-content"
                        >
                            <div
                                className="modal-header"
                            >
                                <p 
                                    className="h5 modal-title text-center"
                                >
                                    <small>
                                        Заявка ##
                                        [fromSqlKey reqId]
                                    </small>
                                </p>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span
                                        aria-hidden="true"
                                    >
                                        &times;
                                    </span>
                                </button>
                            </div>
                            <form
                                method="post"
                                action="@{OperatorAcceptWithdrawalRequestR}"
                            >
                                <div
                                    className="modal-body"
                                >
                                    <div
                                        className="form-group"
                                    >
                                        <p
                                            className="h4 text-center"
                                        >
                                            АДРЕС ПОЛУЧАТЕЛЯ
                                        </p>
                                        <div
                                            className="alert alert-warning py-1"
                                        >
                                            <p
                                                className="text-center mt-3"
                                            >
                                                #[tmTShort withdrawalRequestMethod]
                                            </p>
                                            <p
                                                className="h3 text-monospace_ text-center"
                                            >
                                                #[renderReqAddress w r]
                                            </p>
                                        </div>
                                    </div>
                                    <p
                                        className="lead text-center"
                                    >
                                        Переведите #
                                        <big>
                                            #[cents2dblT (reqTransferAmount w r)]#
                                            <small>
                                                #[currSign userWalletCurrency]
                                            </small>
                                        </big>
                                    </p>
                                    <p>
                                        <small>
                                            _[MsgUser] #
                                            <a
                                                className="user-profile-link"
                                                target="_blank"
                                                href="/operator/user-history/#{fromSqlKey userId}"
                                            >
                                                #[userIdent]
                                            </a>
                                        </small>
                                        <br/>
                                        <small>
                                            <span>
                                                Удержано средств: #
                                            </span>
                                        </small>
                                        <span>
                                            #[cents2dblT withdrawalRequestFrozenAmount]#
                                            <small>
                                                #[currSign userWalletCurrency]#
                                            </small>
                                        </span>
                                        <br/>
                                        <small>
                                                <span>
                                                    Комиссия на текущий момент:
                                                    #[renderWalletCurrentFee w]%
                                                </span>
                                        </small>
                                        <span>
                                            = #[renderReqFee w r]
                                            <small>
                                                #[currSign userWalletCurrency]#
                                            </small>
                                        </span>
                                    </p>
                                    <input
                                        id="#{fromSqlKey reqId}-withdrawal-id"
                                        type="hidden"
                                        name="withdrawal-id"
                                        value="#{fromSqlKey reqId}"
                                    >
                                    </input>
                                    <input
                                        id="#{fromSqlKey reqId}-withdrawal-fee"
                                        type="hidden"
                                        name="withdrawal-fee"
                                        value="#{show (withdrawalRequestFrozenAmount - reqTransferAmount w r)}"
                                    >
                                    </input>
                                    <input
                                        id="#{fromSqlKey reqId}-withdrawal-transfered"
                                        type="hidden"
                                        name="withdrawal-transfered"
                                        value="#{show (reqTransferAmount w r)}"
                                    >
                                    </input>
                                </div>
                                <div
                                    className="modal-footer"
                                >
                                    <div
                                        className="container-fluid"
                                    >
                                        <div
                                            className="row justify-content-around"
                                        >
                                            <button
                                                data-request-id="#{fromSqlKey reqId}"
                                                className="cancel-request-btn btn btn-lg btn-outline-danger"
                                            >
                                                _[MsgDeclineRequest]
                                            </button>
                                            <button
                                                type="submit"
                                                className="btn btn-lg btn-primary"
                                            >
                                                _[MsgWithdrawalExecuted]
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </table>
            <div
                id="decline-request-modal"
                className="modal"
                tabIndex={-1}
                role="dialog"
            >
                <form
                    id="decline-request-form"
                    method="post"
                    action="@{OperatorDeclineWithdrawalRequestR}"
                >
                    <div
                        className="modal-dialog"
                        role="document"
                    >
                        <div
                            className="modal-content"
                        >
                            <div
                                className="modal-header"
                            >
                                _[MsgDeclineReason]
                            </div>
                            <div
                                className="modal-body"
                            >
                                <input
                                    type="hidden"
                                    name="request-id"
                                    value=""
                                />
                                <div
                                    className="form-group"
                                >
                                    <textarea
                                        required={true}
                                        className="form-control"
                                        name="reason"
                                    />
                                </div>
                            </div>
                            <div
                                className="modal-footer justify-content-center"
                            >
                                <div
                                    className="container-fluid"
                                >
                                    <div
                                        className="row justify-content-around"
                                    >
                                        <button
                                            id="close-decline-modal-btn"
                                            className="btn btn-lg btn-outline-primary"
                                        >
                                            _[MsgCancel]
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn btn-lg btn-primary"
                                        >
                                            _[MsgDeclineRequest]
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
