# Custom React Hooks 🚀

A collection of reusable **custom React hooks** to simplify state management, performance optimization, and common UI interactions. Built with **React + TypeScript**.

## 📌 Features
- ✅ Debounce Hook (`useDebounce`)  
- ✅ Throttle Hook (`useThrottle`)  
- ✅ More hooks coming soon...

## 📦 Installation
Clone the repo and install dependencies:

`
git clone https://github.com/your-username/custom-react-hooks.git
cd custom-react-hooks
npm install`

## 🚀 Usage
1️⃣ useDebounce Hook

Debounces an input value with a specified delay.
`import { useDebounce } from "./hooks/useDebounce";
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
}`
2️⃣ useThrottle Hook
`import { useThrottle } from "./hooks/useThrottle";
import { useState } from "react";

function ScrollLogger() {
  const [position, setPosition] = useState(0);
  const throttledPosition = useThrottle(position, 300);

  return <div>Current Scroll Position: {throttledPosition}</div>;
}
`
##🛠️ Development
To run the project locally:
`npm start`
To build the project:
`npm run build`
🔥 Contributing
Want to add more hooks? Feel free to fork the repo and submit a PR! 😊

Steps to Contribute:
Fork this repo
Clone your fork
`git clone https://github.com/roo2ja/custom-react-hooks.git`
Create a new branch
`git checkout -b feature-new-hook`
Make your changes & commit
`git add .
git commit -m "Added new custom hook: useExample"`
Push to GitHub & create a PR
`git push origin feature-new-hook`

##🌟 Show Your Support
⭐ If you found this project useful, give it a star on GitHub!
💬 Feel free to open an issue if you have ideas or suggestions.

##📩 Connect
💼 LinkedIn
🐙 GitHub
