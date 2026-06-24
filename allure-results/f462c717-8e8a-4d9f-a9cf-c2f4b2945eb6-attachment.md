# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Intercepting.spec.js >> intercepting
- Location: tests\Intercepting.spec.js:4:1

# Error details

```
TypeError: json.stringfy is not a function
```

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.card')
Expected: "Test intercept"
Error: strict mode violation: locator('.card') resolved to 8 elements:
    1) <div class="card skeleton" _ngcontent-ng-c670033506="">…</div> aka locator('.card').first()
    2) <div class="card skeleton" _ngcontent-ng-c670033506="">…</div> aka locator('.container > div:nth-child(2)')
    ...

Call log:
  - Expect "toHaveText" with timeout 5000ms
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
        - group "Categories" [ref=e98]:
          - generic [ref=e99]: Categories
          - generic [ref=e100]:
            - generic [ref=e101]:
              - checkbox "Hand Tools" [ref=e102]
              - text: Hand Tools
            - list [ref=e103]:
              - group "Categories" [ref=e104]:
                - generic [ref=e105]: Categories
                - generic [ref=e107]:
                  - checkbox "Hammer" [ref=e108]
                  - text: Hammer
                - generic [ref=e110]:
                  - checkbox "Hand Saw" [ref=e111]
                  - text: Hand Saw
                - generic [ref=e113]:
                  - checkbox "Wrench" [ref=e114]
                  - text: Wrench
                - generic [ref=e116]:
                  - checkbox "Screwdriver" [ref=e117]
                  - text: Screwdriver
                - generic [ref=e119]:
                  - checkbox "Pliers" [ref=e120]
                  - text: Pliers
                - generic [ref=e122]:
                  - checkbox "Chisels" [ref=e123]
                  - text: Chisels
                - generic [ref=e125]:
                  - checkbox "Measures" [ref=e126]
                  - text: Measures
          - generic [ref=e127]:
            - generic [ref=e128]:
              - checkbox "Power Tools" [ref=e129]
              - text: Power Tools
            - list [ref=e130]:
              - group "Categories" [ref=e131]:
                - generic [ref=e132]: Categories
                - generic [ref=e134]:
                  - checkbox "Grinder" [ref=e135]
                  - text: Grinder
                - generic [ref=e137]:
                  - checkbox "Sander" [ref=e138]
                  - text: Sander
                - generic [ref=e140]:
                  - checkbox "Saw" [ref=e141]
                  - text: Saw
                - generic [ref=e143]:
                  - checkbox "Drill" [ref=e144]
                  - text: Drill
          - generic [ref=e145]:
            - generic [ref=e146]:
              - checkbox "Other" [ref=e147]
              - text: Other
            - list [ref=e148]:
              - group "Categories" [ref=e149]:
                - generic [ref=e150]: Categories
                - generic [ref=e152]:
                  - checkbox "Tool Belts" [ref=e153]
                  - text: Tool Belts
                - generic [ref=e155]:
                  - checkbox "Storage Solutions" [ref=e156]
                  - text: Storage Solutions
                - generic [ref=e158]:
                  - checkbox "Workbench" [ref=e159]
                  - text: Workbench
                - generic [ref=e161]:
                  - checkbox "Safety Gear" [ref=e162]
                  - text: Safety Gear
                - generic [ref=e164]:
                  - checkbox "Fasteners" [ref=e165]
                  - text: Fasteners
        - heading "By brand:" [level=4] [ref=e167]
        - group "Brands" [ref=e168]:
          - generic [ref=e169]: Brands
          - generic [ref=e171]:
            - checkbox "name2000" [ref=e172]
            - text: name2000
          - generic [ref=e174]:
            - checkbox "ForgeFlex Tools" [ref=e175]
            - text: ForgeFlex Tools
          - generic [ref=e177]:
            - checkbox "MightyCraft Hardware" [ref=e178]
            - text: MightyCraft Hardware
          - generic [ref=e180]:
            - checkbox "name2000" [ref=e181]
            - text: name2000
          - generic [ref=e183]:
            - checkbox "name2000" [ref=e184]
            - text: name2000
          - generic [ref=e186]:
            - checkbox "name2000" [ref=e187]
            - text: name2000
          - generic [ref=e189]:
            - checkbox "name2000" [ref=e190]
            - text: name2000
          - generic [ref=e192]:
            - checkbox "name2000" [ref=e193]
            - text: name2000
          - generic [ref=e195]:
            - checkbox "name2000" [ref=e196]
            - text: name2000
          - generic [ref=e198]:
            - checkbox "name2000" [ref=e199]
            - text: name2000
          - generic [ref=e201]:
            - checkbox "name2000" [ref=e202]
            - text: name2000
          - generic [ref=e204]:
            - checkbox "name2000" [ref=e205]
            - text: name2000
          - generic [ref=e207]:
            - checkbox "name2000" [ref=e208]
            - text: name2000
          - generic [ref=e210]:
            - checkbox "name2000" [ref=e211]
            - text: name2000
          - generic [ref=e213]:
            - checkbox "name2000" [ref=e214]
            - text: name2000
          - generic [ref=e216]:
            - checkbox "name2000" [ref=e217]
            - text: name2000
          - generic [ref=e219]:
            - checkbox "name2000" [ref=e220]
            - text: name2000
          - generic [ref=e222]:
            - checkbox "name2000" [ref=e223]
            - text: name2000
          - generic [ref=e225]:
            - checkbox "name2000" [ref=e226]
            - text: name2000
          - generic [ref=e228]:
            - checkbox "name2000" [ref=e229]
            - text: name2000
          - generic [ref=e231]:
            - checkbox "name2000" [ref=e232]
            - text: name2000
          - generic [ref=e234]:
            - checkbox "name2000" [ref=e235]
            - text: name2000
          - generic [ref=e237]:
            - checkbox "name2000" [ref=e238]
            - text: name2000
          - generic [ref=e240]:
            - checkbox "name2000" [ref=e241]
            - text: name2000
          - generic [ref=e243]:
            - checkbox "name2000" [ref=e244]
            - text: name2000
          - generic [ref=e246]:
            - checkbox "name2000" [ref=e247]
            - text: name2000
          - generic [ref=e249]:
            - checkbox "name2000" [ref=e250]
            - text: name2000
          - generic [ref=e252]:
            - checkbox "name2000" [ref=e253]
            - text: name2000
          - generic [ref=e255]:
            - checkbox "name2000" [ref=e256]
            - text: name2000
          - generic [ref=e258]:
            - checkbox "794571245759637editado" [ref=e259]
            - text: 794571245759637editado
        - heading "Sustainability:" [level=4] [ref=e261]
        - group "Eco-Friendly Products" [ref=e262]:
          - generic [ref=e263]: Eco-Friendly Products
          - generic [ref=e265]:
            - checkbox "Show only eco-friendly products" [ref=e266]
            - text: Show only eco-friendly products
      - generic [ref=e268]:
        - heading [level=5] [ref=e272]
        - heading [level=5] [ref=e278]
        - heading [level=5] [ref=e284]
        - heading [level=5] [ref=e290]
        - heading [level=5] [ref=e296]
        - heading [level=5] [ref=e302]
        - heading [level=5] [ref=e308]
        - heading [level=5] [ref=e314]
  - paragraph [ref=e319]:
    - text: This is a DEMO application (
    - link "GitHub repo" [ref=e320] [cursor=pointer]:
      - /url: https://github.com/testsmith-io/practice-software-testing
    - text: ), used for software testing training purpose. |
    - link "Privacy Policy" [ref=e321] [cursor=pointer]:
      - /url: /privacy
    - text: "| Banner photo by"
    - link "Barn Images" [ref=e322] [cursor=pointer]:
      - /url: https://unsplash.com/@barnimages
    - text: "on"
    - link "Unsplash" [ref=e323] [cursor=pointer]:
      - /url: https://unsplash.com/photos/t5YUoHW6zRo
    - text: .
  - button "Open chat" [ref=e325] [cursor=pointer]:
    - img [ref=e326]
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
  37 | body:json.stringfy(data)
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