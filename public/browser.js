console.log("FrontEnd JS ishga tushdi"); // Frontend JS ishga tushdi

let createField = document.getElementById("create-field");

// Element uchun HTML shablonni yaratish funksiyasi
function itemTemplate(data) {
    return (`
        <li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
            <span class="item-text">${data.reja}</span>
            <div>
                <button data-id="${data._id}" class="edit-me btn btn-secondary btn-sm mr-1">O'zgartirish</button>
                <button data-id="${data._id}" class="delete-me btn btn-danger btn-sm">O'chirish</button>
            </div>
        </li>
    `);
}

// Yangi element yaratish uchun formani yuborish voqeasiga eshituvchi
document.getElementById("create-form").addEventListener("submit", function (e) {
    e.preventDefault();

    axios.post("/create-item", { reja: createField.value })
        .then((response) => {
            document.getElementById("item-list").insertAdjacentHTML(
                "beforeend",
                itemTemplate(response.data)
            );
            createField.value = ""; // Maydonni tozalash
            createField.focus(); // Kursorni maydonga qaytarish
        })
        .catch((err) => {
            console.log("Element yaratishda xato:", err); // Xatolarni aniq ko'rsatish
        });
});

// O'chirish va o'zgartirish operatsiyalarini boshqarish uchun klik voqeasi eshituvchisi
document.addEventListener("click", function (e) {
    // O'chirish operatsiyasi
    if (e.target.classList.contains("delete-me")) {
        if (confirm("Aniq o'chirmoqchimisiz?")) {
            axios.post("/delete-item", { id: e.target.getAttribute("data-id") })
                .then((response) => {
                    console.log("Element muvaffaqiyatli o'chirildi:", response.data);
                    e.target.parentElement.parentElement.remove(); // Elementni DOMdan olib tashlash
                })
                .catch((err) => {
                    console.log("Elementni o'chirishda xato:", err);
                });
        }
    }
    
    // O'zgartirish operatsiyasi
    if (e.target.classList.contains("edit-me")) {
        let userInput = prompt(
            "Yangi matn kiriting", 
            e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
        );
        if (userInput) {
            axios.post("/edit-item", {
                id: e.target.getAttribute("data-id"),
                new_input: userInput,
            })
            .then((response) => {
                console.log("Element muvaffaqiyatli o'zgartirildi:", response.data);
                e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput;
            })
            .catch((err) => {
                console.log("Iltimos qaytadan harakat qiling:", err);
            });
        }
    }
});

// Barcha elementlarni tozalash tugmasi uchun eshituvchi
document.getElementById("clear-all").addEventListener("click", function() {
    axios.post("/delete-all", { delete_all: true })
        .then((response) => {
            alert(response.data.state);
            document.location.reload(); // Sahifani yangilash
        })
        .catch((err) => {
            console.log("Iltimos qaytadan harakat qiling:", err);
        });
});
