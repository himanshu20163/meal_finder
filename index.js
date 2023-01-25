


async function image_meal() {
    let arr=[];
    const input = document.getElementById("searchbox").value;
   // console.log(input);
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);
    const res = await data.json()
    //console.log(res); 
    await(res.meals).map((ele) =>{
        arr.push(ele);
        // const img = document.createElement("img")
        // img.src=`${ele.strMealThumb}`;
        // img.alt="meals" ;
        // data_1.innerHTML=img;
        // data.appendChild(img);
        // console.log(data)
        //console.log(ele.strMealThumb);
    })
    //console.log(res);
    arr.map((ele)=>{
        const img = document.createElement("img")
        img.src=`${ele.strMealThumb}`;
        let data_1 = document.getElementById("show_data");
        data_1.appendChild(img);
    })
}



