import React from 'react';
import FileVersionTable from './FileVersionList';
import classes from './ViewFolder.module.css';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';


const ViewFolder = (props) => {

    let files = props.data;
    console.log(props.folderName)

    let fileToShow = [];
    for(let i=0;i<files.length;i++) {
        if(files[i].fileName === props.folderName ) {
            fileToShow.push(files[i]);
        }
    }


    return (
        <div className={classes.container}>
        <h1>hello there</h1>
            <CloseOutlinedIcon onClick={() => props.clickHandler()} />
        <FileVersionTable filesList={fileToShow}/>
        </div>
    )
}


export default ViewFolder;