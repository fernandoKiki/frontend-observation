
import Layout from "../../components/layout";
import Title from "../../components/title";
import Link from "next/dist/client/link";

export default function Observation({ observation }){
    return(
        <Layout>
            <Title>Observation List</Title>
            <div className='grid'>
               {observation.map(observation =>{
                   return(
                       <Link href={'/observation/[id]'} as={`/observation/${observation.id}`} key={observation.id}>
                           <a className='card'>
                               <h3>{observation.name}</h3>
                               <p>{observation.id}</p>
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
                   max-widt h: 800px;
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
    const res = await fetch('http://localhost:3000/observation') // url del backend
    const observation = await res.json()
  
    return {
      props: {
        observation,
      },
    }
  }