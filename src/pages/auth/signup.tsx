import React from 'react';
export default function () {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-8 mx-auto">
                        <div className="alert alert-warning">
                            <h5>Неверные регистрационные данные</h5>
                            #[error]
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11 col-md-6 mx-auto">
                        <form  
                            method="post" 
                            action="@SignUpR"
                            enctype="#enctype"
                        >
                            ^[widget]
                            <div className="form-group row mt-3">
                                <button 
                                    className="btn btn-outline-primary btn-lg  mx-auto" 
                                    type="submit"
                                >
                                    Регистрация
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
