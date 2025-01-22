export default async function Data() {
    await new Promise((resolve) => {
        setTimeout(() => {
            console.log("abc");
            resolve("delay");
        }, 2000);
    }
    )

    return <>
        <div>
            <h1>Data after loading completed</h1>
        </div>
    </>
}