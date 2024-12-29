import { useState } from "react";
import Button from "../atomic/Button";
import TextArea from "../atomic/Textarea";

const AddressForm: React.FC = () => {
  const [origin, setOrigin] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [userLocation, setUserLocation] = useState<boolean>(false);

  const handleClick = () => {
    console.log("Source: ", origin);
    console.log("Destination: ", destination);
    console.log("Use my location: ", userLocation);
  };

  return (
    <div className="bg-white w-full h-full flex justify-center items-center rounded-sm p-4">
      <div className="w-full flex flex-col flex-grow gap-4">
        <div className="flex flex-col w-full gap-4 flex-grow">
          <div className="flex flex-col w-full">
            <TextArea
              label="ORIGIN"
              onChange={(event) => setOrigin(event.target.value)}
            />
            <div className="flex flex-row gap-2">
              <input
                type="checkbox"
                id="avoid-tolls"
                name="avoid-tolls"
                value="avoid-tolls"
                onClick={() => setUserLocation(!userLocation)}
              />
              <p className="text-sm font-semibold text-gray-500">
                Use my location as the origin
              </p>
            </div>
          </div>

          <TextArea
            label="DESTINATION"
            onChange={(event) => setDestination(event.target.value)}
          />
        </div>

        <Button label="Calculate" onClick={handleClick} />
      </div>
    </div>
  );
};

export default AddressForm;
