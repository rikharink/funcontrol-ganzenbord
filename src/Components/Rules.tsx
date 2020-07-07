import "./Rules.css";
import React from "react";
import rules from "../rules";

function Rules() {
  return (
    <div className="rules">
      <h2>Regels</h2>
      <ul>
        <li>
          6 - {rules[6].name} - {rules[6].description}
        </li>
        <li>
          19 - {rules[19].name} - {rules[19].description}
        </li>
        <li>
          31 - {rules[31].name} - {rules[31].description}
        </li>
        <li>
          42 - {rules[42].name} - {rules[42].description}
        </li>
        <li>
          52 - {rules[52].name} - {rules[52].description}
        </li>
        <li>
          58 - {rules[58].name} - {rules[58].description}
        </li>
        <li>
          63 - {rules[63].name} - {rules[63].description}
        </li>
        <li>
          yippah - {rules.gans.name} - {rules.gans.description}
        </li>
      </ul>
    </div>
  );
}

export default Rules;
