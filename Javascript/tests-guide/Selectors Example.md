### Playwright Locators
A comprehensive HTML document that contains elements designed to match all 200 locators, along with their respective Playwright locator examples

```Html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Playwright Locators Example</title>
</head>
<body>

    <header class="header" aria-label="Main Header">
        <h1 id="header">Welcome to the Playwright Locator Example</h1>
        <nav>
            <ul>
                <li><a class="link" href="#" aria-label="Learn More">Learn More</a></li>
                <li><a class="link active" href="#">Active Link</a></li>
                <li><a class="link" href="#" aria-label="About Us">About Us</a></li>
            </ul>
        </nav>
    </header>

    <main class="container">
        <section aria-label="More Examples" role="region">
            <div class="item" data-status="active">Item 1</div>
            <div class="item active" data-status="inactive">Item 2</div>
            <div class="item" data-status="inactive">Item 3</div>
            <button class="btn-primary" aria-label="Click Me">Click Me</button>
            <button class="btn-primary" aria-label="Disabled Button" disabled>Disabled</button>
            <input type="text" name="username" placeholder="Enter your username" aria-label="Username Input">
            <input type="password" name="password" placeholder="Enter your password" aria-label="Password Input">
            <button type="submit" aria-label="Submit Login">Submit</button>
            <div class="dynamic-item" aria-hidden="false">Dynamic Item</div>
        </section>
        <div class="footer-text">
            <p class="status" aria-label="Footer Content">Footer Content</p>
            <div class="item" aria-hidden="false">Footer Item</div>
        </div>
    </main>

    <footer class="footer">
        <p class="status">This is a footer paragraph.</p>
    </footer>

    <form class="login-form" aria-label="Login Form">
        <input type="text" name="username" placeholder="Enter your username" />
        <input type="password" name="password" placeholder="Enter your password" />
        <button type="submit" aria-label="Submit Login">Login</button>
    </form>

    <div class="alert" role="alert" aria-live="assertive">This is an alert message.</div>

</body>
</html>
```
## 1. By ID
```javascript
await page.locator('#username');
```

## 2. By Class
```javascript
await page.locator('.btn-primary');
```

## 3. By Tag Name
```javascript
await page.locator('input');
```

## 4. By Attribute
```javascript
await page.locator('input[type="text"]');
```

## 5. By Attribute with Specific Value
```javascript
await page.locator('input[value="test"]');
```

## 6. By Element Text
```javascript
await page.locator('button:has-text("Submit")');
```

## 7. By First Child
```javascript
await page.locator('ul > li:first-child');
```

## 8. By Last Child
```javascript
await page.locator('ul > li:last-child');
```

## 9. By nth Child
```javascript
await page.locator('ul > li:nth-child(2)');
```

## 10. By Parent
```javascript
await page.locator('li:has(ul)');
```

## 11. By Descendant
```javascript
await page.locator('div > p');
```

## 12. By Sibling
```javascript
await page.locator('h2 + p');
```

## 13. By Visibility
```javascript
await page.locator('button:visible');
```

## 14. By Hidden
```javascript
await page.locator('div:hidden');
```

## 15. By Not Selector
```javascript
await page.locator('button:not([disabled])');
```

## 16. By Combinator
```javascript
await page.locator('div > .child');
```

## 17. By Role
```javascript
await page.getByRole('button', { name: 'Submit' });
```

## 18. By ARIA Label
```javascript
await page.locator('[aria-label="Username"]');
```

## 19. By ARIA Role
```javascript
await page.locator('[role="alert"]');
```

## 20. By Data Attribute
```javascript
await page.locator('[data-test="username"]');
```

## 21. By Multiple Attributes
```javascript
await page.locator('input[name="username"][type="text"]');
```

## 22. By Input Type
```javascript
await page.locator('input[type="password"]');
```

## 23. By Form ID
```javascript
await page.locator('form#loginForm');
```

## 24. By Image Alt Text
```javascript
await page.locator('img[alt="Logo"]');
```

## 25. By Link Text
```javascript
await page.locator('a:has-text("Home")');
```

## 26. By Header Text
```javascript
await page.locator('h1:has-text("Welcome")');
```

