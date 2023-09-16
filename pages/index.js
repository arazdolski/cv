import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import path from 'path';

const Cv = ({ source }) => {
  return (
    <div className="prose">
     <MDXRemote {...source} />
    </div>
  );
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), '/pages/cv.mdx');
  const source = fs.readFileSync(filePath, 'utf8');
  const mdxSource = await serialize(source);

  return {
    props: {
      source: mdxSource,
    },
  };
}

export default Cv;
