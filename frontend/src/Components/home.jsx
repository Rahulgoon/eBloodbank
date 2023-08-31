import React from "react";

export const Home = () => {
    return(
        <>
  {/* ======= Hero Section ======= */}
  <section id="hero" className="d-flex align-items-center">
    <div className="container">
      <h1>Welcome to eBloodBank</h1>
      <h2>  BLOOD – The  most precious element that sustains life.</h2>
      <a href="#about" className="btn-get-started scrollto">
        Get Started
      </a>
    </div>
  </section>
  {/* End Hero */}
  <main id="main">
    {/* ======= Why Us Section ======= */}
    <section id="why-us" className="why-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="content">
              <h3>Why Choose eBloodBank?</h3>
              <p>
               This is Fully licensed centre for issue of blood and blood components.
               Highly qualified and experienced doctors and technicians hold out their services.
               Round the clock service.
               Efficient screening for various communicable diseases HIV, HCV, Syphilis, Malaria by internatonally approved methods. Highly sensitive and technologically advanced CLIA (Chemiluminescence Immunoassay) available for screening of HIV.
               Provide blood and blood components Whole Blood, Packed Red Cells, Leucoreduced Packed Red Cells, Platelets, Fresh Frozen Plasma and Cryoprecipitate with their storage at optimal conditions.
              </p>
              <div className="text-center">
                <a href="/about" className="more-btn">
                  Learn More <i className="bx bx-chevron-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 d-flex align-items-stretch">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-receipt" />
                    <h4>The Importance of Diversity in the Blood Supply</h4>
                    <p>
                    Maintaining diversity in the blood supply is essential. Some blood types are quite rare and are likeliest to be found among people with shared ancestral origins
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-cube-alt" />
                    <h4>Blood Donation Types</h4>
                    <p>
                    Blood donations can yield a variety of blood products, including red cells, platelets and plasma. You may be most familiar with the typical whole blood donation drive seen at workplaces, schools and community events, but there are a few other ways to help give more life through the Blood Donation.
                    </p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-images" />
                    <h4>User For?</h4>
                    <p>
                    Stomach disease, kidney disease, childbirth, operations, blood loss, trauma, cancer, blood diseases, haemophilia, anemia, heart disease.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End .content*/}
          </div>
        </div>
      </div>
    </section>
    {/* End Why Us Section */}
     {/* ======= Counts Section ======= */}
     <section id="counts" className="counts">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="fas fa-user-md" />
              <span
                data-purecounter-start={0}
                data-purecounter-end={85}
                data-purecounter-duration={1}
                className="purecounter"
              />
              <p>Donors Registered </p>
              <h1>2000+</h1>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
            <i class="bi bi-collection"></i>
              <span
                data-purecounter-start={0}
                data-purecounter-end={18}
                data-purecounter-duration={1}
                className="purecounter"
              />
              <p>Blood Units Collected</p>
              <h1>3500+</h1>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i class="bi bi-geo-alt"></i>
              <span
                data-purecounter-start={0}
                data-purecounter-end={12}
                data-purecounter-duration={1}
                className="purecounter"
              />
              <p>Our Centers</p>
              <h1>4</h1>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
            <i class="bi bi-stopwatch"></i>
              <span
                data-purecounter-start={0}
                data-purecounter-end={150}
                data-purecounter-duration={1}
                className="purecounter"
              />
              <p>Availability</p>
              <h1>24 x 7</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
     {/* End Counts Section */}
     {/* ======= Services Section ======= */}
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
          Blood banking is the process that takes place in the lab to make sure that donated blood, or blood products, are safe before they are used in blood transfusions and other medical procedures. Blood banking includes typing the blood for transfusion and testing for infectious diseases.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="icon-box">
              <div className="icon">
                <i className="fas fa-heartbeat" />
              </div>
              <h4>
                <a href="">Blood Stock Availability</a>
              </h4>
              <p>
              eBloodBank is an online service to display the updated status of available blood stock in both government and other blood banks
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="icon-box">
              <div className="icon">
                <i className="fas fa-pills" />
              </div>
              <h4>
                <a href="">Health ID - Key to your Digital Healthcare Journey</a>
              </h4>
              <p>
              Using a Health ID is the first step towards creating safer and efficient digital health records for you and your family. You can opt-in to create a digitally secure Health ID, which allows you to access and share your health data with your consent, with participating healthcare providers and payers.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="icon-box">
              <div className="icon">
                <i className="fas fa-hospital-user" />
              </div>
              <h4>
                <a href="">Check your nearest bloodbank center and slots availability</a>
              </h4>
              <p>
              eBloodBank is a platform to register for blood, using your Mobile no. or Aadhaar no. or any other Identity docs. You can choose a preferred nearby blood Center. eBloodBank also enables you to book your slot to get the blood.
              </p>
            </div>
          </div>
         
        </div>
      </div>
    </section>
    {/* End Services Section */}
    {/* ======= Gallery Section ======= */}
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
          eBloodBank's Pictures, Images and Stock Photos....
          </p>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row g-0">
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href="https://media.istockphoto.com/id/987110992/photo/red-blood-bag-in-hand-scientist-over-white-background-in-laboratory.jpg?s=612x612&w=0&k=20&c=8nN7F6JEHqL0LmTp8lsvzcA4Ekrvj8djbwpR81Sh9kc="
                className="galelry-lightbox"
              >
                <img
                  src="https://media.istockphoto.com/id/987110992/photo/red-blood-bag-in-hand-scientist-over-white-background-in-laboratory.jpg?s=612x612&w=0&k=20&c=8nN7F6JEHqL0LmTp8lsvzcA4Ekrvj8djbwpR81Sh9kc="
                  alt="gal1"
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href="https://media.istockphoto.com/id/1266747084/photo/donor-donating-blood.jpg?s=612x612&w=0&k=20&c=UyAsaxCRiohVYLxhq5eOI91H-YWURXvvGwtVYyIFzkY="
                className="galelry-lightbox"
              >
                <img
                  src="https://media.istockphoto.com/id/1266747084/photo/donor-donating-blood.jpg?s=612x612&w=0&k=20&c=UyAsaxCRiohVYLxhq5eOI91H-YWURXvvGwtVYyIFzkY="
                  alt="gal2"
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href="https://media.istockphoto.com/id/172456327/photo/blood-test.jpg?s=612x612&w=0&k=20&c=f-VXBhAGJfXkY4AV5w0RSqwUZJ286hD__0PdZ8bnA3Y="
                className="galelry-lightbox"
              >
                <img
                  src="https://media.istockphoto.com/id/172456327/photo/blood-test.jpg?s=612x612&w=0&k=20&c=f-VXBhAGJfXkY4AV5w0RSqwUZJ286hD__0PdZ8bnA3Y="
                  alt="gal3"
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href="https://media.istockphoto.com/id/1403182301/photo/preparation-for-blood-test-by-female-doctor-medical-uniform-on-the-table-in-white-bright-room.jpg?s=612x612&w=0&k=20&c=U5lfNS8V5aIVrQ4jxd6ST-ayXWXDfV4biSYWdBxGZbQ="
                className="galelry-lightbox"
              >
                <img
                  src="https://media.istockphoto.com/id/1403182301/photo/preparation-for-blood-test-by-female-doctor-medical-uniform-on-the-table-in-white-bright-room.jpg?s=612x612&w=0&k=20&c=U5lfNS8V5aIVrQ4jxd6ST-ayXWXDfV4biSYWdBxGZbQ="
                  alt="gal4"
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href="https://media.istockphoto.com/id/1303331101/photo/blood-transfusion-inside-a-blood-donation-camp-in-kolkata.jpg?s=612x612&w=0&k=20&c=YKP3cqHvspk_VV6As-uvmuimvtSfsqaHZHWT0p4uIrk="
                className="galelry-lightbox"
              >
                <img
                  src="https://media.istockphoto.com/id/1303331101/photo/blood-transfusion-inside-a-blood-donation-camp-in-kolkata.jpg?s=612x612&w=0&k=20&c=YKP3cqHvspk_VV6As-uvmuimvtSfsqaHZHWT0p4uIrk="
                  alt="gal5"
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href="https://media.istockphoto.com/id/1266746953/photo/patient-receiving-a-blood-transfusion.jpg?s=612x612&w=0&k=20&c=P3vRjLv0rZ54tipQ01zH53oz2IzDAYJwHxupwIY3wms="
                className="galelry-lightbox"
              >
                <img
                  src="https://media.istockphoto.com/id/1266746953/photo/patient-receiving-a-blood-transfusion.jpg?s=612x612&w=0&k=20&c=P3vRjLv0rZ54tipQ01zH53oz2IzDAYJwHxupwIY3wms="
                  alt="gal6"
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href="https://media.istockphoto.com/id/1322676393/photo/storing-of-blood-and-blood-products.jpg?s=612x612&w=0&k=20&c=6Mrcedc80vuL4irPxXIwMhZQDazdJu9sGujFN6lu0EM="
                className="galelry-lightbox"
              >
                <img
                  src="https://media.istockphoto.com/id/1322676393/photo/storing-of-blood-and-blood-products.jpg?s=612x612&w=0&k=20&c=6Mrcedc80vuL4irPxXIwMhZQDazdJu9sGujFN6lu0EM="
                  alt="gal7"
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href="https://media.istockphoto.com/id/1266747129/photo/doctor-holding-medical-exam.jpg?s=612x612&w=0&k=20&c=AjBcOoBPWhGj0vaz6FvP1WzHyiQG5RtbWECCvhgghtc="
                className="galelry-lightbox"
              >
                <img
                  src="https://media.istockphoto.com/id/1266747129/photo/doctor-holding-medical-exam.jpg?s=612x612&w=0&k=20&c=AjBcOoBPWhGj0vaz6FvP1WzHyiQG5RtbWECCvhgghtc="
                  alt="gal8"
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Gallery Section */}
  </main>
  {/* End #main */}
        </>
    );
};