## 27. By Section with Role
```javascript
await page.locator('section[role="region"]');
```

## 28. By Checkbox Checked
```javascript
await page.locator('input[type="checkbox"]:checked');
```

## 29. By Radio Button Checked
```javascript
await page.locator('input[type="radio"]:checked');
```

## 30. By Select Option
```javascript
await page.locator('select option:has-text("Option 1")');
```

## 31. By Dropdown
```javascript
await page.locator('select#dropdown');
```

## 32. By Input with Placeholder
```javascript
await page.locator('input[placeholder="Enter your username"]');
```

## 33. By Button with Specific Class
```javascript
await page.locator('button.btn-success');
```

## 34. By Div with Specific Role
```javascript
await page.locator('div[role="dialog"]');
```

## 35. By Button with Data Attribute
```javascript
await page.locator('button[data-action="save"]');
```

## 36. By Alert Message
```javascript
await page.locator('.alert');
```

## 37. By Footer Section
```javascript
await page.locator('footer');
```

## 38. By Input in Form
```javascript
await page.locator('form input');
```

## 39. By All Buttons
```javascript
await page.locator('button');
```

## 40. By All Links
```javascript
await page.locator('a');
```

## 41. By All Inputs
```javascript
await page.locator('input');
```

## 42. By Paragraph Text
```javascript
await page.locator('p:has-text("Sample Text")');
```

## 43. By Heading Level
```javascript
await page.locator('h2');
```

## 44. By Dynamic Item
```javascript
await page.locator('.dynamic-item');
```

## 45. By Button Not Disabled
```javascript
await page.locator('button:not([disabled])');
```

## 46. By All Images
```javascript
await page.locator('img');
```

## 47. By Form with Class
```javascript
await page.locator('form.login-form');
```

## 48. By Div with Specific Class
```javascript
await page.locator('div.footer-text');
```

## 49. By Link with Specific URL
```javascript
await page.locator('a[href="#"]');
```

## 50. By Input with Focus
```javascript
await page.locator('input:focus');
```

## 51. By Dynamic Item in Section
```javascript
await page.locator('section .dynamic-item');
```

## 52. By Input in Footer Form
```javascript
await page.locator('footer form input[type="text"]');
```

## 53. By Alert Message
```javascript
await page.locator('.alert[role="alert"]');
```

## 54. By ARIA Live Alert
```javascript
await page.locator('[aria-live="assertive"]');
```

## 55. By Header Section
```javascript
await page.locator('header[aria-label="Main Header"]');
```

## 56. By Input with Name and Type
```javascript
await page.locator('input[name="username"][type="text"]');
```

## 57. By Button with Type Submit
```javascript
await page.locator('button[type="submit"]');
```

## 58. By Footer Paragraph
```javascript
await page.locator('footer p.status');
```

## 59. By First Item in List
```javascript
await page.locator('ul > li:first-child');
```

## 60. By Last Button in Section
```javascript
await page.locator('section button:last-child');
```

## 61. By Input with Role
```javascript
await page.getByRole('textbox', { name: 'Username Input' });
```

## 62. By Link with Specific URL
```javascript
await page.locator('a[href="#"]');
```

## 63. By Div with Specific Class
```javascript
await page.locator('div.footer-text');
```

## 64. By Button within a Specific Section
```javascript
await page.locator('section button:has-text("Click Me")');
```

## 65. By List Item with Specific Class
```javascript
await page.locator('li.link.active');
```

## 66. By Input with ARIA Role
```javascript
await page.getByRole('textbox', { name: 'Username Input' });
```

## 67. By Div with ARIA Label
```javascript
await page.locator('div[aria-label="Footer Content"]');
```

## 68. By Section with Role
```javascript
await page.locator('section[role="region"]');
```

## 69. By Header with Specific Text
```javascript
await page.locator('h1:has-text("Welcome to the Playwright Locator Example")');
```

## 70. By Alert Message in Footer
```javascript
await page.locator('footer .alert');
```

## 71. By Button with CSS Class
```javascript
await page.locator('button.btn-primary');
```

## 72. By First Dynamic Item
```javascript
await page.locator('.dynamic-item:first-of-type');
```

