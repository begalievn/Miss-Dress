import React, { useState } from 'react';
import Logo from '../../components/logo/Logo';
import style from "./ModalRegistration.module.scss";

const ModalRegistration = () => {
    const [validation, setValidation] = useState(true)
    return (
            <div className={style.back}>
        <div className={style.container}>
            <div className={style.hero}>
             <Logo />
            </div>

            {validation ? (
                <div className={style.text}> 
                <h2>Регистрация</h2>
                <input type="text" placeholder='Имя' />
                <input type="text" placeholder='Фамилия' />
                <input type="text" placeholder='Номер телефона' />
                <div className={style.validation_text} >
                    <input type="checkbox" name="" id="" />
                    <div>Я согласен с условиями публичной оферты</div>
                    </div>
                
                <button onClick={()=>setValidation(!validation)}>Продолжить</button>
                </div>
            ): (
            <div className={style.text} >
                <h2>Регистрация</h2>
                <input type="text" placeholder='Введите код подтверждения' />
                <button >Подтвердить</button>
                <div className={style.text_sms} >Не пришло SMS?</div>
                <button>Отправить снова</button>
            </div>)}
        </div>
        </div>
    );
};

export default ModalRegistration;