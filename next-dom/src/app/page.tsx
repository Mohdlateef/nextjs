import Link from "next/link";
import { arr } from "./_lib/priveFolder"

export default function Home() {
    const fruits: string[] = arr;
    return <div>
        <h1>welcome Home</h1>
        <Link href="/dynamicRoutes">Documents</Link>
        {fruits?.map((iteam, index) => (
            <h4 key={index}>{iteam}</h4>
        ))}
    </div>
}