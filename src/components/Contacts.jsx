import React from 'react';

export default class Contacts extends React.Component {
    render() {
        return(
            <div id="contacts">
                <center><h2>Обратная связь</h2></center>
                <form action="#" id="form_input">
                    <label htmlFor="name">Имя: <span>*</span></label>
                    <br/>

                    <input type="text" name="name" id="name" placeholder="Введите имя"/>
                    <br/>

                    <label htmlFor="email">Email: <span>*</span></label>
                    <br/>

                    <input type="email" name="email" id="email" placeholder="Введите email"/>
                    <br/>

                    <label htmlFor="message">Ваше сообщение: <span>*</span></label>
                    <br/>

                    <textarea name="message" id="message"></textarea>
                    <br/>

                    <div id="send_msg" className="btn">Отправить</div>
                </form>
            </div>
        )
    }
}