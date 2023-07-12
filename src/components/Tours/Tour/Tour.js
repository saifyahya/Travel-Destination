import { Link } from "react-router-dom"
import './Tour.css'
function Tour(props) {
    return (
        <div className="tour-container">
        {
            props.tour.map((obj, i) => (
            <div key={i} className="tour">
            <Link to={`/city/${obj.id}`}>
            <h3>{obj.name}</h3>
            <img src={obj.image} alt={obj.name} />
            </Link>
          </div>
        ))
    }
    </div>
    )
}
export default Tour