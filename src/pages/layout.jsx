import { Outlet, Link } from "react-router-dom";
import img1 from "../img/Movie.png"
import img2 from "../img/Shape.png"
import img3 from "../img/nav_i_2.png"
import img4 from "../img/nav_i_tv.png"
import ColorContainer from "../components/ColorContainer";
import { useThemeContext } from "../hooks/useThemeContext";

const Layout = () => {
  const { color } = useThemeContext()

  return (
    <div className="container font-azerat ">
      <nav className="navbar-list mt-5 " style={{ backgroundColor: color }} >
        <ul className="list-item  grid-cols-3 md:grid-cols-4 lg:grid-cols-6 align-element" >
          <li className="ml-5 mt-5 ">
            <Link to="/"><img className=" ml-10" src={img1} alt="" /></Link>
          </li>
          <div className=" flex gap-5  justify-center items-center mr-5">
            <li className="ml-5">
              <Link to="/blogs"><img className="ml-10" src={img2} alt="" /></Link>
            </li >
            <li className="ml-5">
              <Link to="/contact"><img className="ml-10" src={img3} alt="" /></Link>
            </li>
            <li className="ml-5">
              <Link to="../"><img className="ml-10" src={img4} alt="" /></Link>
            </li>
          </div>
          <li className="ml-5 mt-3">

            <Link to="https://github.com/ShohjaxonAbdurahimov" className=" logo-men w-30  h-30  bg-slate-50 mr-[50px]">SH</Link>
         </li>
        </ul>
      </nav>
      <ColorContainer />
      <Outlet />
    </div>
  )
};

export default Layout;