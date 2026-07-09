# 个人主页 — 技术设计 (TECH [DESIGN.md](http://DESIGN.md))

## 技术栈

- **框架**: React + TypeScript + Vite
- **样式**: Tailwind CSS
- **路由**: 无需 React Router（单页滚动展示，所有内容在同一页面）
- **动画**: Framer Motion（可选，MVP 阶段先用 CSS 过渡实现简单效果）
- **部署**: Vercel / EdgeOne Pages / GitHub Pages（静态托管）

## 项目结构

```

personal-site/

├── public/

│   ├── avatar.jpg                    # 个人照片

│   └── interests/                    # 兴趣图片

│       ├── museum.jpg

│       ├── hiking.jpg

│       └── comic-translation.jpg

├── src/

│   ├── components/

│   │   ├── Hero.tsx                  # 首屏：头像 + 姓名 + 一句话介绍

│   │   ├── About.tsx                 # 关于我：详细自我介绍

│   │   ├── Interests.tsx             # 兴趣爱好：三张卡片

│   │   ├── Contact.tsx               # 联系方式：INS + 邮箱

│   │   └── Footer.tsx                # 页脚：版权信息

│   ├── data/

│   │   └── profile.ts                # 所有文字内容和图片路径

│   ├── App.tsx                       # 组装所有组件

│   ├── main.tsx                      # 项目入口

│   └── index.css                     # Tailwind 导入（极少手写CSS）

├── index.html                        # Vite 模板（无需修改）

├── package.json                      # 项目依赖清单

├── tailwind.config.js                # Tailwind 配置（定制颜色）

├── tsconfig.json                     # TypeScript 配置

└── vite.config.ts                    # Vite 构建配置

```



## 数据管理

- **单一数据源**: 所有文字内容（自我介绍、兴趣列表、联系方式）统一存放在 `src/data/profile.ts` 中
- **数据格式**: 使用 TypeScript 对象和数组存储，方便后续添加或修改
- **图片引用**: 图片文件放在 `public/` 目录，在数据文件中使用绝对路径引用（如 `/interests/museum.jpg`）



### profile.ts 数据结构示例

```typescript

export const profile = {

  name: "你的名字",

  title: "一句话介绍（如：用 AI 做自动化与汉化的实践者）",

  avatar: "/avatar.jpg",

  about: "详细的自我介绍文字（200-400字）...",

  interests: [

    {

      id: "museum",

      name: "逛博物馆",

      description: "喜欢在历史与艺术中漫游",

      image: "/interests/museum.jpg",

    },

    {

      id: "hiking",

      name: "爬山",

      description: "享受登顶的风景与过程",

      image: "/interests/hiking.jpg",

    },

    {

      id: "comic",

      name: "漫画汉化",

      description: "将日文漫画翻译成中文分享给更多人",

      image: "/interests/comic-translation.jpg",

    },

  ],

  contact: {

    instagram: "[https://instagram.com/你的账号](https://instagram.com/你的账号)",

    email: "[你的邮箱@example.com](mailto:你的邮箱@example.com)",

  },

};

```



## 响应式断点（Tailwind 默认）

- **手机（< 768px）**：所有卡片堆叠单列，文字适中
- **平板/电脑（>= 768px）**：兴趣卡片三列并排，留白增加
- 实现方式：使用 `className="grid grid-cols-1 md:grid-cols-3 gap-4"`



## 构建与部署

| 步骤 | 命令 | 说明 |

|------|------|------|

| 安装依赖 | `npm install` | 首次运行，下载所有工具包 |

| 本地预览 | `npm run dev` | 在 `http://localhost:5173` 实时查看 |

| 打包成品 | `npm run build` | 在 `dist/` 生成纯静态文件 |

| 预览打包结果 | `npm run preview` | 模拟线上环境测试 |

| 部署上线 | 将 `dist/` 文件夹上传至 Vercel / EdgeOne Pages | 平台自动分配网址 |

## 风险与约束

- **图片大小**: 每张图片须压缩到 < 200KB，保证手机加载速度
- **无外部依赖**: 不接入数据库、CMS、后端 API
- **无 iframe**: 不嵌入外部页面（如社交动态），避免拖慢加载
- **系统字体**: 使用 `font-sans`（系统字体栈），不加载 Google Font，保证离线可用
- **第一版范围**: 不做登录、评论、多语言、博客



## 本地开发命令速查

```bash

npm install          # 首次运行

npm run dev          # 开发模式

npm run build        # 打包生产版本

npm run preview      # 预览生产版本

```

---





