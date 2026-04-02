# GoTech Solutions — Official Website

> **Empowering Ideas Through Technology**
> A professional consulting and digital services company based in Nairobi, Kenya.

---

## 🌐 Live Site

Once deployed, your site will be available at:

```
https://<your-github-username>.github.io/<your-repo-name>/
```

---

## 📁 Project Structure

```
/
├── index.html                        # Main website (all sections)
├── styles.css                        # All styling and responsive layout
├── script.js                         # Interactions, QR code, form validation
├── gotech_solutions_logo_v2__1_.svg  # Official GoTech Solutions logo
└── README.md                         # This file
```

---

## 🚀 How to Deploy on GitHub Pages

### Step 1 — Create a GitHub Repository
1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon → **New repository**
3. Name it (e.g. `gotech-solutions`) and set it to **Public**
4. Click **Create repository**

### Step 2 — Upload the Files
1. In your new repo, click **Add file** → **Upload files**
2. Upload all 5 files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `gotech_solutions_logo_v2__1_.svg`
   - `README.md`
3. Scroll down and click **Commit changes**

### Step 3 — Enable GitHub Pages
1. Go to your repo → **Settings** tab
2. Scroll down to **Pages** in the left sidebar
3. Under **Source**, select branch: **main** and folder: **/ (root)**
4. Click **Save**

### Step 4 — Go Live ✅
Your site will be live in about **1 minute** at the URL shown at the top of the Pages settings.

---

## 📌 Website Sections

| Section | Description |
|---|---|
| **Home / Hero** | Logo, headline, intro, and call-to-action buttons |
| **Services** | 8 service cards with icons and hover effects |
| **Testimonials** | 5 real client reviews with star ratings |
| **About** | Brand story and who GoTech serves |
| **Contact** | Info, WhatsApp QR code, and contact form |

---

## ✏️ How to Update Content

All content is in `index.html`. Open it in any text editor (Notepad, VS Code, etc.).

### Change contact details
Search for `gotechsolutions2@gmail.com` or `0707490519` and update as needed.

### Add a new service card
Copy any `<div class="service-card">` block inside the services grid and update the icon, title, and description.

### Add a testimonial
Copy any `<div class="testi-card">` block inside `.testi-grid` and fill in the new client's details.

### Update the WhatsApp number for the QR code
In `script.js`, find this line and replace the number:
```js
text: 'https://wa.me/254707490519',
```

---

## 🎨 Brand Colours

| Name | Hex | Usage |
|---|---|---|
| Deep Navy | `#0a1628` | Hero background, footer |
| Royal Blue | `#0d3b6e` | Testimonials section, logo |
| Mid Blue | `#0066a4` | Buttons, icons, accents |
| Steel Blue | `#4a8fad` | Highlights, borders |
| Ice Blue | `#b8d4e0` | Light accents, text on dark |

---

## 📞 Contact

| Channel | Detail |
|---|---|
| Email | gotechsolutions2@gmail.com |
| Phone | 0707 490 519 |
| WhatsApp | [wa.me/254707490519](https://wa.me/254707490519) |
| Location | Nairobi, Kenya |

---

## 📄 License

© 2026 GoTech Solutions. All rights reserved.
This codebase is proprietary and intended for use by GoTech Solutions only.
