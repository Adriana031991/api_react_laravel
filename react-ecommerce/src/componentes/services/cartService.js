import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])
    // console.log(cartItems);
    const addToCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
        // console.log(item);
        if (isItemInCart) {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? {
                            ...cartItem, quantity: cartItem.quantity + 1,
                            totalPrice: (cartItem.quantity + 1) * cartItem.price
                        }
                        : cartItem
                )
            );
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const removeFromCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

        if (isItemInCart.quantity === 1) {
            setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
        } else {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? {
                            ...cartItem, quantity: cartItem.quantity - 1,
                            totalPrice: (cartItem.quantity - 1) * cartItem.price
                        }
                        : cartItem
                )
            );
        }
    };
    const deleteFromCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

        setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));

    };


    const clearCart = () => {
        setCartItems([]);
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };


    const quantity = () => {

        cartItems.reduce((acc, curr) => {
            return acc + curr.quantity;
        }, 0);
    }

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        const cartItems = localStorage.getItem("cartItems");
        if (cartItems) {
            setCartItems(JSON.parse(cartItems));
        }
    }, []);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                getCartTotal,
                quantity,
                deleteFromCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};