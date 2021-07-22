import React from 'react';
import classes from './FileContentBox.module.css';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';


const FileBox = () => {

    const clickHandler = () => {
        console.log("ya the icon is clicked !")
    }


    return (
        <div>
            <div className={classes.boxSize} type="button">
                <div className={classes.columnPattern}>
                    <DescriptionRoundedIcon className={classes.FileIcon} />
                    <div className={classes.rowPattern}>
                        <h3>the file description</h3>
                        <MoreVertRoundedIcon className={classes.MoreVerticalIcon} onClick={clickHandler}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FileBox;