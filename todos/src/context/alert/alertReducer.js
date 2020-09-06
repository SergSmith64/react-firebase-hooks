import { SHOW_ALERT, HIDE_ALERT } from "../types"

const handlers = {
    [SHOW_ALERT]: (state, {payload}) => ({...payload, visible: true}),
    [HIDE_ALERT]: state => ({...state, visible: false}),
    // __ здесь ключами будут action-types
    // __ дефолтный кейз который принимает стейт и его же и возвращает
    DEFAULT: state => state
}

export const alertReducer = (state, action) => {
    // __ reducer - это функция, которая проверяет actionType и __
    // __ в зависимости от actionType возвращает __
    // __ измененный STATE __
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}