# Issue: Checkout Total Is Wrong When a Discount Code Is Used

A customer reported that checkout showed the wrong final amount after applying a discount code.

Use the incident cart in `fixtures/incident-cart.json`.

## What the customer reported

> My cart came to $27.00. I applied WELCOME5 and the free shipping code, and I
> have a loyalty discount on my account. I worked it out and I should have been
> charged $19.30. Checkout billed me more than that, and the savings line at the
> bottom of the page did not look right either.

## Expected outcome

For that cart, checkout should charge a total of `$19.30`.

Fix the issue with the smallest reasonable change. Do not replace the checkout flow.

## While investigating

The incident cart is one case. The hidden tests cover the rest of the checkout
contract, so your fix needs to be consistent with checkout's documented behavior as
a whole, not only with this cart.
