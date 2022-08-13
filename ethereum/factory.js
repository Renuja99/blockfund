import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json'

const factoryInstance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface), '0x2dcb7e9E3B63B6F4a48cA4e334284D285dD2bE77'
)

export default factoryInstance;