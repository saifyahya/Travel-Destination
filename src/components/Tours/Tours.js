import "./Tours.css"
import Tour from "./Tour/Tour"
function Tours(props) {
  return (
    <div className="tours">
  <Tour  tour = {props.data}/>
  </div>
  )
}
export default Tours