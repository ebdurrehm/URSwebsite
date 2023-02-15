import React from "react";
import { FaFacebookF, FaInstagram, FaTelegram, FaTiktok, FaYoutube } from "react-icons/fa";
import logo from "../assets/images/11.svg";
import style from "../assets/css/URSfooter.module.css";
import { list1 } from "../Data/URSdataFooter";
import { list2 } from "../Data/URSdataFooter";
import { list3 } from "../Data/URSdataFooter";
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function URSfooter() {
  return (
    <div className={style.URSfooter}>
      <div className="container">
        <div className="row">
          <div className={style.URSfooterRowDirection}>
            <div className=" col-12 col-md-3">
              <div className={style.URSfooterNavigation}>
                <ul>
                  <li className={style.URSfooterList}>
                    <span className={style.listTitle}>URS Danışmanlık</span>
                  </li>
                  {list1.map((result, index) => {
                    return (
                      <li className={style.URSfooterList} key={index}>
                        <NavLink to={result.link} className={style.listItem}>{result.text}</NavLink>
                      </li>
                    );
                  })}
                  <li className={style.URSfooterList}>
                    <HashLink to={'/#URSmentors'} className={style.listItem}>Eğitim Mentorlarımız</HashLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" col-12 col-md-3">
              <div className={style.URSfooterNavigation}>
                <ul>
                  <li className={style.URSfooterList}>
                    <span className={style.listTitle}>Hizmet & Eğitim</span>
                  </li>
                  {list2.map((result, index) => {
                    return (
                      <li className={style.URSfooterList} key={index}>
                        <NavLink to={result.link} className={style.listItem}>{result.text}</NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className={style.URSfooterNavigation}>
                <ul>
                  <li className={style.URSfooterList}>
                    <span className={style.listTitle}>İletişime geç</span>
                  </li>
                  {list3.map((result, index) => {
                    return (
                      <li className={style.URSfooterList} key={index}>
                        <NavLink to={result.link} className={style.listItem}>{result.text}</NavLink>
                      </li>
                    );
                  })}
                  <li className={style.URSfooterList}>
                    <a href="#ApplyForm" className={style.listItem}>Başvuru Yap</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className={style.URSfooterRowDirectionCenter}>
            <div className={style.URSfooterAddress}>
              <p className={style.text}>
                {" "}
                Mimar Sinan Mah Çolpan Sok Uzunlar İş Merkezi B Blok No:4 Da:6
                Çekmeköy / İstanbul | Tel{" "}
                <span>
                  <strong>0532 731-9541</strong>{" "}
                </span>
                .
                | Mobil / Whatsapp{" "}
                <strong>
                  <span>0532 731-9541</span>
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className={style.URSfooterRowDirectionBetween}>
            <div className="col-md-4">
              <div className={style.URSfooterCopyright}>
                <p>© <span>2022</span>, URS Danışmanlık, Tüm haklar saklıdır</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={style.URSfooterColDirection}>
                <div className={style.URSfooterLogo}>
                  <img className={style.URSfooterLogoImg} src={logo} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={style.URSfooterColDirection}>
                <div className={style.URSfooterSocialLink}>
                  <a className={style.socialIcon} href="https://www.youtube.com/@ursamazondanismanlik4000" target={'_blank'}><FaYoutube /></a>
                  <a className={style.socialIcon} href="https://www.facebook.com/ursdanismanlikhizmetleri" target={'_blank'}><FaFacebookF /></a>
                  <a className={style.socialIcon} href="https://www.instagram.com/urs_danismanlik/" target={'_blank'}><FaInstagram /></a>
                  <a className={style.socialIcon} href="https://www.tiktok.com/@urs_danismanlik?is_from_webapp=1&sender_device=pc" target={'_blank'}><FaTiktok /></a>
                  <a className={style.socialIcon} href="https://t.me/urstelegram" target={'_blank'}><FaTelegram /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default URSfooter;
