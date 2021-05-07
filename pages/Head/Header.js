import React, {useState} from 'react'
import Link from "next/link"
import {FaBars} from "react-icons/fa"
import {Data} from "../../components/SideBarData"
import * as AiIcons from 'react-icons/ai';
import { useRouter } from 'next/router'
function Navbar() {
  const [sideBar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sideBar);
  const router = useRouter();
  const { pid } = router.query
    return (
      <>
          <div className='navbar'>
            <Link href='/.' className='menu-bars'>
            <FaBars className = "Bars" onClick={showSideBar} />
            </Link>
          </div>
          <nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSideBar}>
              <li className='navbar-toggle'>
                <Link href='.' className='menu-bars'>
                <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {Data.map((item) => {
                return (
                  <h5>
                  <Link className = "no-decoration" href={`/${encodeURIComponent(item.path)}`}>
                    <span>{item.title}</span>
                  </Link>
                </h5>
                );
              })}
            </ul>
          </nav>
      </>
    )
  }
function Header() {
  return (
  <nav className="Nav">
    <Link  href = "/"><h2 className = "nav-link-hello">Home</h2></Link>
    <div className = "nav-link">
         {Data.map((item, path) => (
           
        <Link  className = "nav-link" href = {`/${encodeURIComponent(item.path)}`} key = {path}><h3 className = "nav-link">{item.title}</h3></Link>
        
        ))}
      </div>
      <Navbar/>
    </nav>
  )
}
export default Header

