import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import DeleteIcon from "@mui/icons-material/Delete";
import { useParams , useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DLT , ADD , REMOVE} from "../redux/actions/action";

const CardsDetail = () => {
  const [data, setdata] = useState([]);

  const { id } = useParams();

  const history = useNavigate();
  const dispatch = useDispatch();


  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log(getdata);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    });
    setdata(comparedata);
  };

  // add data
  const send = (e) => {
      dispatch(ADD(e));
    };

  const dlt = (id) => {
      dispatch(DLT(id));
      history("/");
    };

  const remove  = (item) => {
    dispatch(REMOVE(item))
  }

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <div className="container mt-2">
      <h2 className="text-center">Items Details Page</h2>

      <section className="container mt-3">
        <div className="iteamsdetails">
          {data.map((ele) => {
            return (
              <>
                <div className="items_img">
                  <img src={ele.imgdata} alt="mhol poora wavy" />
                </div>

                <div className="details">
                  <Table>
                    <tr>
                      <td>
                        <p>
                          <strong>Store</strong> : Gadget Hub
                        </p>
                        <p>
                          <strong>Item</strong> : {ele.rname}
                        </p>
                        <p>
                          <strong>Price</strong> : ₹ {ele.price}
                        </p>
                        <p>
                          <strong>Total</strong> : ₹ {ele.price * ele.qnty}
                        </p>

                        <div className="mt-5 d-flex justify-content-between align-items-center"
                        style={{width : 100 , cursor : "pointer" , background : "#ddd" , color : "#111"}}>
                          <span style = {{fontSize:24}} onClick={ele.qnty<=1 ? () => dlt(ele.id) : ()=>remove(ele) }>-</span>
                          <span style = {{fontSize:22}}>{ele.qnty}</span>
                          <span style = {{fontSize:24}} onClick = {() => send(ele)}>+</span>
                        </div>
                      </td>

                      <td>
                        <p>
                          <strong>Rating : </strong>
                          <span
                            style={{
                              background: "green",
                              color: "white",
                              padding: "2px 5px",
                              borderRadius: "5px",
                            }}
                          >
                            {ele.rating}★
                          </span>
                        </p>

                        <p>
                          <strong>Order Review : </strong>
                          <span>{ele.somedata}</span>
                        </p>

                        <p>
                          <strong>Remove : </strong>
                          <span
                            style={{
                              color: "red",
                              fontSize: 20,
                              cursor: "pointer",
                            }}
                          >
                            <DeleteIcon onClick = {() => dlt(ele.id)}/>
                          </span>
                        </p>
                      </td>
                    </tr>
                  </Table>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default CardsDetail;
