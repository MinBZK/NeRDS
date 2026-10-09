# syntax=docker/dockerfile:1

# Rootless nginx with the built site in it. The workflow runs `mkdocs build`
# first and builds this image from the repository root, so site/ exists.
FROM nginxinc/nginx-unprivileged:1.31-alpine

LABEL org.opencontainers.image.source=https://github.com/NederlandseDigitaleDienst/NeRDS
LABEL org.opencontainers.image.description="Website van de Nederlandse Richtlijn Digitale Systemen (NeRDS)"
LABEL org.opencontainers.image.licenses=EUPL-1.2

COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY deploy/security-headers.conf /etc/nginx/security-headers.conf
COPY site/ /usr/share/nginx/html/

EXPOSE 8080
