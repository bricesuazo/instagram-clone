import './story.css'

const Story = (story) => {
    return (
        <div className="story">
            <img src={story.img} alt="" className={story.seen ? "storyImg seen" : "storyImg"} />
            <span className="storyUsername">{story.username}</span>
        </div>
    )
}

export default Story
