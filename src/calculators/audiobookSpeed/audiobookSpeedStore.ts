
import { create } from 'zustand';

export interface AudiobookLength {
  hours: number;
  minutes: number;
  totalMinutes: number;
}

export interface AudiobookData {
  originalLength: AudiobookLength;
  adjustedLength: AudiobookLength;
  timeSaved: AudiobookLength;
  playbackSpeed: number;
  bookTitle: string;
  finishTime: Date;
}

interface AudiobookSpeedStore {
  audiobookData: AudiobookData | null;
  setAudiobookData: (data: AudiobookData) => void;
}

export const useAudiobookSpeedStore = create<AudiobookSpeedStore>((set) => ({
  audiobookData: null,
  setAudiobookData: (data) => set({ audiobookData: data }),
}));
