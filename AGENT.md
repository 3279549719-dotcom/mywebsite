## 🧭 科普时间：[AGENTS.md](http://AGENTS.md) 和 .cursorrules 的区别

你问到点子上了，这两个东西是不同层级、不同用途的：

| | `.cursorrules` (全局) | `AGENTS.md` (项目级) |

|---|---|---|

| **位置** | 用户目录或项目根目录 | 项目根目录 |

| **作用范围** | 所有项目都生效 | **只在这个项目里生效** |

| **内容** | 个人偏好（如“用中文回复”、“不要写注释”等） | 项目特定的规矩（如“数据在哪个文件改”、“用什么技术栈”） |

| **谁用** | AI 的“人格设定” | AI 进入这个项目后的“工作手册” |

简单说： *`.cursorrules` 是给 AI 定性格`AGENTS.md` 是给 AI 发工牌和岗位说明书。**

举个例子：

- `.cursorrules你是一个资深前端，用中文回复，代码注释用英文。`

- `AGENTS.md本项目的页面结构是 Hero → About → Interests → Contact，数据在 src/data/profile.ts，改动后运行 npm run build 验证。`

所以你的直觉完全正确：**[AGENTS.md](http://AGENTS.md) 里必须包含可量化的验收标准**，让 AI 能自我验证“做对了没有”。

---

## 🔁 关于「模块化开发 + 自我验证」

你提到的“每个模块一次性完成，自行验证，判断通过还是 loop”，这其实不复杂。在 `AGENTS.md` 里，我们只需：

1. **定义开发顺序**（哪个组件先做，哪个后做）

2. **每个组件定义“完成标准”**（做完了，AI 自己检查什么）

3. **定义全局验收标准**（全部做完后，最终检查什么）

这样 AI 每完成一个组件，就可以对照标准自查，不用等你发现 bug 再返工。

---

## 📝 现在开始写你的 [AGENTS.md](http://AGENTS.md)

这是一份 **项目专用的工作手册**，内容聚焦于你当前这个个人主页。我遵循的原则：

- **规则清晰、可执行**

- **验收标准可量化**（AI 能自己跑检查）

- **不混入科普废话**

```markdown

# [AGENTS.md](http://AGENTS.md) — Personal Site

## 项目概述

个人展示站，单页滚动，包含首屏、关于我、兴趣爱好、联系方式四个区块。

技术栈：React + TypeScript + Vite + Tailwind CSS。

## 开发顺序（必须按此执行，每完成一步自查）

1. 脚手架初始化（Vite + React + TS + Tailwind）

2. Hero 组件（首屏）

3. About 组件（关于我）

4. Interests 组件（兴趣卡片）

5. Contact + Footer 组件

6. 响应式适配 + 整体样式打磨

7. 构建验证（npm run build）

## 编码规范

- 组件：函数式组件 + 带类型注解（TypeScript）

- 样式：Tailwind CSS（禁止手写 CSS 文件，除非 Tailwind 无法实现）

- 注释：英文，仅对复杂逻辑添加（如动画逻辑、条件渲染）

- 数据：所有文字和图片路径写在 `src/data/profile.ts` 中，组件从该文件读取

## 数据文件格式（不可变）

```typescript

// src/data/profile.ts

export const profile = {

  name: string

  title: string

  avatar: string

  about: string

  interests: { id, name, description, image }[]

  contact: { instagram: string; email: string }

}

```

## 全局验收标准（AI 每次完成一个组件后自查）

- [ ] 浏览器控制台无报错`npm run dev` 后检查）

- [ ] 375px 宽度下无横向滚动、文字可读、卡片堆叠正确

- [ ] 所有图片有 `alt` 属性

- [ ] 所有外链有 `target="_blank"` 和 `rel="noopener noreferrer"`

- [ ] `npm run build` 通过`dist/` 正常生成

## 组件级完成标准

| 组件 | 完成标准（AI 自查项） |

|------|----------------------|

| Hero | 头像显示；姓名+一句话显示；滚动引导按钮存在且可点击 |

| About | 自我介绍文字显示；展开/收起交互正常（如有） |

| Interests | 三张卡片显示；图片正常加载；卡片点击有反馈（如 hover 效果） |

| Contact | INS 链接跳转正确；邮箱链接唤起邮件客户端 |

| Footer | 版权年份正确；最后更新日期显示 |

## 禁止事项（红线）

- 不接入数据库、API、CMS

- 不引入 React Router（单页无需路由）

- 不使用 iframe

- 不加载 Google Font（使用系统字体栈 `font-sans`）

- 不修改 `src/data/profile.ts` 的字段结构（只改内容值）

## 部署命令

```bash

npm install

npm run dev      # 开发

npm run build    # 打包

```

## 工作流程（AI 按此执行）

1. 按「开发顺序」逐块实现

2. 每完成一个组件，对照「组件级完成标准」自检

3. 全部完成后，跑「全局验收标准」全量检查

4. 若有项目不通过，修正后重新检查，直到全部 ✅ 再交付

```

---

