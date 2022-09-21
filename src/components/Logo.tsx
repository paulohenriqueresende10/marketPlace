import React from "react";

type logoStoreProps = {
    width: string
    padding: string
}

export default function Logo({width, padding }: logoStoreProps){
    return (
        <img style={{ width: width, padding: padding }} src='./imgs/mobileshop.png' />
    );
}