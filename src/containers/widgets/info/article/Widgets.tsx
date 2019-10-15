import React from 'react';


export default function () {
    return (
        <div>
            <div className="form-group">
                ^[titleInput]
            </div>
            <div className="form-group">
                ^[aliasInput]
            </div>
            <div className="form-group mb-3">
                <label htmlFor="#{thumbIdent'}">
                    Обложка
                </label>
                ^[thumbInput]
            </div>
            <div className="form-check mb-3">
                <input
                    id="#{featuredIdent'}"
                    name="featured"
                    className="form-check-input"
                    type="checkbox"
                />
                <label className="form-check-label" htmlFor="#{featuredIdent'}">
                    Продивигать новость
                </label>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="#{descIdent'}-editor">
                    Короткое описание
                </label>
                <div id="#{descIdent'}-editor">
                    #[preEscapedToMarkup desc]
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="#{contentIdent'}-editor">
                    Текст новости
                </label>
                <div id="#{contentIdent'}-editor">
                    #[preEscapedToMarkup content]
                </div>
            </div>
            <div className="form-group">
                <input
                    id="#{contentIdent'}-data"
                    name="content"
                    type="hidden"
                    value="#{content}"
                />
                <input
                    id="#{descIdent'}-data"
                    name="desc"
                    value="#{desc}"
                    type="hidden"
                />
            </div>
        </div>
    )
}