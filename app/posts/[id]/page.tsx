export default function PageId({ params }: { params: { id: string } }) {
  return (
    <>
      <div>post id : {params.id}</div>
    </>
  );
}
