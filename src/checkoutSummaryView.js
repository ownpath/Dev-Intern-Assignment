export function buildCheckoutSummaryView(totals) {
  const savingsCents = totals.discountLines[0]?.amountCents ?? 0;

  return {
    subtotalLabel: formatMoney(totals.subtotalCents),
    discountLabels: totals.discountLines.map(
      (discount) => `${discount.label}: -${formatMoney(discount.amountCents)}`,
    ),
    shippingLabel: totals.shippingCents ? formatMoney(totals.shippingCents) : "Shipping unavailable",
    totalLabel: totals.totalCents ? formatMoney(totals.totalCents) : "Total unavailable",
    savingsMessage: savingsCents ? `You saved ${formatMoney(savingsCents)}` : "No savings yet",
  };
}

function formatMoney(cents) {
  return `$${(cents / 100).toFixed(2)}`;
}