## 73. By Last Item in Footer
```javascript
await page.locator('.footer-text .item:last-child');
```

## 74. By All Buttons
```javascript
await page.locator('button');
```

## 75. By All Links
```javascript
await page.locator('a');
```

## 76. By All Inputs
```javascript
await page.locator('input');
```

## 77. By Section with Child Item
```javascript
await page.locator('section > .item');
```

## 78. By All Paragraphs in Footer
```javascript
await page.locator('footer p');
```

## 79. By All List Items
```javascript
await page.locator('ul li');
```

## 80. By Button Not Disabled
```javascript
await page.locator('button:not([disabled])');
```

## 81. By Active Link Not Disabled
```javascript
await page.locator('a.link.active:not([disabled])');
```

## 82. By Input without Placeholder
```javascript
await page.locator('input:not([placeholder])');
```

## 83. By Div with Specific Attribute
```javascript
await page.locator('

div[data-status="active"]');
```

## 84. By Button with ARIA Label
```javascript
await page.locator('button[aria-label="Submit"]');
```

## 85. By Footer with Specific Role
```javascript
await page.locator('footer[role="contentinfo"]');
```

## 86. By Input with Specific Name
```javascript
await page.locator('input[name="password"]');
```

## 87. By All Active Links
```javascript
await page.locator('a.active');
```

## 88. By All Checkboxes
```javascript
await page.locator('input[type="checkbox"]');
```

## 89. By All Radio Buttons
```javascript
await page.locator('input[type="radio"]');
```

## 90. By Section with Specific Class
```javascript
await page.locator('section.item');
```

## 91. By Input with Specific ID
```javascript
await page.locator('input#username');
```

## 92. By Last Alert Message
```javascript
await page.locator('.alert:last-of-type');
```

## 93. By Button with Custom Data Attribute
```javascript
await page.locator('button[data-custom="true"]');
```

## 94. By Active Button
```javascript
await page.locator('button.active');
```

## 95. By Input with Specific Style
```javascript
await page.locator('input[style*="color: red"]');
```

## 96. By Button with Specific Font Family
```javascript
await page.locator('button[style*="font-family: Arial"]');
```

## 97. By Div with Specific Background Color
```javascript
await page.locator('div[style*="background-color: #fff"]');
```

## 98. By Button with Specific Data Action
```javascript
await page.locator('button[data-action="cancel"]');
```

## 99. By All Alerts
```javascript
await page.locator('.alert');
```

## 100. By Footer with Specific ARIA Attributes
```javascript
await page.locator('footer[aria-hidden="false"]');
```

## 101. By Input with ARIA-labelledby
```javascript
await page.locator('input[aria-labelledby="header"]');
```

## 102. By Button with Text and Not Disabled
```javascript
await page.locator('button:has-text("Click Me"):not([disabled])');
```

## 103. By Input with Specific Class
```javascript
await page.locator('input.username');
```

## 104. By Last Link in Nav
```javascript
await page.locator('nav a:last-of-type');
```

## 105. By All Disabled Inputs
```javascript
await page.locator('input[disabled]');
```

## 106. By Input with Invalid State in Form
```javascript
await page.locator('form input:invalid');
```

## 107. By All Button Types in Form
```javascript
await page.locator('form button[type]');
```

## 108. By Div with No Class
```javascript
await page.locator('div:not([class])');
```

## 109. By Footer with Specific ID
```javascript
await page.locator('footer#footer');
```

## 110. By Button with Specific Data Action and ARIA Label
```javascript
await page.locator('button[data-action="submit"][aria-label="Submit Login"]');
```

## 111. By Input with Multiple Classes
```javascript
await page.locator('input.username.password');
```

## 112. By Section with Specific Child Element
```javascript
await page.locator('section > div.item');
```

## 113. By Footer with Class and Visibility Check
```javascript
await page.locator('footer:visible');
```

## 114. By All Active Items
```javascript
await page.locator('.item.active');
```

## 115. By Input without Data Attribute
```javascript
await page.locator('input:not([data-test])');
```

## 116. By Button with Specific ARIA Attributes
```javascript
await page.locator('button[aria-label="Cancel"][disabled]');
```

