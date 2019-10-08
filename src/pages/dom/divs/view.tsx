import React from 'react';
export default function () {
    return (
        <div>
            <h5 
                className="text-center" 
                data-pair="#{expair}"
            >
                #[title]
            </h5>
            <div 
                className="container-fluid dom-view" 
                data-pair="#{expair}"
            >
            </div>
                <div 
                    className="header row"
                >
                    <div 
                        className="col-2"
                    >
                        _[MsgRatio]
                    </div>
                    <div 
                        className="col-4"
                    >
                        _[MsgAmount] #
                        <small 
                            className="text-muted"
                        >
                            #[currSign outc]
                        </small>
                    </div>
                    <div 
                        className="col-4"
                    >
                        _[MsgAmount] #
                        <small 
                            className="text-muted"
                        >
                            #[currSign inc]
                        </small>
                    <div 
                        className="col-2"
                    >
                        _[MsgQuantityShort]
                    </div>
                </div>
                ^[body]
            </div>
        </div>
    )
}