import React from "react";
import "./StepBar.scss";

function StepBar({ stepCount, direction, data }) {
  return (
    <div>
      <ol
        className={
          direction == "horizontal" ? "c-stepper flex" : "c-stepper block"
        }
      >
        {data.map((item, index) => {
          return (
            <li
              key={item.id}
              className={
                direction == "horizontal"
                  ? "c-stepper__item--horizontal"
                  : "c-stepper__item--vertical"
              }
            >
              <div className="c-stepper__content">
                <h3 className="c-stepper__title">
                  Bước {item.id}: {item.title}
                </h3>
                <p className="c-stepper__desc">{item.description}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default StepBar;
