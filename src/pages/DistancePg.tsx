import Header from "../Components/atomic/Header";
import AddressForm from "../Components/molecules/AddressForm";
import Distance from "../Components/molecules/Distance";
import Container from "../Components/organism/Container";

const DistancePg: React.FC = () => {
    return (
        <div className="bg-green-200 w-full h-screen flex justify-center items-center">
            <Container>
                <Header />
                <div className="flex flex-row gap-2 w-full h-full items-center justify-start mb-2">
                    <AddressForm />
                    <Distance />

                </div>
            </Container>
        </div>
    );
}

export default DistancePg;