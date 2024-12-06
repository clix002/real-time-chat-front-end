const Message = ({ text, date, direccion }) => {
  return (
    <div
      className={`block bg-white p-2 rounded-lg shadow-md my-2 max-w-max ${
        direccion === "end" ? "self-end" : "self-start"
      }`}
    >
      <p className="text-sm text-black">{text}</p>
      <p className="text-xs text-gray-500">
        {new Date(date).toLocaleDateString()}
      </p>
    </div>
  );
};

export default Message;
