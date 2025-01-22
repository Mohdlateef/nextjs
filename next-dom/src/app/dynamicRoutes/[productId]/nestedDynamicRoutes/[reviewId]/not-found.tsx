"use client";

import React from 'react'
import { usePathname } from 'next/navigation'
export default function Notfound() {
    const pathname = usePathname();
    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];
    return (
        <div>
            this doesnot accept props
            <h2>there is review no {reviewId} for the product {productId} </h2>
            <p>Please feel free to make changes on this page</p>
        </div>
    )
}