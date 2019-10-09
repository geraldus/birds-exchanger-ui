import React from 'react';
export default function () {
    return (
        <div>
            <h1>Ошибка</h1>
            <h2 className="text-muted">
                Электронный адрес не подтверждён
            </h2>
            <p>
                Неверные данные для подтверждения электронной почты.
            </p>
            <hr/>
            <button>
                Выслать письмо с инструкцией повторно (не работает)
            </button>
        </div>
    );
}
