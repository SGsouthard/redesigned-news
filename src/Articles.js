import React, { Component } from "react";

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