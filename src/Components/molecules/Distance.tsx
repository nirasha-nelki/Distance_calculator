import useLocationStore from "../../store/LocationStore";
import DistanceField from "../atomic/DistanceField";
import Map from "../atomic/MapComponent";

const DistanceShow: React.FC = () => {

    const { originGeocode, destinationGeocode } = useLocationStore();
    return(
        <div className=" w-full h-full flex flex-col justify-center items-center rounded-lg border-2 border-gray-300 p-4 border-dashed">
            
            <DistanceField />
            <Map origin={originGeocode} destination={destinationGeocode}/>
        </div>
    )
}

export default DistanceShow;