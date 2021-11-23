import React from "react";
import Layout from "../../components/layout";
import {AiOutlinePlus} from 'react-icons/ai';

class ObservationFrom extends React.Component {
    constructor(props){
    super(props);
        this.state= {
            name: "",
        };
        this.changeName= this.changeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    changeName(event) {
        this.setState({
            name: event.target.value,
        });
    }
   async handleSubmit(ev){
        ev.preventDefault();
        const response = await fetch('http://localhost:3000/observation', {
            method: 'POST',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({...this.state})
        });
        console.log(this.state)
        const observation = await response.json();
        return {
            props: {
                observation,
            },
        }
     
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <Layout>
            <h1>
            Add Observation
            </h1>
            <div>
            <input name="name" type="text" placeholder="name observation" className="w-full mb-5" value={this.state.name} onChange={this.changeName}></input>
            </div>
            <button className='bg-blue-400 px-2 py-0.5 hover:bg-blue-300 inline-flex items-center'type="submit">
            <AiOutlinePlus/>
            SAVE
            </button>
            </Layout>
            </form>
            );
        } 
    }
    export default ObservationFrom;
    
