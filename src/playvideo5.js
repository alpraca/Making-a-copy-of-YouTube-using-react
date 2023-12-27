import ReactDOM from "react-dom"
import reportWebVitals from './reportWebVitals';
import './index.css'; // fixed the import
import React, { useState} from 'react';
import {BrowserRouter as Router,  
  Routes,  
  Route,  
  Link  
}   
from 'react-router-dom';  
import Menulogo from './fotos/icons8-menu-50.png';
import Jutublogo from './fotos/icons8-youtube-48.png';
import Uploadlogo from './fotos/icons8-upload-50.png';
import Acclogo from './fotos/icons8-account-50.png';
import Notify from './fotos/icons8-bell-24.png';
import Search from './fotos/icons8-search-50.png';
import Microphone from './fotos/icons8-microphone-48.png'
import Home from './fotos/icons8-home-50.png';
import Explore from './fotos/icons8-explore-50.png';
import Subscritions from './fotos/icons8-subscriptions-32.png';
import Library from './fotos/library_4229888.png';
import History from './fotos/icons8-history-50.png';
import Playlist from './fotos/icons8-playlist-24.png';
import Messages from './fotos/icons8-messages-24.png';
import Showmore from './fotos/icons8-down-button-50.png';
import Like from './fotos/icons8-like-50.png';
import Dislike from './fotos/icons8-thumbs-down-64.png';
import Share from './fotos/icons8-share-50.png';
import Save from './fotos/icons8-save-50.png';
import BlackLike from './fotos/icons8-facebook-like-50.png';
import BlackDislike from './fotos/icons8-dislike-30.png';
import BlackSave from './fotos/icons8-bookmark-50.png';
import Acc1 from './fotos/icons8-test-account-16.png';
import Acc2 from './fotos/icons8-test-account-48 (1).png';
import Acc3 from './fotos/Acc3.jpg';
import Acc8 from './fotos/Acc8.jpg';
import Acc10 from './fotos/Acc10.jpg';
import Thumbnail1 from './fotos/thumbnail1.png'
import Thumbnail2 from './fotos/thumbnail2.jpg'
import Thumbnail3 from './fotos/thumbnail3.png'
import Thumbnail10 from './fotos/thumbnail10.jpg'
import Thumbnail5 from './fotos/thumbnail5.jpg'
import Thumbnail7 from './fotos/thumbnail7.jpg'
import Thumbnail8 from './fotos/thumbnail8.jpg'
import Thumbnail9 from './fotos/thumbnail9.jpg'
import Thumbnail6 from './fotos/thumbnail6.jpg'
import Video6 from './fotos/Video6.mp4'
import App2 from './playvideo2'
import App1 from "./playvideo1"
import Appi from "./pvid10"
import App3 from './playvideo3'
import App4 from './playvideo4'
import App from './index'
import App6 from './playvideo6'
import App7 from './playvideo7'
import App8 from './playvideo8'
import App9 from './playvideo9'
import Video1 from './fotos/video.mp4'
function Navigat({ setOpen }) {
  return (
    <section>
      <nav className="flex-div">
        <div className="nav-left flex-div">
          <img src={Menulogo} className='menu-icon' onClick={() => setOpen((prevOpen) => !prevOpen)} />
          <img src={Jutublogo} className='logo' />
        </div>
        <div className="nav-middle flex-div">
          <div className='search-box flex-div'>
            <input type='text' placeholder='Search' />
            <img src={Search} className='search-icon' />
          </div>
          <img src={Microphone} className='mic-icon' />
        </div>
        <div className="nav-right flex-div">
          <img src={Uploadlogo} />
          <img src={Notify} />
          <img src={Acclogo} className='user-icon' />
        </div>
      </nav>
    </section>
  );
}
function SideMenu({ open }) {
    return (
      <section>
        <div className={`sidebar ${open ? 'inactive' : 'active'}`}>
          <div className='shortcut-links'>
            <a href='#'><img src={Home} /><p>Home</p></a>
            <a href='#'><img src={Explore} /><p>Explore</p></a>
            <a href='#'><img src={Subscritions} /><p>Subscriptions</p></a>
            <a href='#'><img src={Library} /><p>Library</p></a>
            <a href='#'><img src={History} /><p>History</p></a>
            <a href='#'><img src={Playlist} /><p>Playlist</p></a>
            <a href='#'><img src={Messages} /><p>Messages</p></a>
            <a href='#'><img src={Showmore} /><p>Show more</p></a>
            <hr />
          </div>
          <div className='subscribed-list'>
            <h3>Subscribed</h3>
            <a href='#'><img src={Acc1} /><p>Jack Sparrow</p></a>
            <a href='#'><img src={Acc2} /><p>The Benevolent Titan</p></a>
            <a href='#'><img src={Acc3} /><p>David Goggins</p></a>
          </div>
        </div>
      </section>
    );
  }
 function Video({ thumbnail, channelImage, title, channelName, views, uploadTime, link }) {
 
  return (
    <div className='side-video-list'>
    <Link to={link} className="small-thumbnail" ><img src={thumbnail} className='thumbnail'  /></Link>
        <div className='vid-info'>
          <a >{title}</a>
          <p>{channelName}</p>
          <p>{views} Views &bull; {uploadTime}</p>
        </div>
      
      </div>
  );
}



