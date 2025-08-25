import ViteHomePage from '../components/ViteHomePage'

export default function Landing() {



  sessionStorage.setItem('croppedImages', []);

    return (

        <>
            <ViteHomePage/>
        </>
    )
}