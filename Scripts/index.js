
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


/****************************************************************slider**************************** */

 arrr2 = [
    [
        {
            "img": "https://assets.interntheory.com/img/testimonial-image/in3.jpg",
            "name": "Amani Nagda",
            "description": "I was on a look out for an internship to spend my summer productively and I stumbled upon Inter Theory. Their team was very kind and kept me updated. I applied for Viacom18 and got through. I thank Intern Theory team for giving me this opportunity.",
            "job": "Interrn at Viacom18"
    
        },
        {
            "img": "https://assets.interntheory.com/img/testimonial-image/in2.jpg",
            "name": "Siddharth Viyappu",
            "description": "I created my profile because I had before Intern Theory, not come across a consultancy that would execute the responsibility of getting a result for your application irrespective of being failure or success the way they did. They've set the bars really high! Kudos team!",
            "job": "Intern at Gooseberry Homes"
    
        }, 
    ],
    [
        {
            "img": "https://assets.interntheory.com/img/testimonial-image/in2.jpg",
            "name": "Siddharth Viyappu",
            "description": "I created my profile because I had before Intern Theory, not come across a consultancy that would execute the responsibility of getting a result for your application irrespective of being failure or success the way they did. They've set the bars really high! Kudos team!",
            "job": "Intern at Gooseberry Homes"
    
        },
        {
            "img": "https://assets.interntheory.com/img/testimonial-image/in1.jpg",
            "name": "Sshikha Bodwaani",
            "description": "We have been using InternTheory for over a year now and are very happy with the quality of applications that we receive. Their team has been very helpful in screening applications for the various internship requirements we had. It has been a delight working with them.",
            "job": "Sr. Exec. HR at BookMyShow"
    
        }, 
    ],
    [
        {
            "img": "https://assets.interntheory.com/img/testimonial-image/in1.jpg",
            "name": "Sshikha Bodwaani",
            "description": "We have been using InternTheory for over a year now and are very happy with the quality of applications that we receive. Their team has been very helpful in screening applications for the various internship requirements we had. It has been a delight working with them.",
            "job": "Sr. Exec. HR at BookMyShow"
    
        },
        {
            "img": "https://assets.interntheory.com/img/testimonial-image/in4.jpg",
            "name": "Harshil Bhadra",
            "description": "If you are more than satisfied with a particular product/firm who gives you more than you expect then there’s no need to find a substitute. Its similar with Intern Theory, the best team who makes continuous efforts and always ready to help! Thanks for giving me the best start.",
            "job": "Intern at Porsche"
        }
        
    ],
    [
        {
            "img": "https://assets.interntheory.com/img/testimonial-image/in4.jpg",
            "name": "Harshil Bhadra",
            "description": "If you are more than satisfied with a particular product/firm who gives you more than you expect then there’s no need to find a substitute. Its similar with Intern Theory, the best team who makes continuous efforts and always ready to help! Thanks for giving me the best start.",
            "job": "Intern at Porsche"
        },
        {
            "img": "https://assets.interntheory.com/img/testimonial-image/in3.jpg",
            "name": "Amani Nagda",
            "description": "I was on a look out for an internship to spend my summer productively and I stumbled upon Inter Theory. Their team was very kind and kept me updated. I applied for Viacom18 and got through. I thank Intern Theory team for giving me this opportunity.",
            "job": "Interrn at Viacom18"
    
        },
    ]
 ]
 let i = 0;
 setInterval( () => {
    
    if(i==4) {
        i=0;
    }
    setTimeout( ()=> {
        generate(i);
        i++;
    },5000)
    
 },2000)
function generate(i) {
    document.querySelector(".contentBox").innerHTML = "";
    arrr2[i].forEach( (element)  => {
        let div = document.createElement("div");
        let innerDiv1 = document.createElement("div");
        let img = document.createElement("img");
        img.src = element.img;
        let name = document.createElement("h2");
        name.textContent = element.name; 
        let comp = document.createElement("h5");
        comp.textContent = element.job;
        innerDiv1.append(img,name,comp);
        let innerDiv2 = document.createElement("div");
        let para = document.createElement("p");
        para.textContent = element.description;
        innerDiv2.append(para);
        div.append(innerDiv1,innerDiv2);
        document.querySelector(".contentBox").append(div);
    })
    

}

cart = 0;

if( cart >= 1) {
    document.querySelector(".cartDisplay").textContent = cart;
    document.querySelector(".cartDisplay").classList.remove("displayCartCount");
}

else {
    document.querySelector(".cartDisplay").classList.add("displayCartCount");
    document.querySelector(".cart").classList.add("cartImgSize")
}
