import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
// import reportWebVitals from '../../jutubi/src/reportWebVitals';
import "./index.css";
import Menulogo from "./fotos/icons8-menu-50.png";
import Jutublogo from "./fotos/icons8-youtube-48.png";
import Uploadlogo from "./fotos/icons8-upload-50.png";
import Acclogo from "./fotos/icons8-account-50.png";
import Notify from "./fotos/icons8-bell-24.png";
import Search from "./fotos/icons8-search-50.png";
import Microphone from "./fotos/icons8-microphone-48.png";
import Home from "./fotos/icons8-home-50.png";
import Explore from "./fotos/icons8-explore-50.png";
import Subscritions from "./fotos/icons8-subscriptions-32.png";
import Library from "./fotos/library_4229888.png";
import History from "./fotos/icons8-history-50.png";
import Playlist from "./fotos/icons8-playlist-24.png";
import Messages from "./fotos/icons8-messages-24.png";
import Showmore from "./fotos/icons8-down-button-50.png";
import Acc1 from "./fotos/icons8-test-account-16.png";
import Acc2 from "./fotos/icons8-test-account-48 (1).png";
import Acc3 from "./fotos/Acc3.jpg";
import Acc4 from "./fotos/Acc4.jpg";
import Acc5 from "./fotos/Acc5.jpg";
import Acc6 from "./fotos/Acc7.jpg";
import Acc7 from "./fotos/Acc6.jpg";
import Acc8 from "./fotos/Acc8.jpg";
import Acc9 from "./fotos/Acc9.jpg";
import Acc10 from "./fotos/Acc10.jpg";
import Banner from "./fotos/Banner.jpg";
import Thumbnail1 from "./fotos/thumbnail1.png";
import Thumbnail2 from "./fotos/thumbnail2.jpg";
import Thumbnail3 from "./fotos/thumbnail3.png";
import Thumbnail4 from "./fotos/thumbnail4.jpg";
import Thumbnail5 from "./fotos/thumbnail5.jpg";
import Thumbnail6 from "./fotos/thumbnail6.jpg";
import Thumbnail7 from "./fotos/thumbnail7.jpg";
import Thumbnail8 from "./fotos/thumbnail8.jpg";
import Thumbnail9 from "./fotos/thumbnail9.jpg";
import Thumbnail10 from "./fotos/thumbnail10.jpg";
import Appi from "./pvid10";
import App1 from "./playvideo1";
import App2 from "./playvideo2";
import App3 from "./playvideo3";
import App4 from "./playvideo4";
import App5 from "./playvideo5";
import App6 from "./playvideo6";
import App7 from "./playvideo7";
import App8 from "./playvideo8";
import App9 from "./playvideo9";
export function Navigat({ setOpen }) {
  return (
    <section>
      <nav className="flex-div">
        <div className="nav-left flex-div">
          <img
            src={Menulogo}
            className="menu-icon"
            onClick={() => setOpen((prevOpen) => !prevOpen)}
          />
          <img src={Jutublogo} className="logo" />
        </div>
        <div className="nav-middle flex-div">
          <div className="search-box flex-div">
            <input type="text" placeholder="Search" />
            <img src={Search} className="search-icon" />
          </div>
          <img src={Microphone} className="mic-icon" />
        </div>
        <div className="nav-right flex-div">
          <img src={Uploadlogo} />
          <img src={Notify} />
          <img src={Acclogo} className="user-icon" />
        </div>
      </nav>
    </section>
  );
}

function SideMenu({ open }) {
  return (
    <section>
      <div className={`sidebar ${open ? "active" : "inactive"}`}>
        <div className="shortcut-links">
          <p className="a">
            <img src={Home} />
            <p>Home</p>
          </p>
          <p className="a">
            <img src={Explore} />
            <p>Explore</p>
          </p>
          <p className="a">
            <img src={Subscritions} />
            <p>Subscriptions</p>
          </p>
          <p className="a">
            <img src={Library} />
            <p>Library</p>
          </p>
          <p className="a">
            <img src={History} />
            <p>History</p>
          </p>
          <p className="a">
            <img src={Playlist} />
            <p>Playlist</p>
          </p>
          <p className="a">
            <img src={Messages} />
            <p>Messages</p>
          </p>
          <p className="a">
            <img src={Showmore} />
            <p>Show more</p>
          </p>
          <hr />
        </div>
        <div className="subscribed-list">
          <h3>Subscribed</h3>
          <a href="#">
            <img src={Acc1} />
            <p>Jack Sparrow</p>
          </a>
          <a href="#">
            <img src={Acc2} />
            <p>The Benevolent Titan</p>
          </a>
          <a href="#">
            <img src={Acc3} />
            <p>David Goggins</p>
          </a>
        </div>
      </div>
    </section>
  );
}
function Video({
  thumbnail,
  channelImage,
  title,
  channelName,
  views,
  uploadTime,
  link,
}) {
  return (
    <div className="vid-list">
      {/* Add onClick to the Link component */}
      <img src={thumbnail} className="thumbnail" alt="Video Thumbnail" />

      <div className="flex-div">
        <img src={channelImage} alt="Channel Image" />
        <div className="vid-info">
          {title}
          <p>{channelName}</p>
          <p>
            {views} Views &bull; {uploadTime}
          </p>
        </div>
      </div>
    </div>
  );
}

