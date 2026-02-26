import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // After 2 seconds, start fade-out
    const showTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    // After 2.6s (2s + 0.6s fade), unmount completely
    const hideTimer = setTimeout(() => {
      onComplete();
    }, 2600);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []); // empty deps — runs once on mount, StrictMode safe since both timers restart

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0a0a0a',
        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% 30%, rgba(0,255,100,0.04) 0%, transparent 70%)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
        opacity: fadeOut ? 0 : 1,
        transform: fadeOut ? 'scale(1.05)' : 'scale(1)',
        pointerEvents: fadeOut ? 'none' : 'auto',
      }}
    >
      {/* Subtle scanlines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,255,100,0.01) 3px, rgba(0,255,100,0.01) 6px)',
          pointerEvents: 'none',
        }}
      />

      {/* Terminal Loader — from UIverse by jeremyssocial */}
      <div className="terminal-loader">
        <div className="terminal-header">
          <div className="terminal-title">Status</div>
          <div className="terminal-controls">
            <div className="control close"></div>
            <div className="control minimize"></div>
            <div className="control maximize"></div>
          </div>
        </div>
        <div className="text">Loading...</div>
      </div>

      <style>{`
        @keyframes blinkCursor {
          50% { border-right-color: transparent; }
        }
        @keyframes typeAndDelete {
          0%, 10% { width: 0; }
          45%, 55% { width: 6.2em; }
          90%, 100% { width: 0; }
        }
        .terminal-loader {
          border: 0.1em solid #333;
          background-color: #1a1a1a;
          color: #0f0;
          font-family: "Courier New", Courier, monospace;
          font-size: 1em;
          padding: 1.5em 1em;
          width: 12em;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2), 0 0 40px rgba(0,255,100,0.06);
          border-radius: 4px;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
          z-index: 10;
        }
        .terminal-header {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1.5em;
          background-color: #333;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          padding: 0 0.4em;
          box-sizing: border-box;
        }
        .terminal-controls { float: right; }
        .control {
          display: inline-block;
          width: 0.6em; height: 0.6em;
          margin-left: 0.4em;
          border-radius: 50%;
          background-color: #777;
        }
        .control.close { background-color: #e33; }
        .control.minimize { background-color: #ee0; }
        .control.maximize { background-color: #0b0; }
        .terminal-title {
          float: left;
          line-height: 1.5em;
          color: #eee;
        }
        .text {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          border-right: 0.2em solid green;
          animation:
            typeAndDelete 4s steps(11) infinite,
            blinkCursor 0.5s step-end infinite alternate;
          margin-top: 1.5em;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
