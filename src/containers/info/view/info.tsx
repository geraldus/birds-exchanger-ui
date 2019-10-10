import React from 'react';


export default function () {
    return (
        <div>
            <form 
                method="post"
                action="@{ManageInfoUpdateR}"
            >
                Дата создания:<br/>
                ^[dateRow l tzo (infoCreated info)]
                <input
                    type="hidden"
                    name="info-id"
                    value="#{fromSqlKey infoId}"
                />
                ^[form]
                <button
                    id="save-button"
                    className="btn btn-outline-primary mt-2"
                >
                    _[MsgSave]
                </button>
            </form>
            <div
                id="#{titleIdent}"
            >
                <h1>
                    #[infoTitle info]
                ^[dateRow l tzo (infoCreated info)]
                </h1>
            </div>
            <div
                id="#{thumbIdent}"
                className="info-thumb text-center mb-5"
            >
                <img
                    src="#{t}"
                    alt="Обложка"
                    style={ { maxWidth: '100%' } }
                />
            </div>
            <div
                id="#{contentIdent}"
                className="info-content"
            >
                #[preEscapedToMarkup (infoContentHtml info)]
            </div>
        </div>
    )
}
