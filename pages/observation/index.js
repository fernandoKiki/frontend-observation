
import Layout from "../../components/layout";
import Title from "../../components/title";
import Link from "next/dist/client/link";
import {AiOutlinePlus} from 'react-icons/ai';
import { useRouter } from "next/dist/client/router";
import idObservation from "./[id]";



const Observation = ({observation}) => {
    const router = useRouter();
    
    return(
        <Layout>
        <Title>Observation List</Title>
        <div className='grid'>
        {observation.map(observation => {
            return(
                <Link href={'/observation/[id]'} as={`/observation/${observation.id}`} key={observation.id}>
                <a className='card'>
                <h3>{observation.name}</h3>
                <p>{observation.id}</p>
                <button className='bg-blue-400 px-2 py-0.5 hover:bg-blue-300 inline-flex items-center' onClick={()=> deleteObservation(observation.id)}>
                <AiOutlinePlus/>
                Delete
                </button>
                </a>
                </Link>
                )
            })}
            </div>
            <div>
            <button className='bg-blue-400 px-4 py-1 hover:bg-blue-300 inline-flex items-center'onClick={()=>router.push('observation/form')}>
            <AiOutlinePlus/>
            Add Observation
            </button>
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
        export default Observation;
        
        export async function getStaticProps() {
            const res = await fetch('http://localhost:3000/observation') // url del backend
            const observation = await res.json()
            return {
                props: {
                    observation,
                },
            }
        }
        
        export async function deleteObservation (idObservation){
            const response = await fetch(`http://localhost:3000/observation/${idObservation}`,{
            method: 'DELETE',
            cors: 'no-cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        })
        const data = response.json()
        console.log(data)
    }