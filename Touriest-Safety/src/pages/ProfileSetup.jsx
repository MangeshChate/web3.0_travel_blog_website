import React, { useEffect, useState } from 'react'
import { ethers } from "ethers"
import ABI from "./ABI.json"
import Main1 from '../components/Main1';
import Checkout from '../components/Checkout';
import Profile from '../components/Profile';
import Main3 from '../components/Main3';
import Marquee from "../components/Marquee"
function ProfileSetup() {
  const [account, setAccount] = useState('');
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    try {

      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const wallet = async () => {
        if (provider) {
          await provider.send("eth_requestAccounts", []);

          window.ethereum.on("chainChanged", () => { window.location.reload(); });
          window.ethereum.on("accountschanged", () => { window.location.reload(); });

          const signer = provider.getSigner();
          const address = await signer.getAddress();


          setAccount(address);

          let contractAddress = "0x567F49925693D1F979243A9E3C5CeD6774F58F02";
          let abi = ABI;

          const contract = new ethers.Contract(contractAddress, abi, signer);



          setContract(contract);
          setProvider(signer);

        } else {
          alert("metamask is not installed");
        }
      }
      provider && wallet();

    } catch (error) {
      alert("Install Metamsk wallet to Interact with the blockchain ! ")
    }




  }, [provider]);
  return (
    <div>
      <Profile account={account} contract={contract} provider={provider}/>
      <Marquee/>
      <Main1/>
      <Checkout/>
      <Main3/>

    </div>
  )
}

export default ProfileSetup
