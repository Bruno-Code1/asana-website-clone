import Logo from "./_components/logo";
import { NavigationMenuBar } from "./_components/navbar";

const Navbar = () => {
    return ( 
    <div>
        <div className="flex w-2/3 md:w-1/2">
            <Logo/>
            <NavigationMenuBar/>    
        </div>
    </div>
     );
}
 
export default Navbar;