const wrappers = document.querySelectorAll(".wrapper");
const circleMenus = document.querySelectorAll('.circleMenu')
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const line = document.querySelector(".line");
const boxUpper = document.querySelector(".boxUpper");
const boxLower = document.querySelector(".boxLower");
const boxCenter = document.querySelector(".boxCenter");
const openingBox = document.querySelector(".openingBox");
const tempCover = document.querySelector(".tempCover");

const mainPage = document.querySelector(".mainPage");
const menu = document.querySelectorAll('.menu');

const settingIconWrapper = document.querySelector(".settingIconWrapper");
const settingIcon = document.querySelector(".settingIcon");
const settingCover = document.querySelector(".settingCover");
const colorSelectorParent = document.querySelector(".colorSelectorParent");
const colorSettingCovers = document.querySelectorAll(".colorSettingCover");
const colorCircles = document.querySelectorAll(".colorCircle");
const colorSelectors = document.querySelectorAll(".colorSelector");
const warningBox = document.querySelector(".warningBox");

const clockCircleCover = document.querySelector(".clockCircleCover");

const roadmapNav = document.querySelector(".roadmapNav");

const signUpWrapper = document.querySelector(`.signUpWrapper`);
const tempSignUpCover = document.querySelector(`.tempSignUpCover`);
const signUpButton = document.getElementById("signUpButton");
const loginSuccess = document.querySelector('.loginSuccess');
const loginInfoText = document.querySelector('.loginInfoText');
const loginFail = document.querySelector(".loginFail");

function clickPoint() {
    for (let w of wrappers) {
        w.classList.add("clicked");
    };
    openingAnimationToBackground();

    setTimeout(() => {
        for (let w of wrappers) {
            w.classList.remove("clicked");
        };
        circleMenus.forEach((cMenu) => {
            cMenu.style.zIndex = 5;
        });
    }, 2000);
};

const openingAnimationToBackground = () => {
    setDisplay(left, "none", "1000");
    setDisplay(right, "none", "1000");
    setDisplay(line, "none", "2000");
    setDisplay(boxUpper, "none", "2000");
    setDisplay(boxLower, "none", "2000");
    setDisplay(boxCenter, "none", "1000");
    setDisplay(openingBox, "none", "0");
};

const openingAnimationToForeground = () => {
    for (let w of wrappers) {
        setDisplay(w, "block", "0s")
    };
};

const setDisplay = (className, dis, delay) => {
    setTimeout(() => {
        className.style.display = dis;
    }, delay);
};

const menuClicked1 = (elem) => {
    elem.style.zIndex = 70;

    tempCover.classList.add("coverDisplay");
    tempCover.style.backgroundColor = getComputedStyle(elem).backgroundColor;
    setDisplay(tempCover, "none", "1s");
    setDisplay(tempCover, "block", "0s");

    boxUpper.style.backgroundColor = getComputedStyle(elem).backgroundColor;
    boxLower.style.backgroundColor = getComputedStyle(elem).backgroundColor;
    boxCenter.style.backgroundColor = getComputedStyle(elem).backgroundColor;
    document.querySelector(`.color_${elem.id}`).style.color = getComputedStyle(elem).backgroundColor;


    elem.classList.add("menuClicked");
    setTimeout(() => {
        mainPage.style.visibility = "hidden";

        openingAnimationToForeground();

        for (let w of wrappers) {
            w.classList.add("clicked");
        }

        openingAnimationToBackground();
        menu.forEach((menu) => {
            setDisplay(menu, "none", "0");
        });

        const pages = document.querySelectorAll(".page");
        for (let p of pages) {
            p.style.display = "none";
        }
        document.querySelector(`.${elem.id}`).style.display = "block";

        document.querySelector(`.color_${elem.id}`).style.display = "block";
        setTimeout(() => {
            for (let w of wrappers) {
                w.classList.remove("clicked");
            }
            tempCover.style.display = "none";
            tempCover.classList.remove("coverDisplay");
            elem.classList.remove("menuClicked");
            elem.style.zIndex = 5;
        }, 2000);
    }, 1000);

};

