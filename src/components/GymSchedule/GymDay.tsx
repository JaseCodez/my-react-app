import './GymDay.css'
import React, { useState } from "react"; 
import Card from "./Card";
import DetailedCard from './DetailedCard';

interface Props {
    day: string, 
    wo_style: string,
    detailed_wo: string[]
}


function GymDay(workout: Props) {
    const [modal, setModal] = useState(false); 

    const toggleModal = () => {
       setModal(!modal) 
    }

    return (
    <div className="gym-day">
        <Card f={toggleModal} day={workout.day} wo_style={workout.wo_style}/>
        <DetailedCard wo_style={workout.wo_style} detailed_wo={workout.detailed_wo}/>
      
    </div>

    ); 
}

export default GymDay;