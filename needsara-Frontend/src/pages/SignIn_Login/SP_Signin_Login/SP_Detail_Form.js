import React, { useContext } from 'react'
import styled from 'styled-components'
import { Stepper, StepLabel, Step } from '@material-ui/core'
import { multiStepContext } from '../../../components/ServiceProviderDetailsForm/StepContext'
import FormUserDetails from '../../../components/ServiceProviderDetailsForm/FormUserDetails'
import FormPersonalDetails from '../../../components/ServiceProviderDetailsForm/FormPersonalDetails'
import FormOtherDetails from '../../../components/ServiceProviderDetailsForm/FormOtherDetails'
import Success from '../../../components/ServiceProviderDetailsForm/Success'

import { makeStyles, withStyles } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import clsx from 'clsx';
import StepConnector from '@material-ui/core/StepConnector';

// // // // // // // // // // // // Styled Components Starts // // // // // // // // // // // // // // 
const OverallContainer = styled.div`
    margin-top: -1.5rem;
    display: flex;
    width: 100%;
    height: 250px;
    align-items: center;
    justify-content: center;
`
const CenterStepper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    flex-direction: column;
    box-shadow: 5px 0px 50px -2px rgba(0,0,0,0.5);
    border-radius: 20px;
`
const H1 = styled.h1`
    margin: 0.4em ;
    font-family: Garamond, sans-serif;
    font-weight: 700;
    font-size: 2.2rem;
    color: rgba(2, 13, 56, 0.75);
`

const ColorlibConnector = withStyles({
    alternativeLabel: {
      top: 22,
    },
    active: {
      '& $line': {
        backgroundImage:
          'linear-gradient( 136deg, rgb(56, 211, 159) 0%, rgb(0, 126, 142) 50%, rgb(47, 72, 88) 100%)',
      },
    },
    completed: {
      '& $line': {
        backgroundImage:
          'linear-gradient( 136deg, rgb(56, 211, 159) 0%, rgb(0, 126, 142) 50%, rgb(47, 72, 88) 100%)',
      },
    },
    line: {
      height: 3,
      border: 0,
      backgroundColor: '#eaeaf0',
      borderRadius: 1,
    },
  })(StepConnector);
  
const useColorlibStepIconStyles = makeStyles({
    root: {
      backgroundColor: '#ccc',
      zIndex: 1,
      color: '#fff',
      width: 50,
      height: 50,
      display: 'flex',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    active: {
      backgroundImage:
        'linear-gradient( 136deg, rgba(56, 211, 159, 0.99) 0%, rgba(0, 126, 142, 0.85) 50%, rgba(47, 72, 88, 0.8) 100%)',
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
      backgroundImage:
        'linear-gradient( 136deg, rgba(56, 211, 159, 0.99) 0%, rgba(0, 126, 142, 0.85) 50%, rgba(47, 72, 88, 0.8) 100%)',
    },
  });
// // // // // // // // // // // // Styled Components Ends // // // // // // // // // // // // // // 

// // Custom Stepper Components // //

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;
  
    const icons = {
      1: <SettingsIcon />,
      2: <GroupAddIcon />,
      3: <VideoLabelIcon />,
      4: <SettingsIcon/>,
    };
    return (
        <div
          className={clsx(classes.root, {
            [classes.active]: active,
            [classes.completed]: completed,
          })}
        >
          {icons[String(props.icon)]}
        </div>
      );
}
  
// // Custom Stepper Components // //

  

const SPDetailForm = () => {

    const { currentStep } = useContext(multiStepContext)
    function showStep(step) {
        switch(step){
            case 1:
                return <FormPersonalDetails/>
            case 2:
                return <FormUserDetails/>
            case 3:
                return <FormOtherDetails/>
            case 4:
                return <Success/>
            default:
                return <FormPersonalDetails/>
        }
    }
    return (
        <OverallContainer>
          { currentStep < 4 
            ?
            <CenterStepper>
                <H1>Enter Your Details</H1>
                {/*<Stepper style={{width: '70%'}} activeStep= {currentStep-1} orientation="horizontal">
                        <Step>
                            <StepLabel></StepLabel>
                        </Step>
                        <Step>
                            <StepLabel></StepLabel>
                        </Step>
                        <Step>
                            <StepLabel></StepLabel>
                        </Step>
                    </Stepper>*/}
                <Stepper alternativeLabel style={{width: '90%'}} activeStep={currentStep-1} connector={<ColorlibConnector />}>
                    <Step>
                        <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
                    </Step>
                    <Step>
                        <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
                    </Step>
                    <Step>
                        <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
                    </Step>
                </Stepper>
            </CenterStepper>
            : 
            null
          }
                { showStep(currentStep) }  
        </OverallContainer>
    )
}

export default SPDetailForm
