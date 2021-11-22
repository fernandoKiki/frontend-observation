import Link from 'next/link';

export default function Navbar(){
    return(
        <nav>
            <Link href= '/'>
           <a className='font-black text-lg'>Home</a> 
            </Link>
            
            <Link href= '/observation'>
            <a className='font-black text-lg'>Observation</a>
            </Link>

            <Link href= '/objetive'>
            <a className='font-black text-lg'>Objetive</a>
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