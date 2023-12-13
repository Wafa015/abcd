import  Herosection  from './Herosection';
import {Statistics} from './Statistics';
import Carousal from './Carousal';
import Security from './Security';
export default function Welcome(){
    return(
        <div>
        <Carousal />
        <Herosection />
        <Statistics />
        <Security />
      <br />
      
      </div>
    )
}