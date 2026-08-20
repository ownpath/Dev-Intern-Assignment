export function calculateCheckoutTotals(cart) {
  const subtotalCents = cart.items.reduce(
    (sum, item) => sum + item.unitPriceCents * item.quantity,
    0,
  );

  const discounts = [];

  if (cart.customer?.loyaltyPercent) {
    discounts.push({
      label: "Loyalty discount",
      amountCents: Math.round(subtotalCents * (cart.customer.loyaltyPercent / 100)),
    });
  }

  const discountCode = cart.discountCodes?.find((discount) => discount.type !== "free_shipping");
  if (discountCode?.type === "fixed") {
    discounts.push({
      label: `Discount code ${discountCode.code}`,
      amountCents: discountCode.amountCents,
    });
  }

  const merchandiseDiscountCents = discounts.reduce(
    (sum, discount) => sum + discount.amountCents,
    0,
  );

  return {
    subtotalCents,
    discountLines: discounts,
    shippingCents: cart.shippingCents ?? 0,
    totalCents: subtotalCents - merchandiseDiscountCents + (cart.shippingCents ?? 0),
  };
}

