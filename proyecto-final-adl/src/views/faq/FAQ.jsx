
const Faq = () => {
    // create about us page using bootstrap 
    return (
        <>
        <section id="faq" className="py-md-1 ">
          <h2 className="my-3 text-center display-5 fw-bold">FAQ</h2>
          <h3 className="fs-5 text-center">Aqui podras encontrar mas informacion hacerca de nuestro servicios.</h3>
          <div className="container my-5">
            <div class="accordion w-75 mx-auto" id="accordionPanelsStayOpenExample">
              <div class="accordion-item ">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                   <strong>¿Que tipo de archivos acepta la plataforma?</strong> 
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                  <div class="accordion-body">
                    De momento solo contamos con soporte para <strong>csv</strong>,
                    pero nos encontramos trabajando para implementar una forma aun mas simple y facil
                    de general tus KPI y graficos mas relevantes.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                  <strong>¿Que tipo de graficos puedo generar en la plataforma?</strong> 
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
                  <div class="accordion-body">
                   En SalesMetrics podras encontar de momento graficas asociadas a las  
                    <strong> Ventas totales por dia</strong> y <strong>ventas totales por producto </strong>
                   asi podras ver cuales son dias que mas vendes y cuales productos son los mas
                   populares en su tienda.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true" aria-controls="panelsStayOpen-collapseThree">
                  <strong>¿Existe algun tipo de cobro por utilizar la plataforma?</strong> 
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingThree">
                  <div class="accordion-body">
                    <strong>No</strong>, de momento no contamos con algun tipo 
                    de subcripcion o cobro asociado al uso de la plataforma o sus funcionalidades.
                    A futuro implementaremos mas funcionalidades que sentar 
                    exclusivas para clientes de pago, pero dejaremos una capa gratuita
                    para clientes que no requieran dichas funcionalidades.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );           

}

export default Faq;