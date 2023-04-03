

document.addEventListener("DOMContentLoaded", () => {

    let img_urls = [];

    for (let i = 1; i <= 12; i++) {
        img_urls.push(`./pics/pic${i}.jpg`);
    }

    let gallery = document.querySelector("#gallery")

    if (gallery) {
        for (let j = 0; j < img_urls.length; j++) {
            gallery.innerHTML += `
            <img src="${img_urls[j]}" class = "img_out_of_cursor">
        `;
        }

        let pictures = document.querySelectorAll("#gallery img");

        black_box = document.querySelector("#black_box");

        black_box.classList.add("black_box_hidden");

        for (let a = 0; a < pictures.length; a++) {
            pictures[a].onclick = () => {
                pictures[a].classList.toggle("img_show")
                pictures[a].classList.toggle("img_in_cursor")
                pictures[a].classList.toggle("img_out_of_cursor")
                black_box.classList.toggle("black_box_hidden")
                black_box.classList.toggle("black_box_shown")
                for (let b = 0; b < pictures.length; b++) {
                    if (!pictures[b].classList.contains("img_show")) {
                        pictures[b].classList.toggle("img_out_of_cursor")
                        pictures[b].classList.toggle("img_shrink")
                    }
                }
                pictures[a].classList.remove("img_shrink")
            }
            pictures[a].onmouseover = () => {
                pictures[a].classList.add("img_in_cursor")
                pictures[a].classList.remove("img_out_of_cursor")
            }
            pictures[a].onmouseout = () => {
                pictures[a].classList.remove("img_in_cursor")
                pictures[a].classList.add("img_out_of_cursor")
            }
        }

    }


    let navigation = document.querySelector("nav");
    let nav_links = document.querySelectorAll("nav ul li");
    let menu_btn = document.querySelector(".nav_button");

    navigation.classList.add("nav_hidden")

    menu_btn.onclick = () => {
        navigation.classList.toggle("nav_shown")
        navigation.classList.toggle("nav_hidden")
    }

    // Калькулятор

    let calc_box = document.querySelector("#calculator")

    if (calc_box) {
        calc_box.innerHTML = `
            <input id="screen" size="15" disabled></input>
        `
        for (let c = 0; c < 17; c++) {
            switch (c) {
                case 0:
                case 1:
                case 2:
                    calc_box.innerHTML += `
                        <button class="btn">${c + 1}</button>
                    `;
                    break;
                case 3:
                    calc_box.innerHTML += `
                        <button class="btn">+</button>
                    `;
                    break;
                case 4:
                case 5:
                case 6:
                    calc_box.innerHTML += `
                        <button class="btn">${c}</button>
                    `;
                    break;
                case 7:
                    calc_box.innerHTML += `
                        <button class="btn">-</button>
                    `;
                    break;
                case 8:
                case 9:
                case 10:
                    calc_box.innerHTML += `
                        <button class="btn">${c - 1}</button>
                    `;
                    break;
                case 11:
                    calc_box.innerHTML += `
                        <button class="btn">*</button>
                    `;
                    break;
                case 12:
                    calc_box.innerHTML += `
                        <button class="btn">0</button>
                    `;
                    break;
                case 13:
                    calc_box.innerHTML += `
                        <button class="btn">.</button>
                    `;
                    break;
                case 14:
                    calc_box.innerHTML += `
                        <button class="btn">&lt;&lt;</button>
                    `;
                    break;
                case 15:
                    calc_box.innerHTML += `
                        <button class="btn">/</button>
                    `;
                    break;
                case 16:
                    calc_box.innerHTML += `
                        <button class="btn">C</button>
                    `;
                    break;
            }
        }

        let calc_btns = document.querySelectorAll("#calculator .btn")
        let calc_screen = document.querySelector("#calculator #screen")
        for (let d = 0; d < calc_btns.length; d++) {
            calc_btns[d].onclick = () => {
                let calc_text_all = calc_screen.getAttribute("value")
                let calc_text_to_verify = calc_text_all
                if (calc_text_all != null) {
                    if (calc_text_all.indexOf("=") != -1) {
                        calc_text_to_verify = calc_text_all.slice(0, calc_text_all.indexOf("="));
                    }
                } else {
                    calc_text_to_verify = ""
                }
                switch (calc_btns[d].innerHTML) {
                    case "1":
                    case "2":
                    case "3":
                    case "4":
                    case "5":
                    case "6":
                    case "7":
                    case "8":
                    case "9":
                    case "0":
                    case ".":
                    case "+":
                    case "-":
                    case "*":
                    case "/":
                        calc_text_to_verify += calc_btns[d].innerHTML
                        calc_screen.setAttribute("value", calc_text_to_verify);
                        break;
                    case "&lt;&lt;":
                        calc_text_to_verify = calc_text_to_verify.slice(0, calc_text_to_verify.length - 1)
                        calc_screen.setAttribute("value", calc_text_to_verify);
                        break;
                    case "C":
                        calc_text_to_verify = "";
                        calc_screen.setAttribute("value", calc_text_to_verify);
                        break;

                }
                if (calc_text_to_verify) {
                    if (calc_text_to_verify.length > 2) {
                        if (calc_text_to_verify.indexOf("+") > -1) {
                            let var1 = +calc_text_to_verify.slice(0, calc_text_to_verify.indexOf("+"));
                            let var2 = +(calc_text_to_verify.slice(calc_text_to_verify.indexOf("+") + 1, calc_text_to_verify.length));
                            result = var1 + var2;
                            if (result != var1) {
                                let all_text = var1 + "+" + var2 + "=" + result;
                                calc_screen.setAttribute("value", all_text);
                            }
                        }
                        if (calc_text_to_verify.indexOf("-") > -1) {
                            let var1 = +calc_text_to_verify.slice(0, calc_text_to_verify.indexOf("-"));
                            let var2 = +(calc_text_to_verify.slice(calc_text_to_verify.indexOf("-") + 1, calc_text_to_verify.length));
                            result = var1 - var2;
                            if (result != var1) {
                                let all_text = var1 + "+" + var2 + "=" + result;
                                calc_screen.setAttribute("value", all_text);
                            }
                        }
                        if (calc_text_to_verify.indexOf("*") > -1) {
                            let var1 = +calc_text_to_verify.slice(0, calc_text_to_verify.indexOf("*"));
                            let var2 = +(calc_text_to_verify.slice(calc_text_to_verify.indexOf("*") + 1, calc_text_to_verify.length));
                            result = var1 * var2;
                            if (result != var1) {
                                let all_text = var1 + "+" + var2 + "=" + result;
                                calc_screen.setAttribute("value", all_text);
                            }
                        }
                        if (calc_text_to_verify.indexOf("/") > -1) {
                            let var1 = +calc_text_to_verify.slice(0, calc_text_to_verify.indexOf("/"));
                            let var2 = +(calc_text_to_verify.slice(calc_text_to_verify.indexOf("/") + 1, calc_text_to_verify.length));
                            result = var1 / var2;
                            if (result != var1) {
                                let all_text = var1 + "+" + var2 + "=" + result;
                                calc_screen.setAttribute("value", all_text);
                            }
                        }
                    }
                }
            }
        }
    }


})