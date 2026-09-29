import React, { useState, useRef } from 'react';

export default function VideoHero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const iframeRef = useRef(null);

  const YOUTUBE_VIDEO_ID = 'LBvByB-S0O4';

  const togglePlay = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      if (isPlaying) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'pauseVideo' }),
          '*'
        );
      } else {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'playVideo' }),
          '*'
        );
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      if (isMuted) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'unMute' }),
          '*'
        );
      } else {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'mute' }),
          '*'
        );
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      id="home-2"
      className="relative w-full h-[100vh] min-h-[640px] mt-[88px] sm:mt-[96px] bg-[#0B0F17] overflow-hidden flex items-center justify-center text-white"
    >
      {/* Background YouTube Video Player with HD Poster Fallback (No Overlays, Natural Brightness) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg'), url('/hero-building.jpg')`,
          }}
        />
        <iframe
          ref={iframeRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-[100%] min-w-[177.77%] pointer-events-none scale-[1.05]"
          src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${YOUTUBE_VIDEO_ID}&playsinline=1&rel=0&showinfo=0&modestbranding=1&enablejsapi=1`}
          title="JRS International School Official Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>

      {/* Main Content Area (Full 100vh Immersive Spacing) */}
      <div className="relative z-20 max-w-[1240px] mx-auto px-6 sm:px-8 text-center flex flex-col items-center justify-center h-full py-16">
        

        {/* Central Glowing Play Button */}
        <button
          type="button"
          onClick={() => setIsVideoModalOpen(true)}
          className="group relative mb-8 flex items-center justify-center cursor-pointer"
          aria-label="Open Full Campus Video"
        >
          {/* Outer glowing pulsing rings */}
          <span className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#DC2626]/50 animate-ping pointer-events-none" />
          <span className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#DC2626]/30 animate-pulse pointer-events-none" />
          
          {/* Center Play Disc */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#DC2626] to-[#B91C1C] text-white flex items-center justify-center shadow-[0_0_50px_rgba(220,38,38,0.8)] group-hover:scale-110 group-hover:shadow-[0_0_70px_rgba(220,38,38,1)] transition-all duration-300 border-2 border-white/60">
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1 text-white group-hover:scale-110 transition-transform"
              viewBox="0 0 24 24"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </button>


        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setIsVideoModalOpen(true)}
            className="group inline-flex items-center gap-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-8 py-4 rounded-full text-[15px] font-bold transition-all duration-300 shadow-[0_10px_30px_rgba(220,38,38,0.5)] hover:shadow-[0_15px_35px_rgba(220,38,38,0.7)] hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Watch Official Video</span>
            <span className="text-base font-normal leading-none transition-transform duration-200 group-hover:translate-x-1">›</span>
          </button>

          <a
            href="#admissions"
            className="group inline-flex items-center gap-2.5 bg-black/50 hover:bg-white text-white hover:text-[#0B0F17] border border-white/50 hover:border-white px-8 py-4 rounded-full text-[15px] font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer backdrop-blur-md"
          >
            <span>Schedule Campus Walk</span>
            <span className="text-base font-normal leading-none transition-transform duration-200 group-hover:translate-x-1">›</span>
          </a>
        </div>

      </div>

      {/* Ambient Audio & Video Playback Controls */}
      <div className="absolute bottom-6 right-6 z-20 pointer-events-auto">
        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
          <button
            type="button"
            onClick={togglePlay}
            className="p-1.5 text-slate-300 hover:text-white transition-colors cursor-pointer"
            title={isPlaying ? 'Pause Background Video' : 'Play Background Video'}
            aria-label="Toggle video playback"
          >
            {isPlaying ? (
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            )}
          </button>

          <span className="w-[1px] h-3 bg-white/20" />

          <button
            type="button"
            onClick={toggleMute}
            className="p-1.5 text-slate-300 hover:text-white transition-colors cursor-pointer"
            title={isMuted ? 'Unmute Background Audio' : 'Mute Background Audio'}
            aria-label="Toggle mute"
          >
            {isMuted ? (
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6" />
              </svg>
            ) : (
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Full-Screen Video Modal */}
      {isVideoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#0B0F17] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-[#0B0F17]">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#DC2626] animate-pulse" />
                <h3 className="font-modern font-bold text-sm sm:text-base text-white">
                  JRS International School, Narapally, Near Uppal Depot, Hyderabad
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#0B0F17] flex items-center justify-center text-sm font-bold transition-all cursor-pointer"
                aria-label="Close video"
              >
                ✕
              </button>
            </div>

            {/* YouTube Video Player Frame */}
            <div className="aspect-video w-full bg-black">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                title="JRS International School, Narapally, Near Uppal Depot, Hyderabad"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-[#0B0F17] flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs sm:text-sm text-gray-300">
                📍 Uppal Bus Depot, Narapally, Hyderabad • Admissions Open 2026–27
              </span>
              <a
                href="#admissions"
                onClick={() => setIsVideoModalOpen(false)}
                className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-colors cursor-pointer"
              >
                <span>Book Campus Visit</span>
                <span>›</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
