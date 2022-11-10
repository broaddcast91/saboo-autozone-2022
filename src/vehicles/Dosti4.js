import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosHome } from 'react-icons/io';
import { IoLocationOutline } from 'react-icons/io5';
import { Button, Row, Col, Form, Accordion, Table } from 'react-bootstrap';
import { BsDownload } from 'react-icons/bs';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';

function Dosti4() {
  return (
    <>
      <Helmet>
        <title>
          Ashok Leyland Bada Dost On Road Price in Hyderabad | Saboo AutoZone
        </title>
        <meta
          name='title'
          content='Ashok Leyland Bada Dost On Road Price in Hyderabad | Saboo AutoZone'
        />
        <meta
          name='description'
          content="Ashok Leyland Bada Dost Light Commercial Vehicle will be available in two variants -i3 and i4.  Bada Dost 'i3 LS' is priced at INR 8.75 lakhs &  Bada Dost i4 priced at 8.52 lakh.  For more info about Bada Dost features & specifications call us 91002 55555."
        />
        <meta
          name='keywords'
          content='Ashok Leyland Bada Dost i4 Price, Specifications, Features & Mileage'
        />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.sabooautozone.com/' />
        <meta
          property='og:title'
          content='Ashok Leyland Bada Dost On Road Price in Hyderabad | Saboo AutoZone'
        />
        <meta
          property='og:description'
          content="Ashok Leyland Bada Dost Light Commercial Vehicle will be available in two variants -i3 and i4.  Bada Dost 'i3 LS' is priced at INR 8.75 lakhs &  Bada Dost i4 priced at 8.52 lakh.  For more info about Bada Dost features & specifications call us 91002 55555."
        />
        <meta
          property='og:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-bada-dost-i4.jpg'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.sabooautozone.com/' />
        <meta
          property='twitter:title'
          content='Ashok Leyland Bada Dost On Road Price in Hyderabad | Saboo AutoZone'
        />
        <meta
          property='twitter:description'
          content="Ashok Leyland Bada Dost Light Commercial Vehicle will be available in two variants -i3 and i4.  Bada Dost 'i3 LS' is priced at INR 8.75 lakhs &  Bada Dost i4 priced at 8.52 lakh.  For more info about Bada Dost features & specifications call us 91002 55555."
        />
        <meta
          property='twitter:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-bada-dost-i4.jpg'
        />
      </Helmet>
      <DostBanner />
      <div className='container my-5'>
        <TitleWithImg />
        <Specsi3 />
        <VehicleForm />
        <TechSpecs />
      </div>
    </>
  );
}

const DostBanner = () => {
  return (
    <>
      <img
        className='mw-100 w-100'
        src={require('../img/dost-banner.webp')}
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
              Light Commercial Vehicles / Ashok Leyland Bada Dost i4 on road
              price in hyderabad
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
            src={require('../img/vehicles/Ashok-Leyland-Bada-Dost-i4-Price-in-Hyderabad.webp')}
            alt='Bada-Dost-i3'
          />
        </div>
        <div className='col-lg-6 mb-3 ps-4'>
          <h4>Ashok Leyland BADA DOST i4 On Road Price In Hyderabad</h4>
          <h5>
            Starting ₹ 9.08 Lakh <sup>*</sup>
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
            BADA DOST i4 is the big friend that delivers and connects people and
            business together - right from the doorstep of clients to reaching
            the door step of end users, navigating through city lanes and
            highways with equal ease; the BADA DOST is the ideal friend. Powered
            by the latest i-GEN6 technology, BADA DOST is holistically designed
            and helps you grow your business profitably and enhance quality of
            life. The BADA DOST is all set to create a paradigm shift in the
            customer experience with its future ready and many industry-first
            customer-centric offerings.
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
            <Button
              className='btn rounded-0 me-2 border border-2'
              style={{ backgroundColor: '#8a8c8e' }}
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
              href='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/pdfs/Ashok-Leyland-Light-Commercial-Truck-Bada-Dost-i4-Brochure.pdf'
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
      <h4>Ashok Leyland Bada Dost i4 BS6 Specifications and Features</h4>
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
                <span> 3490 Kg</span>
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
                <span> 2590 mm</span>
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
                <span> 50 Ltrs</span>
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
                <span>1860 Kg</span>
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
          <h3>Get On Road Price of Bada Dost i4</h3>
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
                  <option value='Dost i3'>Dost i3+</option>
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
            src={require('../img/vehicles/Ashok-Leyland-Bada-Dost-i4-Mileage.webp')}
            alt='Bada-Dost-i4-Mileage'
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
                <Accordion.Header>Engine</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Engine :</td>
                        <td>
                          1.5 Liters, 3 Cylinder Diesel Engine BS VI compliant
                        </td>
                      </tr>
                      <tr>
                        <td>Type</td>
                        <td>
                          Turbo Charged Intercooled with Lean NOx Trap (LNT)
                        </td>
                      </tr>
                      <tr>
                        <td>Displacement/Cubic Capacity : </td>
                        <td>1,478 cc</td>
                      </tr>
                      <tr>
                        <td>Maximum Power @ rpm : </td>
                        <td>80 HP @ 3,300 RPM</td>
                      </tr>
                      <tr>
                        <td>Maximum Torque @ rpm : </td>
                        <td>190 Nm @ 1600-2400 RPM</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='1'>
                <Accordion.Header>Performance</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Top Speed (in mm) : </td>
                        <td>80 kmph</td>
                      </tr>
                      <tr>
                        <td>Gradeability (Re-Start) : </td>
                        <td>~23.2 %</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='2'>
                <Accordion.Header>Clutch</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Clutch : </td>
                        <td>
                          240 mm, Single, Diaphragm push type, Cable operated
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='3'>
                <Accordion.Header>Transmission</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Gear Box : </td>
                        <td>
                          Fully synchronized 5 Speed, Manual with Cable Shift
                        </td>
                      </tr>
                      <tr>
                        <td>PTO Provision : </td>
                        <td>Yes</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='4'>
                <Accordion.Header>Steering</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Type : </td>
                        <td>Power Assisted, Tiltable Column</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='5'>
                <Accordion.Header>Brakes</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Type : </td>
                        <td>Hydraulic Vacuum assisted brakes</td>
                      </tr>
                      <tr>
                        <td>Front : </td>
                        <td>Ventilated Discs</td>
                      </tr>
                      <tr>
                        <td>Rear :</td>
                        <td>Drum</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='6'>
                <Accordion.Header>Suspension</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Type : </td>
                        <td>Over slung Semi Elliptic (3+3 Leaves) – 2 Stage</td>
                      </tr>
                      <tr>
                        <td>Front : </td>
                        <td>Over slung Parabolic (3 Leaves) – 2 Stage</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='7'>
                <Accordion.Header>Tyres(Size/Type)</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Tyres : </td>
                        <td>7.00 R15 LT –12PR (Tube type)</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='8'>
                <Accordion.Header>Weight</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Gross Vehicle Weight (GVW)in kg's : </td>
                        <td>3490</td>
                      </tr>
                      <tr>
                        <td>Payload (FSD LS variant)in kg's : </td>
                        <td>1860</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='9'>
                <Accordion.Header>Seating Capacity</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Capacity : </td>
                        <td>
                          3 seater - ARAI certified (1 Driver + 2 Co-driver)
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='10'>
                <Accordion.Header>Fuel Tank Capacity</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Capacity : </td>
                        <td>50 Ltrs</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='11'>
                <Accordion.Header>Dimensions</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Wheelbase (in mm) : </td>
                        <td>2590</td>
                      </tr>
                      <tr>
                        <td>Overall length (in mm) : </td>
                        <td>5025</td>
                      </tr>
                      <tr>
                        <td>Overall width (in mm) : </td>
                        <td>1842</td>
                      </tr>
                      <tr>
                        <td>Overall Height (in mm) : </td>
                        <td>2061</td>
                      </tr>
                      <tr>
                        <td>Load body dimension (FSD) – L x B x H : </td>
                        <td>
                          2951 x 1750 x 490 in mm | 9 ft 8 in x 5 ft 9 in x 1 ft
                          7 in
                        </td>
                      </tr>
                      <tr>
                        <td>Loading platform height :</td>
                        <td>945 mm (3.1 Feet)</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey='12'>
                <Accordion.Header>Load Body Option</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover responsive>
                    <tbody>
                      <tr>
                        <td>Standard Bodies : </td>
                        <td>CBC, FSD</td>
                      </tr>
                      <tr>
                        <td>Other Bodies : </td>
                        <td>HSD, Container, Reefer body, Refuse collection</td>
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
export default Dosti4;
