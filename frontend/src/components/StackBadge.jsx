import React from "react";
import { stackByName } from "../data/portfolio.js";

export default function StackBadge({ name, compact = false }) {
  const stack = stackByName(name);

  return (
    <span className={compact ? "stack-badge compact" : "stack-badge"}>
      {stack ? <img src={stack.icon} alt="" /> : null}
      {name}
    </span>
  );
}
