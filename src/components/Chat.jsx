import React from "react";
import Avatar from "react-avatar";
import { useParams } from "react-router-dom";
import { Navbar, Typography, Card, Input } from "@material-tailwind/react";
import Message from "./Message";

const Chat = () => {
  const { id, name } = useParams();
  return (
    <div className="w-full">
      <Navbar
        shadow={false}
        className="sticky top-0 z-10 mx-auto flex justify-between items-center max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4"
      >
        <div />
        <div className="flex items-center">
          <Typography className="mr-4 cursor-pointer py-1.5 font-medium text-blue-gray-900">
            {name}
          </Typography>
          <div className="relative">
            <Avatar
              name={name}
              size="40"
              className="rounded-full text-sm cursor-pointer"
            />
          </div>
        </div>
      </Navbar>
      <Card className="w-auto h-[80vh] max-w-screen-xl mx-auto p-4 lg:p-8">
        <div className="h-full  bg-blue-50 rounded-lg flex  flex-col items-end p-4 overflow-y-auto">
          <Message text="Hello" date="12:00" />
          <Message text="Hello clinton " date="12:00" />
          <Message text="How are you? " date="12:00" />
          <Message text="Hello" date="12:00" />
        </div>
      </Card>
      <div className="max-w-screen-xl mx-auto p-4 lg:p-8 ">
        <Input
          label="Enter Message"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              transform="rotate(90)"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default Chat;
