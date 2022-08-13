import React,{Component} from 'react'
import Layout from '../../components/Layout'
import {Form, Button, Input, Message} from 'semantic-ui-react'
import factory from '../../ethereum/factory'
import web3 from '../../ethereum/web3'
import {withRouter} from 'next/router'

class CampaignNew extends Component{

    state={
        minimumContribution:'',
        errorMessage:'',
        loading: false
    }

    onSubmit =async (event)=>{
        event.preventDefault();

        this.setState({loading: true, errorMessage:''});
        
        try{
            await ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await web3.eth.getAccounts();
        console.log(accounts[0])
        await factory.methods
            .createCampaign(this.state.minimumContribution)
            .send({
                from: accounts[0]
            });

        this.props.router.push('/')
        }catch(err){
            this.setState({errorMessage: err.message});
        }

        this.setState({loading: false});
        
    }
    render(){
        return (
            <div>
            <img src="/wave-haikei.svg" alt="background" style={{position:'absolute' ,zIndex:'-1', top:0, left:'0', height: 'auto', width: '100%'}} />
            <Layout>
            <h1 style={{color:'#ffffff',letterSpacing:'0.5px', padding:'10px'}}>Create a Campaign!</h1>
            <Form style={{ padding:'10px'}}  onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                    <label style={{color:'#ffffff',letterSpacing:'1px'}}>Minimum Contribution</label>
                    <Input 
                    label="wei" 
                    labelPosition="right" 
                    value={this.state.minimumContribution} 
                    onChange={event => this.setState({minimumContribution: event.target.value})}
                    />
                </Form.Field>


                <Message error header="Oops!" content={this.state.errorMessage} />
                <Button loading={this.state.loading} style={{backgroundColor: '#009473', color: '#ffffff'}}  >Create!</Button>
            </Form>

            </Layout>
        </div>
        )
    }
}

export default withRouter(CampaignNew)