function EMain() {
  const [open, setOpen] = useState(false);

  const videoData = [
  { link:'/playvideo2',
    thumbnail: Thumbnail1,
    title: 'Best manga of all time',
    channelName: 'Jack Sparrow',
    views: '8.5M',
    uploadTime: '2 hours ago'
  },
  { link:'/playvideo3',
    thumbnail: Thumbnail2,
    title: 'Best anime of all time',
    channelName: 'The Benevolent Titan',
    views: '8.4B',
    uploadTime: '2 hours ago'
  },
  { link:'/playvideo4',
    thumbnail: Thumbnail3,
    title: 'Best thumbnail of all time',
    channelName: 'David Goggins',
    views: '18.4B',
    uploadTime: '2 years ago'
  },
    { link:'/index',
      thumbnail: Thumbnail6,
      title: 'How to be a hacker',
      channelName: 'Hackerr123',
      views: '82k',
      uploadTime: '3 weeks ago'
    },
  { link:'/playvideo6',
    thumbnail: Thumbnail5,
    title: 'Best NBA player of all time',
    channelName: 'Scoop Henderson',
    views: '5k',
    uploadTime: '2 hours ago'
  },
  { link:'/playvideo7',
    thumbnail: Thumbnail7,
    title: 'The best gun of all time',
    channelName: 'GunNerd123',
    views: '25k',
    uploadTime: '8 weeks ago'
  },
  { link:'/playvideo8',
    thumbnail: Thumbnail8,
    title: 'How to be rich',
    channelName: 'Andrew Tate',
    views: '58M',
    uploadTime: '2 weeks ago'
  },
  { link:'/playvideo9',
  thumbnail: Thumbnail9,
  title: 'The explosion',
  channelName: 'Rita Ora',
  views: '5M',
  uploadTime: '8 weeks ago'
  },
  { link:'/playvideo1',
  thumbnail: Thumbnail10,
  title: 'A day in Tokyo',
  channelName: 'Tristan Lee',
  views: '200k',
  uploadTime: '5 months ago'
},
]; 
  const [buttonText, setButtonText] = useState('Subscribe');

  const handleButtonClick = () => {
    setButtonText((prevText) => (prevText === 'Subscribe' ? 'Subscribed' : 'Subscribe'));
  };
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked((prevLiked) => !prevLiked);
  };
  const [disliked, setdisLiked] = useState(false);

  const handledisLikeClick = () => {
    setdisLiked((prevLiked) => !prevLiked);
  };
  const [liked1, setLiked1] = useState(false);

  const handleLikeClick1 = () => {
    setLiked1((prevLiked) => !prevLiked);
  };
  const [disliked1, setdisLiked1] = useState(false);

  const handledisLikeClick1 = () => {
    setdisLiked1((prevLiked) => !prevLiked);
  };
  const [liked2, setLiked2] = useState(false);

  const handleLikeClick2 = () => {
    setLiked2((prevLiked) => !prevLiked);
  };
  const [disliked2, setdisLiked2] = useState(false);

  const handledisLikeClick2 = () => {
    setdisLiked2((prevLiked) => !prevLiked);
  };
  const [liked3, setLiked3] = useState(false);

  const handleLikeClick3 = () => {
    setLiked3((prevLiked) => !prevLiked);
  };
  const [disliked3, setdisLiked3] = useState(false);

  const handledisLikeClick3 = () => {
    setdisLiked3((prevLiked) => !prevLiked);
  };
  
  const [saved, setsaved] = useState(false);

  const handleSaveClick = () => {
    setsaved((prevSaved) => !prevSaved);
  };
     
     const [expanded, setExpanded] = useState(false);

     const showMore1 = () => {
       setExpanded(!expanded);
     };
  return (
    <>
    
      <div className="container play-container">
        <div className="row">
          <div className="play-video">
            <video controls autoPlay>
              <source src={Video6} type="video/mp4" />
            </video>
           
            <h3>A World</h3>
           
  <div className="creator-info">         
<div className="cr-info">
 <img src={Acc8} className="creator-icon" />
 <div> <h4>Tristan Lee</h4>
  <p>82k Subscribers</p></div>
  <button className='buton'onClick={handleButtonClick}>{buttonText}</button></div> <div className="play-video-info"> 
  <a><img
          src={liked ? BlackLike : Like}
          
        onClick={handleLikeClick}
        />{liked ? '826' : '825'}</a>
  <a><img
          src={disliked ? BlackDislike : Dislike}
          
        onClick={handledisLikeClick}
        />{disliked? '2' : '1'}</a>
  <a><img src={Share} />Share</a>
  <a ><img  src={saved ? BlackSave : Save}
          
          onClick={handleSaveClick} /></a>

</div>
</div>  

            <div className="vide-info"> <p>52k views &bull; 8 weeks ago</p>
            
              <div className={`vid-description ${expanded ? 'work' : ''}`}>
                <p>
                In this powerful and uplifting motivational YouTube video, we invite you on an extraordinary journey of self-discovery and personal growth. Get ready to unleash your true potential and embark on the path to greatness.
                Through inspiring stories and captivating visuals, this video will ignite the fire within you, pushing you to break through barriers and reach new heights. Discover the limitless possibilities that lie ahead when you believe in yourself and embrace the power of your dreams.

Join a community of like-minded individuals on a path to greatness, where success is not merely a destination but a continuous pursuit. Learn from the wisdom of those who have triumphed over adversity and witness the transformative impact of perseverance and dedication.
                
                </p>
                
            </div><button className='buton1' onClick={showMore1}>{expanded ? 'Show less' : 'Show more'}</button></div>
            <div className="vide-description">
              <h4>528 Comments</h4>
              <div className="add-comment">
                <img src={Acclogo} />
                <input type="text" placeholder="Add a comment"></input>
              </div>
              <div className="old-comment">
                <img src={Acc10} />
                <div>
                  <h3>Tate <span>8 days ago</span></h3>
                  <p>Wow, what an amazing video! This really motivated me to stay focused on my goals and never give up. The speaker's words are so powerful and uplifting. I'm feeling so inspired right now! </p>
                <div className="acomment-action">
                <img src={liked1 ? BlackLike : Like} onClick={handleLikeClick1}/>
                <span>{liked1 ? '85' : '84'}</span>
                <img src={disliked1 ? BlackDislike : Dislike} onClick={handledisLikeClick1}/>
                <span>{disliked1 ? '3' : '2'}</span>
                <span>Reply</span>
                <a>All replies</a>

                </div>
                
                </div>

              </div>
              <div className="old-comment">
                <img src={Acc2} />
                <div>
                  <h3>The benevolent Titan<span>8 days ago</span></h3>
                  <p>This video came at the perfect time for me. I've been feeling a bit lost lately, but after watching this, I feel like I can conquer anything. It's incredible how a few minutes of motivation can make such a difference</p>
                <div className="acomment-action">
                <img src={liked2 ? BlackLike : Like} onClick={handleLikeClick2}/>
                <span>{liked2 ? '25' : '24'}</span>
                <img src={disliked2 ? BlackDislike : Dislike} onClick={handledisLikeClick2}/>
                <span>{disliked2 ? '3' : '2'}</span>
                <span>Reply</span>
                <a>All replies</a>

                </div>
                
                </div>

              </div>
              <div className="old-comment">
                <img src={Acc3} />
                <div>
                  <h3>David Goggins <span>8 days ago</span></h3>
                  <p>I've watched a lot of motivational videos before, but this one truly stands out. The authenticity and passion of the speaker are palpable, and it feels like they are speaking directly to me.  </p>
                <div className="acomment-action">
                <img src={liked3 ? BlackLike : Like} onClick={handleLikeClick3}/>
                <span>{liked3 ? '53' : '52'}</span>
                <img src={disliked3 ? BlackDislike : Dislike} onClick={handledisLikeClick3}/>
                <span>{disliked3 ? '3' : '2'}</span>
                <span>Reply</span>
                <a>All replies</a>

                </div>
                
                </div>

              </div>
            </div>
              
          </div>
           <div className="right-sidebar">
            {videoData.map((video, index) => (
              <Video
                key={index}
                thumbnail={video.thumbnail}
                channelImage={video.channelImage}
                title={video.title}
                link={video.link}
                channelName={video.channelName}
                views={video.views}
                uploadTime={video.uploadTime}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
  
export default  function App5() {
    const [open, setOpen] = useState(false);
  
    return (
      <>
      <Routes>
      
        <Route  exact path="/" element={<App5 />} /> 
        <Route path="/playvideo2" element={<App2 />} />
        <Route path="/playvideo1" element={<App1 />} />
        <Route path="/playvideo4" element={<App4 />} />
        <Route path="/playvideo3" element={<App3 />} />
        <Route path="/playvideo6" element={<App6 />} />
        <Route path="/playvideo7" element={<App7 />} />
        <Route path="/playvideo8" element={<App8 />} />
        <Route path="/playvideo9" element={<App9 />} />
        <Route path="/pvid10" element={<Appi />} />
      </Routes>
        <Navigat setOpen={setOpen} />
        <div className="wrapper"><SideMenu open={open} />
        <EMain /></div>
  
      </>
    ); 
  }


reportWebVitals();