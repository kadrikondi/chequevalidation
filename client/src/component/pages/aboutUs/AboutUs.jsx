import React, { Component } from 'react'
import AimandObj from '../AimandObj/AimandObj'
import About from './About'
import AboutDetail from './AboutDetail'
export default class AboutUs extends Component {
    render() {
        return (
            <div>
               
                <About/>
                <hr/>
                <AboutDetail/>
                <AimandObj/>
            </div>
        )
    }
}

