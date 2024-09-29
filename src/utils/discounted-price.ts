const discountedPrice = (initialPrice: number, discountPercentage: number) => {
  const discountAmount = initialPrice * (discountPercentage / 100);

  const discountedPrice = initialPrice - discountAmount;

  return Number(discountedPrice.toFixed(2));
};

export default discountedPrice;
