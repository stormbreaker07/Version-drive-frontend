import FileBox from './FileConentBox';
import classes from './BoxInSingleRow.module.css';
import { connect } from 'react-redux';
import { MY_FILES, SHARED_FILES } from '../../../store/staticVariable';


const BoxInSingleRow = (props) => {

    // const currentLocation = useSelector((state) => state.currentFiles.location)

   // console.log(props.loadMyfiles);


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

    let set1 = new Set();
    let uniqueFiles = [];
    let siz = 0;
    for (let i = 0; i < filesInfo.length; i++) {
        if (i === 0) {
            set1.add(filesInfo[i].fileName);
            siz++;
            uniqueFiles.push(filesInfo[i]);
            continue;
        }

        set1.add(filesInfo[i].fileName);
        if (set1.size !== siz) {
            uniqueFiles.push(filesInfo[i]);
            siz = set1.size;
        }
    }

    if (uniqueFiles.length === 0) {
        allMyFiles = <h2>Not shared a single file till now </h2>;
    }
    else {
        allMyFiles = uniqueFiles.map((data) =>
            <FileBox key={data.file_id}  fileDesc={{data: data}} />
        );
    }



    //console.log(uniqueFiles)


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