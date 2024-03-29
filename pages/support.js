
import Styles from "../styles/Support.module.css";
import {FaFacebook,FaInstagramSquare,FaWhatsapp,FaTwitter,FaEnvelope,FaPhone} from "react-icons/fa";

 const support = () => {
    return (
        <div style={{backgroundColor:"#111"}}>
            <div className="supportContainer container">
                <div className={Styles.bannerContainer}>
                    <h1>Hello.</h1>
                    <h5>Talk to us! we love to help you.</h5>
                </div>
                <div className="row" style={{paddingTop:50,paddingBottom:50}}>
                    {/* <div className="col s6 m4 l3 center">
                        <a href='https://wa.me/+916362292540' target="_blank" rel="noreferrer" className="carousel-item" >
                            <div className="card-panel carouselwhatsappcard">
                                <FaWhatsapp size={120} ></FaWhatsapp>
                                <h5>WhatsApp</h5>
                            </div>
                        </a>
                    </div> */}
                    <div className="col s6 m4 l3 center">
                        <a href='mailto: hello@chatpug.com' target="_blank" rel="noreferrer" className="carousel-item" >
                            <div className="card-panel carouselenvelopecard">
                                <FaEnvelope size={120}></FaEnvelope>
                                <h5>Email</h5>
                            </div>
                        </a>
                    </div>
                    {/* <div className="col s6 m4 l3 center">
                        <a href='tel:+919915020345' className="carousel-item" >
                            <div className="card-panel carouselphoneecard">
                                <FaPhone size={120}></FaPhone>
                                <h5>Phone</h5>
                            </div>
                        </a>
                    </div> */}
                    {/* <div className="col s6 m4 l3 center">
                        <a href='https://www.facebook.com/snapwheels.online' target="_blank" rel="noreferrer" className="carousel-item" >
                            <div className="card-panel carouselfacebookcard" >
                                <FaFacebook size={120}></FaFacebook>
                                <h5>Facebook</h5>
                            </div>
                        </a>
                    </div> */}
                    <div className="col s6 m4 l3 center">
                        <a href='https://www.instagram.com/chatpug/' target="_blank" rel="noreferrer" className="carousel-item" >
                            <div className="card-panel carouselinstagramcard" >
                                <FaInstagramSquare size={120}></FaInstagramSquare>
                                <h5>Instagram</h5>
                            </div>
                        </a>
                    </div>
                    <div className="col s6 m4 l3 center">
                        <a href='https://www.twitter.com/chatpug_com' target="_blank" rel="noreferrer" className="carousel-item" >
                            <div className="card-panel carouseltwittercard" >
                                <FaTwitter size={120}></FaTwitter>
                                <h5>Twitter</h5>
                            </div>
                        </a>
                    </div>
                </div>
                
               
            </div>
            <style jsx>
                {`
                    .supportContainer{
                        padding-top: 10px;
                    }
                    .carouselfacebookcard {
                        background-color: #1565c0;
                        color: white;
                      }
                      
                      .carouselinstagramcard {
                        background-color: #fc4141;
                        color: white;
                      }
                      
                      .carouselwhatsappcard {
                        background-color: #009353;
                        color: white;
                      }
                      
                      .carouselphoneecard{
                        background-color: #b677e2;
                        color: #fff;
                      }
                    
                      .carouseltwittercard {
                        background-color: rgb(9, 140, 247);
                        color: white;
                      }
                      
                      .carouselenvelopecard {
                        background-color: rgb(228, 91, 18);
                        color: white;
                      }
                      .carousel-item:hover{
                        transform: scale(1.1);
                      }
                    
                      
                `}
            </style>
        </div>
    )
}

export default support;