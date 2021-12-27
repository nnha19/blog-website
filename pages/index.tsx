import { InferGetStaticPropsType } from "next";
import Blogs from "../components/Blogs/Blogs";
import { blogs } from "../BLOGS_DATA";

const BlogsPage = ({
  blogs,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <Blogs blogs={blogs} />;
};

export const getStaticProps = async () => {
  return {
    props: { blogs },
  };
};

export default BlogsPage;
