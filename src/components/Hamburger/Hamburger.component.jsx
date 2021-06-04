import React from 'react';
import { connect } from 'react-redux';

import './Hamburger.styles.scss';

import { openMenu, closeMenu} from '../../redux/menuButton/menuButton.actions';


const Hamburger = ({ dispatchOpenMenu, dispatchCloseMenu, menuIsOpen }) => {

    const toggleHamburgerHidden = () => {
        menuIsOpen ? dispatchCloseMenu() : dispatchOpenMenu()
    }

    return (
        <section onClick={toggleHamburgerHidden} className='Hamburger-Icon' >
            <section className='Hamburger-Bar'></section>
            <section className='Hamburger-Bar'></section>
            <section className='Hamburger-Bar'></section>
        </section>
    );
};

const mapStateToProps = ({ menu: { menuIsOpen } }) => ({
    menuIsOpen: menuIsOpen
})

const mapDispatchToProps = (dispatch) => ({
    dispatchOpenMenu: () => dispatch(openMenu()),
    dispatchCloseMenu: () => dispatch(closeMenu())
})


export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);