function Main({ open }) {
  const videoData = [
    {
      link: "/playvideo2",
      thumbnail: Thumbnail1,
      title: "Best manga of all time",
      channelName: "Jack Sparrow",
      channelImage: Acc1,
      views: "8.5M",
      uploadTime: "2 hours ago",
    },
    {
      link: "/playvideo3",
      thumbnail: Thumbnail2,
      title: "Best anime of all time",
      channelName: "The Benevolent Titan",
      channelImage: Acc2,
      views: "8.4B",
      uploadTime: "2 hours ago",
    },
    {
      link: "/playvideo4",
      thumbnail: Thumbnail3,
      title: "Best thumbnail of all time",
      channelName: "David Goggins",
      channelImage: Acc3,
      views: "18.4B",
      uploadTime: "2 years ago",
    },
    {
      link: "/playvideo5",
      thumbnail: Thumbnail4,
      title: "Best viking of all time",
      channelName: "Brittney spears",
      channelImage: Acc4,
      views: "28M",
      uploadTime: "5 months ago",
    },
    {
      link: "/playvideo6",
      thumbnail: Thumbnail5,
      title: "Best NBA player of all time",
      channelName: "Scoop Henderson",
      channelImage: Acc5,
      views: "5k",
      uploadTime: "2 hours ago",
    },
    {
      link: "/pvid10",
      thumbnail: Thumbnail6,
      title: "How to be a hacker",
      channelName: "Hackerr123",
      channelImage: Acc8,
      views: "82k",
      uploadTime: "3 weeks ago",
    },
    {
      link: "/playvideo7",
      thumbnail: Thumbnail7,
      title: "The best gun of all time",
      channelName: "GunNerd123",
      channelImage: Acc7,
      views: "25k",
      uploadTime: "8 weeks ago",
    },
    {
      link: "/playvideo8",
      thumbnail: Thumbnail8,
      title: "How to be rich",
      channelName: "Andrew Tate",
      channelImage: Acc6,
      views: "58M",
      uploadTime: "2 weeks ago",
    },
    {
      link: "/playvideo9",
      thumbnail: Thumbnail9,
      title: "The explosion",
      channelName: "Rita Ora",
      channelImage: Acc9,
      views: "5M",
      uploadTime: "8 weeks ago",
    },
    {
      link: "/playvideo1",
      thumbnail: Thumbnail10,
      title: "A day in Tokyo",
      channelName: "Tristan Lee",
      channelImage: Acc10,
      views: "200k",
      uploadTime: "5 months ago",
    },
  ];

  return (
    <div>
      <div className={`container ${open ? "inactive" : "active"}`}>
        <div className="banner">
          <img src={Banner} />
        </div>
        <div className={`list-container ${open ? "active" : "inactive"}`}>
          {videoData.map((video, index) => (
            <Link to={video.link} key={video.link}>
              <Video
                key={index}
                thumbnail={video.thumbnail}
                channelImage={video.channelImage}
                title={video.title}
                channelName={video.channelName}
                views={video.views}
                uploadTime={video.uploadTime}
                link={video.link}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Main open={open} />} />
        <Route path="/playvideo1" element={<Main />} />
        {/* <Route path="/playvideo2" element={<App2 />} />
        <Route path="/playvideo3" element={<App3 />} />
        <Route path="/playvideo4" element={<App4 />} />
        <Route path="/playvideo5" element={<App5 />} />
        <Route path="/playvideo6" element={<App6 />} />
        <Route path="/playvideo7" element={<App7 />} />
        <Route path="/playvideo8" element={<App8 />} />
        <Route path="/playvideo9" element={<App9 />} /> */}
        {/* <Route path="/pvid10" element={<Appi />} /> */}
      </Routes>
      <Navigat setOpen={setOpen} />

      <SideMenu open={open} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// reportWebVitals();
