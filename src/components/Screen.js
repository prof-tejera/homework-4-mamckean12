const Screen = ({ value }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: 322,
        height: 40,
        textAlign: "right",
        fontSize: "20px",
        paddingTop: 20,
        paddingRight: 10,
        marginLeft: 1,
        color: "black",
        fontWeight: "bold",
      }}
    >
      {value}
    </div>
  );
};

export default Screen;
