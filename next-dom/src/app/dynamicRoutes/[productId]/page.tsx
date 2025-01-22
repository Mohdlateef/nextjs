import { Metadata } from "next";
type Props = {
    params: Promise<{ productId: string }>
}
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const id = (await params).productId;
    return {
        title: `product ${id}`
    }

}
export default async function ProductDetails({ params }: Props) {

    const productId = (await params).productId;
    console.log(productId);
    return <>
        <h3>product Details of{productId}</h3>
    </>
}