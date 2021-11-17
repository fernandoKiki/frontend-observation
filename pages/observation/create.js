import Layout from "../../components/layout";
import Name from "../../components/name";
import Title from "../../components/title";


export default function Create( { observation } ){
   
  /*  constructor(props) {
        super(props);

        this.state = {
            id: '',
            nombre: ''
        }
    }*/

    return(
        <Layout>
            <Title>
                Create Observation
            </Title>
            <Name value = { observation.name }
            onChange= { this.onInputChange }
            edit />

        </Layout>
    )
}

export async function postData(url='http://localhost:3000/observation', data= {id, name}){
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    const observation = await response.json();
    return {
        props: {
            observation,
        },
    }

}
