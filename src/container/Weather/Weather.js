import React, { Component } from 'react'
import CurrentDay from '../../components/CurrentDay/CurrentDay';

import axios from 'axios';
import './Weather.css';

class Weather extends Component {
    state = {
        data: {}
    }

    componentDidMount() {
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=abe2d83043cd4dffa9843b8134ca88d0').then(res=>{
            this.setState({data: {...res.data}})
        })
    }

    render() {
        console.log(this.state.data);
        return (
            <div className="row col-sm-12 full-height">
                <div className="col-sm-4"><CurrentDay weather={this.state.data} /></div>
                <div className="col-sm-7">sdbfkjsdn</div>
            </div>
        )
    }
}

export default Weather;