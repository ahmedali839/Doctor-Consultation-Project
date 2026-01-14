import { Loader } from "lucide-react";
import { Suspense } from "react";
import DoctorListPage from "../../components/patient/DoctorListPage";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <DoctorListPage />
    </Suspense>
  );
};

export default page;
