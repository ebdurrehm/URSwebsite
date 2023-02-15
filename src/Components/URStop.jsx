import React from 'react'
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaTelegram } from 'react-icons/fa';
import style from '../assets/css/URStop.module.css';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function HeaderMenu() {
    return (
        <div className={style.URStop}>
            <div className="container">
                <div className="row">
                    <div className={style.URStopHeader}>
                        <div className="col-md-4 col-12">
                            <div className={style.location}><p className={style.adress}>URS E-ticaret Danışmanlığı - Hizmet & Eğitim</p></div>
                        </div>

                        <div className="col-md-4 text-center col-12">
                            <div className={style.socialMediaLinks}>
                                <a className={style.socialMediaLink} href="https://www.youtube.com/@ursamazondanismanlik4000" target={'_blank'}><FaYoutube /></a>
                                <a className={style.socialMediaLink} href="https://www.facebook.com/ursdanismanlikhizmetleri" target={'_blank'}><FaFacebookF /></a>
                                <a className={style.socialMediaLink} href="https://www.instagram.com/urs_danismanlik/" target={'_blank'}><FaInstagram /></a>
                                <a className={style.socialMediaLink} href="https://www.tiktok.com/@urs_danismanlik?is_from_webapp=1&sender_device=pc" target={'_blank'}><FaTiktok /></a>
                                <a className={style.socialMediaLink} href="https://t.me/urstelegram" target={'_blank'}><FaTelegram /></a>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className={style.applyButton} >
                                <a className={style.applyButtonLink} href='#ApplyForm'>Başvuru yap </a>
                            </div>
                        </div>
                    </div>
                </div>{/* .row */}
            </div>
            <Outlet />
        </div>
    )
}
