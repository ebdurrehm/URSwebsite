import React, {useState,useEffect} from 'react';
import URSmobileHeader from "../Components/URSmobileHeader";
import URSscrollHeader from "../Components/URSscrollHeader";
import ApplyForm from '../Components/URSapplyForm';
import { Link } from "react-router-dom";
import BreadcumpStyle from '../assets/css/Breadcump.module.css';
import style from '../assets/css/URSyoutubeVideosPage.module.css';
// import DataYoutubeVideos from '../Data/URSdataYoutubeVideos.json';
import URSfooter from '../Components/URSfooter';
import axios from "axios";


export default function URSyoutubeVideosPage() {
  window.scrollTo(0, 0);
  const url = 'https://185.48.182.52/v1';
  const [videos,setVideos] = useState([]);
  const getVideos = () => {
      axios.get(`${url}/videos`)
      .then(response => setVideos(response.data.data))
      .catch(error => console.log(error))
  }       
  useEffect(() => {
      getVideos();
  },[])

  return (
    <div className={style.URSyoutubeVideosPage}>
      <div className={BreadcumpStyle.breadcump}>
        <Link to={'/'}>Ana sayfa</Link>/
        <Link className={BreadcumpStyle.active}>Youtube Videolarımız</Link>
      </div>
      <URSmobileHeader />
      <URSscrollHeader />

      <section className={style.seeAllYoutubeVideos}>
        <div className="container">
          <div className="row">
            <div className={style.latestVideos}>
              <div className="row">
                {
                  videos.map((video, index) => {
                    return <div className={`col-md-4 col-12 ${style.DataYoutubeVideosList}`} key={index}>
                      <div className={style.videoContent}><iframe src={video.link} title={video.videoTitle} className={style.video} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></div>
                      <h3 className={style.videoTitle}>{video.videoTitle}</h3>
                    </div>
                  })
                }

              </div>
            </div>
          </div>
        </div>
      </section>

      <ApplyForm />
      <URSfooter />
    </div>
  )
}
