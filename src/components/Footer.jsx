import React from "react";


const ano = new Date().getFullYear();

function Footer(){
    return(
        <>
            <footer>
                <p>Math Rodrig</p>
                <p>Copyright {ano}</p>
            </footer>
        </>        
    )
}

export default Footer;