import Footer from "../../components/Navigation/Footer";
import Navbar from "../../components/Navigation/Navbar";
import Layout from "../../hocs/layouts/Layout";

function Blog() {
  return (
    <Layout>
      <Navbar />
      <div className="pt-20 bg-white border-gray-200 dark:bg-gray-800 dark:text-zinc-100">Blog</div>
      <Footer />
    </Layout>
  );
}

export default Blog;
