export default async function ProductDetails({ params }: {
    params: Promise<{ productId: string }>
}) {

    const productId = (await params).productId;
    console.log(productId);
    return <>
        <h3>product Details of{productId}</h3>
    </>
}