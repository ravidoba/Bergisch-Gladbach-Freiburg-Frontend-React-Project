import React from "react";
import licencesData from "./licences.json";
import "./TrademarkNotice.css"; // CSS file for styling

const TrademarkNotice: React.FC = () => {
  return (
    <div>
      
      <div className="trademark-notice-container">
        <h1>Trademark Notice</h1>
        <p>
          The following is a non-exhaustive list of trademark applications and
          registrations in Germany owned by Bergisch Gladbach Freiburg Unversity. All trademarks
          listed as "Registered" are officially registered with the Deutsches
          Patent- und Markenamt (DPMA) as of the date below. This list does not
          represent the entirety of trademarks or other intellectual property
          owned by Bergisch Gladbach Freiburg Unversity.
        </p>
        <p>
          It excludes the university's numerous common law trademarks in Germany,
          as well as its many trademark applications, registrations, and common
          law trademarks in other countries worldwide. The absence of a specific
          trademark (e.g., name, logo, etc.) from this list does not constitute a
          waiver of any intellectual property rights that Bergisch Gladbach Freiburg Unversity
          holds in its trademarks.
        </p>
        <p>
          Current through October 1, 2024
        </p>
        {/* Table to display the JSON data */}
        <div className="trademark-table-container">
          <table>
            <thead>
              <tr>
                <th>Trademark</th>
                <th>Germany Application/Registration Number</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {licencesData.licences.map((licence, index) => (
                <tr key={index}>
                  <td>{licence.TradeMark}</td>
                  <td>{licence.GermanyApplicationOrRegistrationNumber}</td>
                  <td>{licence.Status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
};

export default TrademarkNotice;
