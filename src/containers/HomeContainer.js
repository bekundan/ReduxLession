import Home from "../components/Home";
import { connect } from "react-redux";
import { addToCart } from "../Services/Actions/action";
import { removeToCart } from "../Services/Actions/action";
const mapStateToProps = (state) => ({
  cartData: state.cartItem,
});
const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
  removeToCartHandler: (data) => dispatch(removeToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;
