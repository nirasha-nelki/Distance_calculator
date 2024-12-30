import { create } from "zustand";
import { GeolocationPosition } from "../types/LocationProps";

interface LocationState {
    originLocation: string;
    setOriginLocation: (location: string) => void;
    destinationLocation: string;
    setDestinationLocation: (location: string) => void;
    isUserLocation: boolean;
    setIsUserLocation: (isUserLocation: boolean) => void;
    originGeocode: GeolocationPosition | undefined;
    setOriginGeocode: (location: GeolocationPosition) => void;
    destinationGeocode: GeolocationPosition | undefined;
    setDestinationGeocode: (location: GeolocationPosition) => void;
}

const useLocationStore = create<LocationState>((set) => ({
    originLocation: '',
    setOriginLocation: (location) => set({ originLocation: location }),
    destinationLocation: '',
    setDestinationLocation: (location) => set({ destinationLocation: location }),
    isUserLocation: false,
    setIsUserLocation: (isUserLocation) => set({ isUserLocation }),
    originGeocode: undefined,
    setOriginGeocode: (location) => set({ originGeocode: location }),
    destinationGeocode: undefined,
    setDestinationGeocode: (location) => set({ destinationGeocode: location }),

}));

export default useLocationStore;