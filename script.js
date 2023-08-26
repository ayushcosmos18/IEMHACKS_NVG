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

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

document.addEventListener("mouseout", () => {
    if (cursor) {
        cursor.remove();
        cursor = null;
    }
});
