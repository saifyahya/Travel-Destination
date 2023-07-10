import db from "../../data/db.json"
import "./Tours.css"
function Tours() {
    return(
<div>
{
        db.map((obj, i) => (
          <div>
 <p>{obj.name}</p>
 <img src ={obj.image} alt={obj.name}/>
          </div> 
        ))
      }
</div>
    )
}
export default Tours