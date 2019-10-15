import React from 'react';


export default function () {
    return (
        <div>
            <div className="row mb-5">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link active" href="@{ManageInfoAddR}">
                            _[MsgAdd]
                        </a>
                    </li>
                </ul>
            </div>
            <div className="row">
                <div className="col">
                    <h5>
                        _[MsgNoPublicationsYet]
                    </h5>
                    <h5>
                        _[MsgInfoListTitle]
                    </h5>
                    ^[renderList list]
                </div>
            </div>
        </div>
    )
}