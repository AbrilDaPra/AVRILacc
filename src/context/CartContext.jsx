import { createContext, useContext, useState} from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product, quantity) => {
        // const updatedCart = [...cart, {...product, quantity }];
        // setCart(updatedCart);
        const existingProduct = cart.find((item) => item.id === product.id);
        
        if(existingProduct){
            const updatedCart = cart.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
            );
            setCart(updatedCart);
        } else{
            const newItem = { ...product, quantity };
            setCart([...cart, newItem]);
        }
    };

    const handleRemoveFromCart = (productId) => {
        const updatedCart = cart.filter((item) => item.id !== productId)
        setCart(updatedCart);
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                handleAddToCart,
                handleRemoveFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
