import { useState } from "react";

const Language = ({ name, img, options = [] }) => {
  console.log(options);
  const [show, setShow] = useState(true);

  return (
    <div className="cardWrapper" onClick={() => setShow(!show)}>
      {show && (
        <div className="cardBottom">
          <img src={img} alt="lang" />
          <h3>{name}</h3>
        </div>
      )}
      {!show && options.length > 0 && (
        <ul>
          {options.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Language;
