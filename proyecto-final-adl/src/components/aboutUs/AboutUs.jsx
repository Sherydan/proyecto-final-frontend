import React from "react";
import analyticsImage from "../../assets/img/analytics-people.png"

const AboutUs = () => {

  return (
    <>
      <div id="features-3" className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h2 className="display-4 fw-bold lh-1">¿Cual es nuestra mision?</h2>
            <p className="lead">
              Somos un equipo amante de la informatica que buscamos dar solucion
              a los complejos y tediosos procesos de analisis de datos,
              especidicamente en el area de venta, es por ello que creamos
              SalesMetrics, para asi poder facilitar el analisis de ventas y
              ayudar a tanto a empresas como a micro-empresarios a tomar mejores
              desiciones por medio de datos mas facil de entender
            </p>
          </div>

          <div className="col-lg-5">
            <img
              className="img-fluid"
              src={analyticsImage}
              alt=""
              width="720"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
