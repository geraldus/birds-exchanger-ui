import React from 'react';
export default function () {
    return (
        <div>
            <div 
                className="row clickable-order"
                style={{}}
            >
                <div
                    className="col-2 ratio"
                >
                    #[cents2dblT $ round (r * 100)]
                </div>
                <div
                    className="col-4 amount-left"
                >
                    #[cents2dblT outCents]
                </div>
                <div 
                    className="col-4 expected"
                >
                    #[cents2dblT inCents]
                </div>
                <div
                    className="col-2 depth"
                >
                    #[show count]
                </div>
            </div>
        </div>
    );
}
