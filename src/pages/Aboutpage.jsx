import Card from "../components/shared/card"
import {Link} from 'react-router-dom'
function Aboutpage(){
    return <Card>
      <div className='about'>
        <h1>
            About this Project
        </h1>
        <p>
            this is react app to leave feedback for a product or a service
        </p>
        <p>Version 1.0.0</p>

        <p><Link to="/">Back to home</Link></p>
      </div>
    </Card>
}
export default Aboutpage 