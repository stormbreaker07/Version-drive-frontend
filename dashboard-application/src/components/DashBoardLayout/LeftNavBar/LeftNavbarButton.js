import React from 'react';
import classes from './LeftNavBarButton.module.css'
import ProgressBarContainer from '../ProgressBar/ProgressBarContainer';
import FileCopyRoundedIcon from '@material-ui/icons/FileCopyRounded';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import StorageRoundedIcon from '@material-ui/icons/StorageRounded';
import { useDispatch } from 'react-redux';
import { myFiles , sharedFiles , requestedFiles } from '../../../store/Actions';
import { display } from '@material-ui/system';

const LeftNavBarButton = (props) => {

    const dispatch = useDispatch();

    const onChangeFolder = (e) => {
        e.preventDefault();
        switch(props.value) {
            case "My Files" : {
                dispatch(myFiles());
                break;
            }
            case "Shared Files" : {
                dispatch(sharedFiles());
                break;
            }
            case "Requested Files" : {
                dispatch(requestedFiles());
                break;
            }
            default : {
                display(myFiles);
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

export default LeftNavBarButton;