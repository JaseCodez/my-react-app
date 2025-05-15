interface Workout {
  day: string, 
  wo_style: string 
  detailed_wo: string[]
}

const workouts: Workout[] = [];

let sun: Workout = {
    day: "Sunday", 
    wo_style: "Rest", 
    detailed_wo: ["hello"]
}

let mon: Workout = {
    day: "Monday", 
    wo_style: "Push", 
    detailed_wo: ["world"] // write
}

let tue: Workout = {
    day: "Tuesday", 
    wo_style: "Pull", 
    detailed_wo: [] // write
}

let wed: Workout = {
    day: "Wednesday", 
    wo_style: "Rest", 
    detailed_wo: []
}

let thu: Workout = {
    day: "Thursday",
    wo_style: "Lower", 
    detailed_wo: []
}

let fri: Workout = {
    day: "Friday", 
    wo_style: "Upper", 
    detailed_wo: []
}

let sat: Workout = {
    day: "Saturday", 
    wo_style: "Rest", 
    detailed_wo: []
}

workouts.push(sun)
workouts.push(mon)
workouts.push(tue)
workouts.push(wed)
workouts.push(thu)
workouts.push(fri)
workouts.push(sat)

export default workouts;