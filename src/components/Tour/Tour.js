import React, { Component } from 'react';
import "./Tour.scss";

export default class Tour extends Component {
    render() {
        return (
            <article className="tour">
               <div className="img-container">

                   <img src="https://www.orogenicgroup-bd.com/front/img/team/matin.jpg"
                    style={{  width: "200px" }}
                    alt="First slide"
                    />

                   <span className="close-btn">
                       <i className="fas fa-window-close" />
                   </span>
               </div>  
               <div className="tour-info">
                    <h3>City</h3>
                    <h4>Name</h4>
                    <h5>
                        info{" "}
                        <span>
                        <i className="fas fa-caret-square-down" />
                        </span>
                    </h5>
                    <p>
                    while we probably can come up with a better name for this mixin than desktop
                    </p>
                </div>
            </article>
        )
    }
}
