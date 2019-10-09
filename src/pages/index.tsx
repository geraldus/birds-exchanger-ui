import React, { SyntheticEvent } from 'react';
import homeLead from '@/assets/logo/logo-home-lead.png';
import styles from './index.css';
import { NavTab } from '@/containers/form/exchange/bootstrap/menu/item';
import { formatMessage } from 'umi-plugin-locale';


export const currencyLabel = (c: string) => {
    switch (true) {
        case c.toLowerCase() == 'rub' || c.toLowerCase() == 'rur':
            return '₽'
            break
        case c.toLowerCase() == 'pzm':
            return 'Prizm'
            break
        case c.toLowerCase() == 'our' || c.toLowerCase() == 'ouro':
            return 'Ouroboros'
            break
        default:
            return c.toUpperCase()
    }
}

export default function () {
    const cancelDefault = (e: SyntheticEvent) => {
        e.preventDefault()
    }
    const menuItemList = [
        {
            from: 'pzm',
            to: 'rub',
            label: 'PZM / ₽'
        },
        {
            from: 'our',
            to: 'pzm',
            label: 'OUR / PZM'
        },
        {
            from: 'our',
            to: 'rub',
            label: 'OUR / ₽',
            active: true
        },
    ]
    const menuItems = menuItemList.map(props => {
        const { from, to, active, label } = props
        const id = `${from}-${to}-pair`
        const title = formatMessage({ id: 'exchange' }, {
            from: currencyLabel(from),
            to: currencyLabel(to)
        })
        return (
            <NavTab
                key={id}
                id={id}
                className={[from, to].join(' ')}
                title={title}
                active={active}
                onClick={cancelDefault}
            >
                {label}
            </NavTab>
        )
    })
    return (
        <div className={`${styles.masthead} pt-5`}>
            <div className="container mt-2">
                <div className="row">
                    <div id="mainlogo" className="col-8 col-sm-6 mx-auto my-2">
                        <img
                            id="main-promo"
                            className="mw-100"
                            src={homeLead}
                            alt="OutBirds | Site Logo"
                        />
                    </div>
                    <div className="container mt-3">
                        <div className="alert alert-warning" id="message">
                            #[msg]
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-8 mx-auto">
                            <ul className="nav nav-tabs justify-content-center">
                                {menuItems}
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <form method="post" action="@{ExchangeOrderCreateR}">
                                ^[orderCreateFormW]
                                <button
                                    className="
                                        btn
                                        btn-outline-warning
                                        btn-lg
                                        text-lowercase
                                        mb-3"
                                    type="submit"
                                >
                                    _[MsgCreateRequest]
                                </button>
                                <div className="text-muted mb-3">
                                    <small>авторизуйтесь для обмена</small>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-8 mx-auto">
                        <div>
                            <p className="text-center text-muted">_[MsgScheduleDesc]</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    ^[clickableOrderW modalWrapId]
                    <div className="col-12 col-lg-6 mb-3 order-col">
                        ^[renderDomTable ExchangePzmRur False (paramsPair /= defPairDir
                        ExchangePzmRur) statsDOM]
                        ^[renderDomTable ExchangeOurPzm False (paramsPair
                        /= defPairDir ExchangeOurPzm) statsDOM]
                        ^[renderDomTable ExchangeOurRur
                        False (paramsPair /= defPairDir ExchangeOurRur) statsDOM]
                    </div>
                    <div className="col-12 col-lg-6 mb-3 order-col">
                        ^[renderDomTable ExchangePzmRur True (paramsPair /= defPairDir
                        ExchangePzmRur) statsDOM]
                        ^[renderDomTable ExchangeOurPzm True (paramsPair
                        /= defPairDir ExchangeOurPzm) statsDOM]
                        ^[renderDomTable ExchangeOurRur True
                        (paramsPair /= defPairDir ExchangeOurRur) statsDOM]
                    </div>
                </div>
                <div className="row">
                    <div className="col mx-auto">
                        <div>
                            <p className="text-center text-muted">
                                _[MsgOperationExchangeShort]&nbsp;#[renderFeeAsPct
                                defaultExchangeFee]%
                                <br />
                                _[MsgOperationWithdrawShort]&nbsp;#[currencyCodeT
                                rurC]&nbsp;#[renderFeeAsPct defRurWithdrawalFee]%# \&nbsp;|&nbsp;#
                                \_[MsgOperationDepositShort]&nbsp;#[currencyCodeT
                                rurC]&nbsp;#[renderFeeAsPct defRurDepositFee]%
                                <br />
                                _[MsgOperationWithdrawShort]&nbsp;#[currencyCodeT
                                pzmC]&nbsp;#[renderFeeAsPct defPzmWithdrawalFee]%# \&nbsp;|&nbsp;#
                                \_[MsgOperationDepositShort]&nbsp;#[currencyCodeT
                                pzmC]&nbsp;#[renderFeeAsPct defPzmDepositFee]%
                                <br />
                                _[MsgOperationWithdrawShort]&nbsp;#[currencyCodeT
                                ourC]&nbsp;#[renderFeeAsPct defOurWithdrawalFee]%# \&nbsp;|&nbsp;#
                                \_[MsgOperationDepositShort]&nbsp;#[currencyCodeT
                                ourC]&nbsp;#[renderFeeAsPct defOurDepositFee]%
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="clickable-order-modal" className="modal fade" tabIndex={-1} role="dialog">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form
                                method="post"
                                action="@{ExchangeOrderCreateR}"
                                className="container-fluid"
                            >
                                <div className="row">
                                    <div className="col text-center">
                                        <p className="title h5">_[MsgExchange]</p>
                                    </div>
                                </div>
                                ^[modalOrderCreateFormW]
                                <div className="row">
                                    <button
                                        className="btn btn-outline-warning btn-lg text-lowercase mx-auto"
                                        type="submit"
                                    >
                                        _[MsgOneClickExchange]
                                    </button>
                                </div>
                                <div className="text-muted mx-auto">
                                    <small>авторизуйтесь для обмена</small>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
