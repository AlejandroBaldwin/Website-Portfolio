import menuTypes from './menuButton.types';

const { OPEN_MENU, CLOSE_MENU } = menuTypes;

export const openMenu = () => ({
    type: OPEN_MENU
})

export const closeMenu = () => ({
    type: CLOSE_MENU
})