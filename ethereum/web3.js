import Web3 from 'web3';

let web3;

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
    //We are in the browser and metamask is running.
    web3 = new Web3(window.ethereum);

}else{

    // We are on the server *OR* the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/a1d6bd8379b34e4d9b0edfebc7b50131'
    );

    web3 = new Web3(provider)

}
export default web3