import { useState, useEffect, useContext } from 'react';
import { update } from 'idb-keyval';
import { getImages, storeImages } from '../utils/idb-keyval';
import Cropper from 'react-easy-crop';
import { ImagesContext } from '../contexts/ImagesContext';


export default function CircleCrop( {imageIndex, getCroppedArea, getZoomInfo, getAreaPixels } ) {

  const { cropReset, setCropReset  } = useContext(ImagesContext);

  const orderOptions = JSON.parse(sessionStorage.getItem('orderDetails'));
  const orderQty = orderOptions.Quantity;

  const [crop, setCrop] = useState( { x:0, y:0 } );
  const [zoom, setZoom] = useState(1);
  const [workingURL, setWorkingURL] = useState(null)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const getInitialCrop = async (index) => {
    const imageArray = await getImages('userImages');
    if (!imageArray[index].cropData){
      setCrop({ x:0, y:0 })
    } else {
      updateCropAndZoom(index);
    }
  }

  const updateCropAndZoom = async (data) => {
    const imageArray = await getImages('userImages')
    const cropInfo = imageArray[data].cropData
    const zoomInfo = imageArray[data].zoomData;
    if (cropInfo) {
      setCrop({
        x: cropInfo.x,
        y: cropInfo.y
      })
    }
    if (zoomInfo){
      setZoom(zoomInfo);
    }
    setWorkingURL(imageArray[data].data_url);
  }

  const onCropComplete = async (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
    getCroppedArea(crop);
    getAreaPixels(croppedAreaPixels);
    getZoomInfo(zoom);
  }


  useEffect( () => {

    getInitialCrop(imageIndex);
    updateCropAndZoom(imageIndex);

  }, []);

  return (
    <div style={{ 
      position:'relative',
      display:'flex',
      justifyContent:'center',
      alignContent:'center',
      height:'100%', 
      width: 700,
      maxWidth:'100%', 
      }} >
        <Cropper
          image={workingURL}
          showGrid={false}
          cropShape="round"
          crop={crop}
          zoom={zoom}
          aspect={1}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}

        />
    </div>
  )
}