"use client";

import React from "react";
import ChatCard from "../ui/ChatCard";
import PeopleCard from "../ui/PeopleCard";
import ProtectedRoute from "../shared/ProtectedRoute";

const Chat = () => {
  return (
    <ProtectedRoute>
      <div className="w-[80%] mx-auto mt-5 flex">
        <div className=" h-screen w-[100%]">
          <ChatCard />
        </div>
        <div className="hidden md:block h-[80vh] w-[20%] bg-[#d9dad8] p-5 shadow-lg">
          <PeopleCard />
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Chat;
