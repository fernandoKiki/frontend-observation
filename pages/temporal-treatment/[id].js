import { useRouter } from "next/dist/client/router";
import Layout from "../../components/layout";

export default function idTemporal(){
    const router= useRouter();

    return(
        <Layout>
            <h2>Temporal Treatment Details</h2>
            <p>Temporal Treatment id: {router.query.id}</p>
        </Layout>
    )
}