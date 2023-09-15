import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Counter from './Counter';
import PropTypes from 'prop-types';

const ItemDetail = ({ products }) => {
  const { id } = useParams();

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return <p>The product was not found</p>;
  }

  return (
    <div>
      <Card>
        <CardMedia
          sx={{ height: '300px' }}
          image={product.image}
          title={product.name}
          alt={product.description}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Counter />
        </CardActions>
      </Card>
    </div>
  );
};

ItemDetail.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ItemDetail;

