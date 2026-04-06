import React, { createContext, useState } from "react";
import Grandpa from "./Grandpa";
import "./FamilyTree.css";

export const AssetContext = createContext("");
export const MoneyAsset = createContext(0);
const FamilyTree = () => {
    const [money, setMoney] = useState(0);
  const asset = "Diamond";
  const newAsset = "gold";
  return (
    <div className="family-tree">
      <h1>Family Tree</h1>
      <h5>Total Money Asset: {money}</h5>
      <MoneyAsset value={[money, setMoney]}>
        <AssetContext.Provider value={newAsset}>
          <Grandpa asset={asset}></Grandpa>
        </AssetContext.Provider>
      </MoneyAsset>
    </div>
  );
};

export default FamilyTree;
