import React, { useState } from 'react';
import FileBox from './FileConentBox';
import classes from './BoxInSingleRow.module.css';
import { connect} from 'react-redux';



const BoxInSingleRow = (props) => {

    // const currentLocation = useSelector((state) => state.currentFiles.location)

    const [myFiles , setMyFiles] = useState({
        files : []
    });

    


    return (
        <div>
            <h1 className={classes.h1}>{props.currentFiles.location}</h1>
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

const mapStateToProps = (state , ownprops) => {
    return {
        ...ownprops,
        currentFiles: state.currentFiles,
    }
}


export default connect(mapStateToProps , null)(BoxInSingleRow);