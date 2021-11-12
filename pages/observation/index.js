
import Layout from "../../components/layout";
import Title from "../../components/title";
import Link from "next/dist/client/link";
export default function Observation({ observation }){
    return(
        <Layout>
            <Title>Observation List</Title>
            <div>
               {observation.map(observation =>{
                   return(
                       <Link></Link>
                   )
               })}
            </div>
           
        </Layout>
    )
}
<ul>
{observation.map((observation) => (
    <li key={observation.id}>{observation.name}</li>
))}
</ul>

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/observation') // url del backend
    const observation = await res.json()
  
    return {
      props: {
        observation,
      },
    }
  }