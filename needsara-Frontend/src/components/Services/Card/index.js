import React from 'react'
import { Link } from 'react-router-dom'
import {CardContainer, ImageContainer, CardH2, CardP} from './CardElements'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const Card = ({image, title, body}) => {

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
        {
            localStorage.getItem('User')
            ?
            <Link style={{textDecoration: "none"}} to="/servicedetails">
                <CardContainer>
                    <ImageContainer src={image} alt=''/>
                    <CardH2>{title}</CardH2>
                    <CardP>{body}</CardP>
                </CardContainer>
            </Link>
            :
            <React.Fragment>
                <CardContainer onClick={handleClickOpen}>
                    <ImageContainer src={image} alt=''/>
                    <CardH2>{title}</CardH2>
                    <CardP>{body}</CardP>
                </CardContainer>
                <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">{"You are not Signed in as a Customer"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        In order to use the services you need to sign in as a customer first.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Close
                    </Button>
                    <Link style={{textDecoration: "none"}} to="/signin_user">
                        <Button onClick={handleClose} color="primary" autoFocus>
                            Sign in
                        </Button>
                    </Link>
                    </DialogActions>
                </Dialog>
            </React.Fragment>    
        }  
        </React.Fragment>  
    )
}

export default Card
