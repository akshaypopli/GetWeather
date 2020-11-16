import React, { Component } from 'react'
import CurrentDay from '../../components/CurrentDay/CurrentDay';
import BarChart from '../UI/BarChart/BarChart';

import axios from 'axios';
import './Weather.css';

class Weather extends Component {
    state = {
        data: {},
        barChartData: []
    }

    componentDidMount() {
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=abe2d83043cd4dffa9843b8134ca88d0').then(res=>{
            this.setState({data: {...res.data}})
        })
    }

    render() {
        console.log(this.state.data);
        return (
            <div className="row col-sm-12">
                <div className="col-sm-4"><CurrentDay weather={this.state.data} /></div>
                <div className="col-sm-8">
                    <div className="row">
                        <div className="card full-width margin-top-10 margin-bottom-10">
                            <div className="card-body ">
                                <BarChart />
                            </div>
                        </div>
                        <div className="card full-width margin-top-10 margin-bottom-10 fixed-height">
                            <div className="card-body">
                                <BarChart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Weather;