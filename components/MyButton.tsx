import React, { useState } from "react";

export default function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}
