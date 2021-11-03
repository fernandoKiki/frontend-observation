import Layout from "../../components/layout";
import Title from "../../components/title";

export default function Objetive() {
    return(
        <Layout>
            <Title>Lista de objetivos</Title>
            <ul>
                {objetives.map((objetive) => (
                    <li key={objetive.id}>{objetive.title}</li>
                ))}
            </ul>
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://.../objetives') // url del backend, de la lista de objetivos, debe ser http://localhost:3000/objetives
    const posts = await res.json()
  
    return {
      props: {
        objetives,
      },
    }
  }
  

