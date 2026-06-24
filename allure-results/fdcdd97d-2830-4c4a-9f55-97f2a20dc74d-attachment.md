# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Intercepting.spec.js >> intercepting
- Location: tests\Intercepting.spec.js:4:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('.card')
Expected: "Test intercept"
Received: " Test intercept ABCDE$14.15"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('.card')
    13 × locator resolved to <a class="card" _ngcontent-ng-c670033506="" href="/product/01KVWVF7SYRAMGXKGRK430MNNF" data-test="product-01KVWVF7SYRAMGXKGRK430MNNF">…</a>
       - unexpected value " Test intercept ABCDE$14.15"

```

```yaml
- 'link "Test intercept Compare Test intercept CO₂: A B C D E $14.15"':
  - /url: /product/01KVWVF7SYRAMGXKGRK430MNNF
  - img "Test intercept"
  - button "Compare"
  - heading "Test intercept" [level=5]
  - text: "CO₂: A B C D E $14.15"
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { json } = require('node:stream/consumers');
  3  | 
  4  | test("intercepting", async ({ page }) => {
  5  | 
  6  |     await page.route("https://api.practicesoftwaretesting.com/products?page=1&between=price,1,100&is_rental=false", async route => {
  7  | 
  8  | 
  9  |         const data = {
  10 |             "current_page": 1,
  11 |             "data": [
  12 |                 {
  13 |                     "id": "01KVWVF7SYRAMGXKGRK430MNNF",
  14 |                     "name": "Test intercept",
  15 |                     "description": "Versatile combination pliers designed for gripping, bending, and cutting wire with ease.",
  16 |                     "price": 14.15,
  17 |                     "is_location_offer": false,
  18 |                     "is_rental": false,
  19 |                     "co2_rating": "D",
  20 |                     "in_stock": true,
  21 |                     "is_eco_friendly": false,
  22 |                     "product_image": {
  23 |                         "id": "01KVWVF7S430FM23MDJKZC3B1M",
  24 |                         "by_name": "Helinton Fantin",
  25 |                         "by_url": "https://unsplash.com/@fantin",
  26 |                         "source_name": "Unsplash",
  27 |                         "source_url": "https://unsplash.com/photos/W8BNwvOvW4M",
  28 |                         "file_name": "pliers01.avif",
  29 |                         "title": "Combination pliers"
  30 |                     }
  31 |                 }
  32 |             ]
  33 |         };
  34 | 
  35 |         await route.fulfill({
  36 | 
  37 | body: JSON.stringify(data)
  38 | 
  39 |         })
  40 |     })
  41 | 
  42 |     await page.goto("https://practicesoftwaretesting.com/");
> 43 |     await expect(page.locator(".card")).toHaveText("Test intercept");
     |                                         ^ Error: expect(locator).toHaveText(expected) failed
  44 |     await page.pause();
  45 | 
  46 | 
  47 | 
  48 | 
  49 | 
  50 | 
  51 | 
  52 | 
  53 | 
  54 | 
  55 | })
```