const menuClicked2 = (elem) => {

    settingCover.classList.add("settingCoverDisplay");
    setDisplay(settingCover, "block", 0);

    document.querySelector(`.color_${elem.id}`).style.color = getComputedStyle(elem).backgroundColor;
    $(".signUp .inputBox").css('background-color', `#${colorCircles[3].classList[1]}`)

    setTimeout(() => {

        setDisplay(signUpWrapper, "block", 0);
        signUpWrapper.classList.add("colorSelectParentClicked");
        elem.style.zIndex = 5;
    }, 1000);

};
const signUpCancel = () => {
    settingCover.classList.remove("settingCoverDisplay");
    setDisplay(settingCover, "none", 0);
    signUpWrapper.classList.remove("colorSelectParentClicked");
    setDisplay(signUpWrapper, "none", 0);
};

const backIconClicked = (elem) => {

    for (let w of wrappers) {
        w.classList.add("backIconClicked");
    }
    setDisplay(left, "block", "1000");
    setDisplay(right, "block", "1000");
    setDisplay(line, "block", "0s");
    setDisplay(boxUpper, "block", "0s");
    setDisplay(boxLower, "block", "0s");
    setDisplay(boxCenter, "block", "1000");
    setDisplay(tempCover, "block", "0");

    setTimeout(() => {
        mainPage.style.visibility = "visible";
        tempCover.classList.add("coverDisplayBackword");

        document.querySelector(`.${elem.id}`).style.display = "none";

        setDisplay(left, "none", "0");
        setDisplay(right, "none", "0");
        setDisplay(line, "none", "0");
        setDisplay(boxUpper, "none", "0");
        setDisplay(boxLower, "none", "0");
        setDisplay(boxCenter, "none", "0");
        for (let w of wrappers) {
            w.classList.remove("backIconClicked");
        }

        menu.forEach((menu) => {
            setDisplay(menu, "block", "0");
        });

        const menuCircle = document.querySelector(`.mainTo_${elem.id}`);
        menuCircle.classList.add("backIconClicked")
        menuCircle.style.zIndex = 70;

        setTimeout(() => {
            tempCover.classList.remove("coverDisplayBackword");
            setDisplay(tempCover, "none", "0");
            menuCircle.style.zIndex = 5;
            menuCircle.classList.remove("backIconClicked")
        }, 1000);

    }, 2000);
};

const settingClicked = () => {
    settingIconWrapper.classList.remove("hover");
    settingIcon.classList.add("settingIconClicked");
    settingCover.classList.add("settingCoverDisplay");
    setDisplay(settingCover, "block", "0s");
    setDisplay(colorSelectorParent, "flex", 1000);
    colorSelectorParent.classList.add("colorSelectParentClicked");

    const aboutMeColorSelector = document.querySelector("#aboutMeColorSelector");
    const journeyColorSelector = document.querySelector("#journeyColorSelector");
    const devRoadmapColorSelector = document.querySelector("#devRoadmapColorSelector");
    const signUpColorSelector = document.querySelector("#signUpColorSelector");
    aboutMeColorSelector.style.color = getComputedStyle(document.querySelector("#aboutMe")).backgroundColor;
    aboutMeColorSelector.firstElementChild.style.backgroundColor = getComputedStyle(document.querySelector("#aboutMe")).backgroundColor;
    journeyColorSelector.style.color = getComputedStyle(document.querySelector("#journey")).backgroundColor;
    journeyColorSelector.firstElementChild.style.backgroundColor = getComputedStyle(document.querySelector("#journey")).backgroundColor;
    devRoadmapColorSelector.style.color = getComputedStyle(document.querySelector("#devRoadmap")).backgroundColor;
    devRoadmapColorSelector.firstElementChild.style.backgroundColor = getComputedStyle(document.querySelector("#devRoadmap")).backgroundColor;
    signUpColorSelector.style.color = getComputedStyle(document.querySelector("#signUp")).backgroundColor;
    signUpColorSelector.firstElementChild.style.backgroundColor = getComputedStyle(document.querySelector("#signUp")).backgroundColor;
};

