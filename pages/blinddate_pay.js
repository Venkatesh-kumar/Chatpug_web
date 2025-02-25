import React from "react";
import Image from "next/image";
import apple from "../public/Images/qr.jpg";
import Link from "next/link";

export default function blinddate_pay() {
  return (
    <div style={{ backgroundColor: "black", paddingBottom: 100 }}>
      {/* Image at the top */}
      <div className="w-full center h-64" style={{ marginTop: -100 }}>
        <h1 style={{ color: "#01CBC6", paddingTop: 100, fontWeight: "bold" }}>
          COFFEE & CHAT
        </h1>
        <Image
          src={apple}
          height={300}
          width={400}
        />
      </div>
      <p style={{color:'#fff', textAlign:'center'}}>Please copy the transaction ID which you have to share with us in the next form</p>
      <p style={{color:'#fff', textAlign:'center'}}>After finishing the payment, click below to enter your details and completing the registration</p>
      <div className="container center">
        <Link
          className="btn large downloadButton"
          href="/blinddate_register"
          style={{
            marginTop: 20,
            marginBottom: 60,
            borderRadius: 20,
            width:'80%',
            height: 40
          }}
        >
          COMPLETE THE REGISTRATION
        </Link>
      </div>
    </div>
  );
}
