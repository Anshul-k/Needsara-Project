import React, { useState } from 'react'
import SPDetailForm from '../../pages/SignIn_Login/SP_Signin_Login/SP_Detail_Form'

export const multiStepContext = React.createContext();
const StepContext = () => {
    const [currentStep, setStep] = useState(1);
    const [userData, setUserData] = useState([]);
    const [finalData, setFinalData] = useState([]);
// // // // // // // // // // // // REGISTER Connect Start// // // // // // // // // // // //
      // Submitting the Register form
      function onSubmitRegister(event){
        fetch('http://localhost:3000/register_admin',{
          method: 'put',
          headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
          body: JSON.stringify({
            userName: localStorage.getItem("Admin"),
            name: userData.name,
            contactNumber: userData.contactNumber,
            adminEmail: userData.adminEmail,
            adharNumber: userData.adharNumber,
            category: userData.category,
            address: userData.address,
            pin: userData.pin,
            district: userData.district,
            state: userData.state,
            timingsopen: userData.timingsopen,
            timingsclose: userData.timingsclose,
            license: userData.license,
            jobdescription: userData.jobdescription,
            visitingCharges: userData.visitingCharges
          })
        }).then(res => res.json({
            Message: 'Successfully send the data'
        }))   
      }
// // // // // // // // // // // // REGISTER Connect End// // // // // // // // // // // //

    function submitData(){
        localStorage.clear();
        setFinalData(finalData => [...finalData, userData]);
        setUserData('');
        setStep(4);
        onSubmitRegister();
    }
    return (
        <div>
            <multiStepContext.Provider value={{currentStep, setStep, userData, setUserData, finalData, setFinalData, submitData}}>
                <SPDetailForm/>
            </multiStepContext.Provider>
        </div>
    )
}

export default StepContext
