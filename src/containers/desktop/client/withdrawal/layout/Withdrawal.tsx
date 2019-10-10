import React from 'react';


export default function () {
    return (
        <div>
            <div
                className="row"
            >
                <div
                    className="col-10 mx-auto"
                >
                    <div
                        className="alert alert-warning"
                    >
                        <div
                            className="error"
                        >
                            #[e]
                        </div>
                    </div>
                </div>
            </div>
            <form
                id="#{formId}"
                method="post"
                encType="#{enctype}"
                action="@{WithdrawalCreateR}"
                className="col-12 col-sm-10 col-md-8 mx-auto"
            >
                ^[widget]
                <div
                    className="form-group row justify-content-center"
                >
                    <button
                        className="btn btn-lg btn-outline-primary mt-2"
                        type="submit"
                    >вывод
                    </button>
                </div>
            </form>
            ^[withdrawalHistory]
        </div>
    )
}