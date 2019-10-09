import React from 'react';


export default function () {
    return (
        <div>
            #[extra]
            ^[moneyWid]
            ^[fvInput addressView]
            <div className="form-row">
                <div className="form-group col-12 fee-stats text-muted">
                    <small>
                        <span> Сервисный сбор: </span>
                        <span className="fee val">?</span>
                        <small className="currency rur">₽</small>
                        <small className="currency pzm">PZM</small>
                        <small className="currency our">OUR</small>
                        <small>
                            <span>(</span>
                            <span
                                className="def-fee val rur percent"
                            >
                                #[renderFeeAsPct defRurWithdrawalFee]
                            </span>
                            <span
                                className="def-fee val pzm percent"
                            >
                                #[renderFeeAsPct defPzmWithdrawalFee]#
                            </span>
                            <span
                                className="def-fee val our percent"
                            >
                                #[renderFeeAsPct defOurWithdrawalFee]#
                            </span>
                            <span>%)</span>
                        </small>
                    </small>
                    <br />
                    <small>
                        <span>Итого будет удержано: </span>
                        <span className="total val">?</span>
                        <small className="currency rur">₽</small>
                        <small className="currency pzm">PZM</small>
                        <small className="currency our">OUR</small>
                    </small>
                    ^[fvInput feeHiddenView]
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-12">
                    <label htmlFor="#{tmid}">Способ получения средств</label>
                    ^[fvInput transferMethodView]
                </div>
            </div>
            <div
                id="#{adrid}-1-row"
                className="form-row tm-addr-row"
                style={{ display: 'none' }}
            >
                <div className="form-group col-12">
                    <label htmlFor="#{adrid}-1" className="rur_sber_tm">
                        Номер карты СберБанка (₽/RUR)
                    </label>
                    <label htmlFor="#{adrid}-1" className="rur_alpha_tm">
                        Номер карты Альфа Банка (₽/RUR)
                    </label>
                    <label htmlFor="#{adrid}-1" className="rur_tinkoff_tm">
                        Номер карты Тинькофф Банка (₽/RUR)
                    </label>
                    <label htmlFor="#{adrid}-1" className="rur_qiwi_tm">
                        Qiwi кошелёк (номер телефона) (₽/RUR)
                    </label>
                    <label htmlFor="#{adrid}-1" className="rur_paypal_tm">
                        Аккаунт PayPal (₽/RUR)
                    </label>
                    <label htmlFor="#{adrid}-1" className="usd_paypal_tm">
                        Аккаунт PayPal ($/USD)
                    </label>
                    <label htmlFor="#{adrid}-1" className="pzm_tm_addr">
                        Адрес Prizm кошелька (PZM Address)
                    </label>
                    <label htmlFor="#{adrid}-1" className="btc_addr_tm">
                        Адрес Bitcoin кошелька  (BTC)
                    </label>
                    <label htmlFor="#{adrid}-1" className="eth_addr_tm">
                        Адрес Etherium кошелька (ETH)
                    </label>
                    <label htmlFor="#{adrid}-1" className="our_addr_tm">
                        Адрес Ouroboros кошелька (OUR)
                    </label>
                    <input
                        id="#{adrid}-1"
                        type="text"
                        className="form-control"
                        required={true}
                    />
                </div>
            </div>
            <div
                id="#{adrid}-2-row"
                className="form-row tm-addr-row"
                style={{ display: 'none' }}
            >
                <div className="form-group col-12">
                    <label htmlFor="#{adrid}-2" className="pzm_tm_pubkey">
                        Публичный ключ Prizm кошелька (PZM Public Key)
                    </label>
                    <input
                        id="#{adrid}-2"
                        type="text"
                        className="form-control"
                        required={true}
                    />
                </div>
            </div>
        </div>
    )
}
