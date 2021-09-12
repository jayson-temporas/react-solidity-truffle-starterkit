import { useState, useEffect } from 'react'
import MainNav from "./layouts/MainNav"
import getWeb3 from "../getWeb3"
import { Container } from 'react-bootstrap';
import TokenContract from "../abis/Token.json";

const App = () => {
    const [accounts, setAccounts] = useState(['Not connected'])
    const [tokenCount, setTokenCount] = useState(0)
    
    useEffect( async () => {
        let web3 = await getWeb3()
        setAccounts(await web3.eth.getAccounts());

        const networkId = await web3.eth.net.getId();
        const deployedNetwork = TokenContract.networks[networkId];
        const instance = new web3.eth.Contract(TokenContract.abi, deployedNetwork.address)

        setTokenCount(await instance.methods.tokenCount().call());
    }, [])
    
    return (
        <>
            <MainNav account={accounts[0]} />
            <Container className="mt-4">
                <h1>Hello Solidity Devs</h1>
                <p>Your token count is {tokenCount}</p>
            </Container>
        </>
    );
}

export default App;
