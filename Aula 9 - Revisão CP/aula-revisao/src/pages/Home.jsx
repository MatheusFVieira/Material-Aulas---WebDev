import { useEffect, useState } from "react";
import Card from "../components/Card";
import Section from "../components/Section";

export default function Home() {
  const [reactRepos, setReactRepos] = useState([]);
  const [nodeRepos, setNodeRepos] = useState([]);
  const [pythonRepos, setPythonRepos] = useState([]);
  const API = import.meta.env.VITE_GITHUB_API;

  useEffect(() => {
    fetch(`${API}node&per_page=5`)
      .then(res => res.json())
      .then(data => setNodeRepos(data.items))
      .catch(error => console.error("Erro ao buscar repositórios Node:", error));

    fetch(`${API}react&per_page=5`)
      .then(res => res.json())
      .then(data => setReactRepos(data.items))
      .catch(error => console.error("Erro ao buscar repositórios React:", error));

    fetch(`${API}python&per_page=5`)
      .then(res => res.json())
      .then(data => setPythonRepos(data.items))
      .catch(error => console.error("Erro ao buscar repositórios Python:", error));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">GitHub Repositories Explorer</h1>
      <div>
        <Section titulo="Repositórios React">
          {reactRepos.map((repo) => (
            <Card key={repo.id} {...repo} />
          ))}
        </Section>
      </div>
    </div>
  );
}