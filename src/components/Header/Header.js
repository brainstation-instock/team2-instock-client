import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/logo/InStock-Logo.svg';

function Header({isWarehouse}){
    
    return(
        <header>
            <nav className='nav'>
                <Link className='nav__logo' to={'/'}>
                    <img src={logo} alt="instock logo" />
                </Link>
                <ul className='nav__list'>
                    <li className='nav__item'>
                        <Link className={`nav__link ${isWarehouse ? 'nav__link--selected' : ''}`} to={'/'}>
                            Warehouses
                        </Link>
                    </li>
                    <li className='nav__item'>
                        <Link className={`nav__link ${isWarehouse ? '' : 'nav__link--selected'}`} to={'/inventories'}>
                            Inventory
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;