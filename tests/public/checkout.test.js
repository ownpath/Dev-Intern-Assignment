import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { calculateCheckoutTotals } from "../../src/cartCalculator.js";
import { buildCheckoutSummaryView } from "../../src/checkoutSummaryView.js";

function cart(overrides = {}) {
  return {
    customer: { id: "customer-1", loyaltyPercent: 0 },
    items: [
      { sku: "coffee", name: "Coffee", unitPriceCents: 1000, quantity: 2 },
    ],
    shippingCents: 499,
    discountCodes: [],
    ...overrides,
  };
}

test("calculates a normal cart without discounts", () => {
  const totals = calculateCheckoutTotals(cart());

  assert.equal(totals.subtotalCents, 2000);
  assert.deepEqual(totals.discountLines, []);
  assert.equal(totals.shippingCents, 499);
  assert.equal(totals.totalCents, 2499);
});

test("applies a fixed discount code", () => {
  const totals = calculateCheckoutTotals(cart({
    discountCodes: [
      { code: "SAVE5", type: "fixed", amountCents: 500, stackable: true },
    ],
  }));

  assert.equal(totals.subtotalCents, 2000);
  assert.deepEqual(totals.discountLines, [
    { label: "Discount code SAVE5", amountCents: 500 },
  ]);
  assert.equal(totals.totalCents, 1999);
});

test("builds a checkout summary for ordinary totals", () => {
  const view = buildCheckoutSummaryView({
    subtotalCents: 2000,
    discountLines: [{ label: "Discount code SAVE5", amountCents: 500 }],
    shippingCents: 499,
    totalCents: 1999,
  });

  assert.equal(view.subtotalLabel, "$20.00");
  assert.deepEqual(view.discountLabels, ["Discount code SAVE5: -$5.00"]);
  assert.equal(view.shippingLabel, "$4.99");
  assert.equal(view.totalLabel, "$19.99");
  assert.equal(view.savingsMessage, "You saved $5.00");
});

test("matches the reported incident outcome", () => {
  const incidentCart = JSON.parse(readFileSync("fixtures/incident-cart.json", "utf8"));

  const totals = calculateCheckoutTotals(incidentCart);
  const view = buildCheckoutSummaryView(totals);

  assert.equal(totals.totalCents, 1930);
  assert.equal(view.totalLabel, "$19.30");
});
