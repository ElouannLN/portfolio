function ProjectCard({ titre, image, description, langages }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-8 w-full md:w-1/3 flex flex-col border-t-2 border-orange-300 md:border-none">
      <h3 className="text-3xl font-semibold mb-4 text-center">{titre}</h3>
      <img
        src={image}
        alt={titre}
        className="w-80 h-50 object-contain mx-auto"
      />
      <p
        className="mb-4 mt-4 text-justify"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div className="text-center mt-6">
        <h4 className="font-semibold mb-1">Technologies utilisées :</h4>
        <p dangerouslySetInnerHTML={{ __html: langages }} />
      </div>
    </div>
  );
}

export default ProjectCard;
