import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch , useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import HomeIcon from "@mui/icons-material/Home";
import { DLT } from "../redux/actions/action";

const Header = () => {
  const [price , setPrice] = useState(0);
  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log(getdata);


  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
    dispatch(DLT(id));
  };

  const total = () => {
    let price = 0;
    getdata.map((ele,k) => {
      price = ele.price * ele.qnty + price
    });
    setPrice(price);
  }

  useEffect(()=>{
    total();
  },[total])

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none  text-light mx-3">
            <img
              src="./logo.png"
              alt="Logo"
              style={{ height: "50px", width: "50px", marginRight: "10px" }}
            />
            Gadget Hub
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none  text-light">
              <HomeIcon style={{ fontSize: 24, color: "white" }} />
            </NavLink>
          </Nav>

          <Badge
            color="secondary"
            badgeContent={getdata.length}
            showZero
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <ShoppingCartIcon
              style={{ color: "white", fontSize: "25px", cursor: "pointer" }}
            />
          </Badge>
        </Container>

        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {getdata.length ? (
            <div
              className="card_details"
              style={{ width: "24rem", padding: 10 }}
            >
              <Table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Item Details</th>
                  </tr>
                </thead>
                <tbody>
                  {getdata.map((e) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                              <img
                                src={e.imgdata}
                                style={{ width: "5rem", height: "5rem" }}
                                alt="mahol poora wavy"
                              />
                            </NavLink>
                          </td>
                          <td>
                            <p>{e.rname}</p>
                            <p>Price : ₹ {e.price}</p>
                            <p>Quantity : {e.qnty}</p>
                            <p className="delete-icon-mobile">
                              <DeleteIcon
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                                onClick = {() => dlt(e.id)}
                              />
                            </p>
                          </td>
                          <td className="delete-icon-laptop">
                            <p>
                              <DeleteIcon
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                                onClick = {() => dlt(e.id)}
                              />
                            </p>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                  <p className="text-center">Total : ₹ {price}</p>
                </tbody>
              </Table>
            </div>
          ) : (
            <div
              className="card-details d-flex justify-content-center align-items-center"
              style={{ width: "20rem", position: "relative" }}
            >
              <CloseIcon
                onClick={handleClose}
                style={{
                  color: "black",
                  fontSize: "23",
                  position: "absolute",
                  top: 2,
                  right: 20,
                  cursor: "pointer",
                }}
              />
              <p style={{ fontSize: "22" }}>Your Cart is Empty</p>
              <img
                src="./cart.gif"
                alt=""
                className="emptycart_img"
                style={{ width: "5rem", padding: 10 }}
              />
            </div>
          )}
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
