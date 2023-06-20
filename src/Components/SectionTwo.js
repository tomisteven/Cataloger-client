import React, { useEffect, useState } from "react";
import { Dna } from "react-loader-spinner";
import "./SectionTwo.css";
import "./responsiveSectionTwo.css";
import { Label, Menu, Button, Dropdown } from "semantic-ui-react";
import product1 from "../assets/product1.webp";
import product2 from "../assets/product2.webp";
import product3 from "../assets/producto3.webp";
import product4 from "../assets/producto4.webp";
import swal from "sweetalert";

export default function SectionTwo() {
  //const [state, setState] = useState(false);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("");
  const [productsSelected, setProductsSelected] = useState([]);
  const [stateCart, setStateCart] = useState(false);

  const data = {
    categorias: [
      "Tecnologia",
      "Hogar",
      "Juguetes",
      "Deportes",
      "Electrodomesticos",
      "Muebles",
      "Ropa",
      "Accesorios",
    ],
    productos: [
      {
        id: 1,
        name: "Televisor LED 4k LG",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        price: 118000,
        image: product1,
        stock: 0,
        active: true,
        category: "Tecnologia",
      },
      {
        id: 2,
        name: "Proyector Epson 4k",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        price: 56000,
        image: product2,
        colors: ["yellow", "olive", "green"],
        stock: 10,
        active: true,
        category: "Tecnologia",
      },
      {
        id: 3,
        name: "Producto 3",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        price: 8999,
        image: product3,
        colors: ["green", "teal", "blue"],
        stock: 10,
        active: true,
        category: "Tecnologia",
      },
      {
        id: 4,
        name: "Producto 4",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        price: 15000,
        image: product4,
        colors: ["grey", "black"],
        stock: 10,
        active: true,
        category: "Hogar",
      },
      {
        id: 1,
        name: "Televisor LED 4k LG",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        price: 118000,
        image: product1,
        stock: 10,
        active: true,
        category: "Juguetes",
      },
      {
        id: 2,
        name: "Proyector Epson 4k",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        price: 56000,
        image: product2,
        colors: ["yellow", "olive", "green"],
        stock: 10,
        active: true,
        category: "Accesorios",
      },
      {
        id: 4,
        name: "Producto 4",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        price: 15000,
        image: product4,
        colors: ["grey", "black"],
        stock: 10,
        active: true,
        category: "Hogar",
      },
      {
        id: 1,
        name: "Televisor LED 4k LG",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        price: 118000,
        image: product1,
        stock: 0,
        active: true,
        category: "Tecnologia",
      },
      {
        id: 3,
        name: "Producto 3",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        price: 8999,
        image: product3,
        colors: ["green", "teal", "blue"],
        stock: 10,
        active: true,
        category: "Ropa",
      },
      {
        id: 4,
        name: "Producto 4",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        price: 15000,
        image: product4,
        colors: ["grey", "black"],
        stock: 10,
        active: true,
        category: "Deportes",
      },
      {
        id: 3,
        name: "Producto 3",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        price: 8999,
        image: product3,
        colors: ["green", "teal", "blue"],
        stock: 10,
        active: true,
        category: "Ropa",
      },
    ],
  };
  const [products, setProducts] = useState(data);

  useEffect(() => {
    setLoading(true);
    console.log("entro en el useeffect");
    setProducts(data);
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <Dna
        visible={true}
        height="60"
        width="60"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    );
  }

  const sendWhatssap = () => {
    const message =
      "Hola, me gustaria comprar los siguientes productos: " +
      productsSelected.map((item) => item.name).join(", ") +
      " que vi en la Web Gracias!";

    const url = `https://api.whatsapp.com/send?phone=1134750981&text=${message}`;
    window.open(url, "_blank");
  };

  const filterData = (category) => {
    setLoading(true);
    let arr = data.productos.filter((item) => item.category === category);
    if (arr.length === 0) {
      swal("No hay productos en esta categoria", "", "warning").then(() => {
        setLoading(false);
        setProducts(data);
      });
    }
    setValue(category);
    setProducts({ ...products, productos: arr });
    setLoading(false);
  };

  return (
    <>
      <section id="productos" className="section-two">
        <div class="section-filters">
          <h5>Filtros {value ? "/" + value : ""}</h5>
          <div class="cont-filters">
            <Button
              className="btn-ver-todos"
              size="small"
              onClick={() => {
                setProducts(data);
                setValue("");
              }}
              primary
            >
              Ver todos
            </Button>

            {window.innerWidth > 768 ? (
              <Menu
                className="menu-filters"
                size="small"
                pointing={window.innerWidth > 768 ? false : true}
                vertical={window.innerWidth > 768 ? true : false}
              >
                {products.categorias.map((item, k) => (
                  <Menu.Item key={k} onClick={() => filterData(item)}>
                    <Label color="green">
                      {
                        data.productos.filter((prod) => prod.category === item)
                          .length
                      }
                    </Label>
                    {item}
                  </Menu.Item>
                ))}
              </Menu>
            ) : (
              <Dropdown
                value={value}
                placeholder="Selecciona una categoria"
                fluid
                selection
                options={products.categorias.map((item) => ({
                  key: item,
                  text: item,
                  value: item,
                }))}
                onChange={(e, { value }) => filterData(value)}
              />
            )}
          </div>
        </div>
        <div class="section-products">
          <h5 className="title-section-two">
            {productsSelected.length > 0
              ? productsSelected.length
              : products.productos.length}{" "}
            Productos
          </h5>
          <div className="container-products">
            {products.productos.map((item, k) => (
              <div key={k} className="card-product">
                <img src={item.image} alt="" />
                <div class="card-body">
                  <div class="cont-name">
                    <h5 className="card-body-name">{item.name}</h5>
                    <Label
                      as="a"
                      content={item.stock > 0 ? "Stock" : "Sin Stock"}
                      color={item.stock > 0 ? "green" : "red"}
                      icon="box"
                    />
                  </div>
                  <p className="card-body-description">{item.description}</p>
                  <div class="cont-colors">
                    {item.colors ? (
                      item.colors.map((color, i) => (
                        <Label
                          size="tiny"
                          className="colors-product"
                          circular
                          color={color}
                          key={color}
                        >
                          {i + 1}
                        </Label>
                      ))
                    ) : (
                      <Label circular key={"sc"} color="grey">
                        1
                      </Label>
                    )}
                  </div>
                  <div class="cont-price">
                    <Button
                      className="btn-add-cart"
                      color="teal"
                      size="mini"
                      icon="add"
                      label={
                        <Label size="tiny" color="blue">
                          $
                          {new Intl.NumberFormat("de-DE", {
                            style: "currency",
                            currency: "ARS",
                          }).format(item.price)}
                        </Label>
                      }
                      onClick={() => {
                        setProductsSelected([...productsSelected, item]);
                      }}
                    ></Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div class="menu-expandible">
          <div class="cont-title-menu-expandible">
            <h3 className="">Productos Seleccionados</h3>
            <p>Para comprar seleccione el boton de WhatssApp</p>
            <Button
              className="btn-close-menu-expandible"
              icon="close"
              size="mini"
              color="red"
              circular
              onClick={() => {
                document
                  .querySelector(".menu-expandible")
                  .classList.toggle("active");
              }}
            />
            <span className="span"></span>
          </div>
          {productsSelected.length === 0 ? (
            <div className="cont-empty">
              <h5>No hay productos seleccionados</h5>
            </div>
          ) : (
            <ul className="ul-products">
              {productsSelected.map((item, k) => (
                <>
                  <li className="li-product" key={k}>
                    <div class="cont-img">
                      <img className="img-selected" src={item.image} alt="" />
                    </div>
                    <div class="card-body-selected">
                      <h5 className="card-body-name">{item.name}</h5>
                      <Label as="a" color="teal" tag>
                        ${item.price}
                      </Label>
                    </div>
                  </li>
                </>
              ))}
            </ul>
          )}

          <div class="cont-btn">
            <div className="tag-price">
              <Label size="large" as="a" color="blue" tag>
                {new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "ARS",
                }).format(productsSelected.reduce((a, b) => a + b.price, 0))}
              </Label>
            </div>
            <div>
              <Button
                color="green"
                icon="whatsapp"
                label={
                  <Label color="blue" size="large">
                    Comprar
                  </Label>
                }
                onClick={() => {
                  sendWhatssap();
                }}
              ></Button>

              <Button
                color="red"
                icon="trash"
                label={
                  <Label color="blue" size="large">
                    Vaciar Carrito
                  </Label>
                }
                onClick={() => {
                  setProductsSelected([]);
                }}
              ></Button>
            </div>
          </div>
        </div>
      </section>
      <Menu.Item
        onClick={() => {
          setStateCart(!stateCart);
          document.querySelector(".menu-expandible").classList.toggle("active");
        }}
        as="a"
        className="btn-cart"
      >
        <Button
          disabled={productsSelected.length === 0}
          icon={stateCart ? "close" : "shopping cart"}
          color={
            stateCart ? "red" : "orange"
          }
          circular
        />
        {productsSelected.length > 0 ? (
          <Label color="green" size="mini" floating>
            {productsSelected.length}
          </Label>
        ) : (
          ""
        )}
      </Menu.Item>
    </>
  );
}
