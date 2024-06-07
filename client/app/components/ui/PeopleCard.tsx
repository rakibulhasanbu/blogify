import { FaRegUserCircle } from "react-icons/fa";

const PeopleCard = () => {
  return (
    <div className="w-full flex flex-col gap-5 rounded">
      <h2 className="text-[24px] bg-white text-black p-2  font-bold w-full rounded">
        People
      </h2>
      <div className="flex gap-2 items-center bg-white text-black p-2 rounded">
        <FaRegUserCircle />
        <p>User1</p>
      </div>
    </div>
  );
};

export default PeopleCard;
