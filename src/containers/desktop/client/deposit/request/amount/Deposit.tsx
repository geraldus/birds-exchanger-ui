import React from 'react';


export default function () {
    return (
        <div>
            <big>
                <s>#[ac]#</s>
                <b>#[ac]#</b>
                <small className="text-muted">#[currSign c]</small>
            </big>
            <br/>
            <small className="text-muted">#[sign]#[cents2dblT f]#
                <small>#[currSign c] ^[d]</small>
            </small>
        </div>
    )
}