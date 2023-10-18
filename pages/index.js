import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import pug from "../public/Images/data3.png"
import Android from "../public/Images/android.png"
import apple from "../public/Images/apple.png"
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ChatPug</title>
        <meta name="description" content="Serious about finding true love? so are we. Join our dating program and let us help you to find your destined ones." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to ChatPug!
        </h1>
        <section style={{width:'100%',marginTop:30}}>
                <div className="row container"  style={{width:'100%'}}>
                  <div className="col s12 l6 m6 center ">
                    <Image src={pug} height={250} width={300} alt="Chatpug" />
                    </div>
                    <div className="col s12 l6 m6 center">
                        <div style={{color:'#01caba',fontFamily:'Agency FB'}} >
                            
                            <h5 style={{fontSize:20}}>Chatpug is a modern dating app for single and open minded people to find their forever partner. We help you to find your partner who shares your desire for true and serious relationship.</h5>
                            <h5 style={{fontSize:20}}>Chatpug is a great place to meet new friends online. Our moments feature allows you to connect with awesome people around you and form meaningful relationships.</h5>
                            <h5 style={{fontSize:20}}>You can either take help by joining our MEET MY PUG dating program or you can find yourself your partner with the help of our moments feature.</h5>
                            <h5 style={{fontSize:20}}>You must be 18 years or older to use Chatpug. See our <Link href="/termsandconditions">Terms of Service</Link> and <Link href="/CommunityGuidelines">Community Guidelines</Link> for more information.</h5>
                             <br />
                            <h4>Download ChatPug App today!</h4>
                        </div>
                    </div>
                </div>
            </section>
        
        <section style={{backgroundColor:'#111',width:'100%',marginTop:20,paddingBottom:40,borderRadius:20}}>
                <div className="row container">
                <h3 className="center white-text" style={{marginBottom:20,marginTop:20,fontWeight:'bold', fontFamily:'Roboto'}}>ChatPug Mobile App</h3>
                    <div className="col s12 l6 m6 center ">
                        <div >
                            <Image src={Android} alt="Snapwheels" height={200} width="250"></Image>
                            <h5 className="center" style={{color:'#eee',fontSize:20}} >Easy access on mobile app. Install our android mobile app to start your dating journey.</h5>
                            <a className="btn large downloadButton" style={{marginTop:20,marginBottom:60, borderRadius:20}} onClick={()=>window.open(
                                    'https://play.google.com/store/apps/details?id=com.snapwheels','_blank' )}>DOWNLOAD ANDROID APP</a>
                        </div>
                    </div>
                    <div className="col s12 l6 m6 center">
                        <div className={styles.downloadBox}>
                            <Image src={apple} alt="Snapwheels" height={200} width="200"></Image>
                            <h5 className="center grey-text"  style={{fontSize:20}}>Sorry, we are not available in App store yet. Our team is continuously working to make it happen soon!</h5>
                            {/* <a className="btn large downloadButton">DOWNLOAD IOS APP</a> */}
                        </div>
                    </div>
                </div>
            </section>
      </main>

     
    </div>
  )
}
