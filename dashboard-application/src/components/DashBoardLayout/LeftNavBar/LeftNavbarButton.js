import React from 'react';
import classes from './LeftNavBarButton.module.css'
import ProgressBarContainer from '../ProgressBar/ProgressBarContainer';
import FileCopyRoundedIcon from '@material-ui/icons/FileCopyRounded';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import StorageRoundedIcon from '@material-ui/icons/StorageRounded';
import { connect  } from 'react-redux';
import { myFilesAction , sharedFilesAction , requestedFilesAction } from '../../../store/actions/Actions';
import {sagaFetchFileActionRequest} from '../../../store/actions/FetchMyFilesInfoAction'
import {sagaFetchSharedFileActionRequest} from '../../../store/actions/fetchSharedFileActions'
import { sagaFetchRequestedFileActionRequest } from '../../../store/actions/FetchRequestedFilesActions';

const LeftNavBarButton = (props) => {


    const onChangeFolder = (e) => {
        e.preventDefault();
        switch(props.value) {
            case "My Files" : {
                props.myFilesDispatcher();
                console.log(props.userId);
                props.loadFileInfo(props.userId);
                break;
            }
            case "Shared Files" : {
                props.sharedFilesDispatcher();
                props.loadSharedFileInfo(props.userId);
                break;
            }
            case "Requested Files" : {
                props.requestedFileDispatcher();
                props.loadRequestedFileInfo(props.userId);
                break;
            }
            default : {
                props.myFilesDispatcher();
                props.loadFileInfo(props.userId);
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
            requestedFileDispatcher : () => dispatch(requestedFilesAction()),
            loadFileInfo : (data) => dispatch(sagaFetchFileActionRequest(data)),
            loadSharedFileInfo : (data) => dispatch(sagaFetchSharedFileActionRequest(data)),
            loadRequestedFileInfo : (data) => dispatch(sagaFetchRequestedFileActionRequest(data))
        }
        
}

const mapStateToProps = (state , ownProps) => {
    return {
        ...ownProps,
        userId : state.Auth.data.id,
        filesInfo : state.fetchMyFileInfo.data
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(LeftNavBarButton);