import React from "react";

export const About = () => {
    return(
        <>
        {/* ======= Departments Section ======= */}
     <section id="departments" className="departments">
      <div className="container">
        <div className="section-title">
          <h2>ABOUT DONATION</h2>
          <p>
          Blood banking is the process that takes place in the lab to make sure that donated blood, or blood products, are safe before they are used in blood transfusions and other medical procedures. Blood banking includes typing the blood for transfusion and testing for infectious diseases.
          </p>
        </div>
        <div className="row gy-4">
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
              <li className="nav-item">
                <a
                  className="nav-link active show"
                  data-bs-toggle="tab"
                  href="#tab-1"
                >
                  Group-A
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                Group-B
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
                Group-AB
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
                Group-O
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-9">
            <div className="tab-content">
              <div className="tab-pane active show" id="tab-1">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Group-A</h3>
                    <p className="fst-italic">
                    Blood group A individuals have the A antigen on the surface of their RBCs, and blood serum containing IgM antibodies against the B antigen. Therefore, a group A individual can receive blood only from individuals of groups A or O (with A being preferable), and can donate blood to individuals with type A or AB.
                    </p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img
                      src="https://img.freepik.com/premium-vector/blood-group-blood-type-medical-icon-vector_917138-6957.jpg?w=2000"
                      alt="A"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-2">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Group-B</h3>
                    <p className="fst-italic">
                    Blood group B individuals have the B antigen on the surface of their RBCs, and blood serum containing IgM antibodies against the A antigen. Therefore, a group B individual can receive blood only from individuals of groups B or O (with B being preferable), and can donate blood to individuals with type B or AB.
                    </p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img
                      src="https://cdn3d.iconscout.com/3d/premium/thumb/blood-type-b-8778863-7097731.png"
                      alt="B"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-3">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Group-AB</h3>
                    <p className="fst-italic">
                    Blood group A individuals have the A antigen on the surface of their RBCs, and blood serum containing IgM antibodies against the B antigen. Therefore, a group A individual can receive blood only from individuals of groups A or O (with A being preferable), and can donate blood to individuals with type A or AB.
                    </p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img
                      src="https://w7.pngwing.com/pngs/931/761/png-transparent-blood-group-ab-blood-a-drop-of-blood-thumbnail.png"
                      alt="AB"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-4">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>
                    Group-O
                    </h3>
                    <p className="fst-italic">
                    Blood group O (or blood group zero in some countries) individuals do not have either A or B antigens on the surface of their RBCs, and their blood serum contains IgM anti-A and anti-B antibodies. Therefore, a group O individual can receive blood only from a group O individual, but can donate blood to individuals of any ABO blood group (i.e., A, B, O or AB). If a patient needs an urgent blood transfusion, and if the time taken to process the recipient's blood would cause a detrimental delay, O negative blood can be issued. Because it is compatible with anyone, O negative blood is often overused and consequently is always in short supply
                    </p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img
                      src="https://img.medscape.com/thumbnail_library/dt_190614_blood_type_o_800x450.jpg"
                      alt="O"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-5">
                <div className="row gy-4">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>
                      Est eveniet ipsam sindera pad rone matrelat sando reda
                    </h3>
                    <p className="fst-italic">
                      Omnis blanditiis saepe eos autem qui sunt debitis porro
                      quia.
                    </p>
                    <p>
                      Exercitationem nostrum omnis. Ut reiciendis repudiandae
                      minus. Omnis recusandae ut non quam ut quod eius qui.
                      Ipsum quia odit vero atque qui quibusdam amet. Occaecati
                      sed est sint aut vitae molestiae voluptate vel
                    </p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img
                      src="assets/img/departments-5.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Departments Section */}
        </>
    );
};