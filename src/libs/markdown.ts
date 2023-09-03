import path from "path";
import fs from "fs";
const postsDirectory = path.join(process.cwd(), "src/personalProjects");

interface FileInfo {
  fileName: string;
  filePath: string;
  mtime: Date;
}

export function readMdFile(filePath: string): string {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return data;
  } catch (err) {
    console.error(err);
    return "";
  }
}

export function readFilesInDirectory(): FileInfo[] {
  try {
    const files = fs.readdirSync(postsDirectory);
    const fileInfos: FileInfo[] = files.map((file) => {
      const fileName = path.parse(file).name;
      const filePath = path.join(postsDirectory, file);
      const stats = fs.statSync(filePath);
      return { fileName: fileName, filePath, mtime: stats.mtime };
    });
    fileInfos.sort((a, b) => b.mtime.getTime() - a.mtime.getTime());
    return fileInfos;
  } catch (err) {
    console.error(err);
    return [];
  }
}
