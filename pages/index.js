import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import pug from "../Images/pug.jpg"
import Android from "../Images/android.png"
import apple from "../Images/apple.png"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chatpug: Anonymous video chat</title>
        <meta name="description" content="Chatpug is a anonymous video chat application, where you can talk with random people." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Chatpug!
        </h1>
        <section style={{width:'100%',marginTop:10}}>
                <div className="row container"  style={{width:'100%'}}>
                  <div className="col s12 l6 m6 left ">
                    <Image src={pug} height={600} width={600} />
                    </div>
                    <div className="col s12 l6 m6 center">
                        <div style={{color:'#01caba',fontFamily:'Agency FB'}} >
                            
                            <h5>Chatpug is a social networking service where users can text, video chat, photo and video share with friends and random anonymous people.</h5>
                            <h5>Chatpug is a great place to meet new friends online. Strangers lobby feature allows you to meet random strangers and talk one-to-one.</h5>
                            <h5>You can either stay anonymous or you can share your username and add stranger to your friendslist. You can end anonymous chat at any time.</h5>
                            <h5>You can share photos and videos to your friends and followers. Chats with your friends will be stored in your device permanently til you leave us.</h5>
                            <h5>You must be 18 years or older to use Chatpug. See our <a href="/termsandconditions">Terms of Service</a> and <a href="/CommunityGuidelines">Community Guidelines</a> for more information.</h5>
                            <h5>We do not encourage adult content to be used during text and video chat sessions. Chatpug will suspend those accounts without any prior notice.</h5>
                            <br />
                            <h4>Download Chatpug App today!</h4>
                            {/* <a className="btn large downloadButton">DOWNLOAD IOS APP</a> */}
                        </div>
                    </div>
                </div>
            </section>
        
        <section style={{backgroundColor:'#01caba',width:'100%',paddingBottom:100,borderRadius:20}}>
                <div className="row container">
                <h3 className="center white-text" style={{marginBottom:100,marginTop:100,fontWeight:'bold',fontFamily:'Agency FB'}}>Chatpug Mobile App</h3>
                    <div className="col s12 l6 m6 center ">
                        <div >
                            <Image src={Android} alt="Snapwheels" height={200} width="250"></Image>
                            <h5 className="center" >Easy access on mobile app. Install our android mobile app to get exciting offers and amazing features.</h5>
                            <a className="btn large downloadButton" onClick={()=>window.open(
                                    'https://play.google.com/store/apps/details?id=com.snapwheels','_blank' )}>DOWNLOAD ANDROID APP</a>
                        </div>
                    </div>
                    <div className="col s12 l6 m6 center">
                        <div className={styles.downloadBox}>
                            <Image src={apple} alt="Snapwheels" height={200} width="200"></Image>
                            <h5 className="center grey-text">Sorry, we are not available in App store yet. Our team is continuously working to make it happen soon!</h5>
                            {/* <a className="btn large downloadButton">DOWNLOAD IOS APP</a> */}
                        </div>
                    </div>
                </div>
            </section>
      </main>

     
    </div>
  )
}