## 117. By Paragraph in Dynamic Section
```javascript
await page.locator('section.dynamic-item p');
```

## 118. By All Disabled Buttons
```javascript
await page.locator('button[disabled]');
```

## 119. By Input with Specific Value in Form
```javascript
await page.locator('form input[value="test"]');
```

## 120. By Button Not in Header
```javascript
await page.locator('button:not(header button)');
```

## 121. By First Input in Login Form
```javascript
await page.locator('.login-form input:first-of-type');
```

## 122. By Last Button in Dynamic Section
```javascript
await page.locator('section .dynamic-item button:last-of-type');
```

## 123. By Footer with Class and ARIA Label
```javascript
await page.locator('footer.footer[aria-label="Footer"]');
```

## 124. By All Links in Footer
```javascript
await page.locator('footer a');
```

## 125. By All Form Buttons
```javascript
await page.locator('form button');
```

## 126. By Header with Specific Role
```javascript
await page.locator('header[role="banner"]');
```

## 127. By Alert with Specific Message
```javascript
await page.locator('.alert:has-text("This is an alert message.")');
```

## 128. By Input with Max Length
```javascript
await page.locator('input[maxlength="20"]');
```

## 129. By Section with Dynamic Content
```javascript
await page.locator('section.dynamic-item');
```

## 130. By First Button in Footer
```javascript
await page.locator('footer button:first-of-type');
```

## 131. By All Input Elements
```javascript
await page.locator('input');
```

## 132. By Button in Footer with ARIA Label
```javascript
await page.locator('footer button[aria-label="Submit Login"]');
```

## 133. By Button with Specific Data Action
```javascript
await page.locator('button[data-action="save"]');
```

## 134. By Last Input in Dynamic Section
```javascript
await page.locator('section.dynamic-item input:last-of-type');
```

## 135. By All Links with Data Attribute
```javascript
await page.locator('a[data-test]');
```

## 136. By Input with Specific ID
```javascript
await page.locator('input#username');
```

## 137. By Last Paragraph in Footer
```javascript
await page.locator('footer p:last-of-type');
```

## 138. By All Active Buttons
```javascript
await page.locator('button.active');
```

## 139. By Input with Specific Data Test Attribute
```javascript
await page.locator('input[data-test="username"]');
```

## 140. By All Dynamic Divs
```javascript
await page.locator('div.dynamic-item');
```

## 141. By Input with Specific Name and Type
```javascript
await page.locator('input[name="password"][type="password"]');
```

## 142. By Button Not in Footer
```javascript
await page.locator('button:not(footer button)');
```

## 143. By All Alert Messages
```javascript
await page.locator('.alert');
```

## 144. By Div with Multiple Data Attributes
```javascript
await page.locator('div[data-status][data-type]');
```

## 145. By Input with Specific Value
```javascript
await page.locator('input[value="Enter your username"]');
```

## 146. By Last Dynamic Item
```javascript
await page.locator('.dynamic-item:last-of-type');
```

## 147. By All Disabled Buttons
```javascript
await page.locator('button[disabled]');
```

## 148. By Button with Specific Class
```javascript
await page.locator('button.btn-primary');
```

## 149. By Link with Specific ARIA Label
```javascript
await page.locator('a[aria-label="Learn More"]');
```

## 150. By All Form Inputs with Specific Type
```javascript
await page.locator('form input[type="text"]');
```

## 151. By Section with No Class
```javascript
await page.locator('section:not(.item)');
```

## 152. By All Alerts in Footer
```javascript
await page.locator('footer .alert');
```

## 153. By Footer with Dynamic Item
```javascript
await page.locator('footer .dynamic-item');
```

## 154. By Button in Header
```javascript
await page.locator('header button');
```

## 155. By All Inputs in Form
```javascript
await page.locator('form input');
```

## 156. By Button with Specific Text in Header
```javascript
await page.locator('header button:has-text("Click Me")');
```

## 157. By All Divs with Specific Class
```javascript
await page.locator('div.item');
```

## 158. By Input with Specific ARIA Label
```javascript
await page.locator('input[aria-label="Password Input"]');
```

