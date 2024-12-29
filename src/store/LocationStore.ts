import { create } from "zustand";

interface LocationState {
    originLocation: string;
    setOriginLocation: (location: string) => void;
    destinationLocation: string;
    setDestinationLocation: (location: string) => void;
    isUserLocation: boolean;
    setIsUserLocation: (isUserLocation: boolean) => void;
}

const useLocationStore = create<LocationState>((set) => ({
    originLocation: '',
    setOriginLocation: (location) => set({ originLocation: location }),
    destinationLocation: '',
    setDestinationLocation: (location) => set({ destinationLocation: location }),
    isUserLocation: false,
    setIsUserLocation: (isUserLocation) => set({ isUserLocation }),

}));

export default useLocationStore;