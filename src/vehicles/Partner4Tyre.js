import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosHome } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { Button, Row, Col, Form, Accordion, Table } from 'react-bootstrap';
import { BsDownload } from 'react-icons/bs';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';

function Partner4Tyre() {
  return (
    <>
      <Helmet>
        <title>
          Ashok Leyland Partner 4 Tire on Road Price in Hyderabad | Mileage &
          Specifications
        </title>
        <meta
          name='title'
          content='Ashok Leyland Partner 4 Tire on Road Price in Hyderabad | Mileage & Specifications'
        />
        <meta
          name='description'
          content='Ashok Leyland Partner 6tyre truck on-road price in Hyderabad. Check out Ashok Leyland Partner 6tyre truck technical specifications,mileage, features at Saboo AutoZone showrooms or call us 91002 55555 for best offers.'
        />
        <meta
          name='keywords'
          content='Ashok Leyland Partner Price, Specifications, Features & Mileage'
        />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.sabooautozone.com/' />
        <meta
          property='og:title'
          content='Ashok Leyland Partner 4 Tire on Road Price in Hyderabad | Mileage & Specifications'
        />
        <meta
          property='og:description'
          content='Ashok Leyland Partner 6tyre truck on-road price in Hyderabad. Check out Ashok Leyland Partner 6tyre truck technical specifications,mileage, features at Saboo AutoZone showrooms or call us 91002 55555 for best offers.'
        />
        <meta
          property='og:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-partner.jpg'
        />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.sabooautozone.com/' />
        <meta
          property='twitter:title'
          content='Ashok Leyland Partner 4 Tire on Road Price in Hyderabad | Mileage & Specifications'
        />
        <meta
          property='twitter:description'
          content='Ashok Leyland Partner 6tyre truck on-road price in Hyderabad. Check out Ashok Leyland Partner 6tyre truck technical specifications,mileage, features at Saboo AutoZone showrooms or call us 91002 55555 for best offers.'
        />
        <meta
          property='twitter:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-partner.jpg'
        />
      </Helmet>
      <Partner4TyreBanner />
      <div className='container my-5'>
        <TitleWithImg />
        <Specsi3 />
        <VehicleForm />
        <TechSpecs />
      </div>
    </>
  );
}

