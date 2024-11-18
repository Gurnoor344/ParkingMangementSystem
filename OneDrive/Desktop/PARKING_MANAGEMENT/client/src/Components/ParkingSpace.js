import React from "react";
import "../Styles/ParkingSpace.css";


const ParkingSpace=()=>{
    return(
        <div className="mainContainerParkingSpace">
        <div>
            <h1>Parking Space</h1>
            </div>
            <div className="parkingSpaceContainer">
                    <div className="twoWheeler">
                        <h2> 2 wheeler parking</h2>
                        <div className="allWheelerContainer">
                            <span>available</span>
                            <span>available</span>
                            <span>available</span>
                            <span>available</span>
                            <span>available</span>
                            <span>available</span>
                        </div>
                    </div>
                    <div className="threeWheeler">
                    <h2>3 wheeler parking</h2>
                    <div className="allWheelerContainer">
                        <span>available</span>
                        <span>available</span>
                        <span>available</span>
                        <span>available</span>
                        <span>available</span>
                        <span>available</span>

                    </div>
                    </div>
                <div className="fourWheeler">
                    <h2> 4 wheeler parking</h2>
                    <div className="allWheelerContainer">
                        <span>avaialble </span>
                        <span>avaialble </span>
                        <span>avaialble </span>
                        <span>avaialble </span>
                        <span>avaialble </span>
                        <span>avaialble </span>
                    </div>
                </div>

                </div>
            </div>
        
    )
}

export default ParkingSpace