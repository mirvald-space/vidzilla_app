# Video Downloader

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A powerful web application that allows you to download videos from various social media platforms. Simply paste a link, and get your video instantly!

**Disclaimer:** This tool is intended for personal use only. Please respect copyright laws and platform policies. Use this tool responsibly and only for content you have the right to download.


## 🎬 Supported Platforms

Video Downloader now supports over 40 platforms, including:

* **Instagram** - Reels and posts
* **TikTok** - All videos
* **YouTube** - Videos and Shorts
* **Facebook** - Videos and Reels
* **Twitter/X** - Videos and GIFs
* **Pinterest** - Video Pins
* **Reddit** - Videos
* **Snapchat** - Videos
* **LinkedIn** - Videos
* **Vimeo** - Videos
* **Telegram** - Public channel videos
* **Bilibili** - Videos
* **Tumblr** - Videos
* **And many more!** - Check the help section for the complete list

## ✨ Features

* **Easy to Use** - Just paste a link, get your video!
* **Fast Downloads** - Videos delivered in seconds
* **Multiple Formats** - Receive videos in playable and downloadable formats
* **Responsive Design** - Works perfectly on desktop and mobile devices
* **Modern UI** - Clean and intuitive user interface
* **No Watermarks** - Download original videos without platform watermarks
* **Free to Use** - With optional donations to support our servers

## 📱 How to Use

1. **Visit the Website**: Go to [video-downloader.vercel.app](https://video-downloader.vercel.app)
2. **Paste a Link**: Copy and paste any supported video URL
3. **Get Your Video**: Download or watch the video directly in your browser
4. **Support Us**: Consider donating if you find the service useful

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (v15+)
- **UI Library:** [Shadcn/ui](https://ui.shadcn.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Component Primitives:** [Radix UI](https://www.radix-ui.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Data Fetching:**
  [TanStack Query (React Query)](https://tanstack.com/query/latest) (v5)
- **Form Handling:** [React Hook Form](https://react-hook-form.com/) (v7)
- **Schema Validation:** [Zod](https://zod.dev/)
- **Internationalization:** [next-intl](https://next-intl-docs.vercel.app/)
- **Theming:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Notifications:** [Sonner](https://sonner.emilkowal.ski/)
- **Linting/Formatting:** ESLint, Prettier
- **Package Manager:** Yarn

## 🚀 Getting Started

Follow these steps to set up and run the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/meghost77/instagram-video-downloader.git
   ```

   ```bash
   cd instagram-video-downloader
   ```

2. **Install dependencies:**

   ```bash
   yarn install # or npm install
   ```

3. **Run the development server:**

   - This project uses Turbopack for faster development builds.

   ```bash
   yarn dev # or npm run dev
   ```

   - The application should now be running on
     [http://localhost:3000](http://localhost:3000).

4. **Build for production:**

   Ensures Locales are up to date, must be run every time you add/edit a locale
   file for production _(no need to run for development)_.

   ```bash
   yarn build:locales # or npm run build:locales
   ```

   ```bash
   yarn build # or npm run build
   ```

5. **Start the production server:**

   ```bash
   yarn start # or npm run start
   ```

## 📊 Implementation Details

* **Instagram**: Direct download using custom API
* **Other platforms**: Using various APIs for different platforms
* **Frontend**: Next.js with React 19 and modern component libraries
* **Backend**: Serverless functions for handling video downloads

## 🤝 Contributing

If you'd like to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a Pull Request.

## 📜 License

This project is licensed under the MIT License - see the `LICENSE.md` file for
details.

---

Made with ❤️
