import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosHome } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import {
  Button,
  Row,
  Col,
  Form,
  Accordion,
  Table,
  Tab,
  Tabs,
} from 'react-bootstrap';
import { BsDownload } from 'react-icons/bs';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';

function MiTRStaffBus() {
  return (
    <>
      <Helmet>
        <title>Mitr Staff Bus Price in Hyderabad | Saboo AutoZone</title>
        <meta
          name='title'
          content='Mitr Staff Bus Price in Hyderabad | Saboo AutoZone'
        />
        <meta
          name='description'
          content='Ashok Leyland Mitr staff bus on-road price in Hyderabad. Check out Mitr staff bus technical specifications, mileage, features at Saboo AutoZone showrooms or call us 91002 55555 for best offers.'
        />
        <meta
          name='keywords'
          content='Ashok Leyland Mitr Staff bus Price, Specifications, Features & Mileage'
        />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.sabooautozone.com/' />
        <meta
          property='og:title'
          content='Mitr Staff Bus Price in Hyderabad | Saboo AutoZone'
        />
        <meta
          property='og:description'
          content='Ashok Leyland Mitr staff bus on-road price in Hyderabad. Check out Mitr staff bus technical specifications, mileage, features at Saboo AutoZone showrooms or call us 91002 55555 for best offers.'
        />
        <meta
          property='og:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-staff-bus.jpg'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.sabooautozone.com/' />
        <meta
          property='twitter:title'
          content='Mitr Staff Bus Price in Hyderabad | Saboo AutoZone'
        />
        <meta
          property='twitter:description'
          content='Ashok Leyland Mitr staff bus on-road price in Hyderabad. Check out Mitr staff bus technical specifications, mileage, features at Saboo AutoZone showrooms or call us 91002 55555 for best offers.'
        />
        <meta
          property='twitter:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-staff-bus.jpg'
        />
      </Helmet>
      <MiTRStaffBusBanner />
      <div className='container my-5'>
        <TitleWithImg />
        <SpecsMiTRStaffBus />
        <VehicleForm />
        <TechSpecs />
      </div>
    </>
  );
}

