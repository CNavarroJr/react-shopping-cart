import React, { useContext } from 'react';
import ProductContext from '../contexts/ProductContext';

// Components
import Product from './Product';

const Products = props => {

	// add the context state here
	const { products, addItem } = useContext(ProductContext);

	return (
		<div className="products-container">
			{props.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={props.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
