import { useState } from 'react';
import { Heart, HeartCrack, Flower2 as Tulip, Cat, Dog as Monkey } from 'lucide-react';

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState<{ top: string; left: string } | null>(null);

  const noMessages = [
    "Naurrr bubu pleasee! 🌷",
    "Wehhhhh sige na! 🐱",
    "Why no! Monggi is crying... 🐒",
    "Giatay! Bad cat! 🐈‍⬛",
    "Last chancee! (eme sige n kc) 🧸",
    "Galit na si monggi huhuhu 🐒",
    "final answer? 🌷",
    "Dudu fudu sad! 🧸",
    "ERROR: 'No' button is currently broken. Try 'Yes'! 🐱",
  ];

  const noImages = [
    "https://media1.tenor.com/m/FLBmfkn2QJ0AAAAC/im-good.gif",
    "https://media1.tenor.com/m/aJeIvS0AuHcAAAAC/cat1.gif",
    "https://media1.tenor.com/m/zG-sjaQA9IQAAAAC/sad-sad-cat.gif",
    "https://media.tenor.com/rwZ1KmV8ZAoAAAAi/bubu-dudu-sseeyall.gif",
    "https://media.tenor.com/hzbQakIKSooAAAAi/heart-broken-sad.gif",
    "https://media.tenor.com/q9124Fxqpu8AAAAi/sseeyall-bubu-dudu.gif",
    "https://media.tenor.com/EwcICMdiwDcAAAAi/bubu-angry-dudu-cheeky.gif",
    "https://tse1.mm.bing.net/th/id/OIP.hGoKe_y338DDPhJm2iN-vgHaGf?pid=Api&P=0&h=180",
  ];

  // EXACT filenames. IMPORTANT: These must be in your /public folder!
  const personalGallery = [
    "image_c0059e.jpg",
    "image_c009ba.png",
    "cac32ae5-0b42-47d3-9c66-acd6b65e0bdb.jpg",
    "03667625-7f7a-4be0-84c3-f99940156cf3.jpg",
    "b7872980-95c0-4546-b1a3-1812459600c6.jpg",
    "39758e0a-0fba-4632-aebb-76125d00cca8.jpg",
    "218108ab-96fd-484d-aecd-9563b5821f7a.jpg",
    "eca9e64a-69a9-491f-8037-94280ab6235b.jpg",
    "cbe07bab-660d-462d-bfcb-df877209717a.jpg",
    "a2466b54-2f37-40ee-b71f-3a83cc34971a.jpg",
    "image_c084be.png",
    "image_c08864.jpg",
    "image_c08cff.png",
    "image_c0e6da.png",
    "image_c0ea96.png"
  ];

  const getNoMessage = () => noMessages[noCount % noMessages.length];
  const getNoImage = () => noImages[noCount % noImages.length];

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    const buttonWidth = 120;
    const buttonHeight = 50;
    const padding = 30;

    const newLeft = Math.random() * (window.innerWidth - buttonWidth - padding * 2) + padding;
    const newTop = Math.random() * (window.innerHeight - buttonHeight - padding * 2) + padding;

    const yesScale = 1 + noCount * 0.45;
    const forbiddenRadius = 110 * yesScale;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    let finalLeft = newLeft;
    let finalTop = newTop;

    const distFromCenter = Math.sqrt(Math.pow(newLeft + buttonWidth/2 - centerX, 2) + Math.pow(newTop + buttonHeight/2 - centerY, 2));

    if (distFromCenter < forbiddenRadius) {
      finalLeft = newLeft > centerX ? window.innerWidth - buttonWidth - padding : padding;
      finalTop = newTop > centerY ? window.innerHeight - buttonHeight - padding : padding;
    }

    setNoButtonPosition({ left: `${finalLeft}px`, top: `${finalTop}px` });
  };

  if (yesPressed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-400 to-yellow-300 flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-12 max-w-4xl w-full text-center space-y-8 border-8 border-double border-purple-200 relative animate-in zoom-in duration-500 my-10">
          <Tulip className="absolute top-4 left-4 text-purple-400 w-12 h-12 opacity-40 rotate-12" />
          <Tulip className="absolute bottom-4 right-4 text-yellow-500 w-12 h-12 opacity-40 -rotate-12" />
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-black text-purple-700 italic drop-shadow-sm">Knew it, my favorite person! 💜💛</h1>
            <div className="flex justify-center">
              <img
                src="https://media.tenor.com/9fscv__vkukAAAAM/dudu-bubu-dudu-bubu-love.gif" 
                alt="Celebration"
                className="rounded-2xl h-40 shadow-lg border-4 border-white"
              />
            </div>
          </div>

          {/* GALLERY SECTION */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 px-2">
            {personalGallery.map((img, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-xl shadow-md border-2 border-white hover:scale-110 transition-transform duration-300">
                <img 
                  src={img} 
                  alt={`Memory ${index}`} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // Try with a slash if it fails without one
                    if (!target.src.includes('://') && !target.src.startsWith('/')) {
                        target.src = '/' + img;
                    }
                  }}
                />
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-yellow-50 rounded-2xl p-8 border-2 border-dashed border-purple-200 shadow-inner">
            <p className="text-2xl text-gray-800 font-serif leading-relaxed italic">
              Happy Valentine's Day, my love! I'm so lucky to have you. 🌷
            </p>
          </div>
          
          <div className="flex justify-center gap-8 pb-4">
            <div className="flex flex-col items-center">
               <Tulip className="text-yellow-500 fill-yellow-200 animate-bounce" />
               <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">Tulips</span>
            </div>
            <div className="flex flex-col items-center">
               <Cat className="text-purple-500 animate-bounce delay-75" />
               <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">Cats</span>
            </div>
            <div className="flex flex-col items-center">
               <Monkey className="text-yellow-600 animate-bounce delay-150" />
               <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">Monkey</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-purple-400 to-yellow-300 flex items-center justify-center p-4 overflow-hidden relative">
      <Tulip className="absolute top-10 left-10 text-yellow-200 w-32 h-32 opacity-20 animate-pulse" />
      <Tulip className="absolute bottom-20 left-20 text-purple-300 w-24 h-24 opacity-20" />

      <div className="bg-white/90 rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full text-center space-y-8 relative z-20 border-b-8 border-purple-200">
        <div className="space-y-4">
          <div className="relative inline-block">
            <img
              className="h-[180px] mx-auto rounded-2xl shadow-md border-4 border-white transition-all duration-300"
              src={noCount === 0 ? "https://media.tenor.com/9fscv__vkukAAAAM/dudu-bubu-dudu-bubu-love.gif" : getNoImage()}
              alt="Valentine reaction"
            />
            <div className="absolute -bottom-2 -right-2 bg-yellow-400 p-2 rounded-full shadow-lg">🌷</div>
          </div>
          
          <h1 className="text-3xl font-extrabold text-purple-700 leading-tight">Will you be my Valentine? 🧸</h1>
          
          {noCount > 0 && (
            <p className="text-xl font-bold text-purple-600 bg-yellow-100 py-2 px-6 rounded-full inline-block shadow-sm animate-in slide-in-from-bottom-2">
              {getNoMessage()}
            </p>
          )}
        </div>

        <div className="flex flex-row items-center justify-center gap-6 min-h-[120px] relative">
          <button
            onClick={() => setYesPressed(true)}
            style={{ transform: `scale(${1 + noCount * 0.45})` }}
            className="bg-purple-600 hover:bg-purple-700 text-white font-black py-4 px-12 rounded-full shadow-xl z-50 transition-all flex items-center gap-2"
          >
            <Heart className="fill-white w-6 h-6 animate-pulse" /> YES!
          </button>

          <button
            onClick={handleNoClick}
            style={noButtonPosition ? { 
              position: 'fixed', 
              left: noButtonPosition.left, 
              top: noButtonPosition.top, 
              zIndex: 40 
            } : { 
              position: 'relative', 
              zIndex: 40 
            }}
            className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold py-3 px-8 rounded-full shadow-lg flex items-center gap-2 transition-all border-b-4 border-yellow-600"
          >
            <HeartCrack className="w-4 h-4" /> No
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;