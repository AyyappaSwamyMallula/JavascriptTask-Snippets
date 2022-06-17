
"use strict";
var activeTab = [];
activeTab[0] = { name: "first", status: true };
activeTab[1] = { name: "second", status: false };
activeTab[2] = { name: "third", status: false };
var userData = [];
userData[0] = { label: "tab1", status: false };
userData[1] = { label: "tab2", status: false };
userData[2] = { label: "tab3", status: false };
var userObj1 = {};
var userObj2 = {};
var progressButton1 = document.getElementById("but1");
var progressButton2 = document.getElementById("but2");
progressButton2.disabled = true;
var progressButton3 = document.getElementById("but3");
progressButton3.disabled = true;
function statusChange() {
    if (userData[0].status == false) {
        userData[0].status = true;
        storeStatus();
    }
    else {
        userData[1].status = true;
        storeStatus();
    }
}
function storeTab() {
    localStorage.setItem("tabstatus", JSON.stringify(activeTab));
}
function getTab() {
    var tab = JSON.parse(localStorage.getItem("tabstatus"));
    if (tab[0].status == true) {
        nextFunc();
    }
    if (tab[1].status == true) {
        previewFunc();
    }
    if (tab[2].status == true) {
        saveandSubmit();
    }
}
function storeStatus() {
    localStorage.setItem("status", JSON.stringify(userData));
}
function getStatus() {
    var tabStatus = JSON.parse(localStorage.getItem("status"));
    if (tabStatus[0].status == true) {
        progressButton2.disabled = false;
        previewFunc();
        tik1();
    }
    if (tabStatus[1].status == true) {
        progressButton3.disabled = false;
        saveandSubmit();
        tik2();
    }
}
function storeData1() {
    localStorage.setItem("userData1", JSON.stringify(userObj1));
}
function storeData2() {
    localStorage.setItem("userData2", JSON.stringify(userObj2));
}
function getData() {
    var userdata1 = JSON.parse(localStorage.getItem("userData1"));
    document.getElementById("cname").value = userdata1.name;
    document.getElementById("cage").value = userdata1.age;
    document.getElementById("cemail").value = userdata1.email;
    document.getElementById("cmobile").value = userdata1.mobile;
    document.getElementById("cdistrict").value = userdata1.district;
    document.getElementById("cdob").value = userdata1.dob;
    var myGender = userdata1.gender;
    if (myGender == "Male") {
        document.getElementById("gender1").checked = true;
    }
    if (myGender == "Female") {
        document.getElementById("gender2").checked = true;
    }
    if (myGender == "Other") {
        document.getElementById("gender3").checked = true;
    }
    document.getElementById("dname").innerHTML = userdata1.name.toUpperCase();
    document.getElementById("dage").innerHTML = userdata1.age;
    document.getElementById("dgender").innerHTML = userdata1.gender.toUpperCase();
    document.getElementById("ddistrict").innerHTML = userdata1.district.toUpperCase();
    document.getElementById("ddob").innerHTML = userdata1.dob;
    document.getElementById("dmobile").innerHTML = userdata1.mobile;
    document.getElementById("demail").innerHTML = userdata1.email;
    var userdata2 = JSON.parse(localStorage.getItem("userData2"));
    if (!userdata2) {
        return null;
    }
    else {
        document.getElementById("10thi").value = userdata2.tenthInstitute;
        document.getElementById("12thi").value = userdata2.twelthInstitute;
        document.getElementById("ugi").value = userdata2.ugInstitute;
        document.getElementById("10thr").value = userdata2.tenthRegister_number;
        document.getElementById("12thr").value = userdata2.twelthRegister_number;
        document.getElementById("ugr").value = userdata2.ugRegister_number;
        document.getElementById("10thm").value = userdata2.tenthMark;
        document.getElementById("12thm").value = userdata2.twelthMark;
        document.getElementById("ugm").value = userdata2.ugMark;
        document.getElementById("d10i").innerHTML = userdata2.tenthInstitute.toUpperCase();
        document.getElementById("d10r").innerHTML = userdata2.tenthRegister_number;
        document.getElementById("d10m").innerHTML = userdata2.tenthMark + "%";
        document.getElementById("d12i").innerHTML = userdata2.twelthInstitute.toUpperCase();
        document.getElementById("d12r").innerHTML = userdata2.twelthRegister_number;
        document.getElementById("d12m").innerHTML = userdata2.twelthMark + "%";
        document.getElementById("dugi").innerHTML = userdata2.ugInstitute.toUpperCase();
        document.getElementById("dugr").innerHTML = userdata2.ugRegister_number;
        document.getElementById("dugm").innerHTML = userdata2.ugMark + "%";
    }
}

