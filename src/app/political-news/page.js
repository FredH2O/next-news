// const getData = async () => {
//   await new Promise((resolve) => setTimeout(resolve, 1000000)); // Simulate 3s delay
//   return { message: "Data loaded!" };
// };

export default async function Page() {
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl font-bold">{data.message}</h1>
    </div>
  );
}
