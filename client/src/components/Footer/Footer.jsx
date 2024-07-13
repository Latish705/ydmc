import './footer.css';
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebookF,FaLinkedinIn, FaPhone  } from "react-icons/fa6";
import Logo from "../../assets/HeaderLogo.png"
import { GrMail, GrMapLocation } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Footer() {
  return (
    <>
        <div className="connectDiv">
            <div className='ConnectIconDiv'>Connect with Us : 
            <FaInstagram color='#979595'/>
            <FaFacebookF color='#979595'/>
            <FaTwitter color='#979595'/>
            <FaLinkedinIn  color='#979595'/>
            </div>
        </div>
        <div className="MainFooterDiv">
            <div className="Logo_container">
                <LazyLoadImage src={Logo} alt="Logo.png"  />
                <p className="Logodetails">Your trusted partner for buying and selling quality cars. Visit us to drive away in your dream vehicle today</p>
                <div className="contactDetails">
                    <GrMapLocation width={"1.25rem"}/>
                    <p>Gurgaon-405585</p>
                </div>
                <div className="contactDetails">
                    <FaPhone width={"1.25rem"}/>
                    <p>1234567898</p>
                </div>
                <div className="contactDetails">
                    <GrMail width={"1.25rem"}/>
                    <p>drive123@gmail.com</p>
                </div>
            </div>
            <div className="generalcontainer">
                <h5>General</h5>
                <NavLink to='/' className='FooterNav'> Home </NavLink>
                    <NavLink to='/buy' className='FooterNav'>Buy</NavLink>
                    <NavLink to='/sell' className='FooterNav'>Sell</NavLink>
                    <NavLink to='/blogs' className='FooterNav'>Blogs</NavLink>
            </div>
            <div className="BrandsContainer">
                <h5>Brands</h5>
                <ul className='BrandsFooter'>
                    <li>BMW</li>
                    <li>Audi</li>
                    <li>Mercedes</li>
                    <li>Tesla</li>
                    <li style={{color: "#CDFE08"}}>Many More...</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Footer