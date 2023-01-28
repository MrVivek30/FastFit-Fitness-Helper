let arr = ["Hundreds of Professionally-Built Workout Videos","Wide Selection of Healthy Living Articles","Healthy and Convenient Recipes","Positive and Encouraging Community","Interactive Workout Calendar","Vlogs, Behind-the-Scenes Updates, Weekly Giveaways","Search and Filter Videos to Find Exactly What You Need","Save Your Favorite Videos","Ads-Free Website and Videos","Surprise MeWorkout Selection Tool","Statistics for Your Activities","Enter and Track Custom Workouts","Trackers to See Your Progress","Exclusive Workouts","Exclusive Workout Challenges","See Workout History and Take Notes on Individual Workouts","Additional Video Filters for More Refinement","Tagging to Help Organize Videos","Create, Save, and Repeat Personal Routines","Ability to Mark Rest Day Complete","One Click Access to Find Similar Workouts","Custom Difficulty and Minute Tracking for more Accurate Workout Data","Schedule Recipes on the Calendar","Individual Recipe Dashboards with Tags and Notes","Schedule Expert Articles on the Calendar","Individual Expert Articles Dashboards with Tags and Notes","Workout Program Shelf to help organization your active programs","Interactive Meal Plans for Healthy Eating",""]
let tbody = document.querySelector("tbody")
arr.forEach((element,index) => {
    let tr = document.createElement("tr");
    let td1;
    if(element !== ""){
        td1 = document.createElement("td");
        td1.innerText = element;
    }else{
        td1 = document.createElement("td");
        td1.innerText = ""
        
    }

    let td2;
    if(element !== ""){
        td2 = document.createElement("td");
        td2.setAttribute("class","membershipfeatures_cell")

        let span = document.createElement("span");
        span.setAttribute("class","material-symbols-outlined")
        span.innerText = "check_circle";

        td2.append(span)
    }else{
        td2 = document.createElement("td");
        td2.setAttribute("class","membershipfeatures_cell")

        let div1 = document.createElement("div");
        div1.innerText = "Starting At"

        let div2 = document.createElement("div");
        div2.innerText = "$6.67"

        let div3 = document.createElement("div");
        div3.innerText = "Per Month,"
        

        let div4 = document.createElement("div");
        div4.innerText = "Paid Annually"
        div4.style.marginTop = "0%"

        let div5 = document.createElement("div");
        let button = document.createElement("button");
        button.innerText = "JOIN";

        div5.append(button);
        td2.append(div1,div2,div3,div4,div5);
    }
    let td3;
    if(index < 9){
        td3 = document.createElement("td");
        td3.setAttribute("class","membershipfeatures_cell");

        let span = document.createElement("span");
        span.setAttribute("class","material-symbols-outlined");
        span.innerText = "check_circle";

        td3.append(span)
    }
    else if(element == ""){

        td3 = document.createElement("td");
        td3.setAttribute("class","membershipfeatures_cell")

        let div1 = document.createElement("div");
        div1.innerText = "Free"

        let div2 = document.createElement("div");
        div2.innerText = "No Credit,"

        let div3 = document.createElement("div");
        div3.innerText = "Card required"
        div3.style.marginTop = "0%"

        td3.append(div1,div2,div3)
    }
    else{
        td3 = document.createElement("td");
        td3.setAttribute("class","membershipfeatures_cell")
        td3.innerText = "";
    }

    tr.append(td1,td2,td3);
    tbody.append(tr)
});