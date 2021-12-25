import { makeStyles, Container, Paper, Typography, LinearProgress } from '@material-ui/core';

import AddLink from './AddLink';
import ListLinks from './ListLinks';
import CustomSidebar from './CustomSidebar';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    centerText: {
      textAlign: "center",
      color: "red"
    },
    container: {
      display: "flex",
      justifyContent: "center",
    }

  },
}));

function Main() {
  const classes = useStyles();

  return (
    <div>
      <Container fixed className={classes.container}>
        <Paper>
          {/* <Typography variant="h5" className={classes.centerText}>Add Link</Typography>
          <AddLink />
          <ListLinks /> */}
          {/* <LinearProgress /> */}
          <CustomSidebar />
        </Paper>
      </Container>
    </div>
  )
}

export default Main