let selectedMenu = "0";
const menuSelected = (elem) => {
    setDisplay(warningBox, "none", 0);
    colorSelectors.forEach((s) => {
        s.style.backgroundColor = "rgb(245, 245, 245)";
    })
    elem.style.backgroundColor = "#ccc";
    selectedMenu = elem.id;
};

const colorSelected = (elem) => {
    if (selectedMenu === "0") {
        setDisplay(warningBox, "block", 0);
        return;
    };
    const selectedMenuId = document.getElementById(selectedMenu);

    $(`#${selectedMenu} .colorCircle`).attr('class', 'colorCircle');

    selectedMenuId.style.color = getComputedStyle(elem).backgroundColor;
    selectedMenuId.firstElementChild.style.backgroundColor = getComputedStyle(elem).backgroundColor;
    selectedMenuId.firstElementChild.classList.add(elem.id.substring(13));
}

okButton.addEventListener('click', () => {
    for (let i = 0; i < 4; i++) {
        colorSettingCovers[i].classList.add(`colorSettingCover${i + 1}`);
        colorSettingCovers[i].style.backgroundColor = getComputedStyle(colorCircles[i]).backgroundColor;

        setTimeout(() => {
            colorSettingCovers[i].classList.remove(`colorSettingCover${i + 1}`);
        }, 2500);
    };

    setTimeout(() => {
        setDisplay(warningBox, "none", 0);
        selectedMenu = "0";
        setDisplay(settingCover, "none", 0);
        setDisplay(colorSelectorParent, "none", 0);
        for (let i = 0; i < 4; i++) {
            document.querySelectorAll(`.colorPointer${i + 1}`).forEach((c) => {
                c.style.backgroundColor = getComputedStyle(colorCircles[i]).backgroundColor;
            });

            $(`.subcolorPointer${i + 1}`).css('backgroundColor', `#${colorCircles[i].classList[1]}`);
            
            document.querySelectorAll(`.textSubColorPointer${i + 1}`).forEach((t) => {
                t.style.color = `#${colorCircles[i].classList[1]}`;
            });

            document.querySelectorAll(`.textColorPointer${i + 1}`).forEach((t) => {
                t.style.color = getComputedStyle(colorCircles[i]).backgroundColor;
            });
        };
        settingIconWrapper.classList.add("hover");
        settingIcon.classList.remove("settingIconClicked");
        selectedMenu = "0";
        colorSelectors.forEach((s) => {
            s.style.backgroundColor = "rgb(245, 245, 245)";
        });
    }, 1500);
});

cancelButton.addEventListener('click', () => {
    if (selectedMenu === "0") {
        setDisplay(warningBox, "none", 0);
    } else {
        selectedMenu = "0";
        colorSelectors.forEach((s) => {
            s.style.backgroundColor = "rgb(245, 245, 245)";
        });
    };
    
    colorSelectorParent.classList.remove("colorSelectParentClicked");
    setDisplay(colorSelectorParent, "none", 0);
    settingCover.classList.remove("settingCoverDisplay");
    setDisplay(settingCover, "none", 700);
    settingIconWrapper.classList.add("hover");
    settingIcon.classList.remove("settingIconClicked");
});

setInterval(() => {
    const d = new Date;
    const hour = d.getHours();
    const minute = d.getMinutes();
    const second = d.getSeconds();
    const millis = d.getMilliseconds();
    $(".secondWrapper").css('transform', `rotate(${millis * 6 / 1000 + second * 6}deg)`);
    $(".minuteWrapper").css('transform', `rotate(${minute * 6 + second / 10 + millis / 10000}deg)`);
    $(".hourWrapper").css('transform', `rotate(${hour * 30 + minute / 2 + second / 120 + millis / 120000}deg)`);
}, 25);

(() => {
    let flag = false;

    $('.equation').mouseover(function () {
        setDisplay(clockCircleCover, "flex", 0);
        clockCircleCover.classList.add('cccHoverd');
        $(this).css('color', 'rgb(245, 245, 245)').css('z-index', 60).css('transition', '.3s');
        flag = true;
    });

    document.onclick = function () {
        if (flag) {
            clockCircleCover.classList.remove('cccHoverd');
            setDisplay(clockCircleCover, "none", 0);
            $(".equation").css('color', '#444').css('z-index', 1);
            flag = false;
        }
    };
})();

