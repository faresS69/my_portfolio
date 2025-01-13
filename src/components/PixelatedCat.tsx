import { useState } from "react";
import { toast } from "sonner";

export const PixelatedCat = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      toast("Meow! 🐱", {
        description: "Thanks for petting me!",
        duration: 2000,
      });
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <div 
      className="fixed bottom-4 right-4 cursor-pointer transition-transform hover:scale-110"
      onClick={handleClick}
    >
      <img
        src="/cat-pixel.png"
        alt="Pixelated Cat"
        className={`pixelated-cat ${isAnimating ? "animate-bounce" : ""}`}
      />
    </div>
  );
};