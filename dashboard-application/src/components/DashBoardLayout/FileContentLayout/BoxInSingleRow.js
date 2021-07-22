import React from 'react';
import FileBox from './FileConentBox';
import classes from './BoxInSingleRow.module.css';
import { useSelector} from 'react-redux';



const BoxInSingleRow = () => {

    const currentLocation = useSelector((state) => state.currentFiles.location)

    return (
        <div>
            <h1 className={classes.h1}>{currentLocation}</h1>
            <div className={classes.rowBoxContainer}>
                <FileBox />
                <FileBox />
                <FileBox />
                <FileBox />
                <FileBox />
                <FileBox />
                <FileBox />
                <FileBox />
                <FileBox />
                <FileBox />
                <FileBox />
                <FileBox />
                <FileBox />
                <FileBox />
                <FileBox />
                <FileBox />
            </div>
        </div>
    )
}

export default BoxInSingleRow;