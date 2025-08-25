import ViteHomePage from '../components/ViteHomePage'

export default function Landing() {


const createObject = {
    Type: '',
    Quantity: '',
  };
  sessionStorage.setItem('orderDetails', JSON.stringify(createObject));

    return (

        <>
            <ViteHomePage/>
        </>
    )
}