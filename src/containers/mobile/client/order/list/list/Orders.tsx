import React from 'react';


export default function () {
    return (
        <div>
            <div
                className="container-fluid d-md-none order-list mobile active"
            >
                <div
                    className="row group-date"
                >
                    <div
                        className="col date text-center text-lowercase text-muted mb-2 mt-4"
                    >
                        <small>
                            #[renderDateRow locale tzo (dateFromDay d)]
                        </small>
                    </div>
                    <div
                        className="row order-list group-view client mobile"
                    >
                        ^[children g]
                    </div>
                </div>
            </div>
        </div>
    )
}