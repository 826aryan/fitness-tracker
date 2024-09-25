import React, { useState } from 'react';

const MusicIntegration = ({ onAddTrack }) => {
  const [track, setTrack] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setTrack(URL.createObjectURL(file)); // Create a URL for the audio file
    }
  };

  const handlePlay = () => {
    onAddTrack(track); // Call the parent function with the track URL
  };

  return (
    <div>
      <h2>Upload and Play Your Music Track</h2>
      <input
        type="file"
        accept="audio/*"
        onChange={handleFileChange}
        required
      />
      <button onClick={handlePlay} disabled={!track}>Play Track</button>
      {track && (
        <audio controls>
          <source src={track} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};

export default MusicIntegration;
