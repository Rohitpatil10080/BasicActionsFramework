# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Intercepting.spec.js >> intercepting
- Location: tests\Intercepting.spec.js:5:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.card')
Expected substring: "Test intercept"
Error: strict mode violation: locator('.card') resolved to 8 elements:
    1) <div class="card skeleton" _ngcontent-ng-c670033506="">…</div> aka locator('.card').first()
    2) <div class="card skeleton" _ngcontent-ng-c670033506="">…</div> aka locator('.container > div:nth-child(2)')
    ...

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('.card')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - text: View the
    - link "Documentation" [ref=e4] [cursor=pointer]:
      - /url: https://testsmith-io.github.io/practice-software-testing/#/
    - text: for this application.
  - generic [ref=e5]:
    - generic [ref=e7]:
      - generic [ref=e8]: Practice Black Box Testing & Bug Hunting
      - button "Testing Guide" [ref=e9] [cursor=pointer]
      - button "🐛 Bug Hunting" [ref=e10] [cursor=pointer]
    - navigation [ref=e11]:
      - generic [ref=e12]:
        - link "Practice Software Testing - Toolshop" [ref=e13] [cursor=pointer]:
          - /url: /
          - img [ref=e14]
        - generic [ref=e32]:
          - menubar "Main menu" [ref=e33]:
            - menuitem "Home" [ref=e34]:
              - link "Home" [ref=e35] [cursor=pointer]:
                - /url: /
            - menuitem "Categories" [ref=e36]:
              - button "Categories" [ref=e37] [cursor=pointer]
            - menuitem "Contact" [ref=e38]:
              - link "Contact" [ref=e39] [cursor=pointer]:
                - /url: /contact
            - menuitem "Sign in" [ref=e40]:
              - link "Sign in" [ref=e41] [cursor=pointer]:
                - /url: /auth/login
          - button "Select language" [ref=e43] [cursor=pointer]:
            - img [ref=e45]
            - text: EN
  - generic [ref=e48]:
    - generic [ref=e49]:
      - paragraph [ref=e50]:
        - img "Banner" [ref=e51]
      - separator [ref=e52]
    - generic [ref=e53]:
      - generic [ref=e54]:
        - heading "Sort" [level=4] [ref=e55]:
          - img [ref=e57]
          - text: Sort
        - separator [ref=e59]
        - combobox "sort" [ref=e62]:
          - option [selected]
          - option "Name (A - Z)"
          - option "Name (Z - A)"
          - option "Price (High - Low)"
          - option "Price (Low - High)"
          - option "CO₂ Rating (A - E)"
          - option "CO₂ Rating (E - A)"
        - heading "Price Range" [level=4] [ref=e63]:
          - img [ref=e65]
          - text: Price Range
        - separator [ref=e67]
        - generic "ngx-slider" [ref=e69]:
          - slider "ngx-slider" [ref=e74] [cursor=pointer]
          - slider "ngx-slider-max" [ref=e75] [cursor=pointer]
          - generic [ref=e76]: "0"
          - generic [ref=e77]: "200"
          - generic [ref=e78]: "1"
          - generic [ref=e79]: "100"
        - heading "Search" [level=4] [ref=e81]:
          - img [ref=e83]
          - text: Search
        - separator [ref=e85]
        - generic [ref=e87]:
          - generic [ref=e88]: Search
          - textbox "Search" [ref=e89]
          - button "X" [ref=e90] [cursor=pointer]
          - button "Search" [ref=e91] [cursor=pointer]
        - heading "Filters" [level=4] [ref=e92]:
          - img [ref=e94]
          - text: Filters
        - separator [ref=e96]
        - heading "By category:" [level=4] [ref=e97]
        - group "Categories":
          - generic [ref=e98]: Categories
        - heading "By brand:" [level=4] [ref=e100]
        - group "Brands":
          - generic [ref=e101]: Brands
        - heading "Sustainability:" [level=4] [ref=e103]
        - group "Eco-Friendly Products" [ref=e104]:
          - generic [ref=e105]: Eco-Friendly Products
          - generic [ref=e107]:
            - checkbox "Show only eco-friendly products" [ref=e108]
            - text: Show only eco-friendly products
      - generic [ref=e110]:
        - heading [level=5] [ref=e114]
        - heading [level=5] [ref=e120]
        - heading [level=5] [ref=e126]
        - heading [level=5] [ref=e132]
        - heading [level=5] [ref=e138]
        - heading [level=5] [ref=e144]
        - heading [level=5] [ref=e150]
        - heading [level=5] [ref=e156]
  - paragraph [ref=e161]:
    - text: This is a DEMO application (
    - link "GitHub repo" [ref=e162] [cursor=pointer]:
      - /url: https://github.com/testsmith-io/practice-software-testing
    - text: ), used for software testing training purpose. |
    - link "Privacy Policy" [ref=e163] [cursor=pointer]:
      - /url: /privacy
    - text: "| Banner photo by"
    - link "Barn Images" [ref=e164] [cursor=pointer]:
      - /url: https://unsplash.com/@barnimages
    - text: "on"
    - link "Unsplash" [ref=e165] [cursor=pointer]:
      - /url: https://unsplash.com/photos/t5YUoHW6zRo
    - text: .
  - button "Open chat" [ref=e167] [cursor=pointer]:
    - img [ref=e168]
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | const { dataMock } = require('./Mocking/dataMock.json');
  4  | 
  5  | test("intercepting", async ({ page }) => {
  6  | 
  7  |     await page.route("**/products**", async route => {
  8  | 
  9  | 
  10 |         // const data = {
  11 |         //     "current_page": 1,
  12 |         //     "data": [
  13 |         //         {
  14 |         //             "id": "01KVWVF7SYRAMGXKGRK430MNNF",
  15 |         //             "name": "Test intercept",
  16 |         //             "description": "Versatile combination pliers designed for gripping, bending, and cutting wire with ease.",
  17 |         //             "price": 14.15,
  18 |         //             "is_location_offer": false,
  19 |         //             "is_rental": false,
  20 |         //             "co2_rating": "D",
  21 |         //             "in_stock": true,
  22 |         //             "is_eco_friendly": false,
  23 |         //             "product_image": {
  24 |         //                 "id": "01KVWVF7S430FM23MDJKZC3B1M",
  25 |         //                 "by_name": "Helinton Fantin",
  26 |         //                 "by_url": "https://unsplash.com/@fantin",
  27 |         //                 "source_name": "Unsplash",
  28 |         //                 "source_url": "https://unsplash.com/photos/W8BNwvOvW4M",
  29 |         //                 "file_name": "pliers01.avif",
  30 |         //                 "title": "Combination pliers"
  31 |         //             }
  32 |         //         }
  33 |         //     ]
  34 |         // };
  35 | 
  36 |         await route.fulfill({
  37 | 
  38 | body: JSON.stringify(dataMock)
  39 | 
  40 |         })
  41 |     })
  42 | 
  43 |     await page.goto("https://practicesoftwaretesting.com/");
> 44 |     await expect(page.locator(".card")).toContainText("Test intercept");
     |                                         ^ Error: expect(locator).toContainText(expected) failed
  45 |     await page.pause();
  46 | 
  47 | 
  48 | 
  49 | 
  50 | 
  51 | 
  52 | 
  53 | 
  54 | 
  55 | 
  56 | })
```