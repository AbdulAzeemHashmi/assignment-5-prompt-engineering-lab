# Mission 3: Debugging with AI

## 1. Broken Code (Initial State)
```javascript
function calculateDiscount(price, discountPercent, couponCode) {
  let discount = price * (discountPercent / 100);
  let finalPrice = price - discount;
  
  if (couponCode === 'SAVE10') {
    finalPrice = finalPrice - 10;
  }
  return finalPrice;
}
```

### Bugs Identified:
- **No Input Validation**: Passing a negative price or negative discount percentage is allowed and produces invalid math.
- **Negative Final Price**: If the price is low (e.g. $5) and coupon code `"SAVE10"` is applied, the output becomes negative (e.g. `-$5.5`), which is physically impossible.
- **Data Coercion Issues**: If string values are passed, mathematical calculations might result in `NaN` or incorrect values.

---

## 2. Context-Rich Debugging Prompt
**Prompt:**
```text
I have a broken JavaScript function:
```javascript
function calculateDiscount(price, discountPercent, couponCode) {
  let discount = price * (discountPercent / 100);
  let finalPrice = price - discount;
  
  if (couponCode === 'SAVE10') {
    finalPrice = finalPrice - 10;
  }
  return finalPrice;
}
```

Please help me debug it.

**Context**: This function processes retail transactions on our checkout page.
**Expected Result**:
- Input values (price, discountPercent) must be validated. If they are invalid (e.g., negative values, discountPercent > 100, non-numeric), throw an error.
- The returned price should be a number, rounded to 2 decimal places.
- The final price cannot fall below 0.

**Actual Result (Bugs)**:
- `calculateDiscount(5, 10, "SAVE10")` returns `-5.5` instead of `0`.
- `calculateDiscount(100, -20)` returns `120` instead of throwing an error.
- Passing strings or invalid values returns `NaN` or crashes silently.

**Minimal-Fix Instructions**:
- Add input verification.
- Ensure the final price defaults to `0` if coupon discounts reduce it to a negative number.
- Do not modify the function parameters.
- Round the final number to 2 decimal places.
```

---

## 3. AI Corrected Code
```javascript
function calculateDiscount(price, discountPercent, couponCode) {
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

  return finalPrice < 0 ? 0 : Number(finalPrice.toFixed(2));
}
```

---

## 4. Manual Test Verification
Manual verification is completed with the following scenarios (proved in `tests/manual-test-cases.md`):
- `calculateDiscount(5, 10, "SAVE10")` -> Returns `0` (Correctly bounded to 0).
- `calculateDiscount(100, -20)` -> Throws Error (Correctly catches negative percent).
- `calculateDiscount("150", 20, "SAVE10")` -> Returns `110` (Correctly parses strings and calculates value).
