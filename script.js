let apiUrl ="https://kiradb-4408.restdb.io/rest/a-js"
var picArray= [{
  pic_id : 1,
  pic_url : "./img/DSC_0049.jpg",
  category: "Nature"
},{
  pic_id : 2,
  pic_url : "./img/DSC_0141.jpg",
  category: "Wild Life"
},{
  pic_id : 3,
  pic_url : "./img/DSC_0167.jpg",
  category: "Wild Life"
},{
  pic_id : 4,
  pic_url : "./img/DSC_1168.jpg",
  category: "Wild Life"
},{
  pic_id : 5,
  pic_url : "./img/DSC_1241.jpg",
  category: "Wild Life"
},{
  pic_id : 6,
  pic_url : "./img/DSC_1378.jpg",
  category: "Wild Life"
},{
  pic_id : 7,
  pic_url : "./img/DSC_1380.jpg",
  category: "Wild Life"
},{
  pic_id : 8,
  pic_url : "./img/DSC_2609.jpg",
  category: "Wild Life"
},{
  pic_id : 9,
  pic_url : "./img/IMG_0271.jpg",
  category: "Wild Life"
},{
  pic_id : 10,
  pic_url : "./img/IMG_0349.jpg",
  category: "Wild Life"
},{
  pic_id : 11,
  pic_url : "./img/IMG_0350.jpg",
  category: "Wild Life"
},{
  pic_id : 12,
  pic_url : "./img/IMG_0355.jpg",
  category: "Wild Life"
}
]
const port_div = document.getElementById('port_img')
    const newImgElement = document.createElement('div')
     newImgElement.className= 'imgContainer'    
  picArray.map((item, index)=>{
    const imgFlexed= document.createElement('div')
    imgFlexed.className= 'vid_flex imag'
    imgFlexed.id=`imgBox${index}`

     const imgMarkup = `<img src="${item.pic_url}" alt="" srcset="">`
    newImgElement.append(imgFlexed) ;     
    imgFlexed.innerHTML= imgMarkup
    console.log(item);
 })


 port_div.append(newImgElement)
//  port_div.append(seeMoreBtn)

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://kiradb-4408.restdb.io/rest/a-js",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "6511b0c6c35f829dd107dc7a932f9b0148659",
    //   "cache-control": "no-cache"
    }
  }
  let request = fetch(apiUrl, {headers: {"Accept": "application/json", "X-Api-Key": "63443556626b9c747864aaf1"}}).then(r => r.json());

let data; request.then(d => data = d);
  $.ajax(settings).done(function (response) {
    console.log('this is my response', response);
  });




// let xapikey = "6511b0c6c35f829dd107dc7a932f9b0148659";




// var videoArray =[]

// const fetchVideo = async() =>{
//     let response = await fetch("https://kiradb-4408.restdb.io/rest/a-js", {headers: {"Content-Type": "application/json", "x-apikey": "6511b0c6c35f829dd107dc7a932f9b0148659"}})
//     let data = await response.json()
//     console.log (data)
//     videoArray.push(data)

// }

// fetchVideo()


