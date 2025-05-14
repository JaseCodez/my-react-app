import './Card.css'

interface Props {
    day: string, 
    wo_style: string
    f: ()=>void
}

function Card(workout: Props) {
    return (
        <div className="card" onClick={workout.f}>
            <h1>{workout.day}</h1>

            <p>{workout.wo_style}</p>
        </div>
    );
}

export default Card; 