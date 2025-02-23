# Custom React Hooks 🚀

A collection of reusable **custom React hooks** to simplify state management, performance optimization, and common UI interactions. Built with **React + TypeScript**.

## 📌 Features
- ✅ Debounce Hook (`useDebounce`)
- ✅ Throttle Hook (`useThrottle`)
- ✅ More hooks coming soon...

## 📦 Installation
Clone the repo and install dependencies:

```bash
git clone https://github.com/root2ja/custom-react-hooks.git
cd custom-react-hooks
npm install
```

## 🚀 Usage

### 1️⃣ useDebounce Hook
Debounces an input value with a specified delay.

```tsx
import { useDebounce } from "./hooks/useDebounce";
import { useState } from "react";

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}
```

### 2️⃣ useThrottle Hook

```tsx
import { useThrottle } from "./hooks/useThrottle";
import { useState } from "react";

function ScrollLogger() {
  const [position, setPosition] = useState(0);
  const throttledPosition = useThrottle(position, 300);

  return <div>Current Scroll Position: {throttledPosition}</div>;
}
```

## 🛠️ Development

To run the project locally:

```bash
npm start
```

To build the project:

```bash
npm run build
```

## 🔥 Contributing
Want to add more hooks? Feel free to fork the repo and submit a PR! 😊

### Steps to Contribute:
1. **Fork this repo**
2. **Clone your fork**
   ```bash
   git clone https://github.com/roo2ja/custom-react-hooks.git
   ```
3. **Create a new branch**
   ```bash
   git checkout -b feature-new-hook
   ```
4. **Make your changes & commit**
   ```bash
   git add .
   git commit -m "Added new custom hook: useExample"
   ```
5. **Push to GitHub & create a PR**
   ```bash
   git push origin feature-new-hook
   ```

## 🌟 Show Your Support
⭐ If you found this project useful, give it a star on GitHub!
💬 Feel free to open an issue if you have ideas or suggestions.

## 📩 Connect
- 💼 [LinkedIn](https://in.linkedin.com/in/rutuja-b)  
- 🐙 [GitHub](https://github.com/Roo2ja)

