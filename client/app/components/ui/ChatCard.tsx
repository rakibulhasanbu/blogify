import { FaRegUserCircle } from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
const ChatCard = () => {
  return (
    <div className="h-[80vh] w-full bg-[#EEEEEE] relative  p-5 rounded shadow-lg ">
      <p className="md:hidden text-[30px] absolute right-0 top-1 text-white p-2 ">
        <BsReverseLayoutTextSidebarReverse />
      </p>
      <p className="text-[100px]  mt-10 absolute right-[35%] lg:right-[45%] md:right-[210px]  ">
        <FaRegUserCircle />
      </p>
      <p className="flex items-center gap-2 absolute bottom-[130px]">
        <FaRegUserCircle />
        <span className="bg-white text-black p-2 rounded ">Message1</span>
      </p>
      <p className="flex items-center gap-2  absolute bottom-[100px] right-[20px] ">
        <span className="bg-white text-black p-2 rounded ">Message2</span>
        <FaRegUserCircle />
      </p>
      <form
        action="#"
        className=" mb-5 absolute bottom-0 left-[10%]  p-2 outline-none rounded-md bg-white flex  justify-between items-center gap-2 w-[80%] "
      >
        <input
          placeholder="Enter your message"
          type="text"
          className="bg-transparent outline-none "
        />
        <button type="submit">
          <IoSendSharp />
        </button>
      </form>
    </div>
  );
};

export default ChatCard;
