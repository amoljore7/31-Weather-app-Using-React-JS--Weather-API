import React from 'react';


const Weather = (props) => {
    return (
        <div className="container">
            <div className="cards">
                <h1>{props.city}, {props.country}</h1>
                <h5 className="py-4">
                    <i className={`wi ${props.icon} display-1`}></i>
                </h5>
                <h1 className="py-2">{props.celsius}&deg;</h1>
                {minmaxTemp(props.temp_min, props.temp_max, props.description)}
            </div>
        </div>
    );
};

function minmaxTemp(min, max,description) {
    return (
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
            <h3 className="py3">{description}</h3>
        </h3>
    )
}

export default Weather;