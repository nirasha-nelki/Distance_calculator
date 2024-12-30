export interface GeolocationPosition{
  latitude: number;
  longitude: number;
}

export interface MapProps {
  origin: GeolocationPosition | undefined;
  destination: GeolocationPosition | undefined;
}