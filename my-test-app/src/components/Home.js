import HomeHeroSection from "./HomeHeroSection";
import { HomeContainer } from "./StyledComponents";
import { useContext } from 'react';
import { ThemeContext } from "styled-components";

export default function Home() {

    const { theme } = useContext(ThemeContext);

    return (
            <HomeContainer className={`App-${theme}`}>
                <HomeHeroSection />
                {/* CatalogCard */}
                {/* <SpecialsCard */}
                {/* CategoriesCard */}
                {/* FAQ */}
            </HomeContainer>

    );

};