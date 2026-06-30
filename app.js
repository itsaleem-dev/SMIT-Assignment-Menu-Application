const menu = [
    {
        title: "Buttermilk Pancakes",
        price: "$15.99",
        category: "breakfast",
        img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500",
        desc: "Delicious pancakes with syrup."
    },
    {
        title: "Diner Double",
        price: "$13.99",
        category: "lunch",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
        desc: "Juicy double burger."
    },
    {
        title: "Godzilla Milkshake",
        price: "$6.99",
        category: "shakes",
        img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500",
        desc: "Sweet creamy milkshake."
    },
    {
        title: "Country Delight",
        price: "$20.99",
        category: "breakfast",
        img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500",
        desc: "Country style breakfast."
    },
    {
        title: "Egg Attack",
        price: "$22.99",
        category: "lunch",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
        desc: "Special egg burger."
    },
    {
        title: "Oreo Dream",
        price: "$18.99",
        category: "shakes",
        img: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=500",
        desc: "Chocolate oreo shake."
    }
];

const menuContainer = document.querySelector(".menu");
const buttons = document.querySelectorAll(".btns button");

function displayMenu(items) {
    menuContainer.innerHTML = items.map(item => `
        <div class="card">
            <img src="${item.img}" alt="">
            <div class="content">
                <div class="heading">
                    <h4>${item.title}</h4>
                    <span>${item.price}</span>
                </div>
                <p>${item.desc}</p>
            </div>
        </div>
    `).join("");
}

displayMenu(menu);

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const category = btn.dataset.category;

        if (category === "all") {
            displayMenu(menu);
        } else {
            const filteredMenu = menu.filter(item => item.category === category);
            displayMenu(filteredMenu);
        }
    });
});