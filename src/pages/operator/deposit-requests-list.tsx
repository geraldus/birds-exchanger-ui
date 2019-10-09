import React from 'react';
import { NavLink } from 'react-router-dom';


export default function () {
    return (
        <div>
            <table className="request-list table table-striped">
                <thead>
                    <tr>
                        <th className="align-middle">Создана</th>
                        <th className="align-middle">
                            Сумма пополнения (-%)
                            <br />
                            <small>Cумма к начислению</small>
                        </th>
                        <th className="align-middle">
                            Метод перевода
                            <br />
                            <small>Пользователь</small>
                        </th>
                        <th className="align-middle text-center">
                            _[MsgDepositPayerAddress]
                            <br />
                            <small className="text-muted text-uppercase">
                                _[MsgDepositTransactionCode]
                            </small>
                        </th>
                        <th className="align-middle" />
                    </tr>
                </thead>
                <tbody>
                    <tr
                        className="request-data-row"
                        title="_[MsgProcessRequest]"
                        data-target="#req-modal-#{fromSqlKey reqId}"
                    >
                        <td className="text-muted">
                            <small>#[reqDateT req]</small>
                        </td>
                        <td>#[renderSums req]</td>
                        <td>#[renderMethodUser req eUser]</td>
                        <td className="text-center align-middle">
                            #[maybe depositRequestTransactionCode (depositPayerAddressJson . entityVal) mayAddr]
                            </td>
                        <td className="align-middle">
                            <i className="accept-icon fas fa-check" />
                        </td>
                    </tr>
                </tbody>
                <div
                    id="req-modal-#{fromSqlKey reqId}"
                    className="modal request-modal"
                    tabIndex={-1}
                    role="dialog"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <p className="h5 modal-title text-center">
                                    <small>
                                        Заявка ##[fromSqlKey reqId]
                                    </small>
                                </p>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form
                                method="post"
                                action="@{OperatorAcceptDepositRequestR}"
                            >
                                <div className="modal-body">
                                    <div className="form-group">
                                        <div className="input-group">
                                            <input
                                                className="form-control"
                                                readOnly={true}
                                                value="#{depositPayerAddressJson}"
                                            />
                                            <div className="input-group-append">
                                                <span
                                                    className="input-group-text"
                                                >
                                                    <i className="far fa-clipboard" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            id="#{fromSqlKey reqId}-deposit-code"
                                            className="form-control"
                                            type="hidden"
                                            readOnly={true}
                                            name="deposit-code"
                                            value="#{depositRequestTransactionCode}"
                                        />
                                        <input
                                            id="#{fromSqlKey reqId}-deposit-id"
                                            className="form-control"
                                            style={{ userSelect: 'none' }}
                                            type="hidden"
                                            readOnly={true}
                                            name="deposit-id"
                                            value="#{fromSqlKey reqId}"
                                        />
                                    </div>
                                    <div className="form-group" >
                                        <p>
                                            <small>
                                                _[MsgDepositTransactionCode]: #
                                                #[depositRequestTransactionCode]
                                            </small>
                                            <br />
                                            <small>
                                                _[MsgTransferMethod]
                                            </small>
                                            #[tmTShort depositRequestTransferMethod]
                                            <br />
                                            <small>
                                                _[MsgUser] #
                                            </small>
                                            <NavLink
                                                className="user-profile-link"
                                                target="_blank"
                                                to="/operator/user-history/#{fromSqlKey userId}"
                                            >
                                                #[userIdent]
                                            </NavLink>
                                        </p>
                                    </div>
                                    <div className="form-group">
                                        <label
                                            htmlFor="#{fromSqlKey reqId}-deposit-amount"
                                        >
                                            Полученная сумма (#[currSign depositRequestCurrency])
                                            <small className="text-muted">
                                                уточните сумму, полученную в переводе
                                            </small>
                                        </label>
                                        <input
                                            id="#{fromSqlKey reqId}-deposit-amount"
                                            className="deposit-amount-input form-control form-control-lg text-center"
                                            type="number"
                                            step="0.01"
                                            min="0.01"
                                            name="deposit-real-income"
                                            placeholder="0.00"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            className="request-fee-val"
                                            type="hidden"
                                            value="#{renderReqFeeAsDbl req}"
                                        />
                                        <p
                                            className="h5 text-center text-muted"
                                        >
                                            _[MsgDepositRequestAcceptFormStatsTitle]
                                        </p>
                                        <p className="h5">
                                            <small>
                                                _[MsgActualCalculation]
                                            </small>
                                        </p>
                                        <p className="actual text-muted">
                                            <span>
                                                (#
                                            </span>
                                            <span className="income-val">
                                                -
                                            </span>
                                            <span className="income-cur">
                                                <small>
                                                    #[currSign depositRequestCurrency]
                                                </small>
                                            </span>
                                            <span> - </span>
                                            <span className="fee-val">-</span>
                                            <span className="fee-cur">
                                                <small>
                                                    #[currSign depositRequestCurrency]
                                                </small>
                                            </span>
                                            <span>) </span>
                                            <small>
                                                x
                                                <span className="ratio-val">
                                                    #[renderRequestRatio req]
                                                </span>
                                            </small>
                                            <span> = </span>
                                            <span className="total-val">-</span>
                                            <span className="total-cur">
                                                <small>
                                                    #[currSign depositRequestTargetCurrency]
                                                </small>
                                            </span>
                                        </p>
                                        <p className="text-muted">
                                            <small>Комиссия: </small>
                                            <span className="fee-percent-val">
                                                #[renderReqFeeAsPct req]#
                                                <small>%</small>
                                            </span>
                                        </p>
                                        <p className="h5">
                                            <small>
                                                _[MsgExpectedCalculation]
                                            </small>
                                        </p>
                                        <p className="expected text-muted">
                                            <span> (</span>
                                            <span className="income-val">
                                                #[cents2dblT depositRequestCentsAmount]#
                                            </span>
                                            <span className="income-cur">
                                                <small>
                                                    #[currSign depositRequestCurrency]
                                                </small>
                                            </span>
                                            <span> - </span>
                                            <span className="fee-val">
                                                #[cents2dblT depositRequestExpectedFeeCents]#
                                            </span>
                                            <span className="fee-cur">
                                                <small>
                                                    #[currSign depositRequestCurrency]
                                                </small>
                                            </span>
                                            <span>) </span>
                                            <small>
                                                x
                                                <span className="ratio-val">
                                                    #[renderRequestRatio req]
                                                </span>
                                            </small>
                                            <span> = </span>
                                            <span className="total-val">
                                                #[renderRequestExpectedTotal req]#
                                            </span>
                                            <span className="total-cur">
                                                <small>
                                                    #[currSign depositRequestTargetCurrency]
                                                </small>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <div className="container-fluid">
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
                                                _[MsgExecute]
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
                    action="@{OperatorDeclineDepositRequestR}"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                _[MsgDeclineReason]
                            </div>
                            <div className="modal-body">
                                <input
                                    type="hidden"
                                    name="request-id"
                                    value=""
                                />
                                <div className="form-group">
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
                                <div className="container-fluid">
                                    <div className="row justify-content-around">
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
        </div >
    )
}
