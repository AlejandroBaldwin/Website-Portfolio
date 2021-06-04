import menuTypes from './menuButton.types';
const { OPEN_MENU, CLOSE_MENU } = menuTypes;

const initialState = {
    menuIsOpen: false
}

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MENU:
            return {...state, menuIsOpen: true};
        case CLOSE_MENU:
            return {...state, menuIsOpen: false}
        default:
            return state;
    }
}

export default menuReducer;