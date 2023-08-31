import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Image, Container, Button } from "react-bootstrap";
import Product from "../components/Product";
import AboutUs from "../components/AboutUs";
import Loader from "../components/Loader";
import Message from "../components/Message";
import ProductCarousel from "../components/ProductCarousel";
import { listProducts } from "../actions/productActions";
import { useLocation, Link, useNavigate } from "react-router-dom";
import SearchBox from "../components/SearchBox";

function HomeScreen() {
	const location = useLocation();
	const dispatch = useDispatch();
	const productList = useSelector((state) => state.productList);
	const { error, loading, products } = productList;
	const navigate = useNavigate();
	let keyword = location.search;
	const handleClick = () => {
		navigate("/products");
		window.scrollTo(0, 0);
	};

	useEffect(() => {
		dispatch(listProducts(keyword));
	}, [dispatch, keyword]);

	return (
		<div>
			<Container>
				<Container>
					<Container className="mt-xl-5 " fluid={true}>
						<Container>
							<img
								src="/Ellipse 7.svg"
								alt="arrow"
								className="ml-2   "
								style={{ position: "absolute", zIndex: "-1" }}
							/>
							<img
								src="/Ellipse 7.svg"
								alt="arrow"
								className="ml-2  arrows    "
								style={{ position: "absolute", zIndex: "-1" }}
							/>
						</Container>
						<Col sm lg xs md xl>
							<Row>
								<Col className="mt-xl-3 mt-md-3 " sm lg xs md xl>
									<h1 className="text-light">Buy Any Thing From Any Where</h1>
									<div style={{ height: "6px" }}></div>
									<Row>
										<Col
											md={4}
											sm={3}
											xs={4}
											lg={3}
											className="mb-4  d-none d-sm-block text-light"
											style={{ 
												color: "#3e3e3e",
												borderRight: "3px solid black"
											}}>
											<h2 className="text-light">50+</h2>
											<h5 className="text-light">items</h5>
										</Col>
										<Col
											style={{
												color: "#3e3e3e"
											}}
											md={2}
											sm={2}
											xs={3}
											lg={2}
											className="ps-4 d-none d-sm-block">
											<h2  className="text-light">100+</h2>
											<h5  className="text-light">Costumers</h5>
										</Col>
									</Row>
									<SearchBox />
								</Col>
								<Col xs={12} sm={12} lg={6} md={6}>
									{<ProductCarousel />}
								</Col>
							</Row>
						</Col>
					</Container>
				</Container>
				<div style={{ height: "3.5rem" }}></div> {/*separater */}
			</Container>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<Container className=" bg-gradient  rounded-4 pb-xl-5 ">
					<Container>
						<Row className="  py-4">
							<Col lg={3} md={12} sm={12} xs={12}>
								<h3 className="text-light ">Latest Products</h3>
								<p className="text-light">
									Elevate ur Shopping Experience: Unveiling Best Sellers with
									Ease.
								</p>
								<Button
									variant="primary"
									className="rounded-4 my-1"
									onClick={handleClick}>
									Find more
									<i className=" px-1 fas fa-arrow-right"></i>
								</Button>
							</Col>

							{products.slice(0, 4).map((product) => (
								<Col id="card" className="  px-3 " key={product._id} lg md sm xs>
									<Link id="product_name" to={`/product/${product._id}`}>
										<Image
											className="my-3 rounded-3 "
											src={product.image}
											alt={product.name}
											fluid
										/>
										{/* <p style={{ color: "whitesmoke" }}>{product.name}</p> */}
										<p className="text-light ">{product.price} (ETB)</p>
									</Link>
								</Col>
							))}
						</Row>
					</Container>
				</Container>
			)}
			<div style={{ background: "#20232f" }}>
			<div style={{ height: "3.5rem" }}></div> {/*separater */}
				<AboutUs />
			</div>
			<Container
				fluid
				className="blkgrdt2"
				style={{
					height: "23rem",

					position: "absolute"
				}}></Container>
			{/*separater */}
			<Container fluid className="clasic"></Container>
			<div style={{ height: "10rem" }}></div>
			<Container>
				<div
					className="text-center  "
					style={{ color: "white", zIndex: "2", position: "relative" }}>
					<h3 style={{ color: "whiteSmoke" }}>Featured Products</h3>
					<p>Find what you are looking for</p>
				</div>

				{loading ? (
					<Loader />
				) : error ? (
					<Message variant="danger">{error}</Message>
				) : (
					<div>
						<Row>
							{products.slice(4, 8).map((product) => (
								<Col key={product._id} xs={6} sm md={6} lg xl>
									<Product product={product} />
								</Col>
							))}
						</Row>
						<Button variant="dark" className="rounded-4" onClick={handleClick}>
							More products
							<i className=" px-1 fas fa-arrow-right"></i>
						</Button>
					</div>
				)}
			</Container>
			<div style={{ height: "10rem" }}></div> {/*separater */}
		</div>
	);
}

export default HomeScreen;
