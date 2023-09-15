import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import Loader from "./Loader";
import Message from "./Message";
import { listTopProducts } from "../actions/productActions";

function ProductCarousel() {
	const dispatch = useDispatch();

	const productTopRated = useSelector((state) => state.productTopRated);
	const { error, loading, products } = productTopRated;

	useEffect(() => {
		dispatch(listTopProducts());
	}, [dispatch]);

	return loading ? (
		<Loader />
	) : error ? (
		<Message variant="danger">{error}</Message>
	) : (
		<div>
			<Carousel mb-0 id="carousel" interval={1500} pause="hover">
				{products.map((product) => (
					<Carousel.Item key={product._id}>
						<Link to={`/product/${product._id}`}>
							<Image
								className="  pb-0  "
								src={product.image}
								alt={product.name}
								fluid
								style={{ maxWidth: '280px', maxHeight: '240px' }} 
							/>
							<Carousel.Caption className="carousel.caption">
								<h4>
									{product.name} (${product.price})
								</h4>
							</Carousel.Caption>
						</Link>
					</Carousel.Item>
				))}
			</Carousel>
		</div>
	);
}

export default ProductCarousel;
