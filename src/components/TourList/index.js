import React, { Component } from 'react';
import Tour from "../Tour/Tour";
import "./TourList.scss";

export default class index extends Component {
    render() {
        return (
            <section className="tourList">
                <Tour />
            </section>
        )
    }
}
