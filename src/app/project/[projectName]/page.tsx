import { readFilesInDirectory, readMdFile } from "../../../libs/markdown";
import MarkDownView from "./components/MarkDownView";
import { notFound } from "next/navigation";

export default function WorkID({
  params,
}: {
  params: { projectName: string };
}) {
  const { projectName } = params;
  const projects = readFilesInDirectory();
  const filePath = projects.find((project) => project.fileName === projectName)
    ?.filePath;
  if (!filePath) notFound();
  const fileContent = readMdFile(filePath);
  return (
    <main>
      <MarkDownView mdContent={fileContent} />
    </main>
  );
}

export function generateStaticParams() {
  const projects = readFilesInDirectory();

  return projects.map((project) => ({
    projectName: project.fileName,
  }));
}