const roadmapPointClicked = (elem) => {
    document.querySelectorAll(".textBox").forEach((t) => {
        t.classList.remove("textboxOpacity");
    })
    roadmapNav.classList.remove(roadmapNav.classList[2]);
    const no = elem.id.match(/\d/);
    roadmapNav.classList.add(`roadmapNavTo${no}`);
    setTimeout(() => {
        roadmapNav.style.transform = getComputedStyle(elem).transform;
    }, 500);
    const textBox = document.querySelector(`#textBox${no}`);
    textBox.classList.add("textboxOpacity");
    document.querySelector(".textBoxMain").classList.add("textboxOpacity");
};

signUpButton.addEventListener("click", function (event) {
    event.preventDefault();
    const userIdVal = userId.value;
    const pwdVal = pwd.value;
    const emailVal = email.value;
    const telVal = tel.value;

    if (!regExpTest(/^[a-zA-Z][a-zA-Z0-9]{3,11}$/, userId
        , "ID must be 4 to 12 characters long and can contain English letters and numbers.")) return false;

    if (!regExpTest(/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^A-Za-z0-9_]).{8,15}$/, pwd
        , "Password must be 8 to 15 characters long and include numbers, English letters, and special characters.")) return false;

    if (!isEqualPwd()) return false;

    if (!regExpTest(/^[\w]{4,}@[\w]+\.[a-zA-Z]{2,}$/, email
        , "Invalid email format.")) return false;
    
    if (!regExpTest(/^\d{3}-\d{4}-\d{4}$/, tel
    , "Invalid phone number format.")) return false;
        
    setDisplay(warningMsg2, "none", 0);
    const userData = {
        password: pwdVal,
        email: emailVal,
        tel: telVal
    };
    
    const jsonUserData = JSON.stringify(userData);
    localStorage.setItem(userIdVal, jsonUserData);
    
    const successBox = document.querySelector('.successBox');
    setDisplay(successBox, "block", 0);

    setTimeout(() => {
        setDisplay(successBox, "none", 0);
        settingCover.classList.remove("settingCoverDisplay");
        setDisplay(settingCover, "none", 0);
        signUpWrapper.classList.remove("colorSelectParentClicked");
        setDisplay(signUpWrapper, "none", 0);
        userId.value = '';
        pwd.value = '';
        pwdCheck.value = '';
        email.value = '';
        tel.value = '';
    }, 1000);
    
});
const warningMsg2 = document.querySelector(".warningMsg2");
const warningMsgText2 = document.querySelector(".warningMsgText2");
function regExpTest(regExp, el, msg) {
    if (regExp.test(el.value)) return true;
    setDisplay(warningMsg2, "flex", 0);
    warningMsgText2.innerHTML = msg;
    el.value = "";
    el.focus();
    return false;
};

function isEqualPwd() {
    if (pwd.value === pwdCheck.value) {
        return true;
    } else {
        setDisplay(warningMsg2, "flex", 0);
        warningMsgText2.innerHTML = "Passwords do not match.";
        pwd.select();
        return false;
    };
};

const loginClicked = () => {
    const id = document.getElementById("id");
    const password = document.getElementById("password");

    let flag = false;
    let key = "";
    let value = "";
    for (let i = 0; i < localStorage.length; i++) {
        key = localStorage.key(i);
        value = JSON.parse(localStorage.getItem(key)).password;
        if (id.value === key && password.value === value) {
            flag = true;
            break;
        };
    };

    if (flag) {
        loginInfoText.innerHTML = key;
        setDisplay(loginSuccess, "flex", 0);
    } else {
        setDisplay(loginFail, "flex", 0);
        setTimeout(() => {
            setDisplay(loginFail, "none", 0);
        }, 1000);
    };

    id.value = '';
    password.value = '';
};

const logoutClicked = () => {
    loginInfoText.innerHTML = "";
    setDisplay(loginSuccess, "none", 0);
};