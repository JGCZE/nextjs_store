import { getSession } from "@/utils/login-actions";
import { redirect } from "next/navigation";

const AdminCMS = async () => {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/login");
  }

  return <section>AdminCMS</section>;
};

export default AdminCMS;
