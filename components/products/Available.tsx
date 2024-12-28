import resolveStore from "@/utils/resolvers/resolveStore";

interface IProps {
  available: boolean;
  amount: number;
}

const Available = ({ available, amount }: IProps) => (
  <>
    {available ? (
      <span className="flex font-bold">
        <p className="text-green-700 mr-2">skladem:</p>
        <p>{resolveStore(amount)}</p>
      </span>
    ) : (
      <p className="text-red-600">nedostupné</p>
    )}
  </>
);

export default Available;
