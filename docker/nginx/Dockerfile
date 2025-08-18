FROM nginx:latest

# Copy Nginx configuration
COPY ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for Nginx
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
