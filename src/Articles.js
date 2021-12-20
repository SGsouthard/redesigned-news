import React, { Component } from "react";

const smallArticles = [
    {
        title: "Ultimate Frisbee Champ breaks knee in freak accident",
        summary: "Ultimate Frisbee player falls down elevator shaft. Ongoing investigation to determine if sabotage"
    },
    {
        title: "Player seen flirting with opposing team",
        summary: "Askmore Bepis caught texting with Dinnemus Malcolm in the middle of the game! We were only able to glance the phone from the stands but we suspect they sent 'ASL?'"
    },
    {
        title: "Jillikins Jellyfish retiring early?!",
        summary: "Team Leader Jellyfish quoted that they were retiring early from the sport! Quoted as saying 'Look man midterms are coming up, I don't have time...'"
    },
    {
        title: "Rain delays game",
        summary: "A freak bout of rain has caused delays for the Beestingers versus Kites game that was highly anticipated this weekend"
    }
]

const bigArticles = [
    {
        title: "Get your hype on for the big game this week!",
        summary: "This weekend is the big, Unicorns versus Hippocampi game!"
    },
    {
        title: "New Player signed onto the Unicorns",
        summary: "An actual Unicorn was signed onto the team, The Unicorns, in an attempt to turn the tides for the big games!"
    }
]

const displayBigArticles = bigArticles.map((b, idx) => {
    return (
        <div>
            <div class="content is-medium" key={idx}>
                                        <h2 class="subtitle is-4">December 25, 2022</h2>
                                        <h1 class="title">{b.title}</h1>
                                        <p>{b.summary}</p>
                                    </div>
        </div>
    )
})

const displaySmallArticles = smallArticles.map((f, idx) => {
    return (
        <div>
            
        </div>
    )
})

class Articles extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div>
                
            </div>
        )
    }
}

export default Articles