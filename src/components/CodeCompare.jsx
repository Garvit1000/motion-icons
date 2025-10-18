import { useEffect, useState } from "react";
import { FileIcon } from "lucide-react";
import { codeToHtml } from "shiki";
import AnimatedCopyButton from "./AnimatedCopyButton";
export function CodeComparison({
  beforeCode,
  afterCode,
  language,
  filename,
  lightTheme,
  darkTheme,
  theme, // pass theme manually if needed
  systemTheme, // or provide system theme from props
}) {
  const [highlightedBefore, setHighlightedBefore] = useState("");
  const [highlightedAfter, setHighlightedAfter] = useState("");

  useEffect(() => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    const selectedTheme = currentTheme === "dark" ? darkTheme : lightTheme;

    async function highlightCode() {
      const before = await codeToHtml(beforeCode, {
        lang: language,
        theme: selectedTheme,
      });
      const after = await codeToHtml(afterCode, {
        lang: language,
        theme: selectedTheme,
      });
      setHighlightedBefore(before);
      setHighlightedAfter(after);
    }

    highlightCode();
  }, [theme, systemTheme, beforeCode, afterCode, language, lightTheme, darkTheme]);

  const renderCode = (code, highlighted) => {
    if (highlighted) {
      return (
        <div
          className="h-full overflow-auto bg-background font-mono text-xs [&>pre]:h-full [&>pre]:!bg-transparent [&>pre]:p-4 [&_code]:break-all"
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      );
    } else {
      return (
        <pre className="h-full overflow-auto break-all bg-background p-4 font-mono text-xs text-foreground">
          {code}
        </pre>
      );
    }
  };

  return (
  <div className="mx-auto w-full max-w-5xl">
      <div className="relative w-full overflow-hidden rounded-xl border border-border">
        <div className="relative grid md:grid-cols-2 md:divide-x md:divide-border">
          {/* --- BEFORE FILE --- */}
          <div>
            <div className="flex items-center justify-between bg-accent p-2 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <FileIcon className="h-4 w-4" />
                <span>{filename}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">before</span>
                <AnimatedCopyButton
                  textToCopy={beforeCode}
                  label="Copy"
                  className="flex items-center gap-2 text-xs"
                />
              </div>
            </div>
            {renderCode(beforeCode, highlightedBefore)}
          </div>

          {/* --- AFTER FILE --- */}
          <div>
            <div className="flex items-center justify-between bg-accent p-2 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <FileIcon className="h-4 w-4" />
                <span>{filename}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">after</span>
                <AnimatedCopyButton
                  textToCopy={afterCode}
                  label="Copy"
                  className="flex items-center gap-2 text-xs"
                />
              </div>
            </div>
            {renderCode(afterCode, highlightedAfter)}
          </div>
        </div>

        {/* VS Badge in Center */}
        <div className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md bg-accent text-xs text-foreground font-medium">
          VS
        </div>
      </div>
    </div>
  );
}