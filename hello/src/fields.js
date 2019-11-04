import React from 'react';
function fields(){
    return(
        <div className="table">
            <table>
                <tr>
                    <td>
                        <input type="text" className="fname" placeholder="First Name"></input>
                        <input type="text" className="fname" placeholder="Last Name"></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <tr>
                            <input type="text" className="fie" placeholder="Email" ></input>
                        </tr>
                    </td>
                </tr>
                <tr>
                    <td>
                    <input type="password" className="fie" placeholder="Password"></input>
                    </td>
                </tr>
                <tr>
                    <td>
                    <input type="password" className="fie" placeholder="Confirm Password"></input>
                    </td>
                </tr>
            </table>
            <p className="pa"> <input type="checkbox" className="chk" ></input> I accept the Terms of Use & Privacy Policy</p>

           
        </div>
    )
}
export default fields;