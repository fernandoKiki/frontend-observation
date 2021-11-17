import { useRouter } from "next/dist/client/router";
import Layout from "../../components/layout";

export default function idObjetive(){
    const router= useRouter();

    return(
        <Layout>
            <h2>Objetives Details</h2>
            <p>Objetive id: {router.query.id}</p>
        </Layout>
    )
}
