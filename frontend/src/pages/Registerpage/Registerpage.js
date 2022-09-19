import { Naviagtionbar } from "../../components/Navbar/Navbar";
import { RegisterBody } from "../../components/Registerbox/Registerbox";

export const Registerpage = () => {
  return (
    <>
      <Naviagtionbar />
      <br />
      <br />
      <div
        style={{
          width: "30vw",
          display: "block",
          margin: "auto",
          borderRadius: "15px",
          border: "1px solid black",
          padding: "15px",
        }}
      >
        <h1>Register</h1>
        <RegisterBody />
      </div>
    </>
  );
};