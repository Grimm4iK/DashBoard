function showchart(id,params) {
  try {
    var ctx = document.getElementById("percent-chart_"+id);

    if (ctx) {
	  
      var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          datasets: [
            {
              data:params,
			  
              backgroundColor: [
                '#3ab53a',
                '#00b5e9'
              ],
              /*hoverBackgroundColor: [
                '#3ab53a',
                '#ed2828'
              ],*/
              borderWidth: [ 
                params[0]<100 ? 1:0, params[0]<100 ? 1:0
              ],
			  borderColor:[
			  '#FFFBD8',
			  '#FFFBD8',
			  ],
              hoverBorderColor: [
                '#FFFBD8',
                '#FFFBD8'
              ]
            }
          ],
          labels: [
            'Выполнено',
            'Осталось'
          ]
        },
        options: {	
          maintainAspectRatio: false,
          responsive: false,
          cutoutPercentage: 60,// толщина диаграммы
          animation: {
            animateScale: true,
            animateRotate: true,
          },
          legend: {
            display: false,
			/*position: "bottom",*/
          },
         tooltips: {//Всплывающие подсказки
            enabled: false,
			titleFontFamily: "Poppins",
            xPadding: 0,
            yPadding: 10,
            caretPadding: 43,
            bodyFontSize: 12,
			bodyFontStyle: 'bold'
			//backgroundColor:'black'
          }
			}
      });
    }
  } catch (error) {
    console.log(error);
  }
calcCount();	
};

function createTable(id, tableValue){ 

	  var values = [{
		artist: {
		  name: 'План',
		  value: tableValue[0]
		}
	  },
	  {
		artist: {
		  name: 'Факт',
		  value: tableValue[1]
		}
	  }
	];
	var tbl='<div class="table-responsive"><table class="table table-top-countries">';
	
	tbl+='<tr className="tableofvalues"><td class="text-left"><h2>' + values[0].artist.name+'</h2></td><td class="text-plan"><h4>'+ values[0].artist.value + '</h4></td></tr>';
	tbl+='<tr className="tableofvalues"><td class="text-left"><h2>' + values[1].artist.name+'</h2></td><td class="text-fact"><h3>'+ values[1].artist.value + '</h4></td></tr>';

	tbl+= '</table></div>';
	document.getElementById("tbl-123_"+id).innerHTML=tbl;

};

function CreateDBoard(id) 
{
	
	var dashboard = "";
	dashboard='<div class="col-lg-6"><div class="au-card chart-percent-card"><div class="au-card-inner"><h1 id = "title_';
	dashboard+=id;
	dashboard+='"></h1><div class="row no-gutters"><div class="col-xl-6" style="_display: none"><div class="au-card au-card--bg-blue au-card-top-countries m-b-30"><div class="au-card-inner">';
	dashboard+='<div id="tbl-123_';
	dashboard+=id;
	dashboard+='"></div></div></div></div><div class="col-xl-6"><div class="percent-chart"><canvas id="percent-chart_';
	dashboard+=id;
	dashboard+='" width="90" height="90"></canvas><div id="textinsidechart_';
	dashboard+=id;
	dashboard+='"></div><div id="percentinsidechart"><p>%</p></div></div></div></div></div></div></div>';
	return dashboard;
	
};

function ShowDashBoard(id)
{
	var title= "";
	var chartTotalParams = 0;
	var tableValue = [0, 0];
	if (id == 0){
		chartTotalParams = 50;
		tableValue = [30,10];
		title = "КОЛИЧЕСТВО НОВЫХ КЛИЕНТОВ";
	}if (id == 1){
		chartTotalParams = 60;
		tableValue = [40,15];
		title = "КОЛИЧЕСТВО КОРПОРАТИВНЫХ КАРТ";
	}if (id == 2){
		chartTotalParams = 70;
		tableValue = [45,20];
		title = "КОЛИЧЕСТВО ПРОДАЖ ДБО";
	}if (id == 3){
		chartTotalParams = 80;
		tableValue = [50,25];
		title = "КОЛИЧЕСТВО ПРОДАЖ СМС ИНФО";
	}if (id == 4){
		chartTotalParams = 100;
		tableValue = [55,30];
		title = "КОЛИЧЕСТВО";
	}

var x1 = chartTotalParams > 100 ? 100 : chartTotalParams;
var x2 = 100 - x1;

var chartPointParams = [x1,x2];
	showchart(id, chartPointParams);
	   document.getElementById("title_"+id).innerHTML= title;
	var nmb='<p class="number" id="number_';
	nmb+=id;
	nmb+='">'+chartTotalParams+'</p>';
	document.getElementById("textinsidechart_"+id).innerHTML=nmb;
	createTable(id, tableValue);

	enableDelay();
    
}


function calcCount() {
    for (i = 0; i < $('.number').length; i++) {
        var end = $('.number').eq(i).text();
        countStart(end, i);
		
    }
}

function countStart( end, i) {
    var start = 0;
    var interval = setInterval(function () {
        $('.number').eq(i).text(++start);
        if (start == end) {
            clearInterval(interval);
        }
    }, 12);//скорость менять вот-тут
}

function enableDelay() {

 $("p").delay(500).fadeTo( "slow", 20 );

};


//enabledashboard(60, [40,15]);






