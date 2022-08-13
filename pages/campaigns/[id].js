import { useRouter } from 'next/router'
import Campaign from '../../ethereum/campaign'
import {Card} from 'semantic-ui-react'
import Layout from '../../components/Layout'
import web3 from '../../ethereum/web3'

const CampaignInfo =(props)=>{
  const renderCards = ()=>{
    const{
        balance,
        manager,
        minimumContribution,
        requestsCount,
        approversCount
    } = props
    
    const items = [
        {
            header:manager,
            meta: 'Address of manager',
            description: 'The manager created this campaign and can create requests to withdraw money',
            style:{overflowWrap: 'break-word'}
        },
        {
            header: minimumContribution,
            meta: 'Minimum Contribution (wei)',
            description: 'You must contribute at least this much wei to the campaign'
        },
        {
            header: requestsCount,
            meta: 'Number of requests',
            description: 'A request tries to withdraw money from the contract.Requests must be approved by the approvers'
        },
        {
            header: approversCount,
            meta: 'Number of Approvers',
            description: 'Number of people who have already donated to this campaign'
        },
        {
            header: web3.utils.fromWei(balance, 'ether'),
            meta: 'Campaign Balance (ether)',
            description: 'The balnce is how much money is left in this campaign'
        }
    ];

    return <Card.Group items={items} />;
  }   
   
    
    return(
        <Layout>
            <img src="/circle-scatter-haikei.svg" alt="background" style={{position:'absolute' ,zIndex:'-1', top:0, left:'0', height: 'auto', width: '100%'}} />
            <h1 style={{color:'#fff'}}>Campaign Details</h1>
            {renderCards()}
        </Layout>
    )
}

CampaignInfo.getInitialProps = async (context)=>{

    const campaign = Campaign(context.query.id)

    const summary = await campaign.methods.getSummary().call();
    return { 
        minimumContribution: summary[0],
        balance: summary[1],
        requestsCount: summary[2],
        approversCount: summary[3],
        manager: summary[4]
    };

}

export default CampaignInfo