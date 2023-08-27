// let cursor;

// document.addEventListener("mousemove", (e) => {
//     if (!cursor) {
//         cursor = document.createElement("div");
//         cursor.className = "custom-cursor";
//         document.body.appendChild(cursor);
//     }

//     cursor.style.left = e.clientX + "px";
//     cursor.style.top = e.clientY + "px";
// });

// document.addEventListener("mouseout", () => {
//     if (cursor) {
//         cursor.remove();
//         cursor = null;
//     }
// });



let cursor;

document.addEventListener("mousemove", (e) => {
    if (!cursor) {
        cursor = document.createElement("div");
        cursor.className = "custom-cursor";
        document.body.appendChild(cursor);
    }

    cursor.style.left = (e.clientX+20) + "px";
    cursor.style.top = (e.clientY+20) + "px";
});

document.addEventListener("mouseout", () => {
    if (cursor) {
        cursor.remove();
        cursor = null;
    }
});


var navlinks=document.getElementById("navlinks");
function showmenu()
{
    navlinks.style.right="0";
}
function hidemenu()
{
    navlinks.style.right="-150px"
}


document.getElementById("clicableDiv1").addEventListener("click", function() {
    window.location.href = "blogs.html"; // Replace with your desired link
  });
  

  
document.getElementById("clicableDiv2").addEventListener("click", function() {
    window.location.href = "blogs2.html"; // Replace with your desired link
  });
  
  document.getElementById("clicableDiv3").addEventListener("click", function() {
    window.location.href = "blogs3.html"; // Replace with your desired link
  });
  