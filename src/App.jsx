import React, { useState } from 'react';
import PersonalDetail from './Component/Left/PersonalDetail/PersonalDetail';
import ShowPersonal from './Component/right/ShowPersonal/ShowPersonal';
import Education from './Component/Left/Education/Education';
import ShowEducation from './Component/right/ShowEducation/ShowEducation';
import Experience from './Component/Left/Experience/Experience';
import ShowExperience from './Component/right/ShowExperience/ShowExperience';
import './App.css';

function App() {
  // states for personal info sections
  const [name, setName] = useState('Josephine Meyers');
  const [email, setEmail] = useState('josephine.meyers@mail.co.uk');
  const [phoneNumber, setPhoneNumber] = useState('+44 3245 5521 5521');
  const [address, setAddress] = useState('London, UK');

  // states for education section
  const [schoolName, setSchoolName] = useState('London City University');
  const [degree, setDegree] = useState('Bachelors in Economics');
  const [edStartDate, setEdStartDate] = useState('08/2020');
  const [edEndDate, setEdEndDate] = useState('present'); // Corrected state name
  const [edLocation, setEdLocation] = useState('New York City, US');

  // states for Experience section
  const des = "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android";
  const [companyName, setCompanyName] = useState('Umbrella Inc.');
  const [positionTitle, setPositionTitle] = useState('UX & UI Designer');
  const [exStartDate, setExStartDate] = useState('08/2020');
  const [exEndDate, setExEndDate] = useState('present'); // Corrected state name
  const [exLocation, setExLocation] = useState('New York City, US');
  const [description, setDescription] = useState(des);

  return (
    <div className="app">
      <div className='Left'>
        <PersonalDetail
          name={name} setName={setName} 
          email={email} setEmail={setEmail} 
          phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}
          address={address} setAddress={setAddress}
        />

        <Education
          schoolName={schoolName} setSchoolName={setSchoolName}
          degree={degree} setDegree={setDegree}
          edStartDate={edStartDate} setEdStartDate={setEdStartDate}
          edEndDate={edEndDate} setEdEndDate={setEdEndDate}
          edLocation={edLocation} setEdLocation={setEdLocation}
        />

        <Experience
          companyName={companyName} setCompanyName={setCompanyName}
          positionTitle={positionTitle} setPositionTitle={setPositionTitle}
          exStartDate={exStartDate} setExStartDate={setExStartDate}
          exEndDate={exEndDate} setExEndDate={setExEndDate} 
          exLocation={exLocation} setExLocation={setExLocation}
          description={description} setDescription={setDescription} 
        />
      </div>

      <div className="right">
        <ShowPersonal
          name={name} email={email} phoneNumber={phoneNumber} address={address}
        />
        <ShowEducation
          schoolName={schoolName} degree={degree} startDate={edStartDate} endDate={edEndDate} location={edLocation} 
        />

        <ShowExperience
          companyName={companyName} positionTitle={positionTitle} startDate={exStartDate} endDate={exEndDate} location={exLocation} description={description}
        />
      </div>
    </div>
  );
}

export default App;

