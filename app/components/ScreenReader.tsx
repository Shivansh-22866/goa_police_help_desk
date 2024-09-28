// components/ScreenReader.tsx
"use client"
import React, { useEffect, useState } from 'react';

const ScreenReader: React.FC = () => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    const updateVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    // Load voices
    updateVoices();
    window.speechSynthesis.onvoiceschanged = updateVoices; // Update voices when they're loaded
  }, []);

  const readScreenContent = () => {
    const bodyText = document.body.innerText; // Get all text from the body

    if (bodyText.trim()) {
      const speech = new SpeechSynthesisUtterance(bodyText);
      speech.lang = 'en-US'; // Set the language

      // Optionally, select a specific voice
      const selectedVoice = voices.find(voice => voice.lang === 'en-US');
      if (selectedVoice) {
        speech.voice = selectedVoice;
      }

      // Event listeners for debugging
      speech.onstart = () => console.log('Speech started');
      speech.onend = () => console.log('Speech ended');
      speech.onerror = (event) => console.error('Speech error:', event.error);

      window.speechSynthesis.speak(speech);
    } else {
      console.warn('No content to read');
    }
  };

  return (
    <button
      onClick={readScreenContent}
      className="p-2 bg-blue-500 text-white rounded"
    >
      Read Screen Content
    </button>
  );
};

export default ScreenReader;
