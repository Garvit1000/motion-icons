import AnimatedCopyButton from "./AnimatedCopyButton";
import { useState } from "react";
import{ CodeComparison} from "./CodeCompare"; 


export default function CodeCompareSection() {
  const [theme, setTheme] = useState("light"); // simple theme toggle for the CodeComparison prop

  const beforeCode = `import { Heart, Star, Zap, Bell, Gift } from 'lucide-react';
import './animations.css';
import { useState, useEffect } from 'react';

export default function Icons() {
  const [heart, setHeart] = useState({ animating: false, entered: false });
  const [star, setStar] = useState({ animating: false, entered: false });
  // ... repeat for each icon

  useEffect(() => {
    const timers = [
      setTimeout(() => setHeart(p => ({ ...p, entered: true })), 0),
      setTimeout(() => setStar(p => ({ ...p, entered: true })), 100),
      // ...
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <div>
      <span
        className={\`\${heart.entered ? 'fade-in-up' : ''} \${heart.animating ? 'heartbeat' : ''}\`}
        onMouseEnter={() => setHeart(p => ({ ...p, animating: true }))}
        onMouseLeave={() => setHeart(p => ({ ...p, animating: false }))}
      >
        <Heart />
      </span>
    </div>
  );
}
`;

  const afterCode = `import { MotionIcon } from '@motion-icons/react';


export default function App() {
  return (
    <MotionIcon
      name="Heart"
      animation="heartbeat"
      size={32}
      color="red"
    />
  );
}
`;

  // Choose light/dark Shiki themes (or your own). These keys must match whatever themes your CodeComparison/codeToHtml expects.
  const lightTheme = "github-light";
  const darkTheme = "github-dark";

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <span className="ml-3 text-xs text-gray-500 font-mono">App.jsx</span>
          </div>

        </div>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          {/* CodeComparison shows both panes side-by-side */}
          <CodeComparison
            beforeCode={beforeCode}
            afterCode={afterCode}
            language="jsx"
            filename="App.jsx"
            lightTheme={lightTheme}
            darkTheme={darkTheme}
         
          />
        </div>
      </div>
    </section>
  );
}
