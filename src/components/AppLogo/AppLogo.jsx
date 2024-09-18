import { Button } from "@mui/material";
import Typography from '@mui/material/Typography';
import dogHouse from '../../images/dog-house.png';


export default function AppLogo(){

    return (
        <Button>
            <div className="App-logo">
                <img src={dogHouse}/>
            </div>
        </Button>
    );
}