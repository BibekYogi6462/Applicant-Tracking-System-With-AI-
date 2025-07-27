import {Link} from "react-router";
const navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/">
        <p className="text-2xl font-bold text-gradient">MERO ATS</p>
        </Link>
        <Link to="/upload" className="primary-bottom w-fit">
        Upload Resume
        </Link>

    </nav>
  )
}

export default navbar