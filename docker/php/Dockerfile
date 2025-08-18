FROM php:8.4-fpm
# Install necessary system packages and PHP extension
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    zip \
    vim \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng-dev \
    libzip-dev \
    libicu-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd zip pdo pdo_mysql mysqli intl
# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
# Set working directory
WORKDIR /var/www/html
# Copy the composer.json and composer.lock files (if available)
COPY ./composer.json /var/www/html/
# Install Composer dependencies
RUN composer install --no-scripts
# Copy CodeIgniter app to the container
COPY . .
# Install specific package using Composer
#RUN composer require google/auth --no-scripts
#RUN composer require google/apiclient --no-scripts
# Autoload the classes
RUN composer dump-autoload --optimize
# Set file permissions
RUN chown -R www-data:www-data /var/www/html
# Expose port 9001 for PHP-FPM
EXPOSE 9000
CMD ["php-fpm"]
