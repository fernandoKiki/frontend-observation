import { useRouter } from "next/dist/client/router";
import Layout from "../../components/layout";

export default function idObservation(){
    const router= useRouter();

    return(
        <Layout>
            <h2>Observation Details</h2>
            <p>Observation id: {router.query.id}</p>
        </Layout>
       
    )
}

