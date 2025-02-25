import React from "react";
import Image from "next/image";
import apple from "../public/Images/blind_date.jpg";
import man from "../public/Images/man.png";
import woman from "../public/Images/woman.png";
import Link from "next/link";

export default function blinddate() {
  return (
    <div style={{ backgroundColor: "black", paddingBottom: 100 }}>
      {/* Image at the top */}
      <div className="center container" style={{ marginTop: -100 }}>
        <h1 style={{ color: "#01CBC6", paddingTop: 100, fontWeight: "bold" }}>
          COFFEE & CHAT
        </h1>
        <Image
          src={apple}
          style={{ borderRadius: 200 }}
          height={400}
          width={400}
          
        />
      </div>
      <div
        className="center container"
        style={{ color: "#01CBC6", textAlign: "left" }}
      >
        <p>
          Are you ready to embark on a journey to find your perfect match,
          driven by shared interests and like-mindedness? We, at Chatpug, are
          thrilled to introduce the ultimate blind dating event in the heart of
          Bangalore, designed exclusively for the age 18+ crowd. The blind date
          set up by us (based upon the responses you send) will be a romantic
          walk.
        </p>
        <h5 style={{ color: "#008397" }}>Discover Your Perfect Match </h5>
        <p>
          At Chatpug, we believe that love is not just about appearances; it`s
          about connecting on a deeper level. Our unique matchmaking system
          carefully considers your interests, hobbies, and preferences to pair
          you with the ideal match. No swiping left or right, no endless
          scrolling through profiles. We do the work for you, ensuring that you
          meet someone who shares your passions and values.
        </p>

        <h5 style={{ color: "#008397" }}>
          Mystery, Excitement, and Anticipation{" "}
        </h5>
        <p>
          The intrigue and excitement begin as we send you the date, time, and
          venue for your blind date three days in advance. It`s like unwrapping
          a gift, not knowing what`s inside. But one thing is certain you`re
          about to meet someone extraordinary. The anticipation builds as you
          prepare for this unique adventure, and as you`ll soon find out,
          sometimes, the best experiences come from stepping out of your comfort
          zone.{" "}
        </p>

        <h5 style={{ color: "#008397" }}>
          {" "}
          Dress to Impress, Act with Respect{" "}
        </h5>
        <p>
          To make the most of your COFFEE & CHAT experience, we encourage all
          participants to dress appropriately for the occasion and, most
          importantly, to act with respect and courtesy. This event is designed
          to foster genuine connections, so be your authentic self and make the
          most of this opportunity to meet someone who could be your perfect
          match.{" "}
        </p>

        <h5 style={{ color: "#008397" }}>
          The Ultimate Chance to Find the Perfect Match{" "}
        </h5>
        <p>
          COFFEE & CHAT is not just another dating event, it`s a chance to find
          the perfect match you`ve been waiting for. The thrill of meeting
          someone new, the excitement of shared interests, and the anticipation
          of a possible connection make this a unique and unforgettable
          experience.{" "}
        </p>
        <p>
          Join us at COFFEE & CHAT, where love may be just around the corner.
          Get ready to step out of your comfort zone, embrace the unknown, and
          let destiny guide you towards your perfect match.Please note that the
          event is for age group 18 to 35 only.{" "}
        </p>
        <p>Love is out there, and we`re here to help you find it.</p>
      </div>

      <section
        className="container"
        style={{ marginTop: 100, marginBottom: 60, color: "#fff" }}
      >
        <h3 className="white-text center bold">Pricing Details</h3>
        <div className="row " style={{ width: "100%", paddingTop: 60 }}>
          <div className="col s12 l6 m6 center">
            <div
              className="center"
              style={{ overflow: "hidden", borderRadius: 200 }}
            >
              <Image src={man} alt="chatpug" height={200} width={200} />
            </div>
            <h5> Male Registration: INR 1499/- </h5>
            <p>Incl of GST and F&B Charges</p>
          </div>
          <div className="col s12 l6 m6 center">
            <div
              className="center"
              style={{ overflow: "hidden", borderRadius: 200 }}
            >
              <Image src={woman} alt="chatpug" width={200} height={200} />
            </div>
            <h5> Female Registration: INR 499/- </h5>
            <p>Incl of GST and F&B Charges</p>
          </div>
        </div>
      </section>

      <div
        className="center container"
        style={{ color: "#01CBC6", textAlign: "left" }}
      >
        <h5 style={{ color: "#fff" }}>Key Points to consider</h5>
        <p className="white-text">
          1. We ensure a balanced gender ratio. So, we have waitlisting
          mechanism in place. As soon you register you will be added to
          waitlist.
        </p>
        <p className="white-text">
          2. This is not a group event. Only you and your partner will be
          meeting in our partnered coffee shop.
        </p>
        <p className="white-text">
          3. Date period is maximum 1 hour. We suggest you reach the venue 30
          mins early for seamless process.
        </p>
        <p className="white-text">
          4. Please be polite and kind with your date. Our representative will
          be at the venue all time. Please feel free to reach out anytime.
        </p>
        <p className="white-text">
          5. Registration fee includes Food and Beverages charges also. You will
          be welcomed with a mocktail and a starter of your choice.
        </p>
        <p className="white-text">
          6. If we are not able to schedule a date for you within 4 weeks, your
          registration will be refunded 100%.
        </p>
        <p className="white-text">
          7. Cue cards will be provided at the venue which helps to break the
          ice and conversation starter. Feel free to use them.
        </p>
        <p className="white-text">
          8. Do not share any personal information. We will reach out to your
          date after the event, if both are okay, we will share the contact
          information.
        </p>
      </div>

      <div className="container center">
        <Link
          className="btn large downloadButton"
          href="/blinddate_pay"
          style={{
            marginTop: 20,
            marginBottom: 60,
            borderRadius: 20,
            width: "100%",
            height: 60,
            padding: 10,
          }}
        >
          REGISTER NOW
        </Link>
      </div>
    </div>
  );
}
