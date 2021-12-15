import {makeStyles, Container, Paper, Typography } from '@material-ui/core';

import CreateUser from './CreateUser';
import ListUsers from './ListUsers';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    

  },
}));

function Main() {
  const classes = useStyles();

  return (
    <div>
      <Container fixed>
        <Paper>
          <Typography variant="h5">Testing Main Area</Typography>
          <CreateUser />
          <ListUsers />
        </Paper>
      </Container>
    </div>
  )
}

export default Main
