import React from 'react';
import './CurrentDay.css';

const CurrentDay = (props) => {
    console.log(props.weather);
    return (
        <div className="CurrentDay">
            {/* search */}
            <div className="bg-weather">
                <h1>{JSON.stringify(props.weather.main.temp)}</h1>
                <div className="col-sm-12">
                    <h4 className="col-sm-6">
                        {JSON.stringify(props.weather.name)}
                    </h4>
                    <h2 className="col-sm-6">
                    
                    </h2>
                </div>
                <div className="col-sm-12">
                    <div className="col-sm-6">
                        Feels Like {JSON.stringify(props.weather.main.feels_like)}
                    </div>
                    <div className="col-sm-6">
                    
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default CurrentDay;
