import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home({ postData }) {
  const { id, title, body } = postData;
  return (
    <Layout home>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem} key={id}>
            {title}
            <br />
            {id}
            <br />
            {body}
          </li>
        </ul>
      </section>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const id = context.query.id;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const postData = await response.json();

  return {
    props: {
      postData,
    },
  };
}
