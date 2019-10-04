import React from 'react';
export default function () {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <p className="lead">
                            Письмо с дальнейшими инструкциями отправлено на Вашу почту <span>#email</span>.
                        </p>
                        <p>
                            Если письма нет среди входящих писем, проверьте папку <b>«Спам»</b>.
                        </p>
                        <p className="text-muted">
                            Если письмо попало в «Спам», пожалуйста, пометьте письмо как <b>«не спам»</b> и внесите наш почтовый ящик в белый список.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
