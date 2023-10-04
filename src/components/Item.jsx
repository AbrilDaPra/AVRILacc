// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import Card from '@mui/material/Card';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
// import Counter from './Counter';
// import { useState } from 'react';

// const Item = ({ product }) => {
//   const { id, title, image, price, stock, description } = product;
//   const [showDescription, setShowDescription] = useState(false);

//   const toggleDescription = () => {
//     setShowDescription(!showDescription);
//   };

//   return (
//     <Card className="product-card">
//       <Link to={`/products/${id}`}>
//         <CardMedia
//           component="img"
//           height="300"
//           image={image}
//           title={title}
//           alt={title}
//           className="product-image"
//         />
//         <CardContent sx={{ paddingBottom: '0' }}>
//           <Typography gutterBottom variant="h5" component="div" sx={{ color: 'black', fontSize: '20px' }}>
//             {title}
//           </Typography>
//         </CardContent>
//       </Link>
//       <CardContent>
//         <Typography variant="body2" color="text.secondary" className="product-price">
//           Price: ${price}
//         </Typography>
//         <Button onClick={toggleDescription} className="show-details-button">
//           {showDescription ? "Hide details" : "Show details"}
//         </Button>
//         {showDescription && <p>{description}</p>}
//       </CardContent>
//       <CardActions>
//         <Counter className="product-counter" 
//           stock={stock} 
//         />
//       </CardActions>
//     </Card>
//   )
// }

// Item.propTypes = {
//   product: PropTypes.object.isRequired
// };

// export default Item;


import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Counter from './Counter';

const Item = ( {product} ) => {
  const { id, title, image, price, stock } = product;

  return (
    <div className="product">
        <img src={product.image} alt={product.title} />
        <div>
            <Card className="product-card">
              <Link to={`/products/${id}`}>
                <CardMedia
                  component="img"
                  height="300"
                  image={image}
                  title={title}
                  alt={title}
                  className="product-image"
                />
              <CardContent sx={{ paddingBottom: '0' }}>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: 'black', fontSize: '20px' }}>
                  {title}
                </Typography>
              </CardContent>
            </Link>
              <CardContent>
                <Typography variant="body2" color="text.secondary" className="product-price">
                  Price: ${price}
                </Typography>
                {/* <Button onClick={toggleDescription} className="show-details-button">
                  {showDescription ? "Hide details" : "Show details"}
                </Button>
                {showDescription && <p>{description}</p>} */}
              </CardContent>
              <CardActions>
                <Counter className="product-counter" 
                  stock={stock} 
                />
              </CardActions>
            </Card>
        </div>
    </div>
  )
}

Item.propTypes = {
  product: PropTypes.object.isRequired,

};

export default Item