const Partner4TyreBanner = () => {
  return (
    <>
      <img
        className='mw-100 w-100'
        src={require('../img/Ashok-Leyland-partner-4tyre-banner.webp')}
        alt='dost-banner'
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
              Light Commercial Vehicles / Ashok Leyland Partner 4-Tyre
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
      <div className='row'>
        <div className='col-lg-6 mb-3 overflow-hidden'>
          <img
            className='my-auto mw-100 w-100'
            src={require('../img/vehicles/Ashok-Leyland-Partner-4tyre-Price.webp')}
            alt='Bada-Dost-i3'
          />
        </div>
        <div className='col-lg-6 mb-3'>
          <h4>
            Ashok Leyland PARTNER 4 Tyre commercial Truck On Road Price In
            Hyderabad
          </h4>
          <h5>
            Starting from ₹ 13.45 Lakh<sup>*</sup>
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
            The Partner is up to practically any work, on almost any terrain,
            whether it's for intra-city products transportation or making
            collections or deliveries in rural areas. The Partner is developed
            to be a dependable vehicle with potential only outdone by its
            functionality with new i-Gen BS6 Technology, with an awareness of
            the subtleties of Indian roadways, people's mobility demands, and
            newly implemented emission rules. With a modern cabin, impressive
            built quality, fuel-efficient engine, and best-in-class service
            intervals, Ashok Leyland's 'Partner' series delivers best-in-class
            user experience, coupled with exceptional efficiency. With a
            warranty of 3 Years or 3 Lakh Km, the vehicle delivers best-in-class
            user experience, coupled with exceptional efficiency.
          </small>
          <p className='d-flex mt-2 fw-bold fst-italic'>
            Available Colors :
            <Button
              className='btn rounded-0 mx-2 border border-2'
              style={{ backgroundColor: '#fff' }}
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
              href='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/pdfs/Ashok-Leyland-Commercial-Truck-Partner-10ft-14ft-Brochure.pdf'
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
      <h4>Ashok Leyland Partner 4- Tyre Specifications and Features</h4>
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
                <span> 80 HP</span>
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
                <span>
                  {' '}
                  10ft LB/6250 Kg <br /> 14ft LB/ Kg
                </span>
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
                <span>
                  {' '}
                  10ft LB 2685 mm <br /> 14ft LB 3335 mm
                </span>
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
                <span> 2953 cc</span>
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
                <span> 90 Ltrs</span>
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
                <span>10ft LB/3760 Kg 14ft LB/4565 Kg</span>
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
          <h3>Get On Road Price of Partner 4- Tyre</h3>
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
            src={require('../img/vehicles/partner-4.webp')}
            alt='partner-4'
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
              <Accordion.Item eventKey='0'>
                <Accordion.Header>VARIANT</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Variant :</td>
                        <td>10 ft LB</td>
                        <td>14 ft LB</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='1'>
                <Accordion.Header>Weight</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Gross Vehicle Weight (kg) : </td>
                        <td>6250</td>
                        <td>7200</td>
                      </tr>
                      <tr>
                        <td>Rated Payload (FSD) (kg) : </td>
                        <td>3760</td>
                        <td>4565</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='2'>
                <Accordion.Header>LOAD BODY DIMENSIONS</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Load Body Length (mm) : </td>
                        <td>3160</td>
                        <td>4230</td>
                      </tr>
                      <tr>
                        <td>Load Body Width (mm) (HSD) : </td>
                        <td>1960</td>
                        <td>2060</td>
                      </tr>
                      <tr>
                        <td>Side Deck Height (mm) : </td>
                        <td>FSD : 460 – HSD : 1840</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='3'>
                <Accordion.Header>SUSPENSION & TYRES</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Front Suspension : </td>
                        <td>
                          Parabolic,overslung suspension with Double Acting
                          Shock Absorbers
                        </td>
                      </tr>
                      <tr>
                        <td>No of Leaf Springs (Front) : </td>
                        <td>Front : 3</td>
                      </tr>
                      <tr>
                        <td>Rear Suspension: </td>
                        <td>
                          Semi-elliptic(main),overslung suspension with Double
                          Acting Shock Absorbers
                        </td>
                      </tr>
                      <tr>
                        <td>No of Leaf Springs (Rear): </td>
                        <td>6 main + 2 Helper</td>
                      </tr>
                      <tr>
                        <td>No. of Tyres: </td>
                        <td>Front 2, Rear 2, Spare 1</td>
                      </tr>

                      <tr>
                        <td>Loading Platform Height (mm): </td>
                        <td>1050</td>
                        <td>1035</td>
                      </tr>
                      <tr>
                        <td>Turning Circle Radius (TCR) (m): </td>
                        <td>6.2</td>
                        <td>7.5</td>
                      </tr>
                      <tr>
                        <td>Min. Ground Clearance: </td>
                        <td>238</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='4'>
                <Accordion.Header>POWERTRAIN</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Engine Type: </td>
                        <td>
                          ZD30 Diesel Engine with DDTi (Double Overhead
                          Camshaft, Common Rail, Direct Injection, Turbo
                          Intercooled)
                        </td>
                      </tr>
                      <tr>
                        <td>Displacement / Cubic Capacity: </td>
                        <td>2953 cc</td>
                      </tr>
                      <tr>
                        <td>Maximum Power Output (in HP): </td>
                        <td>140 HP @ 2750 RPM</td>
                      </tr>
                      <tr>
                        <td>Maximum Torque (Nm): </td>
                        <td>360 Nm @ 1350-2750 RPM</td>
                      </tr>
                      <tr>
                        <td>Clutch: </td>
                        <td>
                          Diaphragm Push Type,Single Dry Plate,Hydraulic
                          actuated
                        </td>
                      </tr>
                      <tr>
                        <td>Transmission: </td>
                        <td>
                          Fully Syncronised 5 Speed gearbox Manual-Kinetic
                        </td>
                      </tr>
                      <tr>
                        <td>Fuel Tank Capacity (litre): </td>
                        <td>90 litre</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='5'>
                <Accordion.Header>OVERALL DIMENSIONS</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Wheel Base (mm): </td>
                        <td>2685</td>
                        <td>3335</td>
                      </tr>
                      <tr>
                        <td>Overall Length (mm): </td>
                        <td>4920</td>
                        <td>5990</td>
                      </tr>
                      <tr>
                        <td>Overall Height (mm): </td>
                        <td>FSD : 2250 HSD : 2850</td>
                        <td>FSD : 2250 HSD : 2810</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='6'>
                <Accordion.Header>ELECTRICALS</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Battery: </td>
                        <td>1 x 75 AH</td>
                      </tr>
                      <tr>
                        <td>Alternator: </td>
                        <td>70 A</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='7'>
                <Accordion.Header>STEERING</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Steering System : </td>
                        <td>Power</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='8'>
                <Accordion.Header>BRAKES</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Service Brake : </td>
                        <td>Vacuum Assist Hydraulic Brake</td>
                      </tr>
                      <tr>
                        <td>Exhaust Brakes : </td>
                        <td>No</td>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <td>Parking Brake :</td>
                        <td>Transmission mounted, Cable operated</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='9'>
                <Accordion.Header>PERFORMANCE</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Grade ability : </td>
                        <td>25%</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};
export default Partner4Tyre;
