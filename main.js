var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];

var updatedImage=images;
var updatedName=names;

var i = 0;

function update(){
    var numbers_of_family_member_in_array = 5;
    i++;
      if(i > numbers_of_family_member_in_array)
        {
          i=0;
       }
       console.log("hi");
        updatedImage = images[i];
        updatedName = names[i];

      document.getElementById("family_member_image").src = updatedImage;
      document.getElementById("family_member_name").innerHTML = updatedName;
      }