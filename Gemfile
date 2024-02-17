source "https://rubygems.org"

ruby "2.7.8"

gem 'rails', '~> 6.0', '>= 6.0.3.4'
gem 'puma', '~> 4.3'
gem 'webpacker'

gem 'brakeman'
gem 'bcrypt'
gem 'bundler-audit'
gem 'coffee-rails', '~> 4.2'
gem 'figaro'
gem 'turbolinks', '~> 5'
gem 'sass-rails', '~> 5.0'
gem 'sendgrid-ruby'
gem 'sidekiq'
gem 'uglifier', '>= 1.3.0'
gem 'graphql'
gem 'graphql-batch'
gem 'graphiql-rails', group: :development
gem 'pry'
gem 'jsonapi-serializer'

# Use mysql as the database for Active Record
gem 'mysql2', '~> 0.5'


# Use Redis adapter to run Action Cable in production
# gem "redis", ">= 4.0.1"

# Use Kredis to get higher-level data types in Redis [https://github.com/rails/kredis]
# gem "kredis"

# Use Active Model has_secure_password [https://guides.rubyonrails.org/active_model_basics.html#securepassword]
# gem "bcrypt", "~> 3.1.7"


# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", require: false

# Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
# gem "image_processing", "~> 1.2"

group :development, :test do
  gem 'factory_bot_rails'
  gem 'rspec-rails'
  gem 'rspec_junit_formatter'
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do

  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'

  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

gem "tailwindcss-rails", "~> 2.0"
