export default function Card({title, description }) {
  return (
    <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-white hover:shadow-lg transition text-center w-full">
      <h3 className="text-lg font-semibold mb-1 break-all">{title}</h3>
      <p className="text-sm text-gray-600 overflow-hidden text-ellipsis">
        {description || "Sem descrição."}
      </p>
    </div>
  );
}