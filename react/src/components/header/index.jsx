import { Link } from "react-router-dom"
import './index.css'

const Header = () => {
    return (
        <div className="header-container">
            <h1 className="header-title">HRnet</h1>
            <div className="link-container">
                <Link to="/" className="header-link">Add Employee</Link>
                <Link to="/list" className="header-link">Employee List</Link>
            </div>
        </div>
    )
}

export default Header