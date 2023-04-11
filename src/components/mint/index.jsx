import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { ContractABI } from "./Contract";

import "react-toastify/dist/ReactToastify.css";

function Mint({
  connection,
  disconnect,
  getTokens,
  images,
  totalSupply,
  maxSupply,
  maxMintAmount,
  price,
  readContract,
  userMintedAmount,
  wallet,
}) {
  const [amount, setAmount] = useState(0);
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(true);

  const { REACT_APP_CONTRACT_ADDRESS } = process.env;

  const mint = async (mintAmount) => {
    setCheck(!check);
    if (wallet === "Connect a Wallet") {
      notify("Connect a Wallet First!");
      return;
    } else {
      await readContract();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        REACT_APP_CONTRACT_ADDRESS,
        ContractABI,
        signer
      );
      try {
        const response = await contract.mint(mintAmount, {
          value: ethers.utils.parseEther((price * mintAmount).toString()),
        });
        await response.wait();
        toast.success("Transaction Successful.", {
          toastId: "custom-id-yes",
        });
        setCheck(!check);
      } catch (error) {
        setCheck(!check);
        notify(error.reason);
      }
    }
  };

  const notify = (message) => {
    toast.error(message, {
      toastId: "custom-id-yes",
    });
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", async () => {
        await disconnect();
      });
      window.ethereum.on("accountsChanged", async () => {
        await disconnect();
        await connection();
        await readContract();
        await getTokens();
      });
    }
  });

  useEffect(() => {
    const initialFunction = async () => {
      setTimeout(async () => {
        await getTokens();
        setLoading(false);
      }, [2000]);
    };
    initialFunction();
  }, []);

  return (
    <div className="flex flex-col bg-[#f9f9fc] items-center w-full justify-center min-h-[100vh] md:h-screen">
      {loading ? (
        <div className="flex font-poppins text-[32px] justify-center">
          Loading
        </div>
      ) : (
        <>
          <div className="text-black text-2xl text-center px-4 font-bold mt-[40%] md:mt-10 bg-blue-light pb-5 bg-opacity-80">
            <div>Total Supply: {maxSupply} </div>
            <div>Currently Minted: {totalSupply}</div>
            <div>
              You have {maxMintAmount - userMintedAmount} Minting Remaining
            </div>
            <div>The Price is {price}eth ETH + Gas Fee</div>
            <div className=" py-5 flex justify-center">
              <div className="border-2 border-black rounded-lg grid md:grid-cols-2 grid-cols-1 px-20 py-5">
                <div className="flex">
                  <button
                    className="btn2 md:w-12 w-9 hover:bg-red-500 border text-black border-black rounded-xl uppercase font-semibold "
                    type="button"
                    onClick={() => {
                      setAmount(amount <= 1 ? amount : amount - 1);
                    }}
                  >
                    -
                  </button>
                  <p className="px-10 mt-1 flex justify-center items-center">
                    {amount}
                  </p>
                  <button
                    className="btn2 md:w-12 w-9  py-0 hover:bg-green-500  border text-black border-black rounded-xl uppercase font-semibold "
                    type="button"
                    onClick={() => {
                      setAmount(
                        amount < maxMintAmount - userMintedAmount
                          ? amount + 1
                          : amount
                      );
                    }}
                  >
                    +
                  </button>
                </div>
                <button
                  className={`btn2  md:py-0 py-3 hover:bg-yellow-400 rounded-lg mx-4 ${
                    maxMintAmount - userMintedAmount === 0 &&
                    "disabled hover:bg-gray-400"
                  }  text-black uppercase font-semibold`}
                  type="button"
                  onClick={async () => {
                    if (maxMintAmount - userMintedAmount !== 0) {
                      await mint(amount);
                      await readContract();
                      await getTokens();
                    } else {
                      toast.warning("Minting Limit Reached!!", {
                        toastId: "custom-id-yes",
                      });
                    }
                  }}
                >
                  <span className="inset-0 flex justify-center items-center font-bold">
                    Mint
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="text-white justify-center w-full flex flex-col md:flex-row text-center w-1/1 md:w-1/2 lg:w-1/1">
            {images.map((image, key) => {
              return (
                <div
                  key={key}
                  className="p-2 m-4 border border-black/100 rounded-xl hover:scale-110 duration-500 cursor-pointer"
                >
                  <div className="bg-white/100 flex justify-center border border-black/80 rounded-xl anm ">
                    <img
                      src={image}
                      alt=""
                      className="h-auto w-auto rounded-xl"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Mint;
