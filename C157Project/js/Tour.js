AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Amulet",
        url: "./assets/thumbnails/AmuletGreenCover.jpeg",
      },
      {
        id: "budapest",
        title: "Black Panther",
        url: "./assets/thumbnails/BlackPantherCover.webp",
      },

      {
        id: "eiffel-tower",
        title: "Elektra",
        url: "./assets/thumbnails/ElektraCover.jpg",
      },
      {
        id: "new-york-city",
        title: "Wolverine",
        url: "./assets/thumbnails/WolverineCover.jpeg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 7;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;
      
      // Border Element
      const borderEl=this.createBorder(position, item.id)
      // Thumbnail Element
     const thumbNail=this.createThumbNail(item)
     borderEl.appendChild(thumbNail)
      // Title Text Element
      const titleEl=this.createTitleEl(position, item)
      borderEl.appendChild(titleEl)
      this.placesContainer.appendChild(borderEl);
    }
  },
 createBorder: function(position, id){
  const entityEl=document.createElement("a-entity")
  entityEl.setAttribute("id", id)
  entityEl.setAttribute("visible", true)
  entityEl.setAttribute("geometry", {
    primitive: "ring",
    radiusInner: 0.0000000000001,
    radiusOuter: 0.0000000000002
  })
  entityEl.setAttribute("position", position)
  entityEl.setAttribute("material", {
    color: "#000000",
    opacity: 1
  })
  return entityEl 
 },
createThumbNail: function(item){
  const entityEl=document.createElement("a-entity")
  entityEl.setAttribute("visible", true)
  entityEl.setAttribute("geometry", {
    primitive: "plane",
    width: 20,
    height: 28
  })
  entityEl.setAttribute("material", {
    src: item.url
  })
  return entityEl 
 },
createTitleEl: function(position, item){
  const entityEl=document.createElement("a-entity")
  entityEl.setAttribute("visible", true)
  entityEl.setAttribute("text", {
    font: "exo2bold",
    align: "center",
    width: 70,
    color: "#e65100",
    value: item.title
  })
  const elPosition=position
  elPosition.y=-20
  entityEl.setAttribute("position", elPosition)

  return entityEl 
 }, 
});
