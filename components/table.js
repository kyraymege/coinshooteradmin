import { useState, useEffect } from "react";
import { db } from "./firebase/firebase";
import moment from "moment";

function table() {
  const coinsRef = db.collection("coins").orderBy("coin_votes", "desc").where("coin_status", "==", "progress");
  var dd = moment(new Date()).format("DD/MM/YYYY");
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    
      coinsRef.onSnapshot((coinss) => {
        const coinList = coinss.docs.map((doc) => ({
          coin_name: doc.data().coin_name,
          coin_symbol: doc.data().coin_symbol,
          coin_marketcap: doc.data().coin_marketcap,
          coin_chain: doc.data().coin_chain,
          coin_age: doc.data().coin_age,
          coin_votes: doc.data().coin_votes,
          coin_imageUri: doc.data().coin_imageUri,
          coin_status: doc.data().coin_status
        }))
        setCoins(coinList)
      })
  }, [])

  const getListed = (currentCoin) =>{
    db.collection("coins").doc(currentCoin).update({
      coin_status: "listed"
    })
  }

  if (coins.length === 0) {
    return (
      <div className="flex flex-col max-w-screen-2xl mx-auto p-10">        
          <h1 className="text-2xl font-extrabold text-white mt-12">No new coins have been added yet today!</h1>
      </div>
    )
  }



  return (
    <div className="flex flex-col max-w-screen-2xl mx-auto p-10">
      <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-b-none sm:rounded-t-lg ">
            <table className="min-w-full divide-y divide-gray-200 ">
              <thead className="bg-gray-50 ">
                <tr >
                  <th
                    scope="col"
                    className=" font-bold px-12 py-3 text-left text-xs text-gray-500 uppercase tracking-wider"
                  >
                    Coin Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider xl:table-cell lg:table-cell md:table-cell hidden"
                  >
                    Symbol
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider xl:table-cell lg:table-cell md:table-cell hidden"
                  >
                    Chain
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider xl:table-cell lg:table-cell md:table-cell hidden"
                  >
                    Market Cap
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider xl:table-cell lg:table-cell md:table-cell hidden"
                  >
                    Time since launch
                  </th>
                  <th
                    scope="col"
                    className="px-12 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    List
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {coins.map((coin, index) => (
                  <tr
                    className="hover:bg-gray-400 cursor-pointer"
                    key={index}
                  >
                    <td                      
                      className="px-6 py-4 whitespace-nowrap"
                    >
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="rounded-full hover:scale-125"
                            src={coin.coin_imageUri}
                            height={40}
                            width={40}
                            alt={coin.coin_name}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {coin.coin_name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td
                      className="xl:px-8 xl:py-4 xl:whitespace-nowrap xl:table-cell lg:table-cell md:table-cell hidden"
                    >
                      <div className="text-sm font-medium text-gray-900">
                        ${coin.coin_symbol}
                      </div>
                    </td>
                    <td
                      className="px-6 py-4 whitespace-nowrap xl:table-cell lg:table-cell md:table-cell hidden"
                    >
                      <span className="px-2 inline-flex text-xs leading-5  rounded-full bg-green-100 text-green-800 font-bold">
                        {coin.coin_chain}
                      </span>
                    </td>
                    <td
                      className="px-6 py-4 whitespace-nowrap xl:table-cell lg:table-cell md:table-cell hidden"
                    >
                      <div className="text-sm text-gray-900">
                        $ {coin.coin_marketcap}
                      </div>
                    </td>
                    <td
                      className="px-12 py-4 whitespace-nowrap text-sm text-gray-500 xl:table-cell lg:table-cell md:table-cell hidden"
                    >
                      <div className="text-sm text-gray-900">
                        {moment(coin.coin_age, "DD/MM/YYYY").fromNow()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                      <div className="inline-flex">                        
                        <button
                          onClick={() => getListed(coin.coin_name)}
                          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
                          List
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>            
          </div>          
        </div>        
      </div>
    </div>
  );
}

export default table;