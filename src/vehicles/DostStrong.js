import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosHome } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { Button, Row, Col, Form, Accordion, Table } from 'react-bootstrap';
import { BsDownload } from 'react-icons/bs';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';

function DostStrong() {
  return (
    <>
      <Helmet>
        <title>
          Ashok Leyland Dost Strong Price in Hyderabad | Dost Strong Features &
          Specifications
        </title>
        <meta
          name='title'
          content='Ashok Leyland Dost Strong Price in Hyderabad | Dost Strong Features & Specifications'
        />
        <meta
          name='description'
          content='Ashok Leyland Dost Strong BS6 price in Hyderabad, Telangana starts from ₹ 6.68 lacs. Dost Strong superior mileage is one of the key features of Dost Strong. It is available in 3 variants. Saboo AutoZone offers best deals on Ashok Leyland Dost Strong. Call now 91002 55555 Call now 91002 55555'
        />
        <meta
          name='keywords'
          content='Ashok Leyland Dost Strong Price, Specifications, Features & Mileage'
        />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.sabooautozone.com/' />
        <meta
          property='og:title'
          content='Ashok Leyland Dost Strong Price in Hyderabad | Dost Strong Features & Specifications'
        />
        <meta
          property='og:description'
          content='Ashok Leyland Dost Strong BS6 price in Hyderabad, Telangana starts from ₹ 6.68 lacs. Dost Strong superior mileage is one of the key features of Dost Strong. It is available in 3 variants. Saboo AutoZone offers best deals on Ashok Leyland Dost Strong. Call now 91002 55555'
        />
        <meta
          property='og:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-dost-strong.jpg'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.sabooautozone.com/' />
        <meta
          property='twitter:title'
          content='Ashok Leyland Dost Strong Price in Hyderabad | Dost Strong Features & Specifications'
        />
        <meta
          property='twitter:description'
          content='Ashok Leyland Dost Strong BS6 price in Hyderabad, Telangana starts from ₹ 6.68 lacs. Dost Strong superior mileage is one of the key features of Dost Strong. It is available in 3 variants. Saboo AutoZone offers best deals on Ashok Leyland Dost Strong. Call now 91002 55555'
        />
        <meta
          property='twitter:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-dost-strong.jpg'
        />
      </Helmet>
      <DostStrongBanner />
      <div className='container my-5'>
        <TitleWithImg />
        <Specsi3 />
        <VehicleForm />
        <TechSpecs />
      </div>
    </>
  );
}

