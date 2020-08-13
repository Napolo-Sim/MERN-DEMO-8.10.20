import React from "react";

const TranslationList = (props) => {
    return (
        <div>
            {props.translationList.map((element, index) => (
                <h1 key={index}>{element}</h1>
            ))}
        </div>
    );
};

export default TranslationList;
