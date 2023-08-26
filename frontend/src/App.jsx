import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import AdminUserListScreen from "./screens/AdminUserListScreen";
import AdminUserEditScreen from "./screens/AdminUserEditScreen";
import AdminProductListScreen from "./screens/AdminProductListScreen";
import AdminProductEditScreen from "./screens/AdminProductEditScreen";
// import OrderListScreen from "./screens/OrderListScreen";
import GoogleTranslateComponent from "./components/GoogleTranslateComponent";

function App() {
  return (
    <Router>
      <Header />

      <main>
        <Container fluid className="p-0">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/products" element={<ProductScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/login/shipping" element={<ShippingScreen />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            <Route path="/order/:id" element={<OrderScreen />} />
            <Route path="/product/:id" element={<ProductDetailsScreen />} />
            <Route path="/cart/:id?" element={<CartScreen />} />

            <Route path="/admin/userlist" element={<AdminUserListScreen />} />
            <Route
              path="/admin/user/:id/edit"
              element={<AdminUserEditScreen />}
            />

            <Route
              path="/admin/productlist"
              element={<AdminProductListScreen />}
            />
            <Route
              path="/admin/product/:id/edit"
              element={<AdminProductEditScreen />}
            />

            {/* <Route path="/admin/orderlist" element={<OrderListScreen />} />  */}
          </Routes>
        </Container>
      </main>
      <GoogleTranslateComponent />
      <Footer />
    </Router>
  );
}

export default App;