const DostStrongBanner = () => {
  return (
    <>
      <img
        className='mw-100 w-100'
        src={require('../img/Ashok-Leyland-Dost-Strong-banner.webp')}
        alt='vehciles-banner'
      />

      <div className='container-fluid bg-white py-3 shadow-sm'>
        <div className='container'>
          <ol className='breadcrumb mb-0'>
            <li className='breadcrumb-item'>
              <Link className='text-decoration-none text-black' to='/'>
                <IoIosHome /> Home
              </Link>
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              Light Commercial Vehicles (LCV) / Ashok Leyland Dost Strong on
              road price in Hyderabad
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

const TitleWithImg = () => {
  return (
    <>
      <div className='row mb-2'>
        <div className='col-lg-6 mb-3 overflow-hidden'>
          <img
            className='my-auto mw-100 w-100'
            src={require('../img/vehicles/Ashok-Leyland-Dost-Strong-Mileage.webp')}
            alt='Bada-Dost-Strong'
          />
        </div>
        <div className='col-lg-6 mb-3 ps-4'>
          <h4>Ashok Leyland DOST Strong on road price in Hyderabad</h4>
          <h5>
            Starting from ₹ 7.43 Lakh<sup>*</sup>
          </h5>
          <small className='text-danger'>
            <sup>*</sup>Prices are subjected to change at anytime, final price
            will be shared at showroom.
          </small>
          <p>
            <small className='text-primary'>
              <IoLocationOutline /> Hyderabad
            </small>
          </p>
          <small>
            Ashok Leyland recognizes that a country's economic stability is
            dependent on the safe and timely delivery of commodities, and
            designs vehicles that make this possible in the long run. DOST, an
            award-winning light commercial vehicle from Ashok Leyland, now has
            i-GEN6 technology, making it a suitable vehicle of 1250kgs for
            transporting items carried off larger trucks through crowded city
            highways and across difficult terrains to even the most distant
            corners of the country. DOST's car-like simplicity of use and fuel
            economy make it a practical alternative for navigating through
            narrower lanes and guaranteeing consumer items are delivered to
            their doorstep.
          </small>
          <p className='d-flex mt-2 fw-bold fst-italic'>
            Available Colors :
            <Button
              className='btn rounded-0 mx-2 border border-2'
              style={{ backgroundColor: '#fff' }}
            ></Button>
            <Button
              className='btn rounded-0 me-2 border border-2'
              style={{ backgroundColor: '#f1ddb7' }}
            ></Button>
            <Button
              className='btn rounded-0 me-2 border border-2'
              style={{ backgroundColor: '#1a4797' }}
            ></Button>
          </p>
          <div>
            <Button
              variant='outline-danger me-2 text-uppercase rounded-0'
              className='btn-hover mb-1'
              style={{ border: '1px solid #9f2a2c', color: '#9f2a2c' }}
            >
              get on road price
            </Button>
            <a
              href='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/pdfs/Ashok-Leyland-Light-Commercial-Truck-Dost-Strong-Brochure.pdf'
              target='_blank'
              className='btn btn-danger text-uppercase rounded-0 mb-1'
              rel='noopener noreferrer'
              style={{ backgroundColor: '#9f2a2c' }}
            >
              <BsDownload /> download Brochure
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const Specsi3 = () => {
  return (
    <>
      <h4>Ashok Leyland Dost Strong Specifications and Features</h4>
      <div className='row'>
        <div className='col-lg-2 col-sm-4 mb-3'>
          <div
            className='card bg-light shadow-sm'
            style={{ border: '1px solid #eee' }}
          >
            <div className='card-body'>
              <div className='d-flex flex-column text-center'>
                <img
                  src={require('../img/power.webp')}
                  className='mx-auto mb-2'
                  alt='payload'
                  height={54}
                  width={54}
                />
                <small className='text-muted'>POWER</small>
                <span> 70 HP</span>
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-2 col-sm-4 mb-3'>
          <div
            className='card bg-light shadow-sm'
            style={{ border: '1px solid #eee' }}
          >
            <div className='card-body'>
              <div className='d-flex flex-column text-center'>
                <img
                  src={require('../img/gvw.webp')}
                  className='mx-auto mb-2'
                  alt='payload'
                  height={54}
                  width={54}
                />
                <small className='text-muted'>GVW</small>
                <span> 2590 kg</span>
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-2 col-sm-4 mb-3'>
          <div
            className='card bg-light shadow-sm'
            style={{ border: '1px solid #eee' }}
          >
            <div className='card-body'>
              <div className='d-flex flex-column text-center'>
                <img
                  src={require('../img/wheel-base.webp')}
                  className='mx-auto mb-2'
                  alt='payload'
                  height={54}
                  width={54}
                />
                <small className='text-muted'>WHEEL BASE</small>
                <span> 2350 mm</span>
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-2 col-sm-4 mb-3'>
          <div
            className='card bg-light shadow-sm'
            style={{ border: '1px solid #eee' }}
          >
            <div className='card-body'>
              <div className='d-flex flex-column text-center'>
                <img
                  src={require('../img/engine.webp')}
                  className='mx-auto mb-2'
                  alt='payload'
                  height={54}
                  width={54}
                />
                <small className='text-muted'>ENGINE</small>
                <span> 1478 cc</span>
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-2 col-sm-4 mb-3'>
          <div
            className='card bg-light shadow-sm'
            style={{ border: '1px solid #eee' }}
          >
            <div className='card-body'>
              <div className='d-flex flex-column text-center'>
                <img
                  src={require('../img/fuel.webp')}
                  className='mx-auto mb-2'
                  alt='payload'
                  height={54}
                  width={54}
                />
                <small className='text-muted'>FUEL TANK</small>
                <span> 40 ltrs</span>
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-2 col-sm-4 mb-3'>
          <div
            className='card bg-light shadow-sm'
            style={{ border: '1px solid #eee' }}
          >
            <div className='card-body'>
              <div className='d-flex flex-column text-center'>
                <img
                  src={require('../img/payload.webp')}
                  className='mx-auto mb-2'
                  alt='payload'
                  height={54}
                  width={54}
                />
                <small className='text-muted'>PAYLOAD</small>
                <span> 1250 kg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const VehicleForm = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    mobile: '',
    vehicle: '',
    outlet: '',
    enquiry: '',
  });
  const { name, email, mobile, vehicle, outlet, enquiry } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [buttonclick, setButtonclick] = useState(false);

  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();

    if (user.name === '') {
      toast.error('Enter Name');
    }

    if (user.mobile === '') {
      toast.error('Enter Mobile');
    }
    if (user.vehicle === '') {
      toast.error('Enter Vehicle');
    }
    if (user.outlet === '') {
      toast.error('Enter Outlet');
    }

    if (enquiry === '') {
      toast.error('Select On Road Price or Test Drive');
    }

    if (
      user.name !== '' &&
      user.mobile !== '' &&
      user.outlet !== '' &&
      user.vehicle !== '' &&
      enquiry !== ''
    ) {
      const pattern = /^[6-9][0-9]{6,9}$/;
      if (!pattern.test(mobile)) {
        toast.error('Please enter a valid phone number');
      } else {
        setButtonclick(true);
        await axios
          .post('https://saboogroups.com/autozone/api/on-road-price', user)
          .then(function (response) {
            navigate('/thank-you');
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  };

  return (
    <div className='container shadow rounded-3 border my-5'>
      <div className='row p-3 align-items-center'>
        <div className='col-lg-6 col-md-12 col-12 mt-3'>
          <h3>Get On Road Price of Dost Strong</h3>
          <small>
            Please fill out the form and we'll get back to you right away !
          </small>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className='row mt-4'>
              <div className='col-md-6 mb-3'>
                <label className='form-label'>Name</label>
                <input
                  type='text'
                  name='name'
                  value={name}
                  onChange={(e) => onInputChange(e)}
                  className='form-control'
                />
              </div>

              <div className='col-md-6 mb-3'>
                <label className='form-label'>Email</label>
                <input
                  type='email'
                  name='email'
                  value={email}
                  onChange={(e) => onInputChange(e)}
                  className='form-control'
                />
              </div>

              <div className='col-md-6 mb-3'>
                <label className='form-label'>Phone</label>
                <input
                  type='text'
                  name='mobile'
                  value={mobile}
                  onChange={(e) => onInputChange(e)}
                  className='form-control'
                  minLength='10'
                  maxLength='10'
                />
              </div>

              <div className='col-md-6 mb-3'>
                <label className='form-label'>Model</label>
                <select
                  className='form-select'
                  aria-label='Default select example'
                  name='vehicle'
                  value={vehicle}
                  onChange={(e) => onInputChange(e)}
                >
                  <option>Select</option>
                  <option value='Dost i4'>Dost i4</option>
                  <option value='Dost i3'>Dost i3</option>
                  <option value='Dost i3 plus'>Dost i3+</option>
                  <option value='Dost Plus'>Dost+</option>
                  <option value='Dost LiTE'>Dost LiTE</option>
                  <option value='Dost Strong'>Dost Strong</option>
                  <option value='Dost CNG'>Dost CNG</option>
                  <option value='Partner'>Partner</option>
                  <option value='School'>MiTR School Bus</option>
                  <option value='Staff'>MiTR Staff Bus</option>
                </select>
              </div>

              <div className='col-md-12  mb-3'>
                <div className='d-flex flex-row'>
                  <Form.Check
                    className='me-3'
                    type='radio'
                    id='get_on_road_price'
                    label='Get On Road Price'
                    name='enquiry'
                    value='1'
                    onChange={(e) => onInputChange(e)}
                  />
                  <Form.Check
                    className='me-3'
                    type='radio'
                    id='book_test_drive'
                    name='enquiry'
                    value='2'
                    label='Book A Test Drive'
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
              </div>

              <div className='col-md-12 mb-3'>
                <label className='form-label'>Outlet</label>
                <select
                  className='form-select'
                  aria-label='Default select example'
                  name='outlet'
                  value={outlet}
                  onChange={(e) => onInputChange(e)}
                >
                  <option>Select</option>
                  <option value='Attapur'>Attapur</option>
                  <option value='Gadwal'>Gadwal</option>
                  <option value='Jodimetla'>Jodimetla</option>
                  <option value='Kukatpally'>Kukatpally</option>
                  <option value='LB Nagar'>LB Nagar</option>
                  <option value='Mahbubnagar'>Mahbubnagar</option>
                  <option value='Nagaram'>Nagaram</option>
                  <option value='Kalwakurthy'>Kalwakurthy</option>
                  <option value='Siddipet'>Siddipet</option>
                  <option value='Sangareddy'>Sangareddy</option>
                  <option value='Uppal'>Uppal</option>
                  <option value='Vikarabad'>Vikarabad</option>
                </select>
              </div>
            </div>

            <Form.Group as={Row} controlId='formHorizontalCheck'>
              <Col>
                <Form.Check label='I agree to Terms and Conditions' required />
              </Col>
            </Form.Group>

            <Button
              className='btn btn-success mt-4 text-uppercase px-5'
              type='submit'
              disabled={buttonclick}
            >
              Submit
            </Button>
          </form>
        </div>

        <div className='col-lg-6 col-md-12 col-12 pe-0 mt-3 overflow-hidden'>
          <img
            className='w-100'
            src={require('../img/vehicles/Ashok-Leyland-Dost-Strong-Price-in-Hyderabad.webp')}
            alt='Dost-Strong-Price'
          />
        </div>
      </div>
    </div>
  );
};

const TechSpecs = () => {
  return (
    <>
      <div className='container shadow rounded border my-5'>
        <div className='row p-3 align-items-center'>
          <div className='col-lg-12 col-md-12 col-12 mt-3'>
            <h4 className='mb-3 text-uppercase'>Technical Specifications</h4>
            <Accordion defaultActiveKey='0' flush>
              {/* Engine Starts */}
              <Accordion.Item eventKey='0'>
                <Accordion.Header>Engine</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Engine :</td>
                        <td>1.5L, 3 Cylinder Diesel Engine (BS VI)</td>
                      </tr>
                      <tr>
                        <td>Type</td>
                        <td>Diesel</td>
                      </tr>
                      <tr>
                        <td>Displacement/Cubic Capacity : </td>
                        <td>1,478 cc</td>
                      </tr>
                      <tr>
                        <td>Maximum Power @ rpm : </td>
                        <td>70 HP @ 3,300 RPM</td>
                      </tr>
                      <tr>
                        <td>Maximum Torque @ rpm : </td>
                        <td>170 Nm @ 1600-2400 RPM</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              {/* Engine ends */}

              {/* Performance Starts */}
              <Accordion.Item eventKey='1'>
                <Accordion.Header>Performance</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Top Speed (in mm) : </td>
                        <td>80 kmph</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              {/* Performance ends */}

              {/* Clutch Starts */}
              <Accordion.Item eventKey='2'>
                <Accordion.Header>Clutch</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Clutch : </td>
                        <td>
                          240 mm Diameter Diaphragm, Single dry plate,
                          Mechanical cable Operated
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              {/* Clutch ends */}

              {/* Transmission Starts */}
              <Accordion.Item eventKey='3'>
                <Accordion.Header>Transmission</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Type/No. of Gears : </td>
                        <td>
                          Fully synchromesh, 5 speed-Gearbox Manual, Integrated
                          Bell Housing,(5 Forward +1 reverse gears)
                        </td>
                      </tr>
                      <tr>
                        <td>Gear Shifting : </td>
                        <td>Cable type</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              {/* Transmission ends */}

              {/* Brakes Starts */}
              <Accordion.Item eventKey='5'>
                <Accordion.Header>Brakes</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Type : </td>
                        <td>Vacuum assisted Hydraulic brake with LSPV</td>
                      </tr>
                      <tr>
                        <td>Front : </td>
                        <td>Ventilated Disc Type</td>
                      </tr>
                      <tr>
                        <td>Rear : </td>
                        <td>Drum Tyre</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              {/* Brakes ends */}

              {/* Suspension Starts */}
              <Accordion.Item eventKey='6'>
                <Accordion.Header>Suspension</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Front : </td>
                        <td>
                          Rigid Suspension with Parabolic Leaf spring and
                          Double-acting Shock absorbers
                        </td>
                      </tr>
                      <tr>
                        <td>Rear : </td>
                        <td>Parabolic leaf spring,2 stages,overslung</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              {/* Suspension ends */}

              {/* Tyre size starts */}
              <Accordion.Item eventKey='7'>
                <Accordion.Header>Tyres(Size/Type)</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Tyres : </td>
                        <td>185 R14 LT, 8PR,Radial</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              {/* Tyre size ends */}

              {/* Weight Starts */}
              <Accordion.Item eventKey='8'>
                <Accordion.Header>Weight</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Gross Vehicle Weight (GVW)in kg's : </td>
                        <td>2590</td>
                      </tr>
                      <tr>
                        <td>Rated Payload in kg's : </td>
                        <td>1250 </td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              {/* Weight ends */}

              {/* Seating Capacity Starts */}
              <Accordion.Item eventKey='9'>
                <Accordion.Header>Seating Capacity</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Capacity : </td>
                        <td>Driver + 1</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              {/* Seating Capacity ends */}

              {/* Fuel Tank Capacity Starts */}
              <Accordion.Item eventKey='10'>
                <Accordion.Header>Fuel Tank Capacity</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Capacity : </td>
                        <td>40 ltrs</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              {/* Fuel Tank Capacity ends */}

              {/* Dimensions Starts */}
              <Accordion.Item eventKey='11'>
                <Accordion.Header>Dimensions</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Wheelbase (in mm) : </td>
                        <td>2350</td>
                      </tr>
                      <tr>
                        <td>Overall length (in mm) : </td>
                        <td>4485</td>
                      </tr>
                      <tr>
                        <td>Overall Width (in mm) : </td>
                        <td>1620</td>
                      </tr>
                      <tr>
                        <td>Overall Height (in mm) : </td>
                        <td>1835</td>
                      </tr>
                      <tr>
                        <td>Load Body/Cargo Deck (L x W x H) : </td>
                        <td>2500mm x 1620mm x 380mm(8.2ft x5.3ft x 1.25ft)</td>
                      </tr>
                      <tr>
                        <td>Loading Height (in mm) : </td>
                        <td>840 </td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              {/* Dimensions ends */}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default DostStrong;
