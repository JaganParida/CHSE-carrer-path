# CHSE Odisha Career & Learning Portal (CHSETube)

A clean, executive learning portal aligning curated YouTube masterclasses with the official **Council of Higher Secondary Education (CHSE), Odisha** curriculum. Built as a high-performance, serverless-optimized full-stack web platform.

---

## Tech Stack

### Frontend
- **Core Library**: React 18 (Concurrent Mode, Hooks, Functional Architecture)
- **Styling & Design System**: Tailwind CSS (Obsidian & Slate Theme, Zero Eye-Strain Contrast)
- **Build Tooling**: Vite 5 (Sub-2s Production Builds, Optimized Asset Chunks)
- **Graphics**: 100% Pure Inline SVG Icons (Strictly Zero Emojis)
- **State Management**: Reactive Context API (AuthContext, AppContext)

### Backend & API
- **Runtime**: Node.js (ES Modules)
- **Web Framework**: Express.js
- **Database ORM**: MongoDB with Mongoose (Serverless Connection Pooling Singleton)
- **Authentication**: JSON Web Tokens (JWT) & BcryptJS Password Hashing
- **Cookie Security**: Cookie-Parser (HttpOnly, Secure, SameSite HTTPS Cookies)

### Cloud & Deployment
- **Deployment Platform**: Vercel (Unified Monorepo Architecture)
- **Serverless Runtime**: Vercel Serverless Functions (`@vercel/node`)
- **Edge Acceleration**: Vercel Edge CDN with `stale-while-revalidate` caching
- **Database Cluster**: MongoDB Atlas Cloud Database

---

## Key Features

### 1. Student Learning Hub
- **16:9 Cinema Player**: Responsive YouTube player embed with previous/next chapter navigation and distraction-free learning.
- **Interactive Syllabus Checklists**: Clickable topic checkboxes that calculate real-time completion percentages across each chapter, unit, and subject.
- **Built-in Chapter Notebook**: Integrated note-taking pad beside the video player with automatic persistence and one-click `.txt` download for offline revision.
- **Study Streak Counter**: Visual day streak tracking to encourage consistent daily study habits.
- **24-Week Activity Heatmap**: Interactive GitHub-style visual study heatmap recording daily student engagement and revision sessions.
- **Command Palette Search (`Ctrl + K`)**: Rapid global modal search indexing all subjects, units, chapters, and concepts.

### 2. Admin Video Studio
- **Dynamic Curriculum Control**: Authorized administrators can add, update, or clear YouTube video lecture URLs for any stream, class, subject, or chapter.
- **Live Preview Engine**: Automatically parses standard YouTube URLs, short URLs (`youtu.be`), and embed links to render an immediate live test player and high-resolution thumbnail preview.
- **Missing Link Filter**: Instant filter toggle displaying all syllabus chapters that still require a verified lecture link.
- **Instant Synchronization**: Changes update the live UI immediately, sync to MongoDB via REST endpoints, and persist across user sessions.

### 3. Official CHSE Odisha Syllabus Compliance
- **Class 12 Science PCM**: Full curriculum for Physics (14 chapters), Chemistry (10 chapters), and Mathematics (13 chapters) maintained to board standards.
- **Class 12 Biology**: Strictly follows the official CHSE 5-Unit framework:
  - Unit I: Reproduction
  - Unit II: Genetics and Evolution
  - Unit III: Biology and Human Welfare
  - Unit IV: Biotechnology and its Applications
  - Unit V: Ecology and Environment
- **Class 11 & 12 Languages & IT**: Exact match with PW Live BSE Odisha curriculum for English, Odia (MIL), and Information Technology.
- **Commerce & Arts Streams**: Full coverage for Accountancy, Business Studies, Business Mathematics, Political Science, History, and Macroeconomics.

### 4. Enterprise Security & Session Persistence
- **HttpOnly HTTPS Cookies**: Authentication tokens are stored in secure, HttpOnly, SameSite cookies to protect against Cross-Site Scripting (XSS).
- **Hard Refresh Session Survival**: Page reloads and hard refreshes (`Ctrl + F5`) verify the session with the server in the background, keeping students logged in continuously.
- **Zero Polling Architecture**: Uses reactive event-driven requests instead of recurring background intervals, preserving serverless execution limits.
- **Lean Database Queries**: Sub-millisecond indexed database queries with `.lean()` execution to reduce serverless CPU execution time and memory footprint.

### 5. Post-+2 Career Roadmaps
- **Engineering & Technology**: JEE Main, JEE Advanced, OJEE pathways, top colleges (IIT, NIT Rourkela, VSSUT Burla), and career milestones.
- **Medical & Healthcare**: NEET UG roadmaps, AIIMS Bhubaneswar, SCB Medical College, and specialization timelines.
- **Chartered Accountancy (CA)**: Complete ICAI Foundation, Intermediate, Articleship, and Final guidance.
- **Civil Services (UPSC / OPSC)**: Strategy and stage-by-stage preparation guidelines for IAS, IPS, and OAS.
- **Corporate Law**: CLAT, NLU admission tracks, and legal career milestones.
- **Data Science & AI**: Skill paths, mathematics foundations, and industry career benchmarks.

---

## License

Distributed under the MIT License. Designed and engineered for the students and educators of CHSE Odisha.
