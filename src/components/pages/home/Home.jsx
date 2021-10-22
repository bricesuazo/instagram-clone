import './home.css'
import Header from '../../header/Header'
import Stories from '../../stories/Stories'
import Post from '../../post/Post'
import { postData } from '../../../dummyData'


const Home = () => {
    return (
        <div className="home">
            <Header />
            <Stories />
            {postData.map((item)=>(
                <Post
                    key={item.id}
                    type={item.type}
                    username={item.username}
                    profilePicture={item.profilePicture}
                    location={item.location} 
                    postedMedia={item.postedMedia} 
                    likes={item.likes}
                    desc={item.desc}
                    comments={item.comments}
                    dateUploaded={item.dateUploaded}
                />
            ))}
        </div>
    )
}

export default Home
