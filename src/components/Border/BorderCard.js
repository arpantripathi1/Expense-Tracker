import "./BorderCard.css"


function BorderCard(props){
    //  border-card is personal class of BorderCard component
    const classes = "border-card " + props.className ;

    return <div className={classes}>{ props.children }</div>;
}

export default BorderCard ;