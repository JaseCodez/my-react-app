import './DetailedCard.css'

interface Props {
    wo_style: string, 
    detailed_wo: string[]
}

// [hello, world]

function DetailedCard(workout: Props) {
    return (
        <div className='detailed'>
            <h2>{workout.wo_style}</h2>
             <div className='workout-container'>
                {workout.detailed_wo.map((workout: string)=>{
                    return <div className='contact-row'>
                        <p>{workout}</p>
                    </div>
                })}     

            </div>
            
        </div>
    );
}

export default DetailedCard;