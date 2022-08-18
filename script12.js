const plusicon = document.getElementById("plusicon1");
const pop = document.querySelector(".pop");
const innerbox = document.querySelector(".box3");
const noitem=document.getElementById("noitem1");
plusicon.addEventListener("click", function () {
  const firstpopup = document.createElement("div");
  const firstpopupelementone = document.createElement("div");
  const firstpopupelementtwo = document.createElement("p");
  const firstpopupelementthree = document.createElement("input");
  const firstpopupelementfour = document.createElement("button");
  const firstpopupelementfive = document.createElement("button");
  /////append child one div
  pop.append(firstpopup);
  firstpopup.append(firstpopupelementone);
  firstpopupelementone.append(firstpopupelementtwo);
  firstpopupelementone.append(firstpopupelementthree);
  firstpopupelementthree.type = "text";
  firstpopupelementone.append(firstpopupelementfour);
  firstpopupelementone.append(firstpopupelementfive);
  //// add classes
  firstpopup.className = "container3";
  firstpopupelementone.className = "box4";
  firstpopupelementtwo.className = "addlist";
  firstpopupelementthree.id = "input1";
  firstpopupelementfour.id = "add1";
  firstpopupelementfive.id = "close1";
  /// add text
  firstpopupelementtwo.innerText = "Add New List";
  firstpopupelementfour.innerText = "Add";
  firstpopupelementfive.innerText = "Close";
  console.log("hello");
  //----------close button-------------
  firstpopupelementfive.addEventListener("click", function () {
    pop.removeChild(firstpopup);
  });
  //-----------add button------
  firstpopupelementfour.addEventListener("click", function () {
    if (firstpopupelementthree.value === "") {
      alert("enter some task");
    } else {
      pop.removeChild(firstpopup);
      noitem.style.visibility="hidden";
      const outerelem = document.createElement("div");
      const elem1 = document.createElement("div");
      const subelem1 = document.createElement("p");
      const subelempara = document.createElement("p");
      const subelem2 = document.createElement("hr");
      const subelem3 = document.createElement("div");
      const subelem4 = document.createElement("div");
      const subelem5 = document.createElement("i");
      const subelem6 = document.createElement("div");
      const subelem7 = document.createElement("i");
      ///append child one div
      innerbox.append(outerelem);
      outerelem.append(elem1);
      elem1.append(subelem1);
      elem1.append(subelempara);
      elem1.append(subelem2);
      elem1.append(subelem3);
      elem1.append(subelem4);
      elem1.append(subelem6);
      subelem4.append(subelem5);
      subelem6.append(subelem7);
      //add class and id
      outerelem.className = "outerelem";
      elem1.className = "trips";
      subelem1.className = "tripplace";
      subelempara.className = "subelempara";
      subelem3.id = "underlinetask";
      subelem4.id = "plusicon2";
      subelem6.id = "delete";
      subelem5.className = "fas fa-plus-circle";
      subelem7.className = "far fa-trash-alt";
      subelem1.innerText = firstpopupelementthree.value;
      subelempara.innerText=firstpopupelementthree.value;
      firstpopupelementthree.value = "";
      ///delete cords
      subelem7.addEventListener("click", () => {
        innerbox.removeChild(outerelem);
        if (firstpopupelementthree.innerText === "") {
           document.querySelector(".box1").style.visibility="visible";
           document.querySelector(".backbutton").style.visibility="hidden";
           //noitem.style.visibility="visible";
        }
      });
        ///click trip to paris on next page
        subelem1.addEventListener("click",function(){
             elem1.style.position="relative";
             elem1.style.top="10%";
             elem1.style.left="40%";
             outerelem.style.height="1100px"
             outerelem.style.width="100%"
             outerelem.style.position="absolute";
             outerelem.style.top="20%";
             outerelem.style.left="0px";
             outerelem.style.backgroundColor="black";
             outerelem.style.zIndex="1";
             subelempara.style.position="absolute";
             subelempara.style.top="-200px";
             subelempara.style.left="10%"
             subelempara.style.display="block";
             document.querySelector(".box1").style.visibility="hidden";
             document.querySelector(".backbutton").style.visibility="visible";
        });
        ////////////back button
        document.querySelector(".backbutton").addEventListener("click",function(){
           elem1.style.position="relative";
           elem1.style.top="0px ";
           elem1.style.left="0px ";
           outerelem.style.position="relative";
           outerelem.style.top="";
           outerelem.style.height="320px"
           outerelem.style.width="230px"
           outerelem.style.zIndex="0";
           subelempara.style.display="none"
          document.querySelector(".box1").style.visibility="visible";
          document.querySelector(".backbutton").style.visibility="hidden";
        })
      ///add now popup
      subelem5.addEventListener("click", function () {
        const firstpopup1 = document.createElement("div");
        const firstpopupelementone1 = document.createElement("div");
        const firstpopupelementtwo1 = document.createElement("p");
        const firstpopupelementthree1 = document.createElement("input");
        const firstpopupelementfour1 = document.createElement("button");
        const firstpopupelementfive1 = document.createElement("button");
        /////append child one div
        pop.append(firstpopup1);
        firstpopup1.append(firstpopupelementone1);
        firstpopupelementone1.append(firstpopupelementtwo1);
        firstpopupelementone1.append(firstpopupelementthree1);
        firstpopupelementthree1.type = "text";
        firstpopupelementone1.append(firstpopupelementfour1);
        firstpopupelementone1.append(firstpopupelementfive1);
        //// add classes
        firstpopup1.className = "container3";
        firstpopupelementone1.className = "box5";
        firstpopupelementtwo1.className = "addlist1";
        firstpopupelementthree1.id = "input2";
        firstpopupelementfour1.id = "add2";
        firstpopupelementfive1.id = "close2";
        /// add text
        firstpopupelementtwo1.innerText = "Add New List";
        firstpopupelementfour1.innerText = "Add";
        firstpopupelementfive1.innerText = "Close";
        console.log("hello");
        //----------close button-------------
        firstpopupelementfive1.addEventListener("click", function () {
          pop.removeChild(firstpopup1);
        });
        ///--- add item inside cards
        firstpopupelementfour1.addEventListener("click", function () {
          if (firstpopupelementthree1.value === "") {
            alert("enter some task");
          } else {
            pop.removeChild(firstpopup1);
            const innerecarditem = document.createElement("ul");
            let innerecardtext = document.createElement("li");
            let innerecardbutton = document.createElement("button");
            /// add class name
            innerecarditem.className = "textunderline";
            innerecardtext.className = "textunderlinetask";
            innerecardbutton.className = "button3";
            innerecardbutton.innerText = "Mark Done";
            innerecardtext.innerText = firstpopupelementthree1.value;
            subelem3
              .appendChild(innerecarditem)
              .appendChild(innerecardtext)
              .appendChild(innerecardbutton);
            innerecardbutton.addEventListener("click", function () {
              innerecardtext.style.textDecoration = "line-through";
              innerecardtext.style.color = "orangered";
              innerecarditem.style.textAlign = "center";
              innerecarditem.style.marginLeft = "-50px";
              innerecardtext.removeChild(innerecardbutton);
            });
          }
        });
      });
    }
  });
});
