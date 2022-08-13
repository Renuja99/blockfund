import React, {Component} from 'react'
import factory from '../ethereum/factory'
import { Card , Button} from 'semantic-ui-react'
import Layout from '../components/Layout'
import Link from 'next/link'

const CampaignIndex = (props)=> {

     

    const renderCampaigns= ()=>{
        const items = props.campaigns.map(address =>{
            return{
                header: address,
                description: <Link href={`/campaigns/${address}`}>View Campaign</Link>,
                fluid: true
            }
        });

        return <Card.Group style={{width:'700px', height:'100px'}} items={items}/>
    }

 
    
        
        return (
            <Layout>
                <img src="/blob-scene-haikei.svg" alt="background" style={{position:'absolute' ,zIndex:'-1', top:0, height: 'auto', width: '100%' ,left:0}}/>

            <div>
                <h1  style={{ color: '#ffffff',letterSpacing:'0.5px', padding:'10px'}}>Open Campaigns</h1>
                <Link href='/campaigns/new'>
                <Button
                floated="right"
                content ="Create Campaign"
                icon="add circle" 
                style={{backgroundColor: '#001220', color: '#ffffff'}}            
                />
                </Link>
                
                {renderCampaigns()}

                
            </div>
            </Layout>
        )
    
}

CampaignIndex.getInitialProps = async ()=>{
    const campaigns =  await factory.methods.getDeployedCampaigns().call()
     
    return { campaigns };
 }

export default CampaignIndex