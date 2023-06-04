"use client";

import Button from "react-bootstrap/esm/Button";

interface Errorprops {
  error: Error;
  reset: () => void;
}

export default function error({ error, reset }: Errorprops) {
  return (
    <>
      <div>error oooppppsss....</div>
      <p> somthing wet wrong</p>

      <Button onClick={reset}> Try again </Button>
    </>
  );
}
