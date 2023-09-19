import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Product from "../components/Product";
import PriceFilter from "../components/PriceFilter";
import Brands from "../components/Brands";

import { listProducts } from "../actions/productActions";
import { useLocation, useParams } from "react-router-dom";

function CategoryScreen() {
	const { categoryName, brandName } = useParams();
	const location = useLocation();
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);
	const { error, loading, products } = productList;
	let keyword = location.search;

	const [filteredProducts, setFilteredProducts] = useState(products);
	const filterProductsByPrice = (min, max) => {
		const filtered = products.filter(
			(product) => product.price >= min && product.price <= max
		);
		setFilteredProducts(filtered);
	};

	useEffect(() => {
		dispatch(listProducts(keyword, brandName)); // You can pass brandName to the listProducts action here if needed
	}, [dispatch, keyword, brandName]);

	return (
		<div>
			<Brands />
			<PriceFilter filterProducts={filterProductsByPrice} />
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<Container className="  rounded-4 ">
					<Container>
						<Row className="  py-4">
							{loading ? (
								<Loader />
							) : error ? (
								<Message variant="danger">{error}</Message>
							) : (
								<div>
									<Row>
										{filteredProducts
											.filter((product) => product.brand === brandName) // Filter by brand
											.filter((product) => product.category === categoryName) // Filter by category
											.map((product) => (
												<Col key={product._id} xs sm md lg xl>
													<Product product={product} />
												</Col>
											))}
									</Row>
								</div>
							)}
						</Row>
					</Container>
				</Container>
			)}
		</div>
	);
}

export default CategoryScreen;
