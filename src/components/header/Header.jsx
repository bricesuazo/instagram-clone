import { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    const [clicked, setClicked] = useState(false);
    const handleClick = (id) => {
        setClicked(!clicked);
    }
    const style = {
        textDecoration: "none",
        color: "inherit"
    }
    return (
        <div className="header">
            <div className="headerWrapper">
                <Link to="/" className="logoWrapper">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" alt="" className="logo"/>
                </Link>
            
                <div className="iconsWrapper">
                    <Link to="/" style={style} className={clicked ? "bx bxs-home headerIcon" : "bx bx-home headerIcon"} onClick={handleClick}></Link>
                    <Link to="/direct/inbox" style={style} className={clicked ? "bx bxl-messenger headerIcon" : "bx bxl-messenger headerIcon"} onClick={handleClick}></Link>
                    <i className='bx bx-plus-circle' ></i>
                    <Link to="/explore"  style={style} className={clicked ? "bx bxs-compass headerIcon" : "bx bx-compass headerIcon"} onClick={handleClick}></Link>
                    <i className={clicked ? "bx bxs-heart headerIcon" : "bx bx-heart headerIcon"} onClick={handleClick}></i>
                    <img src="https://yt3.ggpht.com/7WdX-cflWvM1AQeqQsib51WqrPi-QHl7970vrcWUe7h-_pZMXDqGnBvuaEBsINaLSnZYsLRKEA=s900-c-k-c0x00ffffff-no-rj" alt="" className={clicked ? "headerProfilePic focus" : "headerProfilePic"} onClick={handleClick}/>
                </div>
            </div>
        </div>
    )
}

export default Header
