

let slider = async ()=>{
    let url = "https://jsonplaceholder.typicode.com/photos?_limit=20";

    let apiData = await fetch(url);
    let resp = await apiData.json();
    let slide = document.querySelector(".slider");
   
    resp.map((e)=>{
        // console.log(e.id);
        let img =document.createElement("img");
        img.src = `https://picsum.photos/250/350?random=${e.id}`;
        slide.appendChild(img)
    })

}

slider();