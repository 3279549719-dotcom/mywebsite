# Personal Site — Technical Design

## Stack

- Framework: React + TypeScript + Vite
- Styling: Tailwind CSS
- Routing: none (single-page scroll)
- Animation: CSS transitions for MVP (Framer Motion optional later)
- Deploy: Vercel / EdgeOne Pages / GitHub Pages (static)

## Directory layout

```text
mywebsite/
├── photos/                 # Source images (not served directly)
├── public/
│   ├── avatar.jpg
│   └── interests/
│       ├── hiking.jpg
│       ├── museum.jpg
│       └── comic-translation.png
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Interests.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/profile.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── AGENTS.md
├── CONTENT.md
├── PRD.md
├── RESEARCH.md
└── package.json
```

## Data

- Single source: `src/data/profile.ts`
- Image paths are absolute under `public/` (e.g. `/interests/museum.jpg`)
- Copy values from [CONTENT.md](CONTENT.md)

### profile.ts shape

```typescript
export const profile = {
  name: "温嘉华",
  nameEn: "Patrick Wen",
  title: "深圳 · 移动网络 · 博物馆与汉化爱好者",
  avatar: "/avatar.jpg",
  about: "深圳人，本科毕业于深圳大学电子信息学院，现位于中国移动深圳分公司工作。很高兴见到你~",
  tags: ["博物馆爱好者", "爬山", "漫画汉化"],
  interests: [
    {
      id: "museum",
      name: "逛博物馆",
      description: "尤其是历史类的。照片摄于2025.7.02，沈阳辽宁省博物馆",
      detail: "喜欢在博物馆里慢慢看展，历史类展馆尤其吸引我。",
      image: "/interests/museum.jpg",
    },
    {
      id: "hiking",
      name: "爬山",
      description: "梧桐山、七娘山、阳台山、大南山、塘朗山都爬过",
      detail: "深圳大大小小的山都爬过，享受登顶时的风景与过程。",
      image: "/interests/hiking.jpg",
    },
    {
      id: "comic",
      name: "漫画汉化",
      description: "利用 AI 工具搭建自动 workflow 完成汉化",
      detail: "以前手动汉化，现在用 AI workflow。示例为东方 Project 相关作品。",
      image: "/interests/comic-translation.png",
    },
  ],
  contact: {
    instagram: "https://www.instagram.com/ben.sesko2/",
    email: "1736683492@qq.com",
  },
};
```

## Photo pipeline (S1)

| Source (`photos/`) | Target (`public/`) | Note |
|--------------------|--------------------|------|
| `self.jpg` | `avatar.jpg` | ~116 KB, OK |
| `hiking.jpg` | `interests/hiking.jpg` | ~191 KB, OK |
| `museum.jpg` | `interests/museum.jpg` | compress to < 200 KB |
| `manga.png` | `interests/comic-translation.png` | compress to < 200 KB |

## Responsive

- Mobile (< 768px): single column, stacked cards
- Desktop (>= 768px): `grid grid-cols-1 md:grid-cols-3 gap-4` for interests

## Build and deploy

| Step | Command |
|------|---------|
| Install | `npm install` |
| Dev | `npm run dev` → http://localhost:5173 |
| Build | `npm run build` → `dist/` |
| Preview | `npm run preview` |

## Constraints

- Images < 200 KB each in `public/`
- No database, CMS, or backend API
- No iframe embeds
- System fonts only (`font-sans`)
