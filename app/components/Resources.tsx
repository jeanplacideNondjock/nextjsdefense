


export default function ResourcesSection() {
  const resources = [
    { title: "Brochure scientifique", link: "#" },
    { title: "Données & guides", link: "#" },
    { title: "Publications récentes", link: "#" },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-8 text-viventDark">
        <h2 className="text-2xl font-bold mb-6">
          Ressources disponibles
        </h2>

        <ul className="space-y-3">
          {resources.map((r, i) => (
            <li key={i}>
              <a
                href={r.link}
                className="text-viventTeal hover:underline"
              >
                {r.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
