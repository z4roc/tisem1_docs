import React from "react";

export function Schaltung({ formel }: { formel: string }) {
  return (
    <div>
      <h1>Schaltung</h1>
      <div></div>
    </div>
  );
}

function parseBoolean(value: string): String[] {
  return value.split(" ");
}
