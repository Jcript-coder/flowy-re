import LeftSide from './LeftSide';
import CenterSwitch from './CenterSwitch';
import ButtonRight from './ButtonRight';

const NavigationBar=()=>{
    return(
        <>
            <div id="navigation">
                <LeftSide />
                <CenterSwitch />
               <ButtonRight />
    </div>
        </>
    )
}

export default NavigationBar;