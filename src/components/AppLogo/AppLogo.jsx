import dogHouse from '../../images/dog-house.png';

export default function AppLogo(sx){

    return (
        <div className="App-logo">
            <img src={dogHouse} alt="App logo: A dog house with a figure of a pawn inside"/>
        </div>
    );
}