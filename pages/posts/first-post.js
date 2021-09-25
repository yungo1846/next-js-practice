import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/Layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
        <Image src="/images/profile.png" width={200} height={200} alt="profile" />
      </h2>
    </Layout>
  );
}
