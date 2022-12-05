import { useState } from "react";
import { AddCategory } from "./";
import { GifGrid } from "./";
export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["Gatitos"]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories((c) => [newCategory, ...c]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={onAddCategory} />
            <ol>
                {categories.map((category) => (
                    <GifGrid category={category} key={category} />
                ))}
            </ol>
        </>
    );
};
