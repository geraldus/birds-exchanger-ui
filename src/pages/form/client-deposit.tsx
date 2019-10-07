import React from 'react';
export default function () {
    return (
        <div>            
            #[extra]
            <div id="#{inCurrencyId}" className="form-group">
                <label htmlFor="#{cid}">
                    Валюта
                </label>
                ^[fvInput paymentCurrencyView]
                <div className="invalid-feedback">
                    #[errors]
                </div>
            </div>
            <div id="#{inTargetCurrencyId}" className="form-group">
                ^[fvInput targetCurrencyView]
            </div>
            <div className="form-group">
                <label htmlFor="#{tid}">
                    Способ пополнения
                </label>
                ^[fvInput transferMethodView]
                <div className="invalid-feedback">
                    #[errors]
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="#{aid}">
                    Сумма пополнения
                </label>
                ^[fvInput paymentAmountView]
                <div className="invalid-feedback">
                    #[errors]
                </div>
            </div>
        </div>
    );
}
