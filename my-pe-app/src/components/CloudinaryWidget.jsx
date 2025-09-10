import { useEffect, useRef } from "react";

export default function CloudinaryWidget({ uwConfig }) {
    
    const cloudinaryRef = useRef;
    const widgetRef = useRef;

    useEffect( () => {
        cloudinaryRef.current = window.cloudinary;
        console.log(cloudinaryRef.current)
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            // Uncomment and modify as needed:
            // showAdvancedOptions: true,
            // sources: ['local', 'url'],
            // folder: 'user_images',
            // tags: ['users', 'profile'],
            // clientAllowedFormats: ['images'],
            // theme: 'purple',
            cropping: true,
            crop: 'c_crop',
            gravity: 'custom',
            croppingCoordinates: 'custom',
            cloud_Name: 'dxed1xukj',
            uploadPreset: 'userimages',
            context: { alt: 'user_uploaded' },
            multiple: false,
            maxImageFileSize: 2000000,
            maxImageWidth: 5000,
        }, function(error, result){
            console.log(result);
            console.log(error);
        });
    })

    return (
        <button onClick={() => widgetRef.current.open()}>
            Upload
        </button>
    )
}