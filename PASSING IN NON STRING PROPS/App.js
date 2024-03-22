import React from "react"
import Done from "./Done"

export default function App(){
    return(
        <div>
            <Done
            punchline = "Join me to Celebrate her. Celebrate God's faithfulness upon her life." 
            isPun={true}
            upvotes={10}
            downvotes={10}
            comments={[{author: "", body: "", title: ""} ]}
           // comments={[{author: "", body: "", title: ""}, {...}]}  // The {...} is incase of another JavaScript code. and a comma is usually before the {...} like in this case
            />

            <Done setup = "Happy Birthday Beloved Many More years to you Hun"
            punchline = "It's very fine and great."
            isPun={false}
            />


            <Done setup = "The blessings of your new age be your portion as you grow in Wisdom"
            punchline = "Amen it's so cool. Welldone"
            isPun={true}
           />


            <Done setup = "More Blessings, May Pleasant lines continue to fall in places for you"
            punchline = "How do we see"
            isPun={true}/>


            <Done setup = "Stay cool and loved. my Sister's birthday. Love you Favour"
            punchline = "Celebrate More, its a very Beautiful day"
            isPun={true}/>
        </div>
    )  
    
}
    