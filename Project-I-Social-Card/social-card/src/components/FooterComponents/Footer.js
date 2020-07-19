import React from 'react';
import './Footer.css';


 let commentNum=0;
function cb(){
    
    commentNum+=1;
    return commentNum;
};
const Footer= () => {
    return(
        <div className="footerdiv">
        <button className="far fa-comment" onClick={cb}></button>
        <i className="fas fa-sync"></i> 
        <i className="far fa-heart"></i>
        <i className="far fa-envelope"></i>
        
        </div>
    )
} 

export default Footer;