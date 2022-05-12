function Card(props){
    return(
        <div>
            <br/>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8FBOgivoXabdutBZPyGewdIvOgGxAihD6Ag&usqp=CAU"></img>
<h3>{props.title}
</h3>
<h4>{props.price}</h4>
<h5>{props.color}</h5>
<button  onClick={""}>VIEW DETAILS HERE...</button>
        </div>
    )

}

function Card1(props){
    return(
        <div>
            <br/>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpOjx_ZsjA6lQPFhMeiHozDh_HB3asDvdhQ&usqp=CAU"></img>
<h3>{props.title}
</h3>
<h4>{props.price}</h4>
<h5>{props.color}</h5>
<button  onClick={""}>VIEW DETAILS HERE...</button>
        </div>
    )

}



export default Card;







