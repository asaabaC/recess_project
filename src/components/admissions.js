import React from 'react';
import './admissions.css';

const feeData = [
  {
    class: 'Baby Class',
    fees: {
      day: 286000,
      boarding: 740000,
      registrationDay: 40000,
      registrationBoarding: 55000,
      application: 30000,
      uniformDay: 176000,
      uniformBoarding: 270000
    }
  },
  {
    class: 'Primary 1',
    fees: {
      day: 317000,
      boarding: 715000,
      registrationDay: 40000,
      registrationBoarding: 55000,
      application: 30000,
      uniformDay: 176000,
      uniformBoarding: 270000
    }
  },
  {
    class: 'Primary 2',
    fees: {
      day: 317000,
      boarding: 715000,
      registrationDay: 40000,
      registrationBoarding: 55000,
      application: 30000,
      uniformDay: 176000,
      uniformBoarding: 270000
    }
  },
  {
    class: 'Primary 3',
    fees: {
      day: 330000,
      boarding: 720000,
      registrationDay: 40000,
      registrationBoarding: 55000,
      application: 30000,
      uniformDay: 176000,
      uniformBoarding: 270000
    }
  },
  {
    class: 'Primary 4',
    fees: {
      day: 410000,
      boarding: 730000,
      registrationDay: 40000,
      registrationBoarding: 55000,
      application: 30000,
      uniformDay: 176000,
      uniformBoarding: 270000
    }
  },
  {
    class: 'Primary 5',
    fees: {
      day: 410000,
      boarding: 730000,
      registrationDay: 40000,
      registrationBoarding: 55000,
      application: 30000,
      uniformDay: 176000,
      uniformBoarding: 270000
    }
  },
  {
    class: 'Primary 6',
    fees: {
      day: 410000,
      boarding: 730000,
      registrationDay: 40000,
      registrationBoarding: 55000,
      application: 30000,
      uniformDay: 176000,
      uniformBoarding: 270000
    }
  },
  {
    class: 'Primary 7',
    fees: {
      day: 465000,
      boarding: 760000,
      registrationDay: 40000,
      registrationBoarding: 55000,
      application: 30000,
      uniformDay: 176000,
      uniformBoarding: 270000,
      pleFee: 150000 // PLE (UNEB) fee
    }
  },
  {
    class: 'Middle to Top',
    fees: {
      day: 295000,
      boarding: 750000,
      registrationDay: 40000,
      registrationBoarding: 55000,
      application: 30000,
      uniformDay: 176000,
      uniformBoarding: 270000
    }
  }
];

function Admissions() {
  return (
    <div className="admissions">
      <h1>Fees Structure for Innerman Pre & Primary School</h1>
      <table className="fees-table">
        <thead>
          <tr>
            <th>Class</th>
            <th>Tuition Fees (Day)</th>
            <th>Tuition Fees (Boarding)</th>
            <th>Day Registration Fee</th>
            <th>Boarding Registration Fee</th>
            <th>Application Fees</th>
            <th>Day Uniform Fees</th>
            <th>Boarding Uniform Fees</th>
            {feeData.some(item => item.fees.pleFee) && <th>PLE (UNEB) Fees</th>}
          </tr>
        </thead>
        <tbody>
          {feeData.length === 0 ? (
            <tr>
              <td colSpan="9">No fees data available.</td>
            </tr>
          ) : (
            feeData.map((item, index) => (
              <tr key={index}>
                <td>{item.class}</td>
                <td>{item.fees.day.toLocaleString() || '-'}</td>
                <td>{item.fees.boarding.toLocaleString() || '-'}</td>
                <td>{item.fees.registrationDay.toLocaleString() || '-'}</td>
                <td>{item.fees.registrationBoarding.toLocaleString() || '-'}</td>
                <td>{item.fees.application.toLocaleString() || '-'}</td>
                <td>{item.fees.uniformDay.toLocaleString() || '-'}</td>
                <td>{item.fees.uniformBoarding.toLocaleString() || '-'}</td>
                {item.fees.pleFee && <td>{item.fees.pleFee.toLocaleString() || '-'}</td>}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Admissions;
