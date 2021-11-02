import Layout from "../components/layout";
import Title from "../components/title";


export default function Home(){
  return(
    <Layout>
      <Title>Welcome Frontend-Observation App!</Title>
      <p>Esta App esta creada en Next Js </p>
      <style>
        {`
        p{
          color: darkgray;
        }
        p:hover {
          color: darkred;
        }
        `}
      </style>
    </Layout>
   )
}
