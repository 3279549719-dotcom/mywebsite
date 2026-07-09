# Personal Site PRD v0.1

## Overview

Single-page scroll portfolio for friends and first meetings. One link on mobile: who you are, what you enjoy, how to reach you.

## Page structure

### 1. Hero

- Full-viewport vertical layout
- Avatar (centered, rounded)
- Name + one-line title
- Control to scroll or jump to About

### 2. About

- Trigger: hero button or scroll
- Body: 200–400 char bio from CONTENT.md
- Optional tags: 博物馆爱好者, 爬山, 漫画汉化

### 3. Interests

- Three cards: museum, hiking, manga localization
- Card: image + title + short line
- MVP: click to expand inline detail (modal optional in v2)

### 4. Contact

- Instagram link (new tab)
- Email mailto link
- No other social links

### 5. Footer

- Copyright (c) 2026 温嘉华
- Last updated date

## Design (Colin Moy aligned)

| Item | Rule |
|------|------|
| Style | Clean card, generous whitespace |
| Colors | 1 primary + 1 accent + neutrals |
| Fonts | System stack only |
| Radius | Consistent 12px or 16px |
| Mobile | 375px width, no horizontal scroll |

## Priority

| P0 | P1 | P2 |
|----|----|-----|
| All five sections | Interest expand/modal polish | Blog |
| Responsive | Dark mode | Analytics |
| INS + email links | Lazy-load images | i18n |
| Local content only | SEO meta | Auto last-updated |

## Content checklist (filled from 文案.md + photos/)

- [x] Avatar: `photos/self.jpg` → `public/avatar.jpg`
- [x] Title: 深圳 · 移动网络 · 博物馆与汉化爱好者
- [x] Bio: see CONTENT.md / 文案.md
- [x] Interests:
  - [x] Museum — `photos/museum.jpg`
  - [x] Hiking — `photos/hiking.jpg`
  - [x] Manga localization — `photos/manga.png`
- [x] Instagram: https://www.instagram.com/ben.sesko2/
- [x] Email: 1736683492@qq.com

## Acceptance (post-build)

- [ ] `npm run dev` opens with no console errors
- [ ] 375px layout: no horizontal scroll, readable text
- [ ] First screen loads in ~3s on typical mobile network
- [ ] Instagram: new tab + `rel="noopener noreferrer"`
- [ ] Email: mailto opens client
- [ ] All images have `alt`
- [ ] `npm run build` produces static `dist/`

## Non-functional

- Code and comments in English
- Public images < 200 KB each after S1 compression
- No database, API, or CMS
- Content in `public/` and `src/data/`
