import React from "react";
import Layout from "../../components/layout";
import {AiOutlinePlus} from 'react-icons/ai';
import { data } from "autoprefixer";

class ObservationFrom extends React.Component {
    super(props){
        this.state= {
            name: ""
        }
        this.changeName= this.changeName.bind(this.name);
    }
    
    changeName(event) {
        this.setState({
            name: event.target.value
        });
    }
    handleSubmit(){
        postData('http://localhost:3000/observation', this.state)
    }
    
    render(){
        return(
            <form action='http://localhost:3000/observation' method="POST">
            <Layout>
            <h1>
            Add Observation
            </h1>
            <div>
            <input name="name" type="text" placeholder="name observation" className="w-full mb-5" value={this.state}></input>
            </div>
            <button className='bg-blue-400 px-2 py-0.5 hover:bg-blue-300 inline-flex items-center'
            onClick={postData}>
            <AiOutlinePlus/>
            SAVE
            </button>
            </Layout>
            </form>
            );
        } 
    }
    export default ObservationFrom;
    
    export async function postData(url='http://localhost:3000/observation', data ={name}){
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    });
    const observation = await response.json();
    return {
        props: {
            observation,
        },
    }
}