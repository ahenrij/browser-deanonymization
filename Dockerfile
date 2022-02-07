FROM php:7.4.0-fpm

EXPOSE 9000 3000

# Copy composer.lock and composer.json
COPY composer.lock composer.json /var/www/

# Set working directory
WORKDIR /var/www

# Install dependencies
RUN apt-get update \
	# gd
	&& apt-get install -y --no-install-recommends build-essential  openssl nginx libfreetype6-dev libjpeg-dev libpng-dev libwebp-dev zlib1g-dev libzip-dev gcc g++ make vim unzip curl git jpegoptim optipng pngquant gifsicle locales libonig-dev nodejs npm  \
	&& docker-php-ext-configure gd  \
	&& docker-php-ext-install gd \
	# gmp
	&& apt-get install -y --no-install-recommends libgmp-dev \
	&& docker-php-ext-install gmp \
	# pdo_mysql
	&& docker-php-ext-install pdo_mysql mbstring \
	# pdo
	&& docker-php-ext-install pdo \
	# opcache
	&& docker-php-ext-enable opcache \
	# zip
	&& docker-php-ext-install zip \
	&& apt-get autoclean -y \
	&& rm -rf /var/lib/apt/lists/* \
	&& rm -rf /tmp/pear/

# update nodejs
RUN curl -fsSL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install extensions
RUN docker-php-ext-install pdo_mysql mbstring zip exif pcntl
RUN docker-php-ext-configure gd --with-freetype --with-jpeg
RUN docker-php-ext-install gd

# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copy existing application directory contents
COPY . /var/www

# Setup npm
RUN npm install -g npm@latest && npm install

# Add user for laravel application
RUN groupadd -g 1000 www
RUN useradd -u 1000 -ms /bin/bash -g www www
COPY --chown=www:www . /var/www
USER www

CMD ["php-fpm"]