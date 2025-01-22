export default async function Docs({ params }: {
    params: Promise<{ slug: string[] }>
}) {
    const { slug } = await params;
    if (slug?.length === 2) {
        return <div>
            <h1>viewing docs for features {slug[0]} and concept {slug[1]}</h1>
        </div>
    }
    else if (slug?.length === 1) {
        return <>
            <h1>viewing docs for features {slug[0]}</h1>
        </>
    }
    return <h1>Docs home here it is shown when we just use slug[[...slug]]</h1>
}