/**
 * Calculates final price after discount percentage and optional coupon code.
 * @param {number} price - The original price of the item.
 * @param {number} discountPercent - The percentage discount (0-100).
 * @param {string} [couponCode] - Optional coupon code (e.g., "SAVE10").
 * @returns {number} The final price, which cannot be less than 0.
 */
function calculateDiscount(price, discountPercent, couponCode) {
  // Validate inputs
  const numPrice = Number(price);
  const numDiscount = Number(discountPercent);

  if (isNaN(numPrice) || numPrice < 0) {
    throw new Error('Price must be a non-negative number.');
  }

  if (isNaN(numDiscount) || numDiscount < 0 || numDiscount > 100) {
    throw new Error('Discount percentage must be a number between 0 and 100.');
  }

  const discountAmount = numPrice * (numDiscount / 100);
  let finalPrice = numPrice - discountAmount;

  if (couponCode === 'SAVE10') {
    finalPrice -= 10;
  }

  // Ensure final price is never negative
  return finalPrice < 0 ? 0 : Number(finalPrice.toFixed(2));
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = calculateDiscount;
}
