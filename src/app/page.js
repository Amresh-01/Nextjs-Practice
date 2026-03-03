import Link from "next/link";

//promise hai to hame await krvana hoga.then kr ke value acces krna hoga

export default async function Home({params,searchParams}) {
    console.log(searchParams);
    console.log(params);
  return (
    <>
      <h1>Technical Agency</h1>
      <p>
        <Link href="/blogs">Blogs</Link>
      </p>{" "}
      <p>
        <Link href="/about">About</Link>
      </p>{" "}
      <p>
        <Link href="/services">Services</Link>
      </p>
    </>
  );
}