import React from 'react';
import classes from './LeftNavBarButton.module.css'
import ProgressBarContainer from '../ProgressBar/ProgressBarContainer';
import FileCopyRoundedIcon from '@material-ui/icons/FileCopyRounded';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import StorageRoundedIcon from '@material-ui/icons/StorageRounded';
import { connect  } from 'react-redux';
import { myFilesAction , sharedFilesAction , requestedFilesAction } from '../../../store/Actions';
import { display } from '@material-ui/system';

const LeftNavBarButton = (props) => {

   // const dispatch = useDispatch();
    const getFilesInfo = (filesInfo) => {
        console.log(filesInfo);
    }



    const onChangeFolder = (e) => {
        e.preventDefault();
        switch(props.value) {
            case "My Files" : {
                props.myFilesDispatcher();

                break;
            }
            case "Shared Files" : {
                props.sharedFilesDispatcher();
                break;
            }
            case "Requested Files" : {
                props.requestedFileDispatcher();
                break;
            }
            default : {
                props.myFilesDispatcher();
                break;
            }
        }
    }

    let x;
    if (props.value === "My Files") {
        x = <FileCopyRoundedIcon />;
    }
    else if (props.value === "Shared Files") {
        x = <ArrowBackRoundedIcon />;
    }
    else if (props.value === "Requested Files") {
        x = <ArrowForwardRoundedIcon />;
    } else {
        x = <div className={classes.outerContainer} role="button">
                <div className={classes.column}>
                    <StorageRoundedIcon />
                    <div className={classes.innerText}>{props.value}</div>
                </div>
                <ProgressBarContainer />
        </div>
    }


    return (
        props.value === "Storage Used" ?
            x : <div onClick={onChangeFolder} value={props.value}> 
                <div className={classes.button} role="button">
                    {x}
                    <div className={classes.innerText}>{props.value}</div>
                </div>
            </div>
    )
}



const mapDispatchToProps = (dispatch) => {
        return {
            myFilesDispatcher : () => dispatch(myFilesAction()) ,
            sharedFilesDispatcher : () => dispatch(sharedFilesAction()) ,
            requestedFileDispatcher : () => dispatch(requestedFilesAction())
        }
        
}

export default connect(null , mapDispatchToProps)(LeftNavBarButton);