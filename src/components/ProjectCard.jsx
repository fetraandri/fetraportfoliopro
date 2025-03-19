function ProjectCard({ title, description, link, image }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <a href={link} className="text-blue-500 hover:underline mt-2 inline-block">Voir le projet</a>
      </div>
    );
  }
  
  export default ProjectCard;