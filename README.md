# 📩 message-type-input

A lightweight and customizable **React message input** component designed for chat, comments, and prompt interfaces. Built using `contentEditable` for natural typing behavior, with support for custom styles, placeholder, and more.

---

## 📦 Installation

```bash
npm install message-type-input
or with Yarn:
yarn add message-type-input

🚀 Usage
import React, { useRef, useState } from "react";
import { MessageInput } from "message-type-input";
import "message-type-input/dist/style.css"; // Required for base styles

const App = () => {
  const inputRef = useRef<HTMLDivElement>(null);
  const [text, setText] = useState('')

  const handleChange = (value: string) => {
    setText(value)
  };

  useEffect(() => {
   console.log("Text: -", text);
  }, [text)

  return (
    <MessageInput
      onChange={(val: string) => handleChange(val)}
      placeholder="Type your message..."
      className="tailwind-class custom-class"
      placeholderClassName="custom-placeholder"
      style={{ padding: "12px" }}
      placeHolderStyle={{ padding: "12px", color: "#aaa" }}
      placeholderClassName="tailwind-class custom-class"
      ref={inputRef}
    />
  );
};
```

🧩 Props
```bash
Prop	                      Type	                                    Description
onChange	                  (value: string) => void	                  Required. Callback fired whenever content changes
className	                  string	                                  Optional class for styling the message input
style	                      React.CSSProperties	                      Inline styles for the message input
placeholder	                string	                                  Text shown when input is empty (default: "Type...")
placeholderClassName	      string	                                  Optional class to style the placeholder
placeHolderStyle	          React.CSSProperties	                      Inline styles for the placeholder
```

🎨 Customization
You can style your component with:

✅ CSS Classes
```bash
.custom-input {
  min-height: 40px;
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 16px;
}

.custom-placeholder {
  color: #aaa;
  font-style: italic;
}
```
✅ Inline Styling
```bash
<MessageInput
  style={{ padding: "12px", border: "1px solid #ccc" }}
  placeHolderStyle={{ padding: "12px", color: "gray" }}
/>
```

🔍 Use Cases
💬 Chat Interfaces: Build Slack/WhatsApp-like chat UIs.

🧠 AI Prompt Boxes: Use for GPT/LLM apps where the user types a query.

💭 Comment Sections: Suitable for comment inputs in blogs or social feeds.

💼 CRM Systems: Input fields for note-taking or quick messaging.

✍️ Custom Form Fields: Replace traditional <textarea>s with editable rich inputs.



🔗 GitHub Repository
GitHub: https://github.com/ankitsinghjethuri/message-type-input

Feel free to fork, star ⭐, or contribute!


🛠 Contributing
Clone the repo

Install dependencies

Build or run the demo app locally

Submit pull requests for new features, fixes, or improvements

📃 License
MIT © Ankit Singh Jethuri



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
