import { memo, useContext, useMemo } from "react";
import { balanceContext } from "./Banking";
import Text from "./Text";

const Loan = () => {
  const balance = useContext(balanceContext);

  const loanAmount = useMemo(() => {
    const amount = 0.15 * balance * 24;
    return amount;
  }, [balance]);

  return (
    <>
      <Text label={"Loan"}></Text>
      <div>You are eligible for the loan of Rs {loanAmount}</div>
    </>
  );
};

export default memo(Loan);
