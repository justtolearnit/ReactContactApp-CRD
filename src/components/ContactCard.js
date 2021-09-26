import React from "react";
import image from "../images/profile.ico";
const ContcatCards = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className="item">
            <div className="content" >
                <img className="ui avatar image" src={image} alt="profile" />
                <div className="header"><h3>{name}</h3></div>
                <div>{email}</div>
            </div>
            <i className="trash alternate outline icon" onClick={e=>props.idFromCard(id)}></i>
        </div>
    );
}
export default ContcatCards;