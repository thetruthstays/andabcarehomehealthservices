# Andab Care – Website Project

A clean static website for **Andab Care Medical Center**, Westerville, OH.

---

## 📁 Folder Structure

```
andab-care/
│
├── index.html                  # Main entry point (navbar, footer, page shells)
│
├── style.css                   # All styles (variables, layout, components)
│
├── pages.js                    # Page URL mappings
│
├── main.js                     # Navigation, testimonials, form logic
│
├── pages/
│   ├── home.html               # Home page content
│   ├── about.html              # About page content
│   ├── services.html           # Services page content
│   ├── testimonials.html       # Testimonials page content
│   ├── gallery.html            # Gallery page content
│   └── contact.html            # Contact page content
│
├── andab-care.code-workspace   # VS Code workspace file
```

---

## 🚀 How to Run

### Option 1 — Live Server (Recommended)
1. Open VS Code
2. Double-click `andab-care.code-workspace` to open the project
3. Install the **Live Server** extension (recommended in workspace)
4. Right-click `index.html` → **"Open with Live Server"**
5. Site opens at `http://127.0.0.1:5500`

### Option 2 — Direct browser
- Double-click `index.html` to open directly in your browser

---

## 📄 Pages Included

| Page         | Description                              |
|--------------|------------------------------------------|
| Home         | Hero, stats, feature cards, CTA          |
| About        | Story, specializations, testimonials     |
| Services     | Personal Care, Companion Care, Alzheimer's |
| Testimonials | All 5 client review cards                |
| Gallery      | 9 care category tiles                    |
| Contact      | Form + contact info + hours              |

---

## 🎨 Customisation Tips

| What to change     | Where to change it         |
|--------------------|----------------------------|
| Colors & fonts     | `css/style.css` → `:root`  |
| Page content       | `js/pages.js`              |
| Navigation logic   | `js/main.js`               |
| Layout structure   | `index.html`               |

---

## 📦 Dependencies

- Google Fonts (Lora + Nunito) — loaded via CDN
- No frameworks, no npm, no build tools required

---

## 📞 Contact Info

- **Phone:** (740) 909-2424
- **Email:** info@andabcare.com
- **Location:** Westerville, OH 43082

---

*Built for Andab Care Medical Center · 2026*
