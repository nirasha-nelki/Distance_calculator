import axios from 'axios';
const api_key = import.meta.env.VITE_OPENCAGHE_API_KEY as string;

export const getDeviceLocation = async () => {
  try {
    const position = await new Promise<GeolocationPosition>((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject)
    );
    return {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const geocodeAddress = async (address: string): Promise<any | null> => {
    // const api_key = import.meta.env.VITE_OPENCAGE_API_KEY;
    const api_key = '1a8fbbeaffdd467db7e42bd66702aad1'; 
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${api_key}`;
    // const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`
      
  
    try {
      const response = await axios.get(url);
      const data = response.data;
  
      // Check if the response contains valid results
      if (data && data.results && data.results.length > 0) {
        const result = data.results[0]; // Take the first result
        const geometry = result.geometry; // Extract geometry
        return {
          name: result.formatted, // Extract the formatted address
          latitude: geometry.lat, // Extract latitude
          longitude: geometry.lng, // Extract longitude
        };
      }
    } catch (error) {
      console.error(`Error geocoding address ${address}:`, error);
    }
    return null;
  };

    
  // Haversine formula to calculate the distance between two lat/lng points
  export const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const toRad = (value: number) => (value * Math.PI) / 180;
  
    const R = 6371; // Earth's radius in kilometers
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    
    const distance = R * c; // Distance in kilometers
    return distance;
  };
  
