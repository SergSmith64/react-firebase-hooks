import React, {useState, useContext} from 'react';
import { AlertContext } from '../context/alert/alertContext';

export const Form = () => {

    // __ создаю локальный стейт __
    const [value, setValue] = useState('')

    const alert = useContext(AlertContext)

    const submitHandler = event => {
        event.preventDefault()

        if (value.trim()) {
            // здесь надо создавать объект
            alert.show('Заметка была создана', 'success')
            setValue('')
        } else {
            alert.show('Введите текст')
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Введите название заметки"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    )
}