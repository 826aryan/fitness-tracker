// src/components/SpotifyPlayer.js
import React from 'react';

const SpotifyPlayer = ({ playlistUrl }) => {
  const embedUrl = playlistUrl.replace("open.spotify.com", "open.spotify.com/embed");

  return (
    <div>
      <iframe
        src={embedUrl}
        width="300"
        height="380"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
        title="Spotify Player"
      ></iframe>
    </div>
  );
};

export default SpotifyPlayer;
 