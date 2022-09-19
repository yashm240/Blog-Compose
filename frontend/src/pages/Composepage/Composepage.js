import { Composebox } from "../../components/Composebox/Composebox";
import { UserNaviagtionbar } from "../../components/Navbar/UserNavbar";

export const Composepage = () => {
  return (
    <>
      <UserNaviagtionbar />
      <h1>Compose new Blog</h1>
      <Composebox />
    </>
  );
};
