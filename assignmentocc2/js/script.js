const languages = new Array();
 
$(document).ready(function() {
  $('#target').click(function() {
      var content = $('#language').val();
      languages.push(content)
      console.log(languages);
      if (typeof(Storage)!=="undefined"){
        localStorage.setItem(languages.length,content);
      }
          
            
      $('#root').append("<li id='"+content+"_"+languages.length+"' >"+content+" &nbsp;<button id='" + content + "_"+languages.length+"' class='remove'>remove</button></li> ");
  })
  $('#root').on('click','.remove',function(){
 
    var id = this.id;
    const myArr = id.split("_");
 
    $("#" + id).remove();
    localStorage.removeItem(myArr[1]);
 
  
   }); 
 
});