import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Counter from './Counter';
import PropTypes from 'prop-types';

//Agregar useParams para id
//const filteredProducts = products.filter((product) => product.id == id)

const ItemDetail = ({ products }) => {
    return (
        <div>
            {products.map((product) => {
                    return (
                        <div key={product.id}>
                            <Card sx={{ maxWidth: 345, margin: '10px' }}>
                                <CardMedia
                                    sx={{ height: '300px' }}
                                    image={product.image}
                                    title={product.name}
                                    description={product.description}
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
            })}
        </div>
    );
};

ItemDetail.propTypes = {
    products: PropTypes.array.isRequired,
};

export default ItemDetail;