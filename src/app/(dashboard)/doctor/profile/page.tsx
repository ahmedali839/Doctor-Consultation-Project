import ProfilePage from "@/components/ProfilePage/ProfilePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doctor Profile | Medicare+",
  description: "View and manage you doctor profile in Medicare plateform.",
};

export default function Page() {
  return <ProfilePage userType="doctor" />;
}
