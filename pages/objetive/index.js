import Layout from "../../components/layout";
import Title from "../../components/title";
import Link from "next/dist/client/link";
import useFetch from "use-http";
import { render } from "react-dom";

export default function Objetive( { objetive } ) {
    return(
        <Layout>
            <Title>Objetives List</Title>
            <div className='grid'>
               {objetive.map(objetive =>{
                   return(
                       <Link href={'/objetive/[id]'} as={`/objetive/${objetive.id}`} key={objetive.id}>
                           <a className='card'>
                               <h3>{objetive.objetive}</h3>
                               <p>{objetive.id}</p>
                           </a>
                       </Link>
                   )
               })}
            </div>
            <style jsx>
               {`
               
               .grid {
                   display: flex;
                   flex-wrap: wrap;
                   max-width: 800px;
                   margin-top: 2rem;
               }

               .card {
                   margin: 1rem;
                   flex-basic: 45%;
                   padding: 1.5rem;
                   color: black;
                   text-decoration: none;
                   border: 2px solid #eaeaea;
                   border-radius: 10px;
               }
               .card:hover,
               .card:focus,
               .card:active{
                   color: #0070f3;
                   border-color: #0070f3;
               }
               .card h3{
                   margin: 0 0 1rem 0;
                   font-size: 1.5rem;
               }
               .card p{
                   margin:0;
                   font-size: 1.25rem;
                   line-heigth: 1.5;
               }

               `}
           </style>
        </Layout>
    )
}

  

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/objetive') // url del backend, de la lista de objetivos, debe ser http://localhost:3000/objetives
    const objetive = await res.json()
  
    return {
      props: {
        objetive,
      },
    }
  }



