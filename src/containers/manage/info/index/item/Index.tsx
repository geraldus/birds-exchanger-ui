import React from 'react';


export default function () {
    return (
        <div>
            <div className="info-item" id="info-item#{fromSqlKey iid}">
                <a title="_{MsgDetails}" href="@{InfoViewR (infoAlias info)}">
                    #[infoTitle info]
                    <small className="text-muted">
                        (#[renderDateTimeRow l tzo (infoCreated info)])
                    </small>
                </a>
            </div>
        </div>
    )
}