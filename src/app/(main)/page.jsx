import { redirect } from "next/navigation";

const default_category_id = "01";

const Home = async () => {
  redirect(`/category/${default_category_id}`);
  return <h1></h1>
};

export default Home;
