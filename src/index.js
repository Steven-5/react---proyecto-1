import './Styles/index.css';
import React            from 'react';
import ReactDOM         from 'react-dom/client';
import { Presentation } from './Components/Presentation';
import * as workersData from './Data/Workers';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>

    <Presentation 
      name        = {workersData.worker1.name}
      lastName    = {workersData.worker1.lastName}
      gender      = {workersData.worker1.gender}
      nationality = {workersData.worker1.nationality}                                                       
      position    = {workersData.worker1.position}
      profession  = {workersData.worker1.profession}
      description = {workersData.worker1.description}
      imagePath   = {workersData.worker1.imagePath}
    />

    <Presentation 
      name        = {workersData.worker2.name}
      lastName    = {workersData.worker2.lastName}
      gender      = {workersData.worker2.gender}
      nationality = {workersData.worker2.nationality}                                                       
      position    = {workersData.worker2.position}
      profession  = {workersData.worker2.profession}
      description = {workersData.worker2.description}
      imagePath   = {workersData.worker2.imagePath}
    />

    <Presentation 
      name        = {workersData.worker3.name}
      lastName    = {workersData.worker3.lastName}
      gender      = {workersData.worker3.gender}
      nationality = {workersData.worker3.nationality}                                                       
      position    = {workersData.worker3.position}
      profession  = {workersData.worker3.profession}
      description = {workersData.worker3.description}
      imagePath   = {workersData.worker3.imagePath}
    />

    <Presentation 
      name        = {workersData.worker4.name}
      lastName    = {workersData.worker4.lastName}
      gender      = {workersData.worker4.gender}
      nationality = {workersData.worker4.nationality}                                                       
      position    = {workersData.worker4.position}
      profession  = {workersData.worker4.profession}
      description = {workersData.worker4.description}
      imagePath   = {workersData.worker4.imagePath}
    />

    <Presentation 
      name        = {workersData.worker5.name}
      lastName    = {workersData.worker5.lastName}
      gender      = {workersData.worker5.gender}
      nationality = {workersData.worker5.nationality}                                                       
      position    = {workersData.worker5.position}
      profession  = {workersData.worker5.profession}
      description = {workersData.worker5.description}
      imagePath   = {workersData.worker5.imagePath}
    />

    <Presentation 
      name        = {workersData.worker6.name}
      lastName    = {workersData.worker6.lastName}
      gender      = {workersData.worker6.gender}
      nationality = {workersData.worker6.nationality}                                                       
      position    = {workersData.worker6.position}
      profession  = {workersData.worker6.profession}
      description = {workersData.worker6.description}
      imagePath   = {workersData.worker6.imagePath}
    />

    <Presentation 
      name        = {workersData.worker7.name}
      lastName    = {workersData.worker7.lastName}
      gender      = {workersData.worker7.gender}
      nationality = {workersData.worker7.nationality}                                                       
      position    = {workersData.worker7.position}
      profession  = {workersData.worker7.profession}
      description = {workersData.worker7.description}
      imagePath   = {workersData.worker7.imagePath}
    />

    <Presentation 
      name        = {workersData.worker8.name}
      lastName    = {workersData.worker8.lastName}
      gender      = {workersData.worker8.gender}
      nationality = {workersData.worker8.nationality}                                                       
      position    = {workersData.worker8.position}
      profession  = {workersData.worker8.profession}
      description = {workersData.worker8.description}
      imagePath   = {workersData.worker8.imagePath}
    />

    <Presentation 
      name        = {workersData.worker9.name}
      lastName    = {workersData.worker9.lastName}
      gender      = {workersData.worker9.gender}
      nationality = {workersData.worker9.nationality}                                                       
      position    = {workersData.worker9.position}
      profession  = {workersData.worker9.profession}
      description = {workersData.worker9.description}
      imagePath   = {workersData.worker9.imagePath}
    />

    <Presentation 
      name        = {workersData.worker10.name}
      lastName    = {workersData.worker10.lastName}
      gender      = {workersData.worker10.gender}
      nationality = {workersData.worker10.nationality}                                                       
      position    = {workersData.worker10.position}
      profession  = {workersData.worker10.profession}
      description = {workersData.worker10.description}
      imagePath   = {workersData.worker10.imagePath}
    />


  </div>
);