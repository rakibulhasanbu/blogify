"use client";
import { IoMdChatboxes } from "react-icons/io";
import AppButton from "../ui/AppButton";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/app/states/hook";
type AppChat = {
  id: number;
  roomName: string;
};
const ChatHome = ({ id, roomName }: AppChat) => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-2 rounded shadow-2xl py-10">
        <div className="text-[80px]">
          <IoMdChatboxes />
        </div>
        <h2 className="text-[32px] text-gray font-bold">{roomName} </h2>

        {user?.email ? (
          <Link href={"/components/chat"}>
            <AppButton
              label="Go Chat"
              variant="outlined"
              icon={<FaArrowRight />}
            />
          </Link>
        ) : (
          <Link href={"/auth/sign-in"}>
            <AppButton
              label="Go Chat"
              variant="outlined"
              icon={<FaArrowRight />}
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ChatHome;
