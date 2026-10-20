# --- Stage 1: Build ---
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

# 👇 เพิ่ม 3 บรรทัดนี้เพื่อรับค่าจาก GitHub
ARG RESEND_API_KEY
ARG CONTACT_TO_EMAIL
ARG CONTACT_FROM_EMAIL

# 👇 ประกาศเป็น ENV ให้ Next.js อ่านค่าได้ตอน build
ENV RESEND_API_KEY=$RESEND_API_KEY
ENV CONTACT_TO_EMAIL=$CONTACT_TO_EMAIL
ENV CONTACT_FROM_EMAIL=$CONTACT_FROM_EMAIL

RUN npm run build

# --- Stage 2: Run ---
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]