import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Tours  from "../Tours/Tours"
function Home(props) {
    return (
        <div className="home">
<Header/>
<Tours data ={props.data}/>       {/*recieve the data from App and pass it again as props to Tours*/}
<Footer/>
        </div>
    )
     }

export default Home