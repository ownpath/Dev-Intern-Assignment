# Checkout Contract

| | |
|---|---|
| Version | 3 |
| Owner | Checkout |
| Status | approved |
| Applies to | checkout totals and summary presentation |
| Last reviewed | 2026-06-11 |

The checkout flow has two steps:

1. `calculateCheckoutTotals(cart)` calculates money values in cents.
2. `buildCheckoutSummaryView(totals)` turns those values into customer-facing labels.

## Totals

`subtotalCents` is the merchandise subtotal:

```text
sum of item.unitPriceCents * item.quantity
```

Discount rules:

- Stackable discounts can be used together.
- Stackability applies to merchandise discounts: loyalty discounts and fixed cart
  discount codes. Free-shipping codes do not participate in stackability because
  they do not discount merchandise.
- A fixed cart discount code marked `"stackable": false` cannot be combined with
  another merchandise discount. If it appears alongside a loyalty discount or
  another fixed cart discount code, the non-stackable fixed code is ignored and
  the other merchandise discounts apply as normal.
- Every discount code carries an explicit `stackable` value.
- Loyalty percentage discounts are calculated from the merchandise subtotal and
  rounded to the nearest cent using
  `Math.round(subtotalCents * loyaltyPercent / 100)`.
- Fixed cart discount codes reduce the merchandise amount.
- Free-shipping codes reduce shipping to zero.
- Free shipping is not a merchandise discount and should not appear in `discountLines`.
- Merchandise discounts cannot reduce merchandise below zero.

The final total is:

```text
merchandise after discounts + shipping after shipping discounts
```

## Display

The checkout summary view receives totals from `calculateCheckoutTotals`.

- A zero shipping amount should display as `Free`.
- The savings message should include merchandise discounts only, not free shipping.
- A zero total should display as `$0.00`, not as unavailable.
