import { IBlogs } from "../../types/types";
import styles from "./Blogs.module.scss";
import { useRouter } from "next/router";

interface IProps {
  blogs: IBlogs["blogs"];
}

const Blogs: React.FC<IProps> = ({ blogs }) => {
  const { push } = useRouter();
  const blogsList = blogs.map((blog) => {
    const blogCutDescr =
      blog.description.length > 300
        ? blog.description.substring(0, 300) + "......"
        : blog.description;

    return (
      <div className={styles.blog} key={blog.date}>
        <img className={styles.blogImg} src={blog.image} />
        <div className={styles.blogBody}>
          <p className={styles.blogDate}>{blog.date}</p>
          <h2
            onClick={() => push(`/blog/${blog.id}`)}
            className={styles.blogTitle}
          >
            {blog.title}
          </h2>
          <p className={styles.blogDescription}>{blogCutDescr}</p>
        </div>
      </div>
    );
  });
  return <div className={styles.blogs}>{blogsList}</div>;
};

export default Blogs;
