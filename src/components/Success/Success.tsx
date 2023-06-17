import React from 'react'
import SUCCESS from '../../assets/check.png';
import {IProps} from "../../types";

const Success: React.FC<IProps> = ({count}) => {
    return (
        <div className="success-block">
            <img src={SUCCESS} alt="Success"/>
            <h3>Успешно!</h3>
            <p>Всем {count} пользователям отправлено приглашение.</p>
            <button onClick={() => window.location.reload()} className="send-invite-btn">Назад</button>
        </div>
    )
}

export default Success
