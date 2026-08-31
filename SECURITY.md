# Security review and checklist - Sprint 1

Scope: the unit details page (`index.html`, `main.css`, `logo.svg`) delivered in Sprint 1.
Reviewer: Neel Dinesh Prajapati
Related user story: "As a user, I want the site's links and content to be secure so my browsing is safe and trustworthy."

## Summary

The Sprint 1 page is static. It has no JavaScript, no forms and no user input, so there is
no live cross-site scripting (XSS) path in the current code. The findings below are therefore
about hardening the page and about controls that need to be in place before the backlog
features (search, student portal, staff portal) are built in later sprints, since those
features do take user input.

## Findings

| #   | Finding                                                          | Severity | Status                 |
| --- | ---------------------------------------------------------------- | -------- | ---------------------- |
| 1   | No character encoding declared                                   | Medium   | Fixed                  |
| 2   | No Content-Security-Policy                                       | Medium   | Fixed                  |
| 3   | No referrer policy                                               | Low      | Fixed                  |
| 4   | Inline `style` attribute on the table                            | Low      | Fixed                  |
| 5   | Logo `<div>` placed outside `<body>`                             | Low      | Fixed                  |
| 6   | Table label column used `<td>` instead of `<th scope="row">`     | Low      | Fixed                  |
| 7   | `div` selector styled every div on the page, not just the header | Low      | Fixed                  |
| 8   | No viewport meta, so the page is not responsive                  | Low      | Fixed                  |
| 9   | SVG logo can carry embedded script                               | Low      | Documented             |
| 10  | Server response headers not set                                  | Medium   | Deferred to deployment |

### 1. No character encoding declared

Without `<meta charset="utf-8">` the browser guesses the encoding. Encoding sniffing has
historically been used to smuggle script past filters, most famously with UTF-7. The meta
tag is now the first element in `<head>` so the encoding is fixed before any content is parsed.

### 2. No Content-Security-Policy

A Content-Security-Policy (CSP, a rule list that tells the browser which sources it is
allowed to load code and resources from) has been added:

    default-src 'none'; img-src 'self'; style-src 'self'; base-uri 'none'; form-action 'none'

This page needs nothing except its own stylesheet and its own image, so everything else is
denied. Because scripts are not in the allowlist at all, even an injected `<script>` tag
would not execute. `base-uri 'none'` blocks base tag injection, which is an attack where a
`<base>` element is injected to silently repoint every relative URL on the page.

Note that `frame-ancestors`, which prevents the page being embedded in an attacker's iframe
for clickjacking, is ignored when CSP is delivered in a meta tag. It has to be a real HTTP
response header, so it is listed under finding 10.

### 3. No referrer policy

`<meta name="referrer" content="strict-origin-when-cross-origin">` stops the full page URL
being sent to external sites in the Referer header. On the Sprint 1 page the URL is not
sensitive, but the same page template will later carry unit and student identifiers.

### 4. Inline style attribute

`style="width:100%"` was moved into `main.css`. Inline styles are blocked by the CSP above
unless `'unsafe-inline'` is added, and `'unsafe-inline'` is exactly what makes a CSP
ineffective against injected content. Keeping all styling in the stylesheet means the strict
policy can stay strict.

### 5. Logo div outside body

The logo block sat between `</head>` and `<body>`. Browsers silently correct this, but relying
on error recovery means different parsers can build different DOM trees from the same file.
Where markup is later assembled from templates, that mismatch is what lets injected content
land somewhere the developer did not expect. It is now a `<header>` inside `<body>`.

### 6, 7, 8. Structure, selectors, responsiveness

Row labels now use `<th scope="row">` so assistive technology can associate each value with
its label. A `<caption>` was added. The bare `div` selector was replaced with `.site-header`
so the blue background does not leak onto future divs. A viewport meta tag was added, which
the project brief requires since the site has to be responsive.

### 9. SVG logo

`logo.svg` is loaded through an `<img>` tag. Browsers do not execute scripts inside an SVG
loaded that way, so the current usage is safe. It stops being safe if anyone inlines the SVG
into the HTML, or loads it through `<object>`, `<embed>` or `<iframe>`. Before merging any
change that does this, open the SVG in a text editor and confirm it contains no `<script>`,
no `on*` event attributes and no `href` values starting with `javascript:`.

### 10. Server response headers

These cannot be set from a static HTML file and must be configured wherever the site is
hosted:

- `Content-Security-Policy` including `frame-ancestors 'none'` (clickjacking)
- `X-Content-Type-Options: nosniff` (stops the browser second-guessing a file's declared type)
- `Strict-Transport-Security` (forces HTTPS on future visits)
- `Referrer-Policy: strict-origin-when-cross-origin`

## Link validation

Both external links point to `https://www.deakin.edu.au` and resolve over HTTPS. There are no
`http://` URLs, no protocol-relative URLs and no mixed content (a secure page pulling in an
insecure resource). No link uses `target="_blank"`, so `rel="noopener noreferrer"` is not
required yet. It becomes required the moment anyone adds `target="_blank"`, because without it
the newly opened tab gets a reference back to this page and can navigate it elsewhere.

## Privacy and accessibility notes

Privacy: the page makes zero third-party requests. Fonts are system fonts, there is no CDN,
no analytics and no tracking pixel. Every external service a page contacts receives the
visitor's IP address, so keeping the count at zero is the strongest privacy position
available for a static page. This should be treated as a deliberate baseline rather than an
accident, and any proposal to add a hosted font or analytics script in a later sprint should
be reviewed against it.

Accessibility: `lang="en"` declared, descriptive alt text on the logo, table headers scoped,
table caption present, heading order runs h1 then h2 then h3 with no skipped levels, and a
visible focus outline on links for keyboard users.

## Checklist for future pull requests

- [ ] All external links and resources use HTTPS, no mixed content
- [ ] `rel="noopener noreferrer"` on every link using `target="_blank"`
- [ ] No inline `<script>`, no inline `style`, no `on*` event attributes
- [ ] Any third-party file loaded from a CDN carries a Subresource Integrity hash (SRI, a
      checksum so a tampered file is rejected)
- [ ] Dynamic text inserted with `textContent`, never `innerHTML`
- [ ] Any user input validated on the server, not only in the browser
- [ ] No API keys, credentials, tokens or personal data committed to the repository
- [ ] SVG files reviewed for `<script>`, `on*` attributes and `javascript:` URLs
- [ ] Images have meaningful alt text, tables have scoped headers
- [ ] No new third-party requests added without a privacy review
