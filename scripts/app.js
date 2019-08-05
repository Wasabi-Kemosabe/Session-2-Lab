var catalog = [];

function getCatalog() {
    this.catalog = [{
            title: "Marvel's Spider-Man",
            description: "Sony Interactive Entertainment, Insomniac Games, and Marvel have teamed up to create a brand-new and authentic Spider-Man adventure. This isn’t the Spider-Man you’ve met or ever seen before. This is an experienced Peter Parker who’s more masterful at fighting big crime in New York City. At the same time, he’s struggling to balance his chaotic personal life and career while the fate of millions of New Yorkers rest upon his shoulders.",
            price: 19.99,
            image: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/99/UP9000-CUSA02299_00-MARVELSSPIDERMAN//image?_version=00_09_000&platform=chihiro&w=720&h=720&bg_color=000000&opacity=100',
            category: 'action'
        },
        {
            title: 'Resident Evil 2 Remake',
            description: "A deadly virus engulfs the residents of Raccoon City in September of 1998, plunging the city into chaos as flesh eating zombies roam the streets for survivors. An unparalleled adrenaline rush, gripping storyline, and unimaginable horrors await you. Witness the return of Resident Evil 2.",
            price: 59.99,
            image: 'https://s1.gaming-cdn.com/images/products/2709/271x377/resident-evil-2-biohazard-re2-cover.jpg',
            category: 'action'
        },
        {
            title: 'Final Fantasy XIV: Shadowbringer',
            description: "Take part in the next saga of the critically acclaimed FINAL FANTASY® XIV Online with the next legendary expansion pack—SHADOWBRINGERS! Explore breathtaking new environments, encounter exotic new races, master exciting new jobs, and fight alongside prominent characters with the new Trust system as you embark on a new journey as the Warrior of Darkness! With over 16 million adventurers worldwide, join the next chapter and become what you must. Become the Warrior of Darkness! ",
            price: 39.99,
            image: 'https://i.pinimg.com/originals/66/ba/b4/66bab460b53398ff13cf6bd7c0ca966c.jpg',
            category: 'role-playing'
        },
        {
            title: 'Red Dead Redemption 2',
            description: "The end of the wild west era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.",
            price: 39.99,
            image: 'https://images.g2a.com/newlayout/1080x1080/1x1x0/6ad28ca9ec39/5bc9c521ae653a5fd7677389',
            category: 'action'
        }
    ];
};

function displayCatalog() {
    // get the reference to ul
    var ul = $("#catalog");

    // for every item on the catalog array
    for (let i = 0; i < catalog.length; i++) {
        const item = catalog[i];

        // create an li
        var li = `<div class="card text-white bg-info mb-3" style="width: 18rem;">
        <img src="${item.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.description}</p>
          <a href="#" class="btn btn-primary">Add to cart</a>
          <h6>${item.price}</h6>
        </div>
      </div>`;

        // add the li to ul
        ul.append(li);
    }
};

function searchByTitle() {
    var txtInput = $('#searchBar').val();
    var foundItem;
    for (let i = 0; i < catalog.length; i++) {
        const element = catalog[i];
        if (element.title === txtInput) {
            foundItem = element;
        }
    }
    var li = `<div class="card text-white bg-info mb-3" style="width: 18rem;">
        <img src="${foundItem.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${foundItem.title}</h5>
          <p class="card-text">${foundItem.description}</p>
          <a href="#" class="btn btn-primary">Add to cart</a>
          <h6>${foundItem.price}</h6>
        </div>
      </div>`;
    $("#catalog").html(li);
}

function init() {
    console.log('Init catalog page');

    $('#button-addon2').click(searchByTitle);
    $('#searchBar').keypress(function (args) {
        if (args.keyCode === 13) {
            searchByTitle();
        }
    });

    getCatalog();
    displayCatalog();
}

window.onload = init;