import React from "react";
import  './login.css'
const Login =()=>{
    return (
        <div className={"login-wrapper"}>
            <h1 className={"login-heading"}>Login</h1>
            <div className={ "form"}>
                <form>


                        <div className={"form-control-line"}>
                            <div className={"form-control-line-items"}>
                                <label> E-mail :</label>
                            </div> <br/>
                            <div className={"form-control-line-items"}>
                                <input type={"email"}/>
                            </div>

                        </div>
                        <div className={"form-control-line"}>

                            <div className={"form-control-line-items"}>
                                <label> Password :</label>
                            </div> <br/>
                            <div className={"form-control-line-items"}>
                                <input type={"password"}/>
                            </div>

                            </div>




                </form>


            </div>
        </div>

    )
}
export default  Login