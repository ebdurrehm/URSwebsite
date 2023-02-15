import React, { useState, useEffect } from "react";
import style from "../assets/css/URScontactAndLocation.module.css";
import axios from "axios";
import { branchAzerbaijan } from '../Data/URSdataContact'

function Contact() {
  const url = 'https://api.ursdanismanlik.com/v1';
  
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get(`${url}/offices`)
      .then(result => setData(result.data.data))
      .catch(error => console.log(error));
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={style.URScontactAndLocation}>
      <div className="container">
        {
          data.map(result => {
            return (
              <div className="row" key={result._id}>
                <div className="col-lg-5 col-md-12">
                  <div className={style.URScontactMarginThirteenPixel}>
                    <div className={style.URScontactGetInTouch}>
                      <div className={style.URScontactGetInTouchTitle}>
                        <h4 className={style.officeName}>{result.name}</h4>
                      </div>
                      <div className={style.getInTouchBlog}>
                        <ul className={style.getInTouchBlogAbout}>
                          <li className={style.blogList} key={result._id}>
                            <div className={`${style.blogIcon} ${result.class}`}>
                              {result.icon}
                            </div>
                            <div className={style.blogData}>
                              <span><a href="https://www.google.com/maps/place/Mimar+Sinan,+34672+%C3%9Csk%C3%BCdar%2F%C4%B0stanbul,+Turkey/@41.0240135,28.9996381,15z/data=!3m1!4b1!4m5!3m4!1s0x14cab789465c43a1:0x7aa9516e109affa4!8m2!3d41.0231502!4d29.021261" target={'_blank'}>{result.adress}</a></span>
                              <span>{result.email}</span> <br />
                              <span>{result.telephone}</span> <br />
                              <span>{result.location}</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-12">
                  <div className={style.URScontactMarginThirteenPixel}>
                    <div className={style.URScontactMapLocation}>
                      <iframe className={style.map} src="https://maps.google.com/maps?q=Aff%20Mall&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Contact;
