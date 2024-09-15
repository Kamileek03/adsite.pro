import { FaArrowDown } from "react-icons/fa6";
import React, { useState } from "react";


function Seo(){

    const [isFirstTextVisible, setIsFirstTextVisible] = useState(false);
    const [isSecondTextVisible, setIsSecondTextVisible] = useState(false);
  
    const toggleFirstTextVisibility = () => {
      setIsFirstTextVisible(prevState => !prevState);
    };
  
    const toggleSecondTextVisibility = () => {
      setIsSecondTextVisible(prevState => !prevState);
    };

    return(
        <section className="bg-grey h-max py-20 mx-auto gap-20 flex justify-center text-white">
            <div className="w-2/5">
                <h1 className="uppercase font-normal text-2xl text-white">
                    Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.
                </h1>
                <p className="text-white text-xs  py-10">
                    Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat <br /> ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et  [...]
                </p>

                {isFirstTextVisible && (
                    <p className="text-xs">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur augue lacus, tempus at molestie et, laoreet at elit. Vivamus eu quam pharetra, tristique neque nec, finibus nisl. Donec sollicitudin eget lectus vitae mattis. Vivamus commodo imperdiet ipsum id fringilla. Maecenas sit amet sagittis tellus, non consectetur mi. Etiam tempor risus quis lacus viverra, vitae auctor lectus lobortis. Sed vel convallis ante, ac ultricies dui. Morbi eget consectetur metus.
                    </p>
                )}
                <button onClick={toggleFirstTextVisibility} className="border-b p-1"> {isFirstTextVisible ? "Zwiń ↑" : 'Rozwiń ↓'}</button>
            </div>
            <div className="w-2/5">
                <h1 className="uppercase font-normal text-2xl text-white">
                    Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.
                </h1>
                <p className="text-white text-xs  py-10">
                    Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat <br /> ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et  [...]
                </p>

                {isSecondTextVisible && (
                    <p className="text-xs">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales purus vitae felis commodo aliquet. Integer ut neque sodales, imperdiet leo et, pulvinar ex. Etiam porta tortor vel rhoncus efficitur. Etiam a tellus tellus. Vestibulum convallis nec neque quis faucibus. Sed tempor venenatis placerat. Quisque et odio quis dui dapibus pulvinar at vel ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras ultrices metus eu tincidunt lacinia. Ut cursus, dui vitae eleifend pellentesque, augue dui pulvinar felis, ac lobortis felis orci lacinia enim. Fusce venenatis vehicula odio ac viverra. Aenean non metus vel dolor pellentesque hendrerit. Praesent lacus augue, maximus nec gravida eget, accumsan eget metus. Suspendisse ligula est, efficitur in porttitor vitae, dictum sit amet odio. Phasellus vitae bibendum urna.
                    </p>
                )}
                <button onClick={toggleSecondTextVisibility} className="border-b p-1"> {isSecondTextVisible ? "Zwiń ↑" : "Rozwiń ↓"}</button>
            </div>
        </section>
    )
}
export default Seo