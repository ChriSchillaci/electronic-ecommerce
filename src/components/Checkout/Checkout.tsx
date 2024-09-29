import "./index.scss";

const Checkout = () => {
  return (
    <div className="Checkout">
      <h2 className="Checkout__title">Summary</h2>
      <div className="Checkout__summary">
        <p className="Checkout__summary__subtotal-tax">Subtotal</p>
        <p className="Checkout__summary__price">$25</p>
        <p className="Checkout__summary__subtotal-tax">Tax</p>
        <p className="Checkout__summary__price">$25</p>
      </div>
      <div className="Checkout__total">
        <p>Total</p>
        <p className="Checkout__total__price">$50</p>
      </div>
      <button className="Checkout__btn">Checkout</button>
    </div>
  );
};

export default Checkout;
