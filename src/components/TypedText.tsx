
import { useState, useEffect } from "react";

type TypedTextProps = {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
  className?: string;
};

export function TypedText({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 1500,
  className,
}: TypedTextProps) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [delta, setDelta] = useState(typingSpeed);

  useEffect(() => {
    const ticker = setTimeout(() => {
      const currentPhrase = phrases[phraseIndex];
      
      if (isDeleting) {
        setText(currentPhrase.substring(0, text.length - 1));
        setDelta(deletingSpeed);
      } else {
        setText(currentPhrase.substring(0, text.length + 1));
        setDelta(typingSpeed);
      }
      
      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), delayBetween);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }
    }, delta);
    
    return () => clearTimeout(ticker);
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, delayBetween, delta]);
  
  return (
    <div className={className}>
      <span>{text}</span>
      <span className="animate-blink border-r-2 ml-1">&nbsp;</span>
    </div>
  );
}
