import star from "../images/star.png"


const Card = (props) => {
    return (
    <div className="card">

        <img src={props.image}/>  
        <div>
        
            <span id="star">
           
            <img className="star" src={star}></img>
           <span className="rating">
           <span>({props.review}) </span>
            <span>.{props.country}</span>
           </span>

            </span>
            <p>{props.title} {props.name}</p>
            <p>From {props.price}/person</p>
            

        </div>
        




    </div>
        
    );
}

export default Card;