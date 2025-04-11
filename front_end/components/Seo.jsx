import Head from "next/head";

const keywords = [
  "Flutter Developer",
  "Dart Developer",
  "Cross-platform App Developer",
  "Mobile App Developer",
  "React Native",
  "Firebase",
  "Node.js",
  "AWS",
  "CI/CD",
  "Mobile UX/UI",
  "Fullstack Developer",
  "Flutter for Web",
  "BLoC / GetX",
  "App Deployment",
  "Cloud Backend Integration"
]

const Seo = ({ pageTitle, font }) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle}`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="keywords"
        content={keywords.join(", ")}
      />
      <meta
        name="description"
        content="QUANG-IT is a Flutter developer with expertise in Dart, React Native, and mobile app development. I specialize in cross-platform app development, Firebase integration, and cloud backend solutions."
      />
      <meta name="ibthemes" content="ATFN" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      {font && <link href={font} rel="stylesheet" />}
      <link rel="icon" href="favicon.ico" />
    </Head>
  </>
);

export default Seo;
