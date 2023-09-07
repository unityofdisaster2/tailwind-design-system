import Button from "../components/Button";
import { GoBell, GoCloud, GoDatabase } from 'react-icons/go';


export default function ButtonPage() {
    return (
    <div>
        <div>
            <Button 
        
                success 
                rounded 
                outline
                // we can pass plain classes with the className prop and handle it
                // in the component
                className="mb-5"
                >
                <GoBell />
                Click me!
                </Button>
        </div>
        <div>
            <Button danger outline>
                <GoCloud />
                Buy now!</Button>
        </div>
        <div>
            <Button warning>
                <GoDatabase/>
                See deal!</Button>
        </div>
        <div>
            <Button secondary outline>Hi Ads!</Button>
        </div>
        <div>
            <Button primary rounded>Something!</Button>
        </div>
    </div>
    );
}