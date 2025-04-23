import "./Topic.css"
import { useState } from "react";




const Topic = () =>{

    const [topic, setTopic] = useState("Javascript")

    return(<div className="topic-container">
        <h1 className="topic-header">Topic of the day: {topic}</h1>
        <img className="topic-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRss-86vRuxOArrVRmMgerLZ5pi8yCs6U7zsQ&s" alt="image of topic" />
        
    </div>)
}

export default Topic;