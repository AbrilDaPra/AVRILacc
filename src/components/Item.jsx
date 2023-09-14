import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Counter from './Counter';
import PropTypes from 'prop-types';

const Item = ({ name, image, title }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: '10px' }}>
      <CardMedia
        sx={{ height: '300px' }}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Counter />
      </CardActions>
    </Card>
  )
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Item;