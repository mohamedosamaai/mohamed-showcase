# ==============================================================================
# Multi-Stage Container for Mohamed Osama Showcase
# Base: Alpine Nginx with non-root security context
# ==============================================================================

FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json tsconfig.json ./
COPY src ./src
RUN npm install && npm run build

FROM nginx:alpine-slim AS runner
WORKDIR /usr/share/nginx/html

# Clean default assets
RUN rm -rf ./*

# Copy built files and showcase UI
COPY --from=builder /app/dist ./dist
COPY index.html ./
COPY SPEC.md ./

# Security headers & configuration
RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    add_header X-Frame-Options "SAMEORIGIN"; \
    add_header X-Content-Type-Options "nosniff"; \
    add_header Referrer-Policy "strict-origin-when-cross-origin"; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
