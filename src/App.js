import React, { useState } from "react";
import { FaOpencart } from "react-icons/fa";
import Button from "react-bootstrap/Button";

const ItemCount = () => {
  const [qty, setQty] = useState(1);

  const handleClickResta = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const onAdd = () => {
    alert(`Agregaste ${qty} productos al carrito`);
  };

  return (
    <div className="centered itemsCount">
      <Button
        className="btn-add"
        disabled={qty === 1 ? "disabled" : null}
        onClick={handleClickResta}
      >
        -
      </Button>
      <input type="text" value={qty} readOnly />
      <Button className="btn-rem" onClick={() => setQty(qty + 1)}>
        +
      </Button>

      <Button className="btn-cart" onClick={onAdd}>
        Agregar al carrito{" "}
        <span className="cartIconCard">
          {" "}
          <FaOpencart />{" "}
        </span>
      </Button>
    </div>
  );
};

export default ItemCount;
