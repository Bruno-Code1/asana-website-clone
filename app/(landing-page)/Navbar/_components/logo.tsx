import { Link } from "lucide-react";
import Image from "next/image";

const Logo = () => {
    return ( 
        <Link 
        href={'/'}
        >
            <Image 
            src='/public/images/logo/logo-1.svg'
            alt='logo'
            width={80}
            height={80}
            className="mr-6"
            />  
        </Link>
     );
}
 
export default Logo;