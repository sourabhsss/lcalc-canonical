
import { create } from 'zustand';

export type VolumeUnit = 'gallons' | 'liters' | 'cubicFeet';
export type TimeUnitShort = 'seconds' | 'minutes';
export type TimeUnitLong = 'minutes' | 'hours';
export type DiameterUnit = 'inches' | 'millimeters' | 'centimeters';
export type VelocityUnit = 'feetPerSecond' | 'metersPerSecond';
export type CalculationMethod = 'container' | 'flowRate' | 'volumeTime';

export interface ContainerInputs {
  containerVolume: number;
  fillTime: number;
  volumeUnit: VolumeUnit;
  timeUnit: TimeUnitShort;
}

export interface FlowRateInputs {
  diameter: number;
  velocity: number;
  diameterUnit: DiameterUnit;
  velocityUnit: VelocityUnit;
}

export interface VolumeTimeInputs {
  volume: number;
  time: number;
  volumeUnit: VolumeUnit;
  timeUnit: TimeUnitLong;
}

export interface FlowConversions {
  litersPerMinute: number;
  cubicFeetPerMinute: number;
  cubicMetersPerHour: number;
}

export interface FlowData {
  gpm: number;
  method: CalculationMethod;
  inputs: ContainerInputs | FlowRateInputs | VolumeTimeInputs;
  conversions: FlowConversions;
}

interface GpmStore {
  flowData: FlowData | null;
  setFlowData: (data: FlowData) => void;
}

export const useGpmStore = create<GpmStore>((set) => ({
  flowData: null,
  setFlowData: (data) => set({ flowData: data }),
}));
