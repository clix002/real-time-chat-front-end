

const Message = ({ text, date }) => {
  return (
    <div className="block bg-white p-2 rounded-lg shadow-md my-2 max-w-max">
      <p className="text-sm text-black">{text}</p>
      <p className="text-xs text-gray-500">{date}</p>
    </div>
  );
};

export default Message;
