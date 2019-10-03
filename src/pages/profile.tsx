import React from 'react';
export default function () {
    return (
        <div>
            <div className="ui container">
                <ul
                    id="wallets-view"
                    className="nav nav-pills mt-3 justify-content-center"
                >
                    <li className="nav-item">
                        <a
                            id="pills-all-tab"
                            className="nav-link active"
                            href="#"
                            role="tab"
                            aria-selected="true"
                        >
                            [_MsgAll]
                        </a>
                    </li>
                    <li
                        className="nav-item #toLower (currencyCodeT (userWalletCurrency wallet))-filter"
                    >
                        <a
                            id="pills-#userWalletWalletId wallet-tab"
                            className="nav-link"
                            data-filter="#toLower (currencyCodeT (userWalletCurrency wallet))"
                            href="#"
                            role="tab"
                            aria-selected="false"
                        >
                            #currSign (userWalletCurrency wallet)
                            </a>
                    </li>
                </ul>
                <h2 className="mt-3">История движения средств</h2>
                <table
                    id="#dataTableId"
                    className="table table-striped"
                >
                    <thead />
                    <tbody>
                        ^[transactionTr op c depositOps osWithdrawal osWithdrawalCancel osWithdrawalReject exchangeOrderOps exchangeExecutionOps exchangeOrderCancellations]
                    </tbody>
                </table>
                <p className="text-muted text-center">
                    <i>_[MsgNoOperationsYet]</i>
                </p>
            </div>
        </div >
    )
}