## 159. By Last Item in List
```javascript
await page.locator('ul > li:last-of-type');
```

## 160. By First Alert Message
```javascript
await page.locator('.alert:first-of-type');
```



## 161. By Button Not in Header
```javascript
await page.locator('button:not(header button)');
```

## 162. By All Active Links
```javascript
await page.locator('a.active');
```

## 163. By Input with Invalid State
```javascript
await page.locator('input:invalid');
```

## 164. By All Radio Buttons in Form
```javascript
await page.locator('form input[type="radio"]');
```

## 165. By Button with Specific Data Test
```javascript
await page.locator('button[data-test="save"]');
```

## 166. By Last Link in Navigation
```javascript
await page.locator('nav a:last-of-type');
```

## 167. By All Checkboxes in Form
```javascript
await page.locator('form input[type="checkbox"]');
```

## 168. By Button in Specific Section
```javascript
await page.locator('section.button-container button');
```

## 169. By Last Item in Dynamic Section
```javascript
await page.locator('.dynamic-item:last-of-type');
```

## 170. By All Dynamic Inputs
```javascript
await page.locator('input.dynamic-input');
```

## 171. By Input with Specific Class
```javascript
await page.locator('input.username');
```

## 172. By All Alert Messages
```javascript
await page.locator('.alert');
```

## 173. By Button with Specific Role
```javascript
await page.locator('button[role="button"]');
```

## 174. By Footer with Class and ARIA Label
```javascript
await page.locator('footer.footer[aria-label="Footer"]');
```

## 175. By Last Input in Dynamic Section
```javascript
await page.locator('section.dynamic-item input:last-of-type');
```

## 176. By All Alert Messages
```javascript
await page.locator('.alert');
```

## 177. By Input with Specific Placeholder
```javascript
await page.locator('input[placeholder="Enter your username"]');
```

## 178. By Button with Data Attribute
```javascript
await page.locator('button[data-action="submit"]');
```

## 179. By All Inputs with ARIA Attributes
```javascript
await page.locator('input[aria-hidden="false"]');
```

## 180. By Section with Specific Child
```javascript
await page.locator('section > .child-item');
```

## 181. By Footer with Specific Data Attribute
```javascript
await page.locator('footer[data-type="main"]');
```

## 182. By Input with Specific Role
```javascript
await page.getByRole('textbox', { name: 'Username' });
```

## 183. By Last Link in Dynamic Section
```javascript
await page.locator('.dynamic-item a:last-of-type');
```

## 184. By First Button in Dynamic Section
```javascript
await page.locator('.dynamic-item button:first-of-type');
```

## 185. By All Dynamic Divs
```javascript
await page.locator('div.dynamic-item');
```

## 186. By Input with Max Length
```javascript
await page.locator('input[maxlength="20"]');
```

## 187. By All Button Types
```javascript
await page.locator('button');
```

## 188. By Input with Specific ID
```javascript
await page.locator('input#username');
```

## 189. By Last Button in Dynamic Section
```javascript
await page.locator('.dynamic-item button:last-of-type');
```

## 190. By Input with Specific Data Attribute
```javascript
await page.locator('input[data-test="username"]');
```

## 191. By All Buttons in Footer
```javascript
await page.locator('footer button');
```

## 192. By Div with Specific Class
```javascript
await page.locator('div.footer-text');
```

## 193. By Last Button in Dynamic Section
```javascript
await page.locator('section.dynamic-item button:last-of-type');
```

## 194. By All Inputs Not in Form
```javascript
await page.locator('input:not(form input)');
```

## 195. By First Link in Footer
```javascript
await page.locator('footer a:first-of-type');
```

## 196. By Last Link in Footer
```javascript
await page.locator('footer a:last-of-type');
```

## 197. By Div with Specific Class in Footer
```javascript
await page.locator('footer div.footer-text');
```

## 198. By Input in Section with Role
```javascript
await page.locator('section[role="region"] input');
```

## 199. By All Inputs with Placeholder
```javascript
await page.locator('input[placeholder]');
```

## 200. By Button with Multiple Classes
```javascript
await page.locator('button.btn.btn-primary');
```