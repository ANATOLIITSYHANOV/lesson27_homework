/**
 * Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). 
 * Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. 
 * Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write()
 *  в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.
 */

let styles = [
    {
        name: "color",
        value: "blue",
    },
    {
        name: "font-size",
        value: "24px",
    },
    {
        name: "text-align",
        value: "center",
    },
    {
        name: "text-decoration",
        value: "underline",
    }
];

let stylesInput = (arr, text) => {
    toString = (obj) => {
        return `${obj.name}:${obj.value};`;
    }
    let cssStyles = arr.reduce((cssStr, prop) => {
        return cssStr + toString(prop);
    }, "");
    return document.write(`<p style="${cssStyles}">${text}</p>`)
}
stylesInput(styles, "hellow worlds")
