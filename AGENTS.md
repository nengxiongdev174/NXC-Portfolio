# Agent Guidelines for NX CREATIONS Portfolio

## 1. Speed & Verification Rules
- **ห้ามใช้ `browser_subagent` หรือเปิดเบราว์เซอร์อัตโนมัติทดสอบหน้าจอเด็ดขาด** (Strictly NEVER open automated browsers or record browser sessions).
- ตรวจสอบความถูกต้องผ่านคำสั่ง Terminal:
  - `npx tsc --noEmit`
  - `npm run build`

## 2. Multilingual (i18n) Rules
- รองรับ 3 ภาษา (English ค่าเริ่มต้น, Thai, Lao) ด้วย Zero-Reload Client Architecture
- อ้างอิงคำแนะนำใน `.agents/skills/portfolio-i18n/SKILL.md` เสมอ
