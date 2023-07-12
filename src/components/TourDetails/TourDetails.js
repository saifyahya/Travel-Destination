import { useParams } from "react-router-dom"
import { useState } from "react";
import data from '../../data/db.json'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function TourDetails() {
    const {id} = useParams();
let x = data.filter(ele =>ele.id==id)
const [expanded, setExpanded] = useState(false);

function infoHandler() {
setExpanded(!expanded)
}

return(
    <>
     <Header/>
    <h3>{x[0].name}</h3>
    <img src={x[0].image} alt={x[0].name} />
    <p>{x[0].price}</p>
    <p>{expanded?`${x[0].info.slice(0, 200)}`:x[0].info}</p>
    <button onClick={infoHandler}>{expanded?"see more":"see less"}</button>
    <Footer/>
    </>
)

}
export default TourDetails