import React from 'react';
import classes from './FileContentBox.module.css';
import FolderOpenTwoToneIcon from '@material-ui/icons/FolderOpenTwoTone';

const FileBox = (props) => {

    const clickHandler = () => {
        console.log("ya the icon is clicked !")
    }
    //console.log(props.fileDesc)


    return (
        <div  onClick={clickHandler}>
            <div className={classes.boxSize} type="button">
                <div className={classes.columnPattern}>
                    <FolderOpenTwoToneIcon className={classes.FileIcon} />
                    <div className={classes.rowPattern}>
                        <h3>{props.fileDesc.data.fileName}</h3>
                        {/* <MoreVertRoundedIcon className={classes.MoreVerticalIcon}/> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FileBox;