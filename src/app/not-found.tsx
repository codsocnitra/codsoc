import Link from "next/link";

export default function NotFound() {
  return (
    <div className='not_found'>
      <div>
        <h1 className='text-5xl font-bold mb-4'>404</h1>
        <p className='text-lg mb-6'>
          Sorry, the page you are looking for could not be found.
        </p>
        <Link href='/'>Go Home</Link>
      </div>
    </div>
  );
}
