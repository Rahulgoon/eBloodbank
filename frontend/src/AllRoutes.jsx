import { Routes , Route } from "react-router-dom";
import { Home } from "./Components/home";
import { About } from "./Components/about";
import { Gallery } from "./Components/gallery";
import { Notice } from "./Components/notice";
import { Search } from "./Components/search";
import { Donate } from "./Components/donate";
import { Signup } from "./Components/signup";
import { Contact } from "./Components/contact";
import { Login } from "./Components/login";
import { Payment } from "./Components/payment";
import { Dashboard } from "./Components/admin/dashboard";
import { DonorAdmin } from "./Components/admin/donoradmin";
import { BookAdmin } from "./Components/admin/bookadmin";
import { NoticeAdmin } from "./Components/admin/noticeadmin";
import { UserAdmin } from "./Components/admin/useradmin";
import { ContactAdmin } from "./Components/admin/contactadmin";
import { PayCirtificate } from "./Components/paycirtificate";

export function AllRoutes(){
    return(
        <>
        <Routes>
            <Route path={"/"} element={<Home/>}></Route>
            <Route path={"/about"} element={<About/>}></Route>
            <Route path={"/gallery"} element={<Gallery/>}></Route>
            <Route path={"/notice"} element={<Notice/>}></Route>
            <Route path={"/search"} element={<Search/>}></Route>
            <Route path={"/donate"} element={<Donate/>} ></Route>
            <Route path={"/contact"} element={<Contact/>} ></Route>
            <Route path={"/signup"} element={<Signup/>}></Route>
            <Route path={"/login"} element={<Login/>}></Route>
            <Route path={"/payment"} element={<Payment/>}></Route>
            <Route path={"*"} element={<Home/>}></Route>
            <Route path={"/dashboard"} element={<Dashboard/>}></Route>
            <Route path={"/useradmin"} element={<UserAdmin/>}></Route>
            <Route path={"/donoradmin"} element={<DonorAdmin/>}></Route>
            <Route path={"/bookadmin"} element={<BookAdmin/>}></Route>
            <Route path={"/contactadmin"} element={<ContactAdmin/>}></Route>
            <Route path={"/noticeadmin"} element={<NoticeAdmin/>}></Route>
            <Route path={"/paycirtificate"} element={<PayCirtificate/>}></Route>
        </Routes>
        </>
    );
};