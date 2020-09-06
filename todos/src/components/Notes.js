import React from 'react';

export const Notes = ({notes}) => {
    return (
        <ul className="list-group">
            {/* __ прохожу по всем элементам с помощью MAP__ */}
            {/* __ добавляю стиль note - чтобы отодвинуть кнопку вправо __ */}
            {notes.map(note => (
                <li 
                    className="list-group-item note"
                    key={note.id}
                >{note.title}
                {/* __ вставляю bootstrap-кнопку __ */}
                <button 
                    type="button" 
                    className="btn btn-outline-danger btn-sm"
                >
                    &times;
                </button>
                </li>
            ))}
        </ul>
    )
}