# Mental Health Blog

A full-stack blog application focused on mental health topics, built with **Laravel 12**, **Inertia.js**, and **React**. The project uses SQLite as its default database and Tailwind CSS for styling, making it easy to get up and running locally without any additional database setup.

---

## Tech Stack

| Layer      | Technology                                      |
|------------|-------------------------------------------------|
| Backend    | PHP 8.2+, Laravel 12, Laravel Sanctum, Ziggy   |
| Frontend   | React 18, Inertia.js 2, Tailwind CSS 3          |
| UI         | Bootstrap 5, React Bootstrap, styled-components |
| Build      | Vite 7, PostCSS, Autoprefixer                   |
| Database   | SQLite (default), MySQL/PostgreSQL supported    |
| Auth       | Laravel Breeze                                  |
| Testing    | PHPUnit 11                                      |

---

## Requirements

- PHP >= 8.2
- Composer
- Node.js >= 18 and npm
- SQLite (included with PHP by default)

---

## Installation

```bash
# 1. Clone the repository
git clone https://github.com/Godsdar/Mental-Health-Blog.git
cd Mental-Health-Blog

# 2. Install PHP dependencies
composer install

# 3. Install JavaScript dependencies
npm install

# 4. Set up environment
cp .env.example .env
php artisan key:generate

# 5. Run migrations
php artisan migrate

# 6. Link storage (for file uploads)
php artisan storage:link
```

---

## Running Locally

### All services at once (recommended)

```bash
composer run dev
```

This starts the Laravel server, queue worker, log tail, and Vite dev server concurrently.

### Or separately

```bash
# Terminal 1 — backend
php artisan serve

# Terminal 2 — frontend
npm run dev
```

Open [http://localhost:8000](http://localhost:8000) in your browser.

---

## Building for Production

```bash
npm run build
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

---

## Configuration

All configuration lives in `.env`. Key variables:

```env
APP_NAME=Laravel
APP_ENV=local
APP_URL=http://localhost

# Database — SQLite by default, no extra setup needed
DB_CONNECTION=sqlite

# To switch to MySQL:
# DB_CONNECTION=mysql
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=mental_health_blog
# DB_USERNAME=root
# DB_PASSWORD=

# Mail (uses log driver by default — check storage/logs)
MAIL_MAILER=log
```

---

## Testing

```bash
composer run test
# or directly:
php artisan test
```

---

## Project Structure

```
├── app/                # Controllers, Models, Middleware
├── bootstrap/          # Application bootstrap
├── config/             # Laravel configuration files
├── database/           # Migrations, factories, seeders
├── public/             # Entry point, compiled assets
├── resources/
│   ├── js/             # React components (Inertia pages)
│   └── views/          # Blade root template
├── routes/
│   ├── web.php         # Web routes
│   └── auth.php        # Authentication routes
├── storage/            # Logs, uploaded files, cache
└── tests/              # PHPUnit test suites
```

---

## License

MIT
