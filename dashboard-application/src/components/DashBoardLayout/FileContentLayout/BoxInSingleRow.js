import FileBox from './FileConentBox';
import classes from './BoxInSingleRow.module.css';
import { connect } from 'react-redux';
import { MY_FILES, SHARED_FILES } from '../../../store/staticVariable';


const BoxInSingleRow = (props) => {

    // const currentLocation = useSelector((state) => state.currentFiles.location)

    console.log(props.loadMyfiles);


    let filesInfo = [];
    
    
    switch (props.currentFiles) {
        case (MY_FILES): {
            filesInfo = props.loadMyfiles;
            break;
        }
        case (SHARED_FILES): {
            filesInfo = props.sharedfiles
            console.log(props.sharedfiles)
            break;
        }
        default: {
            filesInfo = props.loadfiles
        }
    }


    let allMyFiles;
    filesInfo = props.loadMyfiles;
    if (filesInfo.length === 0) { 
        allMyFiles = <h2>Not shared a single file till now </h2>; 
    }
    else {
        allMyFiles = filesInfo.map((data) =>
            <FileBox fileDesc={data} />
        );
    }

    return (
        <div>
            <h1 className={classes.h1}>{props.currentFiles.location}</h1>
            <div className={classes.rowBoxContainer}>
                {allMyFiles}
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownprops) => {
    return {
        ...ownprops,
        currentFiles: state.currentFiles,
        loadMyfiles: state.fetchMyFileInfo.data,
        sharedfiles: state.fetchSharedFileInfoReducer,
    }
}


export default connect(mapStateToProps, null)(BoxInSingleRow);