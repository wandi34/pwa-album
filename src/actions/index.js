import fetch from 'isomorphic-fetch'

export const REQUEST_IMAGES = 'REQUEST_IMAGES'
function requestPosts() {
  console.log("requesting images")
  return {
    type: REQUEST_IMAGES
  }
}

export const RECEIVE_IMAGES = 'RECEIVE_IMAGES'
function receivePosts(json) {
  console.log("Images received");
  return{
    type: RECEIVE_IMAGES,
    images: json.images.data
  }
}

function correctData(json) {
  console.log("Correcting the json data");
  var tmp = json.data.splice(0,20);
  json.data = tmp;
  json.data.forEach(function(entry) {
    if (entry.cover !== undefined) {
      entry.src = "https://i.imgur.com/" + entry.cover + "t.jpg"
    } else {
      entry.src = "https://i.imgur.com/" + entry.id + "t.jpg"
    }

    if (entry.src.substring(0,5) !== "https") {
      console.log("Ungleich");
    }

    delete entry.link;
    delete entry.tags;
    entry.thumbnailWidth = 200;
    entry.thumbnailHeight = 200;
    entry.thumbnail = entry.src;
  })
  console.log(tmp);
  return {
    type: "CORRECTING_IMAGES",
    images: json
  }

}

export function fetchImages(){
  return dispatch => {
    console.log("fetching images");
    dispatch(requestPosts())
    return fetch(`https://api.imgur.com/3/gallery/hot/viral/0.json`, {
      method: 'GET',
      headers: {
       'Authorization': 'Client-ID 945371d402ddf0c'
     }
   })
    .then(response => response.json())
    .then(json => dispatch(correctData(json)))
    .then(correctedData => dispatch(receivePosts(correctedData)))
  }
}

// return [{
//         src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//         thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
//         thumbnailWidth: 320,
//         thumbnailHeight: 174,
//         isSelected: false,
//         caption: "After Rain (Jeshu John - designerspics.com)"
// },
// {
//         src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//         thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
//         thumbnailWidth: 320,
//         thumbnailHeight: 212,
//         tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
//         caption: "Boats (Jeshu John - designerspics.com)"
// },
//
// {
//         src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
//         thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
//         thumbnailWidth: 320,
//         thumbnailHeight: 212
// }]
