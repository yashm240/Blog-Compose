import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyFooter } from "../../components/Footer/Footer";
import { LoginBody } from "../../components/Loginbox/Loginbox";
import { Composepage } from "../Composepage/Composepage";
import { Deletepage } from "../Deletepage/Deletepage";
import { Homepage } from "../Homepage/Homepage";
import { Myblogpage } from "../Myblogspage/Myblogspage";
import { Readpage } from "../Readpage/Readpage";
import { UserReadpage } from "../Readpage/UserReadpage";
import { Registerpage } from "../Registerpage/Registerpage";
import { Updateuserpage } from "../Updateuserpage/Updateuserpage";
import { UserHome } from "../UserHome/UserHome";

export const Finalpage = () => {
  return (
    <BrowserRouter>
      <div className="finalbody">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginBody />} />
          <Route path="/compose" element={<Composepage />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/readmyblog" element={<Myblogpage />} />
          <Route path="/userhome" element={<UserHome />} />
          <Route path="/readbycategory" element={<Readpage />} />
          <Route path="/updateuser" element={<Updateuserpage />} />
          <Route path="/userreadbycategory" element={<UserReadpage />} />
          <Route path="/deleteuser" element={<Deletepage />} />
        </Routes>
      </div>
      <br />
      <br />
      <MyFooter />
    </BrowserRouter>
  );
};
