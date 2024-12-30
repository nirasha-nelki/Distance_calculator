import { useEffect, useState } from "react";
import { GeolocationPosition } from "../../types/LocationProps";
import useLocationStore from "../../store/LocationStore";
import { getDeviceLocation, geocodeAddress, calculateDistance } from "../../utils/location";
import { DEFAULT_CENTER } from "../../constants/constant";

const DistanceField: React.FC = () => {
  const [deviceLocation, setDeviceLocation] = useState<
    GeolocationPosition | undefined
  >(undefined);
  const { isUserLocation, originLocation, destinationLocation, originGeocode, setOriginGeocode, destinationGeocode, setDestinationGeocode } =
    useLocationStore();
  const [distance, setDistance] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (isUserLocation) {
      const fetchLocation = async () => {
        try {
          const location = await getDeviceLocation();
          if (location) {
            setDeviceLocation({
              latitude: location.lat,
              longitude: location.lng,
            });
          }
        } catch (error) {
          console.error("Error fetching device location: ", error);
        }
      };
      fetchLocation();
    }
  }, [isUserLocation]);

  useEffect(() => {
    console.log("Updated Device Location: ", deviceLocation);
  }, [deviceLocation]);

  useEffect(() => {
    if (isUserLocation) {
      if (deviceLocation) {
        setOriginGeocode(deviceLocation);
      }
    } else {

      if (originLocation === "") {
        setOriginGeocode(DEFAULT_CENTER);
        
      } else{
        geocodeAddress(originLocation).then((location) => {
          if (location) {
            setOriginGeocode({
              latitude: location.latitude,
              longitude: location.longitude,
            });
          }
        });
      }
      
    }


    if (destinationLocation === "") {
      setDestinationGeocode(DEFAULT_CENTER);
    } else{
      geocodeAddress(destinationLocation).then((location) => {
        if (location) {
          setDestinationGeocode({
            latitude: location.latitude,
            longitude: location.longitude,
          });
        }
      });
    }
    

  }, [originLocation, destinationLocation, isUserLocation, deviceLocation]);


  useEffect(() => {


    if (originGeocode && destinationGeocode) {
        const distance = calculateDistance(
          originGeocode.latitude,
          originGeocode.longitude,
          destinationGeocode.latitude,
          destinationGeocode.longitude
        );
        // console.log("Distance: ", distance.toFixed(2));
        setDistance(distance);
        
      }
  }, [originGeocode, destinationGeocode]);

  return (
    <div className=" w-full flex justify-start items-center p-4">
      <label htmlFor="distance" className="text-md font-semibold">
        DISTANCE
      </label>
      <input
        type="text"
        name="distance"
        id="distance"
        className="border-2 border-gray-300 rounded-lg p-2 ml-2 mr-2"
        value={distance?.toFixed(2)}
      />
      <label htmlFor="distance" className="text-md font-semibold">
        km
      </label>
    </div>
  );
};

export default DistanceField;
