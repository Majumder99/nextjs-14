import { Suspense } from "react";

export default function PageId({ params }: { params: { id: string } }) {
  return (
    <>
      <div>post id : {params.id}</div>

      {/* This will load until the component is here or data */}
      <Suspense fallback="the text you wanna render">
        {/* <anycomponent /> */}
      </Suspense>
    </>
  );
}
