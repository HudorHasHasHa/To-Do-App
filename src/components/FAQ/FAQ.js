import React from 'react';
import { settings } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';

const FAQ = () => (
  <Container>
    <Hero titleText={settings.FAQ.title} imageSrc={settings.FAQ.image}/>
    {settings.FAQ.defaultText}
  </Container>
);

export default FAQ;