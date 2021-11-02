import Link from 'next/link';

export default function Navbar(){
    return(
        <nav>
            <Link href= '/'>
           <a>Home</a> 
            </Link>
            
            <Link href= '/observation'>
            <a>Observation</a>
            </Link>

            <Link href= 'objetive'>
            <a>Objetive</a>
            </Link>

            <Link href= 'temporal-treatment'>
            <a>Temporal Treatment</a>
            </Link>

            <style jsx>
                {`
                nav {
                    padding-top: 10px;
                }
                a{
                    padding: 0 10px;
                }
                `}
            </style>
        </nav>
    )
}