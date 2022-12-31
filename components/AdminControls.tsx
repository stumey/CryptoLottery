import React from "react";
import {
  StarIcon,
  CurrencyDollarIcon,
  ArrowPathIcon,
  ArrowUturnDownIcon,
} from "@heroicons/react/24/solid";
import {
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import { currency } from "../constants";
import { ethers } from "ethers";
import toast from "react-hot-toast";

function AdminControls() {
  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );
  const { data: totalCommission } = useContractRead(
    contract,
    "operatorTotalCommission"
  );
  const { mutateAsync: DrawWinnerTickets } = useContractWrite(
    contract,
    "DrawWinnerTickets"
  );
  const { mutateAsync: RefundAll } = useContractWrite(
    contract,
    "RefundAll"
  );
  const { mutateAsync: restartDraw } = useContractWrite(
    contract,
    "restartDraw"
  );
  const { mutateAsync: WithdrawCommission } = useContractWrite(
    contract,
    "WithdrawCommission"
  );

  const handleAdminOperation = async (operation: string) => {
    var notification;
    if(operation === "DrawWinnerTickets")
    {
        notification = toast.loading("Drawing the winner...");
    }
    if(operation === "RefundAll")
    {
        notification = toast.loading("Refunding all entries...");
    }
    if(operation === "restartDraw")
    {
        notification = toast.loading("Restarting the draw...");
    }
    if(operation === "WithdrawCommission")
    {
        notification = toast.loading("Withdrawing commission...");
    }
    try {
        if(operation === "DrawWinnerTickets")
        {
            const data = await DrawWinnerTickets([{}]);

            toast.success("Winner drawn successfully!", {
                id: notification,
            });
        
            console.info("contract call success", data);
        }
        if(operation === "RefundAll")
        {
            const data = await RefundAll([{}]);

            toast.success("All participants refunded successfully!", {
                id: notification,
            });
        
            console.info("contract call success", data);
        }
        if(operation === "restartDraw")
        {
            const data = await restartDraw([{}]);

            toast.success("Draw restarted successfully!", {
                id: notification,
            });
        
            console.info("contract call success", data);
        }
        if(operation === "WithdrawCommission")
        {
            const data = await WithdrawCommission([{}]);

            toast.success("Winnings withdrawn successfully!", {
                id: notification,
            });
        
            console.info("contract call success", data);
        }
    } catch(err) {
        toast.error("Whoops something went wrong!", {
            id: notification,
          });
        console.error("contract call failures, err");
    }
  }
  return (
    <div className="text-white text-center px-5 py-3 rounded-md border-emerald-300/20 border">
      <h2 className="font-bold">Admin Controls</h2>
      <p className="mb-6">
        Total Commission to be withdrawn:{" "}
        {totalCommission &&
          ethers.utils.formatEther(totalCommission.toString())}{" "}
        {currency}
      </p>

      <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
        <button onClick={() => handleAdminOperation("DrawWinnerTickets")} className="admin-button">
          <StarIcon className="h-6 mx-auto mb-2" />
          Draw Winner
        </button>
        <button onClick={() => handleAdminOperation("WithdrawCommission")} className="admin-button">
          <CurrencyDollarIcon className="h-6 mx-auto mb-2" />
          Withdraw Commission
        </button>
        <button onClick={() => handleAdminOperation("restartDraw")} className="admin-button">
          <ArrowPathIcon className="h-6 mx-auto mb-2" />
          Restart Draw
        </button>
        <button onClick={() => handleAdminOperation("RefundAll")} className="admin-button">
          <ArrowUturnDownIcon className="h-6 mx-auto mb-2" />
          Refund All
        </button>
      </div>
    </div>
  );
}

export default AdminControls;
