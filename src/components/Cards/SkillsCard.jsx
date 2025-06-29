function SkillsCard({ items }) {
  return items.map((item, index) => (
    <div
      key={index}
      className="shadow-md rounded-xl p-4 mb-4 justify-start flex flex-col gap-2 border-l-5 border-orange-300"
    >
      <span className="flex items-center justify-center gap-2">
        {item.image && <item.image className="w-5 h-5" />}
        <h3 className="text-xl font-semibold text-center">{item.titre}</h3>
      </span>

      <ul className="list-disc list-inside space-y-1">
        {item.skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </div>
  ));
}

export default SkillsCard;
