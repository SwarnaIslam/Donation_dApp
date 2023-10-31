import abi from "./contract/Donate.json";
import Buy from "./components/Buy";
import Memos from "./components/Memos";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import charity from "./charity.png";
function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("None");

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x63421A4Cb5bFd4D107d8f26261D709f586155C1a";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;
        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });
          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );

          setState({ provider, signer, contract });
          setAccount(account);
        } else {
          alert("Please install Metamask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);

  console.log(state);
  return (
    <div style={{ backgroundColor: "#efefef" }}>
      <img
        src={charity}
        className="img-fluid mx-auto d-block"
        width="15%"
        style={{ marginTop: "20px", marginBottom: "40px" }}
      />
      <p className="text-center">Connected Account: {account}</p>
      <div className="container">
        <Buy state={state}></Buy>
        <Memos state={state}></Memos>
      </div>
    </div>
  );
}

export default App;
