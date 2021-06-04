import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
//Components
import Hamburger from '../Hamburger/Hamburger.component';
import { HashLink as Link } from 'react-router-hash-link';

import { closeMenu } from '../../redux/menuButton/menuButton.actions';

import './NavBar.styles.scss';

const NavBar = ({ match: { path }, dispatchCloseMenu, dispatchOpenMenu, menuIsOpen }) => {    

    return (
        <section id='navbar' className={`NavBar ${menuIsOpen ? 'open' : 'close'}`} >
                <Link to='#Hero' ><p  className={`NavBar__Logo`} onClick={dispatchCloseMenu} >Alejandro S Baldwin</p></Link>
                <Hamburger />
                <ul className={`NavBar__Links`} >
                    <li id='id' onClick={dispatchCloseMenu} className='NavBar__Links__Link' ><Link to={`${path}#Portfolio`} >Portfolio</Link></li>                       <li id='id' onClick={dispatchCloseMenu} className='NavBar__Links__Link' ><Link to={`${path}#AboutUs`} >About</Link></li>
                    <li id='id' onClick={dispatchCloseMenu} className='NavBar__Links__Link' ><Link to={`${path}#Skills`} >Skills</Link></li>

                    <li id='id' onClick={dispatchCloseMenu} className='NavBar__Links__Link' ><Link to={`${path}#Contact`} >Contact</Link></li>
                </ul>
            
        </section>
    );
};
 const mapStateToProps = ({ menu: { menuIsOpen } }) => ({
     menuIsOpen: menuIsOpen
 })

const mapDispatchToProps = dispatch => ({
    dispatchCloseMenu: () => dispatch(closeMenu())
})

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
  )(NavBar);