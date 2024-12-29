import { useEffect, useState } from "react";
import { DeviceLocation } from "../../types/LocationProps";
import useLocationStore from "../../store/LocationStore";
import { getDeviceLocation } from "../../utils/location";

const DistanceField: React.FC = () => {

    const [deviceLocation, setDeviceLocation] = useState<DeviceLocation | undefined>(undefined);
    const { isUserLocation } = useLocationStore();

    useEffect(() => {
        if (isUserLocation) {
            
            const data = getDeviceLocation();

            if (data !== null){
                data.then((location: { lat: number; lng: number } | null) => {
                    if (location) {
                        setDeviceLocation({
                            latitude: location.lat,
                            longitude: location.lng,
                        });
                    }
                });
            }
            
        }
    }, [isUserLocation]);

    useEffect(() => {
        console.log("Updated Device Location: ", deviceLocation);
    }, [deviceLocation]);


    return(
        <div className=" w-full flex justify-start items-center p-4">
            <label htmlFor="distance" className="text-md font-semibold">DISTANCE</label>
            <input type="text" name="distance" id="distance" className="border-2 border-gray-300 rounded-lg p-2 ml-2 mr-2" />
            <label htmlFor="distance" className="text-md font-semibold">km</label>
        </div>
    )
}

export default DistanceField;