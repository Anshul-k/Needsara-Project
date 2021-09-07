import React, { useContext } from 'react'
import { multiStepContext } from './StepContext'
import AdminDetailsForm from '../../Images/Sign_in_up/ServiceProvider/AdminDetailsForm.svg'
import timingsclose from '../CategoryList/timingsClose'
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

const FormOtherDetails = () => {
  // For Form to Work MultiStep //
  const { setStep, userData, setUserData, submitData} = useContext(multiStepContext);
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
                label="Close Timings"
                value={userData["timingsclose"]}
                onChange={(e)=>setUserData({...userData, "timingsclose":e.target.value})}
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
                    {timingsclose.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                    ))}
                </CssTextField>
              </TextFieldContainer>
              <TextFieldContainer>
                <CssTextField 
                id="custom-css-outlined-input"
                label="Shop License Number"
                value={userData["license"]}
                onChange={(e)=>setUserData({...userData, "license":e.target.value})}
                margin="normal"
                variant="outlined"
                color="secondary"
                className="TextField"
                />
              </TextFieldContainer>
              <TextFieldContainer>
                <CssTextField 
                id="custom-css-outlined-input"
                label="Visiting Charges"
                value={userData["visitingCharges"]}
                onChange={(e)=>setUserData({...userData, "visitingCharges":e.target.value})}
                margin="normal"
                variant="outlined"
                color="secondary"
                className="TextField"
                />
              </TextFieldContainer>
              <TextFieldContainer>
                <CssTextField 
                id="outlined-multiline-static"
                label="Job Description"
                value={userData["jobdescription"]}
                onChange={(e)=>setUserData({...userData, "jobdescription":e.target.value})}
                margin="normal"
                variant="outlined"
                color="secondary"
                className="TextField"
                multiline
                rows={5}
                required
                />
              </TextFieldContainer>
              <ButtonContainer>
                <ColorButton 
                className={`${""} ${"Button"}`}
                variant="contained"
                color="primary"
                onClick={() => setStep(2)}
                >
                  Prev
                </ColorButton>
                <ColorButton 
                className={`${""} ${"Button"}`}
                variant="contained"
                color="primary"
                onClick={submitData}
                >
                  Submit
                </ColorButton>
              </ButtonContainer>
          </FormContent>
      </FormContainer>
  </Container>
  )
}

export default FormOtherDetails
