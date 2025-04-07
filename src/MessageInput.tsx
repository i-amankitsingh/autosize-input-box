import { useRef, useEffect, useState, forwardRef } from "react";
import "./style.css";

interface MessageInputProps {
  onChange: (value: string) => void;
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  placeholderClassName?: string;
  placeHolderStyle?: React.CSSProperties;
}

const MessageInput = forwardRef<HTMLDivElement, MessageInputProps>(
  ({ onChange, className = "", style, placeholder = "Type...", placeHolderStyle, placeholderClassName }, ref) => {
    const inputRef = useRef<HTMLDivElement>(null);
    const [isEmpty, setIsEmpty] = useState(true);

    useEffect(() => {
      if (ref && typeof ref === "object" && ref !== null) {
        ref.current = inputRef.current;
      }
    }, [ref]);

    const handleInput = () => {
      if (inputRef.current) {
        const text = inputRef.current.innerText;
        setIsEmpty(!text.trim());
        onChange(text || "");
      }
    };

    return (
      <div className="container">
        {isEmpty && (
          <div className={`placeholder ${placeholderClassName}`} style={placeHolderStyle}>
            {placeholder}
          </div>
        )}
        <div
          ref={inputRef}
          contentEditable
          className={`message-input ${className}`}
          style={style}
          onInput={handleInput}
        />
      </div>
    );
  }
);

MessageInput.displayName = "MessageInput";
export { MessageInput };
