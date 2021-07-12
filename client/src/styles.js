import { makeStyles } from '@material-ui/core/styles';

// theme prop for responsive in mob below
export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255,1)',
  },
  image: {
    marginLeft: '15px',
  },
  // this is breakpoints to place the input form above on mobile
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));