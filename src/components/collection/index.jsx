import Aos from "aos";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";

import "aos/dist/aos.css";

import { ContractABI } from "../mint/Contract";

const Collection = () => {
  const { REACT_APP_CONTRACT_ADDRESS } = process.env;

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTokens = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(
      REACT_APP_CONTRACT_ADDRESS,
      ContractABI,
      provider
    );
    let imagesLocal = [];
    const totalSupply = await contract.totalSupply();
    for (let i = 1; i <= parseInt(totalSupply, 10); i++) {
      const url = await contract.tokenURI(parseInt(i, 10));
      let result = await url.replace("ipfs://", "https://ipfs.io/ipfs/");
      const jsonBody = await (await fetch(result)).json();
      imagesLocal.push(
        await jsonBody.image.replace("ipfs://", "https://ipfs.io/ipfs/")
      );
    }

    setTimeout(() => {
      setImages(imagesLocal);
      setLoading(false);
    }, [3000]);
  };

  useEffect(() => {
    getTokens();
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="flex flex-col w-full h-full justify-center items-center bg-metalic-img min-h-[100vh]">
      {loading ? (
        <div className="flex font-poppins text-[32px] justify-center">Loading</div>
      ) : (
        <>
          <div className="font-poppins mt-[40%] md:mt-[10%] text-[55px]">Gallery</div>
          <div className="flex flex-wrap  m-4 p-1 lg:p-10 w-full">
            {images.map((image, index) => {
              return (
                <img
                  src={image}
                  alt="/"
                  key={index}
                  className="w-full p-6 rounded-2xl md:w-1/2 lg:w-1/6 flex hover:scale-110 duration-500 cursor-pointer"
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Collection;
