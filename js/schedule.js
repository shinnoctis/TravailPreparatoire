$(document).ready(function() {

  var workHour = JSON.parse(GetCookie('Schedule'));
  var day = ['Sun','Mon','Tue', 'Wed','Thu','Fri','Sat'];
  
  //  Function to return the value of the cookie specified by "name".
  //    name -    String object containing the cookie name.
  //    returns - String object containing the cookie value,
  //              or null if the cookie does not exist.
  //    link -    https://enacit.epfl.ch/cours/html/exercices/ex_cookies.html
  //
  function GetCookie (name) {
    var arg = name  + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
      var j = i + alen;
      if (document.cookie.substring(i, j) == arg)
        return getCookieVal (j);
    i = document.cookie.indexOf(" ", i) + 1;
      if (i == 0) break; 
    }
    return null;
  }

  function getCookieVal (offset) {
    var endstr = document.cookie.indexOf (";", offset);
    if (endstr == -1)
      endstr = document.cookie.length;
    return unescape(document.cookie.substring(offset, endstr));
  }


  function CurrentTime(){
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let currentDay = day[date.getDay()];
    let dayOfMonth = date.getDate();
    IsOpen(year,month,currentDay,dayOfMonth)
    setTimeout(CurrentTime,59999);
  }

  CurrentTime();

  function NextOpening(){
    var nextOpening = day[new Date().getDay()+1];
    (nextOpening == 0 || nextOpening == 6 ) ? nextOpening = 1 : '';
    console.log(workHour[nextOpening]);
    $('#NextOpening').text('Prochaine ouverture le '+ workHour[nextOpening][0]['name_days']+ ' à ' + workHour[nextOpening][0]['start_workhours']);
  }

  function IsOpen(year,month,currentDay,dayOfMonth){

    let today = new Date();
   /* $.each(workHour[currentDay],function (key,val){
      let startTime = parseTime(val['start_workhours']);
      let endTime = parseTime(val['end_workhours']);
      let startDate = new Date(year, month, dayOfMonth, startTime[0],startTime[1]);
      let endDate = new Date(year, month, dayOfMonth, endTime[0],endTime[1]);
      //(today > startDate && today < endDate) ? $('#IsOpen').text('ouvert') && false : $('#IsOpen').text('fermé') && NextOpening();

      
    });*/
    for(var x = 0; x < workHour[currentDay].length; x++)
    {
      let startTime = parseTime( workHour[currentDay][x]['start_workhours']);
      let endTime = parseTime(workHour[currentDay][x]['end_workhours']);
      let startDate = new Date(year, month, dayOfMonth, startTime[0],startTime[1]);
      let endDate = new Date(year, month, dayOfMonth, endTime[0],endTime[1]);
      
      if(today > startDate && today < endDate){
        $('#IsOpen').text('ouvert');
        x++;
      }
      else
      {
        $('#IsOpen').text('fermé');

        NextOpening();
      }
      
      }
  }
    
    function parseTime(HhMm)
    {
      splitTime = HhMm.split(':'),
      hours = splitTime[0],
      minutes = splitTime[1];
      return splitTime;
    }
});

