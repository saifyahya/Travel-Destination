import "./Tours.css"
import Tour from "./Tour/Tour"
import { Link } from "react-router-dom"
function Tours(props) {
  return (

    <div className="tours">
      {
        props.data.map((obj, i) => (
          <Link to={`./city/${obj.id}`}>
            <Tour key={i} tour={obj} />
          </Link>
        ))}
    </div>

  )
}
export default Tours