import React, { useRef, useState } from 'react';

export default function Audio() {
  const [isMusicOn, setIsMusicOn] = useState(false);
  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
    setIsMusicOn(true);
  };

  const handleStop = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsMusicOn(false);
  };

  return (
    <div className="fixed bottom-0 right-0 p-4">
      <audio className="hidden" ref={audioRef} controls loop>
        <source src="public\music.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <div className="group relative">
        {isMusicOn && (
          <button
            className="text-4xl"
            onClick={handleStop}
            title="Stop Music"
          >
            🔇
          </button>
        )}
        {!isMusicOn && (
          <button
            className="text-4xl"
            onClick={handlePlay}
            title="Play Music"
          >
            🔊
          </button>
        )}
      </div>
    </div>
  );
}
