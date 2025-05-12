# 🔗 url-driven-filters

A minimal React + Vite demo showcasing how to filter data using **URL search parameters** with **debounced input**. This approach keeps the filter state in sync with the browser’s address bar, enabling:

- ✅ Shareable, bookmarkable filtered views  
- 🔁 State persistence on page reload  
- 🕒 Improved performance with debounced input  

## ✨ Features

- Built with Vite + React
- URL-based filtering via `URLSearchParams`
- Debounce mechanism for input
- Custom React hook: `useDebounce`
- Fully extendable to multiple filters, pagination, or APIs

## 🚀 Getting Started

```bash
git clone https://github.com/mahmoudjwily/url-driven-filters.git
cd url-driven-filters
npm install
npm run dev
