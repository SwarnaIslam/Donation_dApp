import React from "react";
import { useState, useEffect } from "react";
const Memos = ({ state }) => {
  const [memos, setMemos] = useState([]);
  const { contract } = state;
  useEffect(() => {
    const memosMessage = async () => {
      const memos = await contract.getMemos();
      setMemos(memos);
    };
    contract && memosMessage();
  }, [contract]);
  return (
    <>
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th colSpan={4} className="text-center">
              Donation Record
            </th>
          </tr>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Message</th>
            <th scope="col">From</th>
            <th scope="col">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {memos.map((memo) => (
            <tr key={memo}>
              <td>{memo.name}</td>
              <td>{memo.message}</td>
              <td>{memo.from}</td>
              <td>{new Date(memo.timestamp * 1000).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Memos;