const MiTRStaffBusBanner = () => {
  return (
    <>
      <img
        className='mw-100 w-100'
        src={require('../img/Ashok-Leyland-Mitr-Staff-Bus-banner.webp')}
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
              Light Commercial Vehicles / Ashok Leyland MiTR Staff Bus
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
            src={require('../img/vehicles/MiTR-Staff-Bus-Price-in-Hyderabad.webp')}
            alt='Bada-Dost-i3'
          />
        </div>
        <div className='col-lg-6 mb-3'>
          <h4>Ashok-Leyland MiTR Staff Bus On Road Price In Hyderabad</h4>
          <h5>
            Starting from ₹ 14.50 Lakh<sup>*</sup>
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
            The MiTR Staff Bus is a contemporary bus powered by the innovative
            and proven ZD 30 engine, which provides the best of both worlds:
            power and fuel efficiency, thanks to i-Gen6 BS6 technology. Its
            ergonomically built interiors elevate comfort to a whole new level.
            It is exceptionally safe because to its well-planned safety features
            and designs, which were created with Indian roads and driving
            conditions in mind. MiTR makes every ride more pleasant, safe, and
            speedy while also bringing business value to operators.
          </small>
          <p className='d-flex mt-2 fw-bold fst-italic'>
            Available Colors :
            <Button
              className='btn rounded-0 mx-2 border border-2'
              style={{ backgroundColor: '#ffffff' }}
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
              href='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/pdfs/Ashok-Leyland-MiTR-Staff-Bus-Brochure.pdf'
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

const SpecsMiTRStaffBus = () => {
  return (
    <>
      <h4>Ashok Leyland Mitr Staff Bus Specifications and Features</h4>
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
                <span> 140 HP</span>
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
                <span>6650 Kg</span>
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
                <span>3700 mm</span>
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
                <span>2953 cc</span>
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
          <h3>Get On Road Price of Mitr Staff Bus</h3>
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
            src={require('../img/vehicles/MiTR-Staff-Bus-Mileage.webp')}
            alt='Staff-Bus-Mileage'
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
            <Tabs
              defaultActiveKey='home'
              id='uncontrolled-tab-example'
              className='mb-3'
            >
              <Tab
                eventKey='home'
                title='SPECIFICATIONS - MITR-3700 MM WB (7 M)'
              >
                <Accordion defaultActiveKey='0' flush>
                  <Accordion.Item eventKey='0'>
                    <Accordion.Header>VARIANT</Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover responsive>
                        <tbody>
                          <tr>
                            <td>Variant :</td>
                            <td>Non AC/ AC</td>
                            <td>Non AC</td>
                            <td>AC</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='1'>
                    <Accordion.Header>WEIGHT</Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover responsive>
                        <tbody>
                          <tr>
                            <td>Gross Vehicle Weight (kg) : </td>
                            <td colSpan={3}>7200</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey='2'>
                    <Accordion.Header>SEATING</Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover responsive>
                        <tbody>
                          <tr>
                            <td>Seating Capacity: </td>
                            <td colSpan={3}>
                              27 + D High Back Seats 22 + D (Push Back) 31+D
                              Single Door – Standard Seats 29+D – Double Door –
                              Standard Seats
                            </td>
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
                            <td>Front & Rear Suspension : </td>
                            <td colSpan={3}>
                              Parabolic, Overslung suspension with Double acting
                              Shock Absorbers
                            </td>
                          </tr>
                          <tr>
                            <td>No. of Tyres: </td>
                            <td colSpan={3}>Front 2, Rear 4, Spare 1</td>
                          </tr>
                          <tr>
                            <td>Tyre Size: </td>
                            <td colSpan={3}>7.5 x 16, 16 PR</td>
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
                            <td>ZD30 DDTi CRDi Engine BS VI</td>
                          </tr>
                          <tr>
                            <td>Cubic Capacity: </td>
                            <td>2953 cc</td>
                          </tr>
                          <tr>
                            <td>Maximum Power Output (in HP): </td>
                            <td>140@2750 rpm</td>
                          </tr>
                          <tr>
                            <td>Maximum Torque (Nm): </td>
                            <td>360@1350-2750 rpm</td>
                          </tr>
                          <tr>
                            <td>Clutch: </td>
                            <td>
                              310 mm diameter Single dry plate, Diaphragm- Push
                              type, Hydraulic actuated
                            </td>
                          </tr>
                          <tr>
                            <td>Transmission: </td>
                            <td>Full Synchronised 5 Speed Manual Gearbox</td>
                          </tr>
                          <tr>
                            <td>Fuel Tank Capacity (litre): </td>
                            <td>90 Litre</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='5'>
                    <Accordion.Header>DIMENSIONS</Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover responsive>
                        <tbody>
                          <tr>
                            <td>Wheel Base (mm): </td>
                            <td colSpan={3}>4270</td>
                          </tr>
                          <tr>
                            <td>Overall Dimension (mm): </td>
                            <td colSpan={3}>
                              7970 X 2200 X 2630 (Non AC), 7970 X 2200 X 2850
                              (AC)
                            </td>
                          </tr>
                          <tr>
                            <td>Passenger Platform Height (mm) :</td>
                            <td colSpan={3}>815</td>
                          </tr>
                          <tr>
                            <td>Min. Turning Radius (m) :</td>
                            <td colSpan={3}>8.3</td>
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
                            <td>Electrical Description: </td>
                            <td colSpan={3}>Single Pole 12 V</td>
                          </tr>
                          <tr>
                            <td>Battery (in Ah) (Non AC/ AC): </td>
                            <td>75</td>
                            <td>110</td>
                          </tr>
                          <tr>
                            <td>Alternator A (Non AC/ AC): </td>
                            <td>90</td>
                            <td>140</td>
                          </tr>
                          <tr>
                            <td>AC Compressor Capacity: </td>
                            <td>NA</td>
                            <td>220 cc(Single Compressor)</td>
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
                            <td>Service Brakes: </td>
                            <td colSpan={3}>Vacuum assisted Hydraulic brake</td>
                          </tr>
                          <tr>
                            <td>Parking Brakes : </td>
                            <td colSpan={3}>
                              Transmission mounted - 220 x 45 Drum
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Tab>
              <Tab
                eventKey='profile'
                title='SPECIFICATIONS - MiTR-4270 MM WB (8 m)'
              >
                <Accordion defaultActiveKey='0' flush>
                  <Accordion.Item eventKey='0'>
                    <Accordion.Header>AC Specifications</Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover responsive>
                        <tbody>
                          <tr>
                            <td>Compressor :</td>
                            <td>210 cc + 160 cc, 25 Kw</td>
                          </tr>
                          <tr>
                            <td>Cooling Unit</td>
                            <td>Roof Mounted</td>
                          </tr>
                          <tr>
                            <td>Window Glass</td>
                            <td>Tinted (30%)</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='1'>
                    <Accordion.Header>WEIGHT</Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover responsive>
                        <tbody>
                          <tr>
                            <td>Gross Vehicle Weight (kg) : </td>
                            <td colSpan={3}>7200</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey='2'>
                    <Accordion.Header>SEATING</Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover responsive>
                        <tbody>
                          <tr>
                            <td>Seating Capacity: </td>
                            <td>2 X 2 (Std Width)</td>
                            <td>30+A+D(STD,SD)</td>
                            <td>28+A+D(STD,DD)</td>
                          </tr>
                          <tr>
                            <td>Seating Capacity: </td>
                            <td>3 X 3 (Std Width)</td>
                            <td>45+A+D(STD,SD)</td>
                            <td>42+A+D(STD,DD)</td>
                          </tr>
                          <tr>
                            <td>Seating Capacity: </td>
                            <td>3 X 2 (Wide body)</td>
                            <td>38+A+D(STD,SD) 36+A+D(STD,DD)</td>
                            <td>NA</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <td colSpan={4}>
                              Note:STD-Standard School Seats,HB - Highback
                              seats, SD- Single Door, DD- Double Door, NA- Not
                              Available, A - Assistant, D- Driver
                            </td>
                          </tr>
                        </tfoot>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='3'>
                    <Accordion.Header>SUSPENSION & TYRES</Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover responsive>
                        <tbody>
                          <tr>
                            <td>Front & Rear Suspension : </td>
                            <td colSpan={3}>
                              Parabolic Suspension with Double Acting Shock
                              Absorbers
                            </td>
                          </tr>
                          <tr>
                            <td>No. of Tyres: </td>
                            <td colSpan={3}>Front 2, Rear 4, Spare 1</td>
                          </tr>
                          <tr>
                            <td>Tyre Size: </td>
                            <td colSpan={3}>7.50 × 16-16 PR</td>
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
                            <td>ZD 30 DDTi Common Rail Diesel Engine</td>
                          </tr>
                          <tr>
                            <td>Cubic Capacity: </td>
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
                            <td>310 mm</td>
                          </tr>
                          <tr>
                            <td>Transmission: </td>
                            <td>Fully Synchronized 5 Speed Gearbox Manual</td>
                          </tr>
                          <tr>
                            <td>Fuel Tank Capacity (litre): </td>
                            <td>90 Litre</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey='5'>
                    <Accordion.Header>DIMENSIONS</Accordion.Header>
                    <Accordion.Body>
                      <Table striped bordered hover responsive>
                        <tbody>
                          <tr>
                            <td>Wheel Base (mm): </td>
                            <td colSpan={3}>4270</td>
                          </tr>
                          <tr>
                            <td>Overall Dimension (mm): </td>
                            <td colSpan={3}>7970×2200×2630*</td>
                          </tr>
                          <tr>
                            <td>Passenger Platform Height (mm):</td>
                            <td colSpan={3}>815</td>
                          </tr>
                          <tr>
                            <td>Min. Turning Radius (m):</td>
                            <td colSpan={3}>8.3</td>
                          </tr>
                          <tr>
                            <td>Min. Ground Clearance (mm):</td>
                            <td colSpan={3}>209</td>
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
                            <td>Electrical Description: </td>
                            <td colSpan={3}>Single Pole 12 V</td>
                          </tr>
                          <tr>
                            <td>Battery (in Ah) (Non AC/ AC): </td>
                            <td>75</td>
                            <td>110</td>
                          </tr>
                          <tr>
                            <td>Alternator A (Non AC/ AC): </td>
                            <td>90</td>
                            <td>140</td>
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
                            <td>Service Brakes: </td>
                            <td colSpan={3}>
                              Dual circuit,Hydraulic with Vacuum Assist
                            </td>
                          </tr>
                          <tr>
                            <td>Parking Brakes : </td>
                            <td colSpan={3}>
                              Transmission Mounted & Mechanical Linkage & Cable
                              Operated
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};
export default MiTRStaffBus;
