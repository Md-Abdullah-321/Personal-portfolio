"use client"

import { getCookie } from "@/lib/getCookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminDashboard() {
<<<<<<< HEAD:app/admin/page.js
=======
    const [loading, setLoading] = useState(true);
    const user = useSelector((state) => state.user);
    
>>>>>>> 4fd75b644391263b4db6b6b80abd24a9145ee61c:app/admin/page.jsx
    const router = useRouter();

    useEffect(() => {
      // Ensure the code runs only on the client side
      if (typeof window !== 'undefined') {
        if (!getCookie('accessToken')) {
          router.push('/admin/login');
        }
      }
    }, [router]);
    
    return (
      <div className="w-full min-h-screen flex justify-between bg-violet-50">
          
      </div>)
  }