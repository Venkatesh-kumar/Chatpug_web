import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import pug from "../public/Images/data3.png"
import Android from "../public/Images/android.png"
import apple from "../public/Images/apple.png"
import Link from 'next/link'
import { FaUserPlus } from "react-icons/fa";
import { FcAssistant,FcLike, FcSurvey, FcConferenceCall } from "react-icons/fc";
import $ from 'jquery';

if (typeof window !== 'undefined') {
  window.$ = $;
  window.jQuery = $;
  require('materialize-css');
}

export default function Home() {
  return (
    <div style={{backgroundColor:'#000'}}>
      <Head>
        <title>ChatPug</title>
        <meta name="description" content="Serious about finding true love? so are we. Join our dating program and let us help you to find your destined ones." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}> Welcome to ChatPug!</h1>
      <section>
            <div className="bannercontainer">
            <div className={styles.bgimage}></div>
            </div>
        </section>
      <main className={styles.main}>
        
          <section style={{width:'100%',marginTop:30}}>
                <div className="row "  style={{width:'100%'}}>
                  
                    <div className="col s12 center">
                        <div style={{color:'#01caba', fontFamily:'cursive', borderWidth:10, borderColor:'#008397'}} >
                            
                            <h5 style={{fontSize:30}}>Chatpug is a modern dating app for single and open minded people to find their forever partner. We help you to find your partner who shares your desire for true and serious relationship.</h5>
                            <br />
                            <h5 style={{fontSize:30}}>Chatpug is a great place to meet new friends online. Our moments feature allows you to connect with awesome people around you and form meaningful relationships.</h5>
                            <br />
                            <h5 style={{fontSize:30}}>You can either take help by joining our MEET MY PUG dating program or you can find yourself your partner with the help of our moments feature.</h5>
                            <br />
                            <h5 style={{fontSize:30}}>You must be 18 years or older to use Chatpug. See our <Link href="/termsandconditions">Terms of Service</Link> and <Link href="/CommunityGuidelines">Community Guidelines</Link> for more information.</h5>
                             <br />
                            <h4>Download ChatPug App today!</h4>
                        </div>
                    </div>
                </div>
            </section>
            <section>
            <div className="whyContainer">
            <h3 className={styles.headerText}>How it works?</h3>
            <div className="row">
                <div className="col s12 m6 l4 center">
                    <div className="card-panel" style={{backgroundColor:'#142B2E',color:'white'}}>
                        <h2 className={styles.stepText}>STEP 1</h2>
                        <FaUserPlus size={120} color='#F4C724'></FaUserPlus>
                        <p>Register with us as a first step to meet your amazing handpicked dates.</p>
                    </div>
                </div>
                <div className="col s12 m6 l4 center">
                    <div className="card-panel" style={{backgroundColor:'#142B2E',color:'white'}}>
                        <h2 className={styles.stepText}>STEP 2</h2>
                        <FcAssistant size={120} color='#53E0BC'></FcAssistant>
                        <p>Our executive will call you will all details and assist you with all your queries.</p>
                    </div>
                </div>
                <div className="col s12 m6 l4 center">
                    <div className="card-panel" style={{backgroundColor:'#142B2E',color:'white'}}>
                        <h2 className={styles.stepText}>STEP 3</h2>
                        <FcConferenceCall size={120} color='#F4C724'></FcConferenceCall>
                        <p>Upon clearing our screening test, you are all set to join ChatPug dating program.</p>
                    </div>
                </div>
                <div className="col s12 m6 l4 center">
                    <div className="card-panel" style={{backgroundColor:'#142B2E',color:'white'}}>
                        <h2 className={styles.stepText}>STEP 4</h2>
                        <FcLike size={120} color='#F4C724'></FcLike>
                        <p>We will find amazing date for you and schedule a beautiful dinner date. You just meet and talk.</p>
                    </div>
                </div>
                <div className="col s12 m6 l4 center">
                    <div className="card-panel" style={{backgroundColor:'#142B2E',color:'white'}}>
                        <h2 className={styles.stepText}>STEP 5</h2>
                        <FcSurvey size={120} color='#F4C724'></FcSurvey>
                        <p>We will collect and share the feedback about your date so that your next date will be smoother.</p>
                    </div>
                </div>
                
            </div>
            </div>
        </section>
        <section style={{backgroundColor:'#111',width:'100%',marginTop:20,paddingBottom:40,borderRadius:20}}>
                <div className="row container">
                <h3 className={styles.headerText} style={{marginBottom:40,marginTop:40,fontWeight:'bold', fontFamily:'Roboto'}}>ChatPug Mobile App</h3>
                    <div className="col s12 l6 m6 center ">
                        <div >
                            <Image src={Android} alt="Snapwheels" height={200} width="250"></Image>
                            <h5 className="center" style={{color:'#eee',fontSize:20}} >Easy access on mobile app. Install our android mobile app to start your dating journey.</h5>
                            <a className="btn large downloadButton" style={{marginTop:20,marginBottom:60, borderRadius:20}} onClick={()=>window.open(
                                    'https://play.google.com/store/apps/details?id=com.chatpug','_blank' )}>DOWNLOAD ANDROID APP</a>
                        </div>
                    </div>
                    <div className="col s12 l6 m6 center">
                        <div className={styles.downloadBox}>
                            <Image src={apple} alt="Snapwheels" height={200} width="200"></Image>
                            <h5 className="center grey-text"  style={{fontSize:20}}>Sorry, we are not available in App store yet. Contact us to register.</h5>
                            <Link className='btn large downloadButton' href="/support" style={{marginTop:20,marginBottom:60, borderRadius:20, color:'#fff'}}>CONTACT US</Link>
                        </div>
                    </div>
                </div>
            </section>
      </main>

     
    </div>
  )
}
