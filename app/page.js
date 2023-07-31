import Link from "next/link";
import MainLayout from "./(components)/mainLayout";



export default function Home() {
  return (
    <MainLayout>
      <h1>Home page</h1>
      <Link href="/parents">Parents Page</Link>
    </MainLayout>

  )
}
