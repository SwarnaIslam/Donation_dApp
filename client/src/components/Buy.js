import React from "react";
import { ethers } from "ethers";
const Buy = ({ state }) => {
  const giveDonation = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;

    console.log(name, message, contract);

    const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction = await contract.donating(name, message, amount);
    await transaction.wait();
  };
  return (
    <>
      <form onSubmit={giveDonation}>
        <div class="form-floating mb-3 mt-3">
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter name"
            name="name"
          ></input>
          <label for="name">Enter your name</label>
        </div>
        <div class="form-floating mb-3 mt-3">
          <input
            type="text"
            class="form-control"
            id="message"
            placeholder="Enter message"
            name="message"
          ></input>
          <label for="message">Enter message</label>
        </div>
        <button type="submit" disabled={!state.contract}>
          Donate
        </button>
      </form>
    </>
  );
};

export default Buy;
