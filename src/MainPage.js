import React, { Component } from "react";
import "./MainPage.css"

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
            <section class="section">
                        <div class="columns is-variable is-8">
                            <div class="column is-5 is-offset-1 ">
                            <div class="content is-medium">
                                <h2 class="subtitle is-5 has-text-grey">December 23, 2022</h2>
                                <h1 class="title has-text-black is-3">{f.title[0]}</h1>
                                <p class="has-text-dark">{f.summary[0]}</p>
                            </div>
                            </div>
                            <div class="column is-5">
                            <div class="content is-medium">
                                <h2 class="subtitle is-5 has-text-grey">December 25, 2022</h2>
                                <h1 class="title has-text-black is-3">{f.title[1]}</h1>
                                <p class="has-text-dark">{f.summary[1]}</p>
                            </div>
                            </div>
                        </div>
                        </section>


                        <div class="is-divider"></div>


                        <section class="section">
                        <div class="columns is-variable is-8">
                            <div class="column is-5 is-offset-1">
                            <div class="content is-medium">
                                <h2 class="subtitle is-5 has-text-grey">December 25, 2022</h2>
                                <h1 class="title has-text-black is-3">{f.title[2]}</h1>
                                <p class="has-text-dark">{f.summary[2]}</p>
                            </div>
                            </div>
                            <div class="column is-5">
                            <div class="content is-medium">
                                <h2 class="subtitle is-5 has-text-grey">December 25, 2022</h2>
                                <h1 class="title has-text-black is-3">{f.title[3]}</h1>
                                <p class="has-text-dark">{f.summary[3]}</p>
                            </div>
                            </div>
                        </div>
                        </section>

        </div>
    )
})

//Components

class MainPage extends Component {
    render() {
        return(
            <div>
            {/* <!-- START NAV --> */}
                <nav class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                            <a class="navbar-item" href="../">
                            <img src="./images/bulma.png" alt="Logo" />
                            </a>
                            <span class="navbar-burger burger" data-target="navbarMenu">
                            <span></span>
                            <span></span>
                            <span></span>
                            </span>
                        </div>
                        <div id="navbarMenu" class="navbar-menu">
                            <div class="navbar-end">
                                <div class=" navbar-item">
                                    <div class="control has-icons-left">
                                        <input class="input is-rounded" type="email" placeholder="Search" />
                                        <span class="icon is-left">
                                            <i class="fa fa-search"></i>
                                        </span>
                                    </div>
                                </div>
                                <a class="navbar-item is-active is-size-5 has-text-weight-semibold">
                                Home
                                </a>
                                <a class="navbar-item is-size-5 has-text-weight-semibold">
                                Examples
                                </a>
                                <a class="navbar-item is-size-5 has-text-weight-semibold">
                                Features
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* <!-- END NAV --> */}


                {/* <!-- Image --> */}
                <section class="hero ">
                    <div class="hero-body">
                        <div class="container">
                            <div class="columns">
                                <div class="column is-8 is-offset-2">
                                    <figure class="image is-16by9">
                                    <img src="https://www.fillmurray.com/640/360" alt="" />
                                    </figure>
                                </div>
                            </div>


                            <section class="section">
                            <div class="columns">
                                <div class="column is-8 is-offset-2">
                                    {/* big article 1 */}
                                    {displayBigArticles[0]}
                                </div>
                            </div>
                            </section>


                            <div class="is-divider"></div>


                                <section class="section">
                                <div class="columns">
                                    <div class="column is-8 is-offset-2">
                                        {/* big article 2 */}
                                        {displayBigArticles[1]}
                                    </div>
                                </div>
                                </section>




                            </div>
                        </div>
                </section>


                {/* <!-- newsletter --> */}
                <section class="section">
                    <div class="columns">
                    <div class="column is-10 is-offset-1">
                        <div class="container has-text-centered is-fluid">
                        <div class="hero is-light">
                            <div class="hero-body">
                            <h2 class="title is-4">Sign up for our newsletter</h2>
                                <div class="column is-6 is-offset-3">
                                <div class="field has-addons has-addons-centered">
                                    <div class="control is-expanded">
                                    <input class="input " type="text" placeholder="Email address" />
                                    </div>
                                    <div class="control">
                                    <a class="button is-info">
                                        Subscribe
                                    </a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>


                {/* <!-- Articles --> */}


                <section class="hero ">
                    <div class="hero-body">
                    <div class="container">

                {/* small articles */}
                {displaySmallArticles}

                    </div>
                    </div>
                </section>


                <footer class="footer">
                    <div class="content has-text-centered">
                    <p>
                        <strong>Bulma - Blog theme</strong> by <a href="https://gonzalojs.com">Gonzalo Gutierrez</a>. Based on the <a
                        href="http://jigsaw-blog-staging.tighten.co/">jigsaw-blog</a>. The source code is licensed
                        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>
                    </p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default MainPage