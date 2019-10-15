import React from 'react';


export const breadcrumb: React.FC = () => {
    return (
        <div className="container-fluid my-3">
            <div className="row">
                <div className="col-11 mx-auto">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="@{fst bc}">#[snd bc]</a>
                        </li>
                        <li className="breadcrumb-item active">#[title]</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
