import React, { FC } from "react";

interface ProductImgAndDescriptionProps {
  src: string;
  alt: string;
  productDescription: string;
}

const ProductImgAndDescription: FC<ProductImgAndDescriptionProps> = ({
  src,
  alt,
  productDescription,
}) => {
  return (
    <div className="flex items-center gap-2 h-full">
      <div className="max-h-11 max-w-11 rounded-md bg-[#F5F5F5]">
        <img src={src} alt={alt} className="h-8 w-8" />
      </div>
      <div className="flex items-center">
        <div className="text-sm max-w-48 text-[#191919]">
          {productDescription}
        </div>
      </div>
    </div>
  );
};

export default ProductImgAndDescription;
