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
        title: "Player seen flirting with opposing team",
        summary: "Askmore Bepis caught texting with Dinnemus Malcolm in the middle of the game! We were only able to glance the phone from the stands but we suspect they sent 'ASL?'"
    }
]

class Articles extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div>
                <div class="content is-medium">
                                <h2 class="subtitle is-5 has-text-grey">December 23, 2022</h2>
                                <h1 class="title has-text-black is-3">Custom 404 Pages</h1>
                                <p class="has-text-dark">This starter template includes a custom 404 Not Found error page, located at
                                /source/404.blade.php.
                                To preview the 404 page, you can visit /404 in your browser. Depending...</p>
                            </div>
            </div>
        )
    }
}

export default Articles