import './Header.css';
import { Link } from "react-router-dom";
function Header() {
    return(
        <header>
            <h1>Travel Destination</h1>
<Link to='/' className="header-link">Home</Link>
        </header>
    )
}
export default Header