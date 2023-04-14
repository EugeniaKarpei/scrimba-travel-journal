import React from "react"
import JournalPost from "./JournalPost"
import posts from "./data.js"

export default function App(){
    const journalPosts = posts.map( post => {
        return <JournalPost
                      post={post}  
            />
    })
    
    return (
        <div className="travel-notes-box">
           {journalPosts}
        </div>
    )
}