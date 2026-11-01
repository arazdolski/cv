import { MDXRemote } from "next-mdx-remote/rsc";
import { readFile } from "node:fs/promises";
import path from "node:path";

export default async function Page() {
  const source = await readFile(
    path.join(process.cwd(), "content/cv.mdx"),
    "utf8",
  );

  return (
    <div className="prose dark:prose-invert">
      <MDXRemote source={source} />
    </div>
  );
}
