import React, { useState, useRef } from 'react';

export default function VideoHero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
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
      id="home"
      className="relative w-full h-[105vh] min-h-[660px] bg-[#0B0F17] overflow-hidden flex items-center justify-center text-white select-none"
    >
      {/* Background YouTube Video Player with HD Poster Fallback (Pure, Full View) */}
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

      {/* Top Scrim solely to guarantee header navbar text contrast */}
      <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none z-10" />

      {/* Ambient Audio & Video Playback Controls in Bottom Corner */}
      <div className="absolute bottom-6 right-6 z-20 pointer-events-auto">
        <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 shadow-xl">
          <button
            type="button"
            onClick={togglePlay}
            className="p-1.5 text-slate-200 hover:text-white transition-colors cursor-pointer"
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
            className="p-1.5 text-slate-200 hover:text-white transition-colors cursor-pointer"
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
    </section>
  );
}
