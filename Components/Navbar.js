import Link from "next/link"
import { useEffect } from "react"
import $ from 'jquery';
import {FaBars} from "react-icons/fa"
import logo from "../public/Images/logo_light.png"
import Image from "next/image";

if (typeof window !== 'undefined') {
    window.$ = $;
    window.jQuery = $;
    require('materialize-css');
}

export default function Navbar(){

    useEffect(() => {
        $('.sidenav').sidenav();
    }, [])
    return(
        <section className="fnavbar">
                <div className="navbar-fixed">
                <nav className="nav-fixed">
                    <div className="nav-wrapper">
                       <Image src={logo} alt="Chatpug" height={50} width={110} />
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger hide-on-med-and-up"><FaBars size={24} round={true} /></a>
                        <ul id="nav-mobile" className="right  hide-on-med-and-down ">
                            <li ><Link href="/" >Home</Link></li>
                            {/* <li ><Link href="/tariff" >Tariff</Link></li> */}
                           <li ><Link href="/support">Support</Link></li>
                           <li > <a className="btn" onClick={()=>window.open('https://play.google.com/store/apps/details?id=com.snapwheels','_blank' )}>Download App</a></li>
                        </ul>
                        
                    </div>
                    </nav>
                </div>
                
                
                    <ul className="sidenav" id="mobile-demo">
                        <li><Link href="/">Home</Link></li>
                        {/* <li><Link href="/tariff">Tariff</Link></li> */}
                        <li><Link href="/support">Support</Link></li><li > <a className="btn large downloadButton" onClick={()=>window.open('https://play.google.com/store/apps/details?id=com.snapwheels','_blank' )}>Download App</a></li>
                        
                    </ul>

                <style jsx>
                    {`
                        .nav-wrapper{
                            background-color: #111;
                            padding-left: 50px;
                            padding-right: 50px;
                        }

                        .brand-logo{
                            font-weight:bold
                        }
                    `}
                </style>
            </section>
    )
}