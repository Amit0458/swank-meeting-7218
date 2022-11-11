
    let companyLogo = [
        "https://assets.interntheory.com/creative/home-logo/logo-1.png",
        "https://assets.interntheory.com/creative/home-logo/logo-2.png",
        "https://assets.interntheory.com/creative/home-logo/logo-3.png",
        "https://assets.interntheory.com/creative/home-logo/logo-4.png",
        "https://assets.interntheory.com/creative/home-logo/logo-6.png",
        "https://assets.interntheory.com/creative/home-logo/logo-7.png",
        "https://assets.interntheory.com/creative/home-logo/logo-8.png",
        "https://assets.interntheory.com/creative/home-logo/logo-9.png",
        "https://assets.interntheory.com/creative/home-logo/logo-10.png",
        "https://assets.interntheory.com/creative/home-logo/logo-11.png",
        "https://assets.interntheory.com/creative/home-logo/logo-12.png",
        "https://assets.interntheory.com/creative/home-logo/logo-13.png",
        "https://assets.interntheory.com/creative/home-logo/logo-14.png",
        "https://assets.interntheory.com/creative/home-logo/logo-15.png",
        "https://assets.interntheory.com/creative/home-logo/logo-16.png",
        "https://assets.interntheory.com/creative/home-logo/logo-17.png",
        "https://assets.interntheory.com/creative/home-logo/logo-18.png",
        "https://assets.interntheory.com/creative/home-logo/logo-19.png",
        "https://assets.interntheory.com/creative/home-logo/logo-20.png",
        "https://assets.interntheory.com/creative/home-logo/logo-21.png"
    ]
    displayTable0(companyLogo);

    midSection = [
        "https://assets.interntheory.com/creative/home-internships/Marketing-Icon.jpg",
        "https://assets.interntheory.com/creative/home-internships/BD.jpg",
        "https://assets.interntheory.com/creative/home-internships/Content-Writing.jpg",
        "https://assets.interntheory.com/creative/home-internships/Graphic.jpg",
        "https://assets.interntheory.com/creative/home-internships/Finance.jpg",
        "https://assets.interntheory.com/creative/home-internships/HR.jpg",
        "https://assets.interntheory.com/creative/home-internships/Eng.jpg",
        "https://assets.interntheory.com/creative/home-internships/All-Internships.jpg"
    ]
    displayTable1(midSection)
    bottomSection = [
        "https://assets.interntheory.com/creative/home-courses/Homepage-stock.jpg",
        "https://assets.interntheory.com/creative/home-courses/Homepage-digital.jpg",
        "https://assets.interntheory.com/creative/home-courses/Homepage-web.jpg"
    ]
    displayTable2(bottomSection)

    function displayTable0(arr) {

        arr.forEach(element => {

            let div = document.createElement("div");
            let img = document.createElement("img");
            img.src = element;
            div.append(img);
            document.querySelector("#rightBox").append(div);
        });
    }
    function displayTable1(arr) {

        arr.forEach(element => {

            let div = document.createElement("div");
            let img = document.createElement("img");
            img.src = element;
            div.append(img);
            document.querySelector("#imageBox").append(div);
        });
    }

    function displayTable2(arr) {

        arr.forEach(element => {

            let div = document.createElement("div");
            let img = document.createElement("img");
            img.src = element;
            div.append(img);
            document.querySelector("#upskellingImage").append(div);
        });
    }

    /***********************Side menu************************/
    document.getElementById("hamburger1").addEventListener("click", sideMenu);

    function sideMenu() {

        document.querySelector(".side_bar").classList.add("side-class");

    }

    document.getElementById("hamburger2").addEventListener("click", sideMenu1);
    function sideMenu1() {


document.querySelector(".side_bar").classList.remove("side-class");

}

/*********************************side bar expend menu*****************************************/ 

function expand(p){
    document.querySelector(p).classList.toggle("expand")

    if(p==".under-sec1"){
        if (document.querySelector(".courses").classList.contains("fa-chevron-down")) {
            document.querySelector(".courses").classList.replace("fa-chevron-down","fa-chevron-up")
        } else if (document.querySelector(".courses").classList.contains("fa-chevron-up")) {
            document.querySelector(".courses").classList.replace("fa-chevron-up","fa-chevron-down")
        }

    }
    if(p==".under-sec2"){
        if (document.querySelector(".register").classList.contains("fa-chevron-down")) {
            document.querySelector(".register").classList.replace("fa-chevron-down","fa-chevron-up")
        } else if (document.querySelector(".register").classList.contains("fa-chevron-up")) {
            document.querySelector(".register").classList.replace("fa-chevron-up","fa-chevron-down")
        }

    }
    if(p==".under-sec3"){
        if (document.querySelector(".login").classList.contains("fa-chevron-down")) {
            document.querySelector(".login").classList.replace("fa-chevron-down","fa-chevron-up")
        } else if (document.querySelector(".login").classList.contains("fa-chevron-up")) {
            document.querySelector(".login").classList.replace("fa-chevron-up","fa-chevron-down")
        }

    }
}


