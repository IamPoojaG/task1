import { Navbar, NavbarBrand } from "reactstrap";

import "./Home.css";
function Home({ info }) {
   
  console.log(info);
  return (
   
    <div>
      <Navbar>
        <NavbarBrand href="/">Log Out</NavbarBrand>
      </Navbar>
      <div className="home">
        <p>{`Name: ${info.name}`}</p>
        <p>{`Email: ${info.email}`}</p>
        <p>{`Password: ${info.password}`}</p>
        <p>{`ConfirmPasswod: ${info.password}`}</p>
        <p>{`Address: ${info.address}`}</p>
        <p>{`PhoneNumber: ${info.phoneNumber}`}</p>
        <p>{`Role: ${info.role}`}</p>
        <NavbarBrand href="/Registration">Edit</NavbarBrand>
      </div>
    </div>

    
  );
}
export default Home;


 
 
   

