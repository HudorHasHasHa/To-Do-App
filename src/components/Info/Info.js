import React from 'react';
import { settings } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';

const Info = () => (
  <Container>
    <div>
      <Hero titleText={settings.Info.title} imageSrc={settings.Info.image}/>
      {settings.Info.defaultText}
    </div>
  </Container>
);

export default Info;