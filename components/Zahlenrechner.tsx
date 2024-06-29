import React, { useState } from "react";
import ZahlenStyles from "./Zahlenrechner.module.css";

type Calculation = {
  numbers: String[];
  calculation: String[];
};

export function Zahlenrechner() {
  const [rechnung, setRechnung] = useState("");

  const [hasComma, setHasComma] = useState(false);

  const [outout, setOutput] = useState<null | Calculation[]>(null);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRechnung(e.target.value);

    if (e.target.value.includes(".")) {
      setHasComma(true);
    } else {
      setHasComma(false);
    }

    if (hasComma) {
      const splitted = e.target.value.split(".");
      if (splitted[1]) {
        const calcVorkomma = calcultateBinNumber(
          Math.abs(parseInt(splitted[0]))
        );
        const calcNachkomma = calculateCommaBin(parseInt(splitted[1]));

        setOutput([calcVorkomma, calcNachkomma]);
      }
    } else {
      const calculation = calcultateBinNumber(
        Math.abs(parseInt(e.target.value))
      );
      setOutput([calculation]);
    }
  };

  return (
    <div className={ZahlenStyles.content}>
      <p>Für Kommazahlen trenne diese bitte mit einem Punkt!</p>
      <input
        className={ZahlenStyles.eingabe}
        onChange={onInputChange}
        type="number"
      />
      {outout && outout[0] && outout[0].numbers && outout[0].calculation && (
        <div>
          <h2>Vorkomma</h2>
          <p className={ZahlenStyles.nachkomma}>{outout[0].numbers.join("")}</p>
          <h3>Berechnung</h3>
          <ul>
            {outout[0].calculation.map((calc, index) => (
              <li key={index}>{calc}</li>
            ))}
          </ul>
        </div>
      )}
      {outout && outout[1] && outout[1].numbers && outout[1].calculation && (
        <div>
          <h2>Nachkomma</h2>
          <p className={ZahlenStyles.nachkomma}>{outout[1].numbers.join("")}</p>
          <h3>Berechnung</h3>
          <ul>
            {outout[1].calculation.map((calc, index) => (
              <li key={index}>{calc}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function calcultateBinNumber(input: number) {
  const outputBinary: String[] = [];
  const binaryNumber: String[] = [];
  while (input > 0) {
    outputBinary.push(
      `${input} / 2 = ${Math.floor(input / 2)} Rest ${input % 2}`
    );
    binaryNumber.push((input % 2).toString());
    input = Math.floor(input / 2);
  }

  return { numbers: binaryNumber.reverse(), calculation: outputBinary };
}

function calculateCommaBin(input: number) {
  if (input.toString().length < 2) {
    input = parseInt(input.toString() + "0");
  }
  const outputBinary: String[] = [];
  let wasInFloors = false;
  let amountLooped = 0;
  const binaryNumber: String[] = [];
  let floors = [];
  while (input > 0 && !wasInFloors && amountLooped <= 23) {
    floors.push(input * 2 >= 100 ? input * 2 - 100 : input * 2);
    outputBinary.push(
      input * 2 >= 100
        ? `0.${input} * 2 = 1.${input * 2 - 100}` +
            ` Rest ${input * 2 >= 100 ? 1 : 0}`
        : `0.${input} * 2 = 0.${input * 2}` +
            ` Rest ${input * 2 >= 100 ? 1 : 0}`
    );
    console.log(
      `${input} * 2 = 0.${input * 2} Rest ${input * 2 > 100 ? 1 : 0}`
    );

    let zwischenspeicher = input * 2;
    zwischenspeicher >= 100 ? binaryNumber.push("1") : binaryNumber.push("0");
    input = zwischenspeicher >= 100 ? zwischenspeicher - 100 : zwischenspeicher;

    amountLooped++;

    if (floors.includes(input * 2 >= 100 ? input * 2 - 100 : input * 2)) {
      wasInFloors = true;
      break;
    }
  }

  return { numbers: binaryNumber, calculation: outputBinary };
}
