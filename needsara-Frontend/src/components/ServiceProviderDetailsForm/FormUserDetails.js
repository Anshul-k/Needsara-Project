import React, { useContext } from 'react'
import { multiStepContext } from './StepContext'
import AdminDetailsForm from '../../Images/Sign_in_up/ServiceProvider/AdminDetailsForm.svg'
import states from '../../components/Dashboard/CustomerDB/States'
import timings from '../CategoryList/timingsOpen'
import {
        Container,
        ImageContainer,
        Image,
        FormContainer,
        FormContent,
        TextFieldContainer,
        ButtonContainer,
        ColorButton,
        CssTextField
} from './Style'

const FormUserDetails = () => {
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
                label="Address"
                value={userData["address"]}
                onChange={(e)=>setUserData({...userData, "address":e.target.value})}
                margin="normal"
                variant="outlined"
                color="secondary"
                className="TextField"
                required
                />
              </TextFieldContainer>
              <TextFieldContainer>
                <CssTextField 
                label="Pin code"
                value={userData["pin"]}
                onChange={(e)=>setUserData({...userData, "pin":e.target.value})}
                margin="normal"
                variant="outlined"
                color="secondary"
                className="TextField"
                required
                /> 
              </TextFieldContainer>
              <TextFieldContainer>
                <CssTextField 
                label="District"
                value={userData["district"]}
                onChange={(e)=>setUserData({...userData, "district":e.target.value})}
                margin="normal"
                variant="outlined"
                color="secondary"
                className="TextField"
                required
                />
              </TextFieldContainer>
              <TextFieldContainer>
                <CssTextField 
                label="Select State"
                value={userData["state"]}
                onChange={(e)=>setUserData({...userData, "state":e.target.value})}
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
                    {states.map((option) => (
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
                label="Open Timings"
                value={userData["timingsopen"]}
                onChange={(e)=>setUserData({...userData, "timingsopen":e.target.value})}
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
                    {timings.map((option) => (
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
                className={`${""} ${"Button"}`}
                variant="contained"
                color="primary"
                onClick={() => setStep(1)}
                >
                  Prev
                </ColorButton>
                <ColorButton 
                className={`${""} ${"Button"}`}
                variant="contained"
                color="primary"
                onClick={() => setStep(3)}
                >
                  Next
                </ColorButton>
              </ButtonContainer>
          </FormContent>
      </FormContainer>
    </Container>
  )
}

export default FormUserDetails


