import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  flipCard: {
    '&:hover $flipCardInner': {
      transform: 'rotateY(180deg)',
    },
    backgroundColor: 'transparent',
    height: 380,
    margin: '0 auto',
    width: '100%',
  },
  flipCardBack: {
    backfaceVisibility: 'hidden',
    backgroundColor: '#fff',
    borderRadius: 10,
    boxShadow: '0 5px 30px rgba(232, 234, 237, 0.5)',
    color: 'white',
    height: '100%',
    padding: '0 16px',
    position: 'absolute',
    transform: 'rotateY(180deg)',
    width: '100%',
  },
  flipCardBackDescription: {
    color: '#232323',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 300,
    marginTop: 4,
    maxHeight: 140,
    minHeight: 140,
    overflow: 'hidden',
    padding: 8,
    textAlign: 'center',
    width: '100%',
  },
  flipCardFront: {
    alignItems: 'center',
    backfaceVisibility: 'hidden',
    background: '#fff',
    backgroundColor: '#fff',
    color: 'black',
    display: 'flex',
    flexFlow: 'column',
    height: '100%',
    position: 'absolute',
    width: '100%',
  },
  flipCardInner: {
    height: '100%',
    position: 'relative',
    textAlign: 'center',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.2s linear',
    width: '100%',
  },
  imageWrap: {
    border: '1px solid #ffb200',
    borderRadius: '50%',
    height: 170,
    marginBottom: 8,
    marginTop: 20,
    padding: 7,
    textAlign: 'center',
    width: 170,
  },
  linkWrapper: {
    '&:hover': {
      backgroundColor: '#fff',
    },
    color: '#4353ff',
    display: 'inline-block',
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: 300,
    textDecoration: 'none',
  },
  name: {
    color: '#29292b',
    fontFamily: 'Roboto',
    fontSize: 22,
    fontWeight: 400,
    marginTop: 40,
    maxHeight: 55,
    overflow: 'hidden',
  },
  quotesWrap: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: 20,
  },
  role: {
    color: '#c5c5c5',
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 400,
    marginTop: 0,
  },
  userAvatar: {
    borderRadius: '50%',
    height: '100%',
    objectFit: 'cover',
    width: '100%',
  },
}));
