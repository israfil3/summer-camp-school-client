import React from 'react';
import useCart from '../../lodeCart/UseCart';

const MyClass = () => {
    const [cart] = useCart();
    console.log(cart)
    return (
        <div>
            <h3>cart{cart.length}</h3>
        </div>
    );
};

export default MyClass;