var request=new XMLHttpRequest();
request.open ("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    
         
    console.log(data);
    let result=data.filter((ele)=>ele.region==="Asia").map((ele)=>ele.name);
    console.log(result);

    let population=data.filter((ele)=>ele.population<100000).map((ele)=>ele.name);
    console.log(population);

    var res=data.reduce((acc,cv)=>acc+cv.population,0)
    console.log(res);
    
    data.forEach(element => {
        console.log(`${element.name}:${element.capital}:${element.flag}`)
        
    });
   
    
    }
