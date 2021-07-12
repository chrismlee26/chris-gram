import { makeStyles } from '@material-ui/core/styles';

// theme prop for responsive in mob below
export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 5,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
    backgroundColor: 'inherit',
    opacity: '65%'
  },
  heading: {
    color: 'black',
    margin: '30px 30px'
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