import CartIcon from "../Card/CartIcon";
import classes from "./HeaderCartButton.module.css";
const Button = (props) => {
  return (
    <button className={classes.button} onClick={props.onClicked}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};
export default Button;
