import Login from "@/components/login";

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center p-24">
        {process.env.NEXT_PUBLIC_BACKEND_URL}
        <Login/>
    </main>
  );
}