function tik1() {
    progressButton1.style.background = "green";
    progressButton1.innerHTML = "✔";
    progressButton1.style.border = "1px solid green";
}
function untik1() {
    progressButton1.style.background = "black";
    progressButton1.innerHTML = "1";
    progressButton1.style.border = "1px solid black";
}
function tik2() {
    progressButton2.style.background = "green";
    progressButton2.innerHTML = "✔";
    progressButton2.style.border = "1px solid green";
}
function untik2() {
    progressButton2.style.background = "black";
    progressButton2.innerHTML = "2";
    progressButton2.style.border = "1px solid black";
}
function tik3() {
    progressButton3.style.background = "green";
    progressButton3.innerHTML = "✔";
    progressButton3.style.border = "1px solid green";
}
function untik3() {
    progressButton3.style.background = "black";
    progressButton3.innerHTML = "3";
    progressButton3.style.border = "1px solid black";
}
function final() {
    localStorage.removeItem("status");
    localStorage.removeItem("tabstatus");
    localStorage.removeItem("userData1");
    localStorage.removeItem("userData2");
    document.write("done");
}
function nextFunc() {
    getData();
    var firstPage = document.getElementById("card1");
    firstPage.style.display = "block";
    var secondPage = document.getElementById("card2");
    secondPage.style.display = "none";
    var finalPage = document.getElementById("card3");
    finalPage.style.display = "none";
    activeTab[0].status = true;
    activeTab[1].status = false;
    activeTab[2].status = false;
    storeTab();
    var tabStatus = JSON.parse(localStorage.getItem("status"));
    if (tabStatus[0].status == true) {
        progressButton2.disabled = false;
        tik1();
    }
    if (tabStatus[0].status == true && tabStatus[1].status == true) {
        progressButton2.disabled = false;
        tik1();
        progressButton3.disabled = false;
        tik2();
    }
}
function previewFunc() {
    getData();
    var firstPage = document.getElementById("card1");
    firstPage.style.display = "none";
    var secondPage = document.getElementById("card2");
    secondPage.style.display = "block";
    var finalPage = document.getElementById("card3");
    finalPage.style.display = "none";
    activeTab[0].status = false;
    activeTab[1].status = true;
    activeTab[2].status = false;
    storeTab();
    var tabStatus = JSON.parse(localStorage.getItem("status"));
    if (tabStatus[0].status == true) {
        progressButton2.disabled = false;
        tik1();
    }
    if (tabStatus[0].status == true && tabStatus[1].status == true) {
        progressButton2.disabled = false;
        tik1();
        progressButton3.disabled = false;
        tik2();
    }
}
function enableButton() {
    var saveButton = document.getElementById("helpIdb");
    if (document.getElementById("c").checked == true) {
        saveButton.disabled = false;
        tik3();
    }
    if (document.getElementById("c").checked == false) {
        saveButton.disabled = true;
        untik3();
    }
}
function saveandSubmit() {
    getData();
    var firstPage = document.getElementById("card1");
    firstPage.style.display = "none";
    var secondPage = document.getElementById("card2");
    secondPage.style.display = "none";
    var finalPage = document.getElementById("card3");
    finalPage.style.display = "block";
    activeTab[0].status = false;
    activeTab[1].status = false;
    activeTab[2].status = true;
    storeTab();
    getData();
    progressButton2.disabled = false;
    tik1();
    progressButton3.disabled = false;
    tik2();
}
function validateForm1() {
    var response = document.getElementById("helpId1");
    var cname = document.getElementById("cname").value;
    var response2 = document.getElementById("helpId2");
    var cage = document.getElementById("cage").value;
    var response3 = document.getElementById("helpId3");
    if (document.getElementById("gender1").checked) {
        var cgender = document.getElementById("gender1").value;
    }
    if (document.getElementById("gender2").checked) {
        var cgender = document.getElementById("gender2").value;
    }
    if (document.getElementById("gender3").checked) {
        var cgender = document.getElementById("gender3").value;
    }
    var cdistrict = document.getElementById("cdistrict").value;
    userObj1.district = cdistrict;
    var response4 = document.getElementById("helpId4");
    var cdob = document.getElementById("cdob").value;
    var response5 = document.getElementById("helpId5");
    var cmobile = document.getElementById("cmobile").value;
    var response6 = document.getElementById("helpId6");
    var cemail = document.getElementById("cemail").value;
    var namePattern = /^[a-zA-Z ]*$/;
    if (cname == "" || namePattern.test(cname) == false) {
        response.innerHTML = "Please Enter a Valid Name";
        response.style.color = "red";
        untik1();
        return false;
    }
    else {
        response.innerHTML = "Candidate's Name";
        response.style.color = "white";
        userObj1.name = cname;
    }
    if (cage > 24 || cage < 18) {
        response2.innerHTML = "Age Should be in between 18 and 24";
        response2.style.color = "red";
        untik1();
        return false;
    }
    else {
        response2.innerHTML = "Candidate's Age";
        response2.style.color = "white";
        userObj1.age = cage;
    }
    if (document.getElementById("gender1").checked == false && document.getElementById("gender2").checked == false && document.getElementById("gender3").checked == false) {
        response3.innerHTML = "Please Select Your Gender";
        response3.style.color = "red";
        untik1();
        return false;
    }
    else {
        response3.innerHTML = "Candidate's Gender";
        response3.style.color = "white";
        userObj1.gender = cgender;
    }
    if (cdob == "") {
        response4.innerHTML = "Please Enter Your DOB";
        response4.style.color = "red";
        untik1();
        return false;
    }
    else {
        response4.innerHTML = "Candidate's DOB";
        response4.style.color = "white";
        userObj1.dob = cdob;
    }
    var mobilePattern = /^[6-9]\d{9}$/;
    if (mobilePattern.test(cmobile) == false) {
        response5.innerHTML = "Please Enter A Valid Mobile Number";
        response5.style.color = "red";
        untik1();
        return false;
    }
    else {
        response5.innerHTML = "Candidate's Mobile";
        response5.style.color = "white";
        userObj1.mobile = cmobile;
    }
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailPattern.test(cemail) == false) {
        response6.innerHTML = "Please Enter A Valid E-mail ID";
        response6.style.color = "red";
        untik1();
        return false;

    }
    else {
        userObj1.email = cemail;
        response6.innerHTML = "Candidate's E-mail";
        response6.style.color = "white";
        storeData1();
        statusChange();
        getStatus();
    }
}
function validateForm2() {
    var response7 = document.getElementById("helpId7");
    var tenthI = document.getElementById("10thi").value;

    var iPattern = /^[a-zA-Z ]*$/;

    if (tenthI == "" || iPattern.test(tenthI) == false) {
        response7.innerHTML = "Please Enter a Valid Institute Name";
        response7.style.color = "red";
        untik2();
        return false;
    }
    else {
        response7.innerHTML = "10th Institute";
        response7.style.color = "white";
        userObj2.tenthInstitute = tenthI;
    }
    var response8 = document.getElementById("helpId8");
    var twelthI = document.getElementById("12thi").value;
    var iPattern = /^[a-zA-Z ]*$/;
    if (twelthI == "" || iPattern.test(twelthI) == false) {
        response8.innerHTML = "Please Enter a Valid Institute Name";
        response8.style.color = "red";
        untik2();
        return false;
    }
    else {
        response8.innerHTML = "12th Institute";
        response8.style.color = "white";
        userObj2.twelthInstitute = twelthI;
    }
    var response9 = document.getElementById("helpId9");
    var ugI = document.getElementById("ugi").value;
    var iPattern = /^[a-zA-Z ]*$/;
    if (ugI == "" || iPattern.test(ugI) == false) {
        response9.innerHTML = "Please Enter a Valid Institute Name";
        response9.style.color = "red";
        untik2();
        return false;
    }
    else {
        response9.innerHTML = "UG Institute";
        response9.style.color = "white";
        userObj2.ugInstitute = ugI;
    }
    var response10 = document.getElementById("helpId10");
    var tenthR = document.getElementById("10thr").value;
    var rPattern = /^[0-9]{6}$/;
    if (tenthR == "" || rPattern.test(tenthR) == false) {
        response10.innerHTML = "Please Enter a Valid Register Number";
        response10.style.color = "red";
        untik2();
        return false;
    }
    else {
        response10.innerHTML = "Register Number";
        response10.style.color = "white";
        userObj2.tenthRegister_number = tenthR;
    }
    var response11 = document.getElementById("helpId11");
    var twelthR = document.getElementById("12thr").value;
    var rPattern = /^[0-9]{6}$/;
    if (twelthR == "" || rPattern.test(twelthR) == false) {
        response11.innerHTML = "Please Enter a Valid Register Number";
        response11.style.color = "red";
        untik2();
        return false;
    }
    else {
        response11.innerHTML = "Register Number";
        response11.style.color = "white";
        userObj2.twelthRegister_number = twelthR;
    }
    var response12 = document.getElementById("helpId12");
    var ugR = document.getElementById("ugr").value;
    var rPattern = /^[0-9]{6}$/;
    if (ugR == "" || rPattern.test(ugR) == false) {
        response12.innerHTML = "Please Enter a Valid Register Number";
        response12.style.color = "red";
        untik2();
        return false;
    }
    else {
        response12.innerHTML = "Register Number";
        response12.style.color = "white";
        userObj2.ugRegister_number = ugR;
    }
    var response13 = document.getElementById("helpId13");
    var tenthM = document.getElementById("10thm").value;
    var mPattern = /^[0-9]{2}$/;
    if (tenthM == "" || mPattern.test(tenthM) == false) {
        response13.innerHTML = "Please Enter Your mark %";
        response13.style.color = "red";
        untik2();
        return false;
    }
    else {
        response13.innerHTML = "% of Mark";
        response13.style.color = "white";
        userObj2.tenthMark = tenthM;
    }
    var response14 = document.getElementById("helpId14");
    var twelthM = document.getElementById("12thm").value;
    var mPattern = /^[0-9]{2}$/;
    if (twelthM == "" || mPattern.test(twelthM) == false) {
        response14.innerHTML = "Please Enter Your mark %";
        response14.style.color = "red";
        untik2();
        return false;
    }
    else {
        response14.innerHTML = "% of Mark";
        response14.style.color = "white";
        userObj2.twelthMark = twelthM;
    }
    var response15 = document.getElementById("helpId15");
    var ugM = document.getElementById("ugm").value;
    var mPattern = /^[0-9]{2}$/;
    if (ugM == "" || mPattern.test(ugM) == false) {
        response15.innerHTML = "Please Enter Your mark %";
        response15.style.color = "red";
        untik2();
        return false;
    }
    else {
        response15.innerHTML = "% of Mark";
        response15.style.color = "white";
        userObj2.ugMark = ugM;
        storeData2();
        statusChange();
        getStatus();
    }
}