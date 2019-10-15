import React from 'react';


export default function () {
    return (
        <div>
            <div
                id="featured-modal"
                className="modal fade"
                tabIndex={-1}
                role="dialog"
                data-newsid="#{fromSqlKey iid}"
            >
                <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                >
                    <div
                        className="modal-content text-white"
                        style={ { backgroundColor: '#0e0e0e' } }
                    >
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <img
                                        style={ { maxWidth: '100%' } }
                                        src="#{thumb}"
                                        alt="Иконка новости"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 mx-auto py-3">#[preEscapedToMarkup desc]
                                <div
                                    style={ { float: 'left', cursor: 'pointer', userSelect: 'none' } }
                                >
                                    <span className="checkmark">✓</span>
                                    <span
                                        id="#{wrapId}-remember-trigger"
                                        className="text-muted"
                                    >
                                        _[MsgDoNotShowAgain]
                                    </span>
                                <div style={{ float: 'right' }}>
                                    <a href="@{InfoViewR (infoAlias info)}">_[MsgReadMore]</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
