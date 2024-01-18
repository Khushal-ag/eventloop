import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="wrapper flex-center flex-between flex flex-col gap-3 p-5 text-center sm:flex-row">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            alt="Eventloop logo"
            width={128}
            height={38}
          />
        </Link>
        <p className="font-medium">© {new Date().getFullYear()} Eventloop</p>
        <div className="font-medium text-gray-600">
          Made with ❤️ by{" "}
          <Link href="https://github.com/Khushal-ag" className="text-stone-500">
            Khushal-ag
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
