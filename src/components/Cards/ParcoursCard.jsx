function ParcoursCard({ items }) {
  return items.map((item, index) => (
    <div
      key={index}
      className="relative bg-white shadow-md rounded-xl p-4 mb-4 flex flex-col gap-2 w-full border-t-2 border-orange-300 md:border-none"
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
        <h3 className="text-lg sm:text-xl font-semibold break-words">
          {item.titre}
        </h3>
        <span className="text-sm text-gray-500 mt-1 sm:mt-0">
          {item.periode}
        </span>
      </div>
      <div className="flex flex-col sm:flex-row items-start gap-4 mt-2">
        <img
          src={item.logo}
          alt={item.sousTitre}
          className="w-20 h-20 object-contain flex-shrink-0"
        />
        <div className="w-full">
          <p className="text-base font-medium break-words">{item.sousTitre}</p>
          {item.description && (
            <p
              className="text-sm text-gray-600 mt-1 break-words"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          )}
        </div>
      </div>
    </div>
  ));
}

export default ParcoursCard;
