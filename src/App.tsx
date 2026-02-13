import { useState, useRef, useEffect } from 'react';
import { Heart } from 'lucide-react';

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const noMessages = [
    "Naurrr bubu pleasee!",
    "Wehhhhh sige na!",
    "Why no!",
    "Last chancee!",
    "Galit na si monggi huhuhu",
    "final answer?",
    "Dudu fudu sad!"
  ];

  const getNoMessage = () => {
    return noMessages[Math.min(noCount, noMessages.length - 1)];
  };

  const getYesButtonSize = () => {
    return 1 + noCount * 0.3;
  };

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    moveNoButton();
  };

  const moveNoButton = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    setNoButtonPosition({ x, y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (noCount > 0 && noButtonRef.current) {
      const button = noButtonRef.current;
      const rect = button.getBoundingClientRect();
      const distance = Math.hypot(
        e.clientX - (rect.left + rect.width / 2),
        e.clientY - (rect.top + rect.height / 2)
      );

      if (distance < 150) {
        moveNoButton();
      }
    }
  };

  const handleYesClick = () => {
    setYesPressed(true);
  };

  if (yesPressed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-yellow-400 flex items-center justify-center p-4 overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <img src="https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif" alt="floating" className="w-32 h-32 absolute top-10 left-10 animate-bounce" />
          <img src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif" alt="cat" className="w-32 h-32 absolute bottom-20 right-10 animate-pulse" />
        </div>
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl w-full text-center space-y-6 relative z-10">
          <div className="flex justify-center gap-4 animate-spin" style={{ animationDuration: '3s' }}>
            <Heart className="w-12 h-12 text-purple-600 fill-purple-600" />
            <Heart className="w-12 h-12 text-yellow-400 fill-yellow-400" />
            <Heart className="w-12 h-12 text-purple-600 fill-purple-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-purple-600 animate-bounce">
            Yay! 💜💛
          </h1>
          <div className="bg-yellow-100 rounded-2xl p-6 border-4 border-purple-300">
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
              [Your romantic message will go here]
            </p>
          </div>
          <div className="flex justify-center gap-4 flex-wrap">
            <img
              src="https://media.tenor.com/CY43r8AD7OcAAAAM/milk-and-mocha-happy.gif"
              alt="Bubu and Dudu happy"
              className="w-40 h-40 rounded-lg animate-bounce"
            />
            <img
              src="https://media.giphy.com/media/3o6Zt6KHxJTbXCnSvu/giphy.gif"
              alt="happy cat"
              className="w-40 h-40 rounded-lg animate-pulse"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-yellow-400 flex items-center justify-center p-4 overflow-hidden relative" onMouseMove={handleMouseMove}>
      <div className="absolute inset-0 pointer-events-none">
        <img src="https://media.giphy.com/media/ICOgUNjpvO0 PC/giphy.gif" alt="floating hearts" className="w-24 h-24 absolute top-20 left-5 animate-bounce opacity-40" />
        <img src="https://media.giphy.com/media/BzyTuYCmvSORPsA3K7/giphy.gif" alt="cat vibing" className="w-28 h-28 absolute bottom-32 left-10 animate-pulse opacity-40" />
        <img src="https://media.giphy.com/media/26uf1EUQrS2ykm6uQ/giphy.gif" alt="laughing cat" className="w-24 h-24 absolute top-40 right-8 animate-bounce opacity-40" />
      </div>

      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl w-full text-center space-y-6 relative z-10">
        <div className="flex justify-center gap-2 mb-4">
          <img src="https://media.tenor.com/CY43r8AD7OcAAAAM/milk-and-mocha-bear-couple.gif" alt="Bubu and Dudu intro" className="w-16 h-16 rounded-full animate-bounce" />
          <img src="https://media.giphy.com/media/3o7TKSnVrjSKqJBRDi/giphy.gif" alt="peek cat" className="w-16 h-16 rounded-full animate-pulse" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-purple-600 leading-tight">
          Hi baby! Do you want to be my valentine?
        </h1>

        {noCount > 0 && (
          <div className="space-y-4">
            <p className="text-2xl md:text-3xl font-bold text-yellow-600 mb-4 animate-bounce">
              {getNoMessage()}
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <img
                src="https://media.tenor.com/CY43r8AD7OcAAAAM/milk-and-mocha-sad.gif"
                alt="Bubu and Dudu sad"
                className="w-32 h-32 rounded-lg shadow-lg"
              />
              <img
                src="https://media.tenor.com/Bvio78MG_j0AAAAM/sad-cat-crying.gif"
                alt="Sad cat"
                className="w-32 h-32 rounded-lg shadow-lg"
              />
              <img
                src="https://media.giphy.com/media/EI4Z3nRYSED0c/giphy.gif"
                alt="sad panda"
                className="w-32 h-32 rounded-lg shadow-lg"
              />
            </div>
          </div>
        )}

        <div className="flex justify-center items-center gap-6 flex-wrap pt-4 relative min-h-24">
          <button
            onClick={handleYesClick}
            style={{
              transform: `scale(${getYesButtonSize()})`,
              transition: 'transform 0.2s ease'
            }}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-2xl transition-all duration-200 flex items-center gap-2 active:scale-95 relative z-20"
          >
            <Heart className="w-6 h-6 fill-white animate-pulse" />
            Yes!
          </button>

          <button
            ref={noButtonRef}
            onClick={handleNoClick}
            style={{
              transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
              transition: 'transform 0.2s ease'
            }}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-2xl transition-all duration-200 active:scale-95 relative z-20 cursor-pointer"
          >
            No
          </button>
        </div>

        <div className="pt-4">
          <img
            src="https://media.tenor.com/CY43r8AD7OcAAAAM/milk-and-mocha-bear-couple.gif"
            alt="Bubu and Dudu"
            className="w-40 h-40 mx-auto rounded-lg shadow-lg animate-bounce"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
