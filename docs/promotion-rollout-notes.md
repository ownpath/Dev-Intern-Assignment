# WELCOME Promotion Rollout Notes

| | |
|---|---|
| Owner | Growth Experiments |
| Status | rollout handoff |
| Applies to | WELCOME promotion selection and checkout integration |
| Last reviewed | 2026-07-02 |

These notes capture the implementation guidance circulated during the WELCOME
campaign rollout.

## Checkout integration guidance

The promotion service emits adjustments in the order checkout should present them:

1. Calculate loyalty percentage from the original merchandise subtotal.
2. Apply the selected fixed promotion to merchandise.
3. Represent free shipping as another fixed adjustment equal to the shipping
   charge while retaining the original shipping amount. Keeping all savings in
   one adjustment list lets the summary add every adjustment uniformly.

The rollout supports one selected promotion code per cart. If several codes are
present, checkout should use the first non-shipping code and leave promotion
selection to the calling client.

## Validation note

The rollout dashboard reported the expected campaign totals. Checkout-specific
display behavior was not part of that dashboard.
