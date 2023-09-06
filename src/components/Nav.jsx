import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';

function Nav() {
    return (
        <div>
            <nav> 
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="shop">Shop</Link></li>
                </ul>
            </nav>
            <div>
                <Icon path={mdiCartOutline} size={1} />
            </div>
        </div>
    )
}

export default Nav;