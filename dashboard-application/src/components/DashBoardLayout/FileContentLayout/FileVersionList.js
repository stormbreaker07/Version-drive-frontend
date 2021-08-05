import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



export default function FileVersionTable(props) {
  const classes = useStyles();

  const filesInfo = props.filesList;

  const downloadFileHandler = (event) => {
    event.preventDefault();
    
    window.open(`http://localhost:8080/files/1/download/${event.target.value}/1`);

    // `http://localhost:8080/files/${user_id}/download/${}/${owner_id}`
  }


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>File Name</TableCell>
            <TableCell align="right">Version</TableCell>
            <TableCell align="right">Preview</TableCell>
            <TableCell align="right">Download</TableCell>
            <TableCell align="right">Share</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filesInfo.map((row) => (
            <TableRow key={row.file_id}>
              <TableCell component="th" scope="row">
                {row.fileName}
              </TableCell>
              <TableCell align="right">{row.fileVersion}</TableCell>
              <TableCell align="right"><button >Preview</button></TableCell>
              <TableCell align="right"><button value={row.file_id} onClick={downloadFileHandler}>Download</button></TableCell>
              <TableCell align="right"><button>Share</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
