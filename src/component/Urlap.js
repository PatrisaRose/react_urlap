import { useState } from "react";

export default function Urlap() {
  const [obj, setObj] = useState({ nev: "", szul: 2022 });
  function kuld(event) {
    event.preventDefault();
  }
  function adatValt(event) {
    console.log(event.target);
    console.log(event.target.value);
    console.log(event.target.id);

    console.log(obj);
    const masolat = { ...obj };
    masolat[event.target.id] = event.target.value;
    setObj(masolat);
  }
  return (
    <>
      <h2>Új adat rögzítése</h2>
      <form onSubmit={kuld}>
        <div>
          <label htmlFor="nev">Vezetéknév: </label>
          <input
            type="text"
            onChange={adatValt}
            id="nev"
            name="nev"
            placeholder="Pld: Minta János"
            value={obj.nev}
          />
        </div>
        <div>
          <label htmlFor="szul">Születési év: </label>
          <input
            type="number"
            onChange={adatValt}
            id="szul"
            min={2000}
            max={2024}
            name="szul"
            placeholder="2000"
            value={obj.szul}
          />
        </div>
        <input type="submit" value="OK " />
      </form>
    </>
  );
}
