import React, { useContext } from 'react'
import { multiStepContext }from './StepContext'
import AdminDetailsForm from '../../Images/Sign_in_up/ServiceProvider/AdminDetailsForm.svg'
import category from '../CategoryList/categroyList'
import {
        Container,
        ImageContainer,
        Image,
        FormContainer,
        FormContent,
        TextFieldContainer,
        ButtonContainer,
        ColorButton,
        CssTextField,
} from './Style'

const FormPersonalDetails = () => {

    // For Form to Work MultiStep // 
    const { setStep, userData, setUserData } = useContext(multiStepContext);
    // // // // // // // // // // //

    return (
        <Container>
            <ImageContainer>
                <Image src={AdminDetailsForm} alt=''/>
            </ImageContainer>
            <FormContainer>
                <FormContent>
                    <TextFieldContainer>
                        <CssTextField 
                        id="custom-css-outlined-input"
                        label="Name"
                        value={userData["name"]}
                        onChange={(e)=>setUserData({...userData, "name":e.target.value})}
                        margin="normal"
                        variant="outlined"
                        color="secondary"
                        className="TextField"
                        required
                        />
                    </TextFieldContainer>
                    <TextFieldContainer>
                        <CssTextField 
                        label="Contact number"
                        value={userData["contactNumber"]}
                        onChange={(e)=>setUserData({...userData, "contactNumber":e.target.value})}
                        margin="normal"
                        variant="outlined"
                        color="secondary"
                        className="TextField"
                        required
                        /> 
                    </TextFieldContainer>
                    <TextFieldContainer>
                        <CssTextField 
                        label="Email"
                        value={userData["adminEmail"]}
                        onChange={(e)=>setUserData({...userData, "adminEmail":e.target.value})}
                        margin="normal"
                        variant="outlined"
                        color="secondary"
                        className="TextField"
                        required
                        /> 
                    </TextFieldContainer>
                    <TextFieldContainer>
                        <CssTextField 
                        label="Adhar number"
                        value={userData["adharNumber"]}
                        onChange={(e)=>setUserData({...userData, "adharNumber":e.target.value})}
                        margin="normal"
                        variant="outlined"
                        color="secondary"
                        className="TextField"
                        required
                        /> 
                    </TextFieldContainer>
                    <TextFieldContainer>
                        <CssTextField 
                        label="Select Category"
                        value={userData["category"]}
                        onChange={(e)=>setUserData({...userData, "category":e.target.value})}
                        margin="normal"
                        variant="outlined"
                        color="secondary"
                        className="TextField"
                        fullWidth
                        name="state"
                        select
                        required
                        SelectProps={{ native: true }}
                        >
                            {category.map((option) => (
                            <option
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </option>
                            ))}
                        </CssTextField>
                    </TextFieldContainer>
                    <ButtonContainer>
                        <ColorButton 
                        variant="contained" 
                        color="primary" 
                        className={`${""} ${"Button"}`}
                        onClick={ () => setStep(2)}
                        >
                            Next
                        </ColorButton>
                    </ButtonContainer>
                </FormContent>
            </FormContainer>
        </Container>
    )
}

export default FormPersonalDetails
