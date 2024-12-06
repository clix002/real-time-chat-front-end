import React, { useState, useEffect } from "react";
import Avatar from "react-avatar";
import { useParams } from "react-router-dom";
import {
  Navbar,
  Typography,
  Card,
  Input,
  Button,
} from "@material-tailwind/react";
import Message from "./Message";
import { useMutation, useQuery, useSubscription } from "@apollo/client";
import { GET_MESSAGES } from "../graphql/queries";
import { Loader, Send } from "lucide-react";
import { SEND_MESSAGE } from "../graphql/mutation";
import { MESSAGE_SUBSCRIPTION } from "../graphql/subscription";

const Chat = () => {
  const { id, name } = useParams();
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const { data, loading, error } = useQuery(GET_MESSAGES, {
    variables: {
      receiverId: parseInt(id, 10),
    },
    onCompleted(data) {
      setMessages(data.messageByUser);
    },
  });

  const [sendMessage] = useMutation(SEND_MESSAGE);

  const { data: subData, error: subError } =
    useSubscription(MESSAGE_SUBSCRIPTION);

  useEffect(() => {
    if (subData) {
      console.log(subData);
      setMessages((prevMessages) => [...prevMessages, subData.messageCreated]);
    }
  }, [subData]);

  useEffect(() => {
    if (subError) {
      console.error("Subscription error:", subError.message);
    }
  }, [subError]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const lastMessage = messages[messages.length - 1];

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
        <div className="h-full bg-blue-50 rounded-lg flex flex-col p-4 overflow-y-auto">
          {loading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader className="size-4 animate-spin" />
            </div>
          ) : (
            messages.map((msg) => (
              <Message
                key={msg.id}
                text={msg.text}
                date={msg.createdAt}
                direccion={
                  msg.receiverId === parseInt(id, 10) ? "end" : "start"
                }
              />
            ))
          )}
        </div>
      </Card>
      <div className="flex items-center justify-between gap-5 max-w-screen-xl mx-auto p-4 lg:p-8">
        <Input
          label="Enter Message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          size="sm"
          onClick={() => {
            sendMessage({ variables: { text, receiverId: parseInt(id, 10) } });
            setText("");
          }}
        >
          <Send />
        </Button>
      </div>
    </div>
  );
};

export default Chat;
