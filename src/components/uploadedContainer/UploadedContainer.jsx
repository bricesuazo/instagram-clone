import { useState } from 'react';
import './uploadedContainer.css'

const UploadedContainer = (post) => {
    const icon = () => {
        switch (post.type) {
            case "multiple":
                return "bx bxs-square-rounded uploadedContainerIconType";
            case "video":
                return "bx bx-play uploadedContainerIconType";
            default:
        }
    }

    const [hovered, setHovered] = useState(false);
    const uploadedDataStyle = {
        display: "none",
    }
    if(hovered) {
        uploadedDataStyle.display = 'flex';
    }
    return (
        <div className="uploadedContainer" onMouseOver={()=>setHovered(true)} onMouseOut={()=>setHovered(false)}>
            <div className="uploadedDataWrapper" style={uploadedDataStyle}>
                <div className="uploadedData">
                    <i className="bx bxs-heart uploadedDataIcon" ></i>
                    <span className="uploadedDataNum">{post.like}</span>
                </div>
                <div className="uploadedData">
                    <i className="bx bxs-message-rounded bx-flip-horizontal uploadedDataIcon" ></i>
                    <span className="uploadedDataNum">{post.comment}</span>
                </div>
            </div>
            <i className={icon()}></i>
            <img src={post.img} alt="" className="uploadedContainerImg"/>
        </div>
    )
}

export default UploadedContainer
