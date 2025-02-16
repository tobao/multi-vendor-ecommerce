/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

  import { FC, useEffect, useState } from "react";
  import Image from "next/image";

  import {CldUploadWidget} from "next-cloudinary"

  interface ImageUploadProps {
    disabled?: boolean;
    onChange: (value: string) => void;
    onRemove: (value: string) => void;
    value: string[];
    type?: "standard" | "profile" | "cover";
    dontShowRemove?: boolean;
    cloudinary_key: string;
  }

  const ImageUpload: FC<ImageUploadProps> = ({ 
    disabled, 
    onChange, 
    onRemove, 
    value, 
    type,
    dontShowRemove,
    cloudinary_key
  }) => {
    const [isMounted, setIsMounted] = useState(false);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onUpload = (result: any) => {
      console.log("result", result);
      onChange(result.info.secure_url);
    };

    useEffect(() => {
      setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    if(type === "profile") 
    {
      return <div className = "relative rounded-full w-52 h-52 inset-x-96 bg-gray-200 border-2 border-white shadow-2xl">
        {value.length > 0 && (
          <Image
            src={value[0]}
            alt="Profile"
            width={300}
            height={300}
            className="w-52 h-52 rounded-full object-cover absolute top-0 left-0 bottom-0 right-0"
          />
        )}
        {/* Nút Upload */}
        <CldUploadWidget uploadPreset={cloudinary_key} onSuccess={onUpload}>
          {({ open }) => {
            const onClick = () => {
              open();
            };

            return (
              <button
                type="button"
                className="absolute right-0 bottom-6 flex items-center font-medium text-[17px] h-14 w-14 justify-center text-white bg-gradient-to-t from-blue-primary to-blue-300 border-none shadow-lg hover:shadow-md active:shadow-sm rounded-full "
                disabled={disabled}
                onClick={onClick}
              >
                <svg
                  viewBox="0 0 640 512"
                  fill="white"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M144 480C64.5 480 32 336 32 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1C128 108.1 204.1 32 296 32c80.8 0 148.3 56.5 163.9 131.8 58.3 15.2 100.1 69.3 100.1 131.2 0 79.5-64.5 145-144 145H144zM256 320v64h-48l80 80 80-80h-48v-64h-64z" />
                </svg>
              </button>
            );
          }}
        </CldUploadWidget>
      </div>
    }
  };

  export default ImageUpload;