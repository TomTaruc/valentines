import { useState } from 'react';
import { Heart, HeartCrack, Flower2 as Tulip, Cat, Dog as Monkey, Calendar, MapPin, Sparkles, Star } from 'lucide-react';

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
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

  const personalGallery = [
    "cac32ae5-0b42-47d3-9c66-acd6b65e0bdb.jpg",
    "03667625-7f7a-4be0-84c3-f99940156cf3.jpg",
    "b7872980-95c0-4546-b1a3-1812459600c6.jpg",
    "39758e0a-0fba-4632-aebb-76125d00cca8.jpg",
    "218108ab-96fd-484d-aecd-9563b5821f7a.jpg",
    "eca9e64a-69a9-491f-8037-94280ab6235b.jpg",
    "cbe07bab-660d-462d-bfcb-df877209717a.jpg",
    "a2466b54-2f37-40ee-b71f-3a83cc34971a.jpg"
  ];

  const getNoMessage = () => noMessages[noCount % noMessages.length];
  const getNoImage = () => noImages[noCount % noImages.length];

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    const buttonWidth = 100;
    const buttonHeight = 45;
    const padding = 20;
    
    const maxWidth = window.innerWidth - buttonWidth - padding;
    const maxHeight = window.innerHeight - buttonHeight - padding;
    
    const newLeft = Math.max(padding, Math.random() * maxWidth);
    const newTop = Math.max(padding, Math.random() * maxHeight);

    setNoButtonPosition({ left: `${newLeft}px`, top: `${newTop}px` });
  };

  if (showDetails) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-400 to-yellow-300 flex items-center justify-center p-4">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-12 max-w-2xl w-full text-center space-y-6 md:space-y-8 border-4 md:border-8 border-double border-purple-200 relative animate-in slide-in-from-bottom duration-700">
          <Star className="absolute top-4 right-4 text-yellow-400 animate-spin-slow w-6 h-6" />
          <Sparkles className="absolute bottom-4 left-4 text-purple-400 animate-pulse w-6 h-6" />
          
          <h1 className="text-3xl md:text-5xl font-black text-purple-700 italic underline decoration-yellow-400">Our Date Plan! 🧸</h1>
          
          <div className="space-y-4 md:space-y-6 text-left bg-purple-50 p-4 md:p-6 rounded-2xl border-2 border-purple-100 shadow-inner">
            <div className="flex items-start gap-4 group">
              <div className="bg-purple-600 p-2 md:p-3 rounded-full group-hover:rotate-12 transition-transform shrink-0">
                <Calendar className="text-white w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <p className="text-[10px] md:text-sm font-bold text-purple-400 uppercase">When</p>
                <p className="text-lg md:text-xl font-bold text-gray-800">February 14, 2026</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="bg-yellow-500 p-2 md:p-3 rounded-full group-hover:rotate-12 transition-transform shrink-0">
                <MapPin className="text-white w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <p className="text-[10px] md:text-sm font-bold text-yellow-600 uppercase">Where</p>
                <p className="text-lg md:text-xl font-bold text-gray-800 leading-tight">Gateway (Pound - subject to change)</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="bg-pink-500 p-2 md:p-3 rounded-full group-hover:rotate-12 transition-transform shrink-0">
                <Heart className="text-white w-5 h-5 md:w-6 md:h-6 fill-white" />
              </div>
              <div>
                <p className="text-[10px] md:text-sm font-bold text-pink-600 uppercase">Why</p>
                <p className="text-lg md:text-xl font-bold text-gray-800 leading-tight">Valentines Date! Let's eat and photobooth baby! Sunduin kita from school!</p>
              </div>
            </div>
          </div>

          <button 
            onClick={() => setShowDetails(false)}
            className="text-purple-600 text-sm md:text-base font-bold hover:underline transition-all"
          >
            ← Back to Gallery
          </button>
        </div>
      </div>
    );
  }

  if (yesPressed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-400 to-yellow-300 flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-4 md:p-12 max-w-4xl w-full text-center space-y-6 md:space-y-8 border-4 md:border-8 border-double border-purple-200 relative animate-in zoom-in duration-500 my-4">
          <div className="space-y-4">
            <h1 className="text-2xl md:text-6xl font-black text-purple-700 italic drop-shadow-sm leading-tight px-2">Yippee! Thank you pami! 💜💛</h1>
            <div className="flex justify-center">
              <img
                src="https://media.tenor.com/9fscv__vkukAAAAM/dudu-bubu-dudu-bubu-love.gif" 
                alt="Celebration"
                className="rounded-2xl h-28 md:h-40 shadow-lg border-4 border-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4 px-2">
            {personalGallery.map((img, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg md:rounded-xl shadow-md border-2 border-white hover:scale-105 transition-transform duration-300">
                {/* Fixed image source path by removing the leading slash */}
                <img src={img} alt={`Memory ${index}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <button
            onClick={() => setShowDetails(true)}
            className="w-full bg-gradient-to-r from-purple-600 to-yellow-500 text-white font-black py-4 md:py-6 px-4 md:px-8 rounded-xl md:rounded-2xl shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-2 group"
          >
            <span className="text-lg md:text-2xl tracking-tighter uppercase italic">CLICK ME :p!</span>
            <Sparkles className="animate-pulse w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          <div className="flex justify-center gap-4 md:gap-8 pb-4">
            <div className="flex flex-col items-center">
               <Tulip className="text-yellow-500 fill-yellow-200 animate-bounce w-5 h-5 md:w-6 md:h-6" />
               <span className="text-[8px] md:text-xs font-bold text-purple-400 uppercase tracking-widest">Tulips</span>
            </div>
            <div className="flex flex-col items-center">
               <Cat className="text-purple-500 animate-bounce delay-75 w-5 h-5 md:w-6 md:h-6" />
               <span className="text-[8px] md:text-xs font-bold text-purple-400 uppercase tracking-widest">Cats</span>
            </div>
            <div className="flex flex-col items-center">
               <Monkey className="text-yellow-600 animate-bounce delay-150 w-5 h-5 md:w-6 md:h-6" />
               <span className="text-[8px] md:text-xs font-bold text-purple-400 uppercase tracking-widest">Monkey</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-purple-400 to-yellow-300 flex items-center justify-center p-4 overflow-hidden relative">
      <Tulip className="absolute top-4 left-4 text-yellow-200 w-16 h-16 md:w-32 md:h-32 opacity-20 animate-pulse" />
      
      <div className="bg-white/90 rounded-3xl shadow-2xl p-6 md:p-12 max-w-sm md:max-w-md w-full text-center space-y-6 md:space-y-8 relative z-20 border-b-8 border-purple-200">
        <div className="space-y-4">
          <div className="relative inline-block">
            <img 
              className="h-32 md:h-44 mx-auto rounded-2xl shadow-md border-4 border-white" 
              src={noCount === 0 ? "https://media.tenor.com/9fscv__vkukAAAAM/dudu-bubu-dudu-bubu-love.gif" : getNoImage()} 
              alt="Reaction" 
            />
            <div className="absolute -bottom-2 -right-2 bg-yellow-400 p-1 md:p-2 rounded-full shadow-lg text-sm md:text-base">🌷</div>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-purple-700 leading-tight">Will you be my Valentine? 🧸</h1>
          {noCount > 0 && (
            <p className="text-lg md:text-xl font-bold text-purple-600 bg-yellow-100 py-1 md:py-2 px-4 md:px-6 rounded-full inline-block shadow-sm animate-in slide-in-from-bottom-2">
              {getNoMessage()}
            </p>
          )}
        </div>
        
        <div className={`flex flex-col items-center justify-center gap-4 md:gap-6 min-h-[140px] md:min-h-[160px] relative`}>
          <button 
            onClick={() => setYesPressed(true)} 
            style={{ 
              transform: `scale(${Math.min(1 + noCount * 0.35, 3)})`,
              transition: 'transform 0.2s ease-out'
            }} 
            className="bg-purple-600 hover:bg-purple-700 text-white font-black py-3 md:py-4 px-8 md:px-12 rounded-full shadow-xl z-50 transition-all flex items-center gap-2 text-sm md:text-base"
          >
            <Heart className="fill-white w-5 h-5 md:w-6 md:h-6 animate-pulse" /> YES!
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
            className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold py-2 md:py-3 px-6 md:px-8 rounded-full shadow-lg border-b-4 border-yellow-600 text-sm md:text-base"
          >
            <HeartCrack className="w-4 h-4" /> No
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;