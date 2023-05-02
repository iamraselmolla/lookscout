import React, { useEffect, useState } from 'react';
import IconBox from "../IconBox";
import { BiLockAlt } from "react-icons/bi"
import { BiUser } from "react-icons/bi"
import { BsCurrencyDollar } from "react-icons/bs"
import { AiOutlineLike } from "react-icons/ai"
import BillFOrm from "../BillFOrm";

const Home = () => {
  const [logoData, setLogoData] = useState();

  useEffect(() => {
    fetch("https://lookscout-server.vercel.app/logo")
    .then(res => res.json())
    .then(data => {
        setLogoData(data[data.length -1])
       
    })
    .catch(err => console.log(err.message))
},[])

    return (
        <div className="container position_center pt-5">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="logo text-center mb-4">
              <img className='text-center logo_image' src={logoData?.logoURL || "logo.png"} alt="" />
            </div>
            <div className="border rounded-4 px-md-5 px-3 py-4">
              <div className="onboard-form-container  mb-4 fw-bold d-flex justify-content-between">
                <IconBox title="Account" icon={<BiLockAlt></BiLockAlt>}></IconBox>
                <IconBox title="Personal" icon={<BiUser></BiUser>}></IconBox>
                <IconBox title="Billing" icon={<BsCurrencyDollar></BsCurrencyDollar>}></IconBox>
                <IconBox title="Done" icon={<AiOutlineLike></AiOutlineLike>}></IconBox>
              </div>
              <div className="billing_form">
                <BillFOrm></BillFOrm>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
};

export default Home;