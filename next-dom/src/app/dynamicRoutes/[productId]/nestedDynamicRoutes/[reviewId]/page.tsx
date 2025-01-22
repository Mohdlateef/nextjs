import { notFound } from "next/navigation"

export default async function review({ params }: {
    params: Promise<{ productId: string, reviewId: string }>
}) {
    const { productId, reviewId } = await params
    if (parseInt(reviewId) > 100) {
        notFound();
    }
    return <>
        <h2> review {reviewId} for Product {productId}</h2>
    </>
}