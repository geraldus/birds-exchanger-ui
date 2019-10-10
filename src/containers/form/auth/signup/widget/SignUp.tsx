import React from 'react';


export default function () {
    return (
        <div>
            #[extra]
            <div
                className="form-group row"
            >
                <label
                    htmlFor="#{eid}"
                >
                    _[MsgEmailAddress]
                ^[fvInput emailV]
                </label>
            </div>
            <div 
                className="form-group row"
            >
                <label
                    htmlFor="#{pid}"
                >
                    _[MsgPassword]
                ^[fvInput passwV]
                </label>
            </div>
            <div
                className="form-group row"
            >
                <label
                    htmlFor="#{cid}"
                >
                    _[MsgPasswordConfirmation]
                ^[fvInput confiV]
                </label>
            </div>
            <div
                className="form-check"
            >
                ^[fvInput termsV]
                <label
                    className="form-check-label"
                    htmlFor="terms-check"
                >
                    <small>
                        _[MsgIAcceptTemrsOfUseText]
                    </small>
                </label>
            </div>
        </div>
    )
}
