// import logo from "../assets/assets/sveto_logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            {/* <img className="mx-4 w-10 rounded-xl" src={logo} alt="logo"></img> */}
        </div>
        <div className="m-8 flex items-center text-3xl justify-center gap-1">
            <a href="https://linkedin.com/in/svetoslav-s-bb45605b" target="_blank" rel="opener ref">
              <FaLinkedin/>
            </a>
            <a href="https://github.com/Svetoslaus" target="_blank" rel="opener ref">
              <FaGithub/>
            </a>
            
        </div>
      
    </nav>
  
  )
}

export default Navbar
