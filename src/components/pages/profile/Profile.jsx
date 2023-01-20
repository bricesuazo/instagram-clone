import { Link } from "react-router-dom";
import Header from "../../header/Header";
import UploadedContainer from "../../uploadedContainer/UploadedContainer";
import { profilePost } from "../../../dummyData";
import "./profile.css";

const Profile = () => {
  const style = {
    textDecoration: "none",
    color: "inherit",
  };
  return (
    <div className="profile">
      <Header />
      <div className="profileTopWrapper">
        <div className="profileTopUser">
          <img
            src="https://github.com/bricesuazo.png"
            alt=""
            className="profileTopProfilePic"
          />

          <div className="profileTopUserSideWrapper">
            <div className="profileTopUserNameWrapper">
              <span className="profileTopUsername">brice_suazo</span>
              <i className="bx bx-cog profileTopSettingsIcon"></i>
            </div>
            <button className="profileTopEditBtn">Edit Profile</button>
          </div>
        </div>
        <div className="profileTopInfoWrapper">
          <div className="profileTopInfoName">
            <span className="profileTopInfoDisplayName">Brice Suazo</span>
            <span className="profileTopInfoPronouns">he/him</span>
          </div>
          <div className="profileTopInfoBioWrapper">
            <span className="profileTopInfoBio">
              Motion Designer | Video Editor | TV Broadcaster
              <br />
              Computer Science Student
              <br />-<br />
              Master Editor & Cinematographer @gulamanentertainment
            </span>
          </div>
          <Link
            to="https://bricesuazo.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
            className="profileTopWebsite"
          >
            www.bricesuazo.com
          </Link>
        </div>
        <div className="profileTopInfoDataNumbersWrapper">
          <div className="profileTopInfoDataNumbersPostsWrapper">
            <span className="profileTopInfoDataNumbersNum">251</span>
            <span className="profileTopInfoDataNumbersLabel">posts</span>
          </div>
          <Link
            to="/:username/followers"
            style={style}
            className="profileTopInfoDataNumbersFollowersWrapper"
          >
            <span className="profileTopInfoDataNumbersNum">618</span>
            <span className="profileTopInfoDataNumbersLabel">followers</span>
          </Link>
          <Link
            to="/:username/following"
            style={style}
            className="profileTopInfoDataNumbersFollowingWrapper"
          >
            <span className="profileTopInfoDataNumbersNum">410</span>
            <span className="profileTopInfoDataNumbersLabel">following</span>
          </Link>
        </div>
        <div className="profileTopSectionBtnsWrapper">
          <div className="profileTopSectionBtns">
            <Link
              to="/:username"
              style={style}
              className="bx bx-grid profileTopSectionBtn"
            ></Link>
            <Link
              to="/channel"
              style={style}
              className="bx bx-play-circle profileTopSectionBtn"
            ></Link>
            <Link
              to="/tagged"
              style={style}
              className="bx bx-tag-alt bx-rotate-270 profileTopSectionBtn"
            ></Link>
            <Link
              to="/saved"
              style={style}
              className="bx bx-clipboard profileTopSectionBtn"
            ></Link>
          </div>
        </div>
      </div>

      <div className="profileUploadedContainer">
        {profilePost.map((item) => (
          <UploadedContainer
            img={item.img}
            type={item.type}
            like={item.like}
            comment={item.comment}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
