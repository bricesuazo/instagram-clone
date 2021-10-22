import { Link } from 'react-router-dom'
import Header from '../../header/Header'
import './inbox.css'
import { inboxData } from '../../../dummyData'

const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
}

const Inbox = () => {
    return (
        <div className="inbox">
            <Header />
            <div className="inboxWrapper">
                <div className="inboxLeft">
                    <div className="inboxLeftHeader">
                        <div className="inboxLeftUser">
                            <span className="inboxLeftUsername">brice_suazo</span>
                            <i className='bx bx-chevron-down inboxLeftUsernameIcon' ></i>
                        </div>
                        <i className='bx bx-pencil inboxLeftNewMessageIcon' ></i>
                    </div>

                    <div className="inboxLeftWrapper">
                        <div className="inboxHeader">
                            <span className="inboxHeaderText">Messages</span>
                            <Link to="/direct/requests" className="inboxHeaderMsgReq" style={linkStyle}>2 Requests</Link>
                        </div>
                    </div>

                    {inboxData.map((item) => (
                        <div className="inboxMsgWrapper">
                            <img key={item.id} src={item.profilePicture} alt="" className="inboxMsgProfilePic" />
                            <div className="inboxMsgTextWrapper">
                                <span className="inboxMsgUsername">{item.username}</span>
                                <span className="inboxMsgDesc">{item.desc}</span>
                            </div>
                            <span className="inboxMsgTimeAgo">{item.time}</span>
                        </div>
                    ))}
                </div>
                <div className="inboxRight">
                    <div className="inboxRightLandingWrapper">
                        <div className="inboxRightLanding">
                            <i className="bx bx-paper-plane inboxRightLandingPlaneIcon" ></i>
                            <span className="inboxRightLandingHeaderText">Your Messages</span>
                            <span className="inboxRightLandingText">Send private photos and messages to a friend or group.</span>
                            <button className="inboxRightLandingBtn">Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inbox
