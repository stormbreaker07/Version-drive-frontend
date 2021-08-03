import FileBox from './FileConentBox';
import classes from './BoxInSingleRow.module.css';
import { connect } from 'react-redux';
import { MY_FILES, REQUESTED_FILES, SHARED_FILES } from '../../../store/staticVariable';
import SimpleModal from './AddFilebutton';


const BoxInSingleRow = (props) => {

    // const currentLocation = useSelector((state) => state.currentFiles.location)

   // console.log(props.loadMyfiles);


    let filesInfo = [];

    // console.log(props.currentFiles.location)    

    switch (props.currentFiles.location) {
        case (MY_FILES): {
            filesInfo = props.loadMyfiles;
            break;
        }
        case (SHARED_FILES): {
            const tempFiles = props.sharedfiles;
            for(let i = 0;i<tempFiles.length;i++) {
                filesInfo.push(tempFiles[i].fileInfo);
            } 
            console.log(filesInfo);

            // console.log(props.sharedfiles)
            break;
        }
        case (REQUESTED_FILES) : {
            const tempFiles = props.requestedFiles.data; 
            for(let i = 0;i<tempFiles.length;i++) {
                filesInfo.push(tempFiles[i].fileInfo);
            } 
            // console.log(tempFiles.data);
            break;
        }
        default: {
            filesInfo = props.loadfiles
        }
    }


    let allMyFiles;

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



    // console.log(props.currentFiles);
    

    return (
        <div>
            <div    className={classes.titlebox}>
            <h1 className={classes.h1}>{props.currentFiles.location}</h1>
            {props.currentFiles.location === MY_FILES ? <SimpleModal /> : <p />}
            </div>
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
        sharedfiles: state.fetchSharedFileInfo.data,
        requestedFiles : state.fetchRequestedFileInfo
    }
}


export default connect(mapStateToProps, null)(BoxInSingleRow);