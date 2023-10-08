const Operation = ({ value, onClick }) => {
  return (
    <div
      style={{
        padding: 10,
        border: "1px solid black",
        width: 60,
        textAlign: "center",
        margin: 1,
        backgroundColor: "beige",
      }}
      onClick={onClick}
    >
      {value}
    </div>
  );
};

export default Operation;
