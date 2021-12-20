import React, { Component } from "react";
import "./MainPage.css"



//Components
import Articles from "./Articles"
class Blurb extends Component {
    render() {
        return (
            <div className="content is-medium">
                <h2 className="subtitle is-5 has-text-grey">{this.props.date}</h2>
                <h1 className="title has-text-black is-3">{this.props.title}</h1>
                <p className="has-text-dark">{this.props.blurb}</p>
            </div>
        )
    }
}

class Section extends Component {
    render() {
        return (
            <section className="section">
          <div className="columns is-variable is-8">
            <div className="column is-5 is-offset-1">
              <div className="content is-medium">
              <Blurb title="Big Game Tonight" date="December 16, 2022" blurb="Prepare! The big game cometh!"/>
              </div>
            </div>
            <div className="column is-5">
              <div className="content is-medium">
              <Blurb title="Buh buh buh" date="December 17, 2022" blurb="Man what even is this?"/>
              </div>
            </div>
          </div>
        </section>
        )
    }
}


class MainPage extends Component {
    render() {
        return(
            <div>
              {/* <!-- START NAV --> */}
  <nav className="navbar">
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item" href="../">
          <img src="../images/bulma.png" alt="Logo" />
        </a>
        <span className="navbar-burger burger" data-target="navbarMenu">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenu" className="navbar-menu">
        <div className="navbar-end">
          <div className=" navbar-item">
            <div className="control has-icons-left">
              <input className="input is-rounded" type="email" placeholder="Search" />
              <span className="icon is-left">
                <i className="fa fa-search"></i>
              </span>
            </div>
          </div>
          <a className="navbar-item is-active is-size-5 has-text-weight-semibold">
            Home
          </a>
          <a className="navbar-item is-size-5 has-text-weight-semibold">
            Examples
          </a>
          <a className="navbar-item is-size-5 has-text-weight-semibold">
            Features
          </a>
        </div>
      </div>
    </div>
  </nav>
  {/* <!-- END NAV --> */}


  {/* <!-- Image --> */}
  <section className="hero ">
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <figure className="image is-16by9">
              <img src="https://media.istockphoto.com/photos/group-of-young-teenagers-people-in-team-wear-playing-a-frisbee-game-picture-id1322153132?b=1&k=20&m=1322153132&s=170667a&w=0&h=UZkgwwo6XVnqb3a9n3i0-tHCS_9xih_4k8E6CazwKjE=" alt="People playing Ultimate Frisbee" />
            </figure>
          </div>
        </div>


        <section className="section">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <div className="content is-medium">
                <h2 className="subtitle is-4">December 1, 2022</h2>
                <h1 className="title">Getting Started</h1>
                <p>This is a starter template for creating a beautiful, customizable blog with minimal
                  effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
                  configuration settings can be found in config</p>
              </div>
            </div>
          </div>
        </section>


        <div className="is-divider"></div>


        <section className="section">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <div className="content is-medium">
                <h2 className="subtitle is-4">December 2, 2022</h2>
                <h1 className="title">Getting Started</h1>
                <p>This is a starter template for creating a beautiful, customizable blog with minimal
                  effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
                  configuration settings can be found in config</p>
              </div>
            </div>
          </div>
        </section>




      </div>
    </div>
  </section>


  {/* <!-- newsletter --> */}
  <section className="section">
    <div className="columns">
      <div className="column is-10 is-offset-1">
        <div className="container has-text-centered is-fluid">
          <div className="hero is-light">
            <div className="hero-body">
              <h2 className="title is-4">Sign up for our newsletter</h2>
                <div className="column is-6 is-offset-3">
                  <div className="field has-addons has-addons-centered">
                    <div className="control is-expanded">
                      <input className="input " type="text" placeholder="Email address" />
                    </div>
                    <div className="control">
                      <a className="button is-info">
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


  <section className="hero ">
    <div className="hero-body">
      <div className="container">


        <section className="section">
          <div className="columns is-variable is-8">
            <div className="column is-5 is-offset-1 ">
                <Blurb title="Custom 404 Test" date="December 24, 2022" blurb="Mic check 1,2"/>
            </div>
            <div className="column is-5">
                <Blurb title="Surprise Article" date="December 25, 2022" blurb="Practicing more componentsssss" />
            </div>
          </div>
        </section>


        <div className="is-divider"></div>


        <section className="section">
          <div className="columns is-variable is-8">
            <div className="column is-5 is-offset-1">
              <div className="content is-medium">
                <h2 className="subtitle is-5 has-text-grey">December 5, 2022</h2>
                <h1 className="title has-text-black is-3">Getting Started</h1>
                <p className="has-text-dark">This is a starter template for creating a beautiful, customizable blog with
                  minimal
                  effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
                  configuration settings can be found in config</p>
              </div>
            </div>
            <div className="column is-5">
              <div className="content is-medium">
                <h2 className="subtitle is-5 has-text-grey">December 6, 2022</h2>
                <h1 className="title has-text-black is-3">Getting Started</h1>
                <p className="has-text-dark">This is a starter template for creating a beautiful, customizable blog with
                  minimal
                  effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
                  configuration settings can be found in config</p>
              </div>
            </div>
          </div>
        </section>




      </div>
    </div>
  </section>


  <footer className="footer">
    <div className="content has-text-centered">
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