# Secure and Safe Frontend

## Safe External Links

Your `index.html` file has a link to the Deakin fees page. If you change this link so it opens in a new tab (by adding `target="_blank"`), you must also add `rel="noopener noreferrer"`.

This stops the new website from taking control of your original page.

**Example:**

```html
<a href="https://www.deakin.edu.au/students/enrolment-and-fees/fees"
   target="_blank"
   rel="noopener noreferrer">
  Current students
</a>
```

## Private Information

Read your final HTML and CSS code carefully before you save it to the main branch. Make sure there is:

- No private data
- No personal computer folder names (like `C:/Users/Name/...`)
- No extra developer notes
