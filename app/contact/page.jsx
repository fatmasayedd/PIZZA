import Link from "next/link";
import ContzctUs from "../components/ContactUs/contactus";

export default function Contact() {
    return (
        <div className=" mb-[280px]">
          <ContzctUs />
            {/* زر بيرجعك لصفحه البوست */}
            {/* <Link href="/posts">
                <button className="bg-slate-400 w-25 h-16 "> take me to the posts</button>
            </Link> */}
        </div>
    );
}