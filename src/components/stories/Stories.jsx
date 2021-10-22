import './stories.css'
import Story from '../story/Story'
import { storyData } from '../../dummyData'

const Stories = () => {
    return (
        <div className="stories">
            <div className="storiesWrapper">
                <i className='bx bx-chevron-left leftIcon' ></i>
                <i className='bx bx-chevron-right rightIcon' ></i>
                {storyData.map(item => (
                    <Story key={item.id} img={item.img} username={item.username} seen={item.seen}/>
                ))}
            </div>
        </div>
    )
}

export default Stories
