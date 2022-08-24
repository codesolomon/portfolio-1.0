import Head from "next/head";

interface Meta {
  title: string;
  keywords: string;
  description: string;
}
const Meta = ({ title, keywords, description }: Meta) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords} />
        <meta name="keywords" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>
    </div>
  );
};

Meta.defaultProps = {
  title: "CodeSolomon",
  keywords: "CodeSolomon portfolio ",
  description: "Get the latest information about CodeSolomon",
};

export default Meta;
