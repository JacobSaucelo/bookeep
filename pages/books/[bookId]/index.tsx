import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    router.back();
  }, []);
  return;
}
