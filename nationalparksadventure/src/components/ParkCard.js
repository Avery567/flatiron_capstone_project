import {Link} from "react-router-dom";

function ParkCard ({park}) {

  // console.log(park.id)
  return (
 <>
  <div id="card">
      <img variant="top" src= {park.images[0].url} />
        <div id="parkname"> 
            {park.fullName}
        </div>
        <nav><Link to={`/parkcontainer/${park.id}`}>View More Park Details</Link></nav>
 
        <div id="state">
          <h3>State: </h3>
          <p>{park.states}</p>
          {/* <p>{park.description}</p> */}
        </div>
  </div>
</>
  )
}

export default ParkCard