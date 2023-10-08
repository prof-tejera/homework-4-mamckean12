const Number = ({ value, onClick }) => {
  /** TODO: What happens when a user clicks a number, what do we want to pass to our parent? */

  // console.log(onClick);

  return (
    <div
      style={{
        padding: 10,
        border: "1px solid black",
        width: 60,
        textAlign: "center",
        margin: 1,
        backgroundColor: "grey",
        color: "white",
      }}
      onClick={onClick}
      >
      {value}
    </div>
  );
};

export default Number;
