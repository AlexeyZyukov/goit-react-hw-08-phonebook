import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <nav>
        <NavLink
            exact
            to='/'
            activeClassName={ }>
            Home
        </NavLink>
    </nav>
)

export default Navigation