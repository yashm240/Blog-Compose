import { UserNaviagtionbar } from "../../components/Navbar/UserNavbar";

import { Updateuser } from "../../components/Updateuser/Updateuser";

export const Updateuserpage = () => {
  return (
    <>
      <UserNaviagtionbar />
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
        <h1>Update Your Info</h1>
        <Updateuser />
      </div>
    </>
  );
};