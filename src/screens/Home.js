import React from 'react';
import Product from '../components/home/products/Product';
import Services from '../components/home/services/Services';
import Slider from '../components/home/slider/Slider';
import VehiclesList from '../components/home/vehicles/VehiclesList';
import { Helmet } from 'react-helmet';
//confetti
import Confetti from 'react-confetti';

function Home() {
  return (
    <>
      <Helmet>
        <title>Ashok Leyland Dealers in Hyderabad | Saboo AutoZone</title>
        <meta
          name='title'
          content='Ashok Leyland Dealers in Hyderabad | Saboo AutoZone'
        />
        <meta
          name='description'
          content='We are one of the best Ashok Leyland dealers in Hyderabad, Telangana. Visit your nearest Saboo AutoZone showroom and get best deals on Dost, Dost Plus, Dost Strong, Dost CNG, Bada Dost, Partner, Ashok Leyland School bus and Staff bus. Call now 91002 55555.'
        />
        <meta name='keywords' content='Ashok Leyland Dealers in Hyderabad' />
        <meta name='author' content='Broaddcast' />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.sabooautozone.com/' />
        <meta
          property='og:title'
          content='Ashok Leyland Dealers in Hyderabad | Saboo AutoZone'
        />
        <meta
          property='og:description'
          content='We are one of the best Ashok Leyland dealers in Hyderabad, Telangana. Visit your nearest Saboo AutoZone showroom and get best deals on Dost, Dost Plus, Dost Strong, Dost CNG, Bada Dost, Partner, Ashok Leyland School bus and Staff bus. Call now 91002 55555.'
        />
        <meta
          property='og:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-home.jpg'
        />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.sabooautozone.com/' />
        <meta
          property='twitter:title'
          content='Ashok Leyland Dealers in Hyderabad | Saboo AutoZone'
        />
        <meta
          property='twitter:description'
          content='We are one of the best Ashok Leyland dealers in Hyderabad, Telangana. Visit your nearest Saboo AutoZone showroom and get best deals on Dost, Dost Plus, Dost Strong, Dost CNG, Bada Dost, Partner, Ashok Leyland School bus and Staff bus. Call now 91002 55555.'
        />
        <meta
          property='twitter:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/sabooautozone/og-tags/sabooautozone-home.jpg'
        />
      </Helmet>
      <Confetti />
      <Slider />
      <Product />
      <VehiclesList />
      <Services />
    </>
  );
}

export default Home;
