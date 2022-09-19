import { LoginBody } from "../../components/Loginbox/Loginbox";
import { Naviagtionbar } from "../../components/Navbar/Navbar";

export const Loginpage = () => {
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
        <h1>Login</h1>
        <LoginBody />
      </div>
    </>
  );
};
