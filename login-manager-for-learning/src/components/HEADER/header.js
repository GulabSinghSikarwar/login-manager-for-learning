import  React from  'react'
import  './header.css'
const Header=()=>{
return(
    <header className={"header-content"}>
        <h1 className={"heading"}>
            A Typical Page
        </h1>
        <div className={"features"}>
            <div className={"users"}>Users </div>
            <div className={"Admin"}>Admin  </div>
           {/*<button className={"heading-button"}> Log Out</button>*/}
           {/*<button className={"heading-button"}> Log In</button>*/}

            <div className={"heading-button"}> Log In</div>
            <div className={"heading-button"}>  Log Out </div>


        </div>

    </header>
)
}
export default  Header;
