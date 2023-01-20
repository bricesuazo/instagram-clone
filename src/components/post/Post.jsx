import "./post.css";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import { Link } from "react-router-dom";

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

// const slidePhoto = (type) => {
//     switch (type) {
//         case 'right':
//             return console.log(type);
//         case 'left':
//             return console.log(type);
//         }
// }

const Post = (post) => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postHeader">
          <div className="postUser">
            <img
              src={post.profilePicture}
              alt=""
              className="postUserProfilePic"
            />
            <div className="postUserText">
              <Link to={`/${post.username}`}>
                <span className="postUsername">{post.username}</span>
              </Link>
              <span className="postLocation">{post.location}</span>
            </div>
          </div>
          <i className="bx bx-dots-horizontal-rounded postMore"></i>
        </div>
        <div className="postMediaWrapper">
          <div
            className={
              post.type !== "multiple"
                ? "postMediaMultipleBtns"
                : "postMediaMultipleBtns multiple"
            }
          >
            <i className="bx bx-chevron-left leftIcon"></i>
            <i className="bx bx-chevron-right rightIcon"></i>
          </div>

          <div className="postMediaContainer">
            {post.postedMedia.map((item, index) => {
              return (
                <img key={index} src={item} alt="" className="postMedia" />
              );
            })}
          </div>
        </div>
        <div className="postBtnsWrapper">
          <div className="postBtnsLeft">
            <i className="bx bx-heart postBtnLeft"></i>
            <i className="bx bx-message-rounded bx-flip-horizontal postBtnLeft postBtnLeft"></i>
            <i className="bx bx-paper-plane postBtnLeft"></i>
          </div>
          <div className="postBtnsRight">
            <i className="bx bx-tag-alt bx-rotate-270 postBtnRight"></i>
          </div>
        </div>
        <div className="postInfoWrapper">
          <div className="postInfoLikesWrapper">
            <span className="postInfoLikes">{post.likes} likes</span>
          </div>
          <div className="postInfoCaptionWrapper">
            <span className="postInfoCaption">
              <span className="postInfoCaptionUsername">{post.username}</span>
              &nbsp;&nbsp;{post.desc}
            </span>
          </div>
          <div className="postInfoCommentWrapper">
            <span className="postInfoComment">
              View all {post.comments.length} comments
            </span>
          </div>
          <div className="postInfoDateWrapper">
            <span className="postInfoDate">
              {timeAgo.format(post.dateUploaded - 60 * 1000)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
