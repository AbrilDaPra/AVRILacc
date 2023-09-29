export const addToCart = (cart, setCart, product, quantity) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    
    if(existingProduct){
        const updatedCart = cart.map((item) => 
        item.id === product.id ? { ...item, quantity: item.quantity + quantity} : item
        );
        setCart(updatedCart);
    } else {
        const newItem = { ...product, quantity };
        setCart([...cart, newItem]);
    }
};

export const removeFromCart = (cart, setCart, productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
};