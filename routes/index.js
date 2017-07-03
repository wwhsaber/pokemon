var express = require('express');
var router = express.Router();
var nature = require('./count.js')

/*设置根目录跳转*/ 
router.get('/', function (req, res) {
    res.redirect('/home');
  });
/* GET home page. */
router.get('/home', function(req, res, next) {
var User = global.dbHandel.getModel('poke');
  User.find({},function(err,doc){
    let arr=doc
    res.render('index', { 
    	pokemon: arr
    });

   })
});
router.get('/api/pokemon/:id', function(req, res,next) {
  var User = global.dbHandel.getModel('poke');
  var id = req.url.split("/")[3]
    User.find({id:id},function(err,doc){
        let arr = {
          'id' : doc[0].id,
          'name' : doc[0].name
        }

       res.send(arr)
     })
});

router.get('/pokemon/:id',function(req,res,next){
	var id = req.url.split("/")[2]
	id=fill(id)
	var User = global.dbHandel.getModel('poke');
	User.find({id:id},function(err,doc){
		var natureArr=nature.natureRelation(doc[0].nature[0],doc[0].nature[1])
    var striveArr=strive(doc[0].strive)  
    var raceArr=race(doc[0].race)
  		res.render('pokemon',{
  			pokemon: doc[0],
  			natureArr:natureArr,
        strive:striveArr,
        race:raceArr
  		})
   })
})

module.exports = router;

function fill(number){
	let str = '000' + number;
	return str.substring(str.length - 3, str.length);
}
function strive(arr){
  let ar=''
  for(let i=0;i<arr.length;i++){
    if(arr[i]!=0){
      ar+=select(i)+':'+arr[i]+" "    
    }
  }
  return ar
}

function select(i){
  switch (i) {
    case 0:return 'HP';
      break;
    case 1:return '攻击';
      break;
    case 2:return '防御';
      break;
    case 3:return '特攻';
      break;
    case 4:return '特防';
      break;
    case 5:return '速度';
      break;
    default:
      break;
  }
}
//种族值计算 
//[LV×(HP种族值+HP个体值)÷50]+[LV×(努力LV)÷100]+10+LV
//[LV×(该项种族值+该项个体值)÷50]+[LV×(努力LV)÷100]+5
function race(race){
  let data={
    half:[],
    full:[],
    total:0
  }
  for(let i=0;i<race.length;i++){
    data.total+=race[i]*1
    if(i==0){
      data.half.push(hpCount(50,race[i]))
      data.full.push(hpCount(100,race[i]))
    }else{
      data.half.push(otherCount(50,race[i]))
      data.full.push(otherCount(100,race[i]))
    }
  }
  return data
}

function hpCount(lv,race){
  race=parseInt(race)
  let min=[lv*(race+0)/50]*1+[lv*(0)/100]*1+10+lv
  let max=[lv*(race+31)/50]*1+[lv*(252)/100]*1+10+lv
  return min+"~"+max
}

function otherCount(lv,race){
  race=parseInt(race)
  let min=[lv*(race+0)/50]*1+[lv*(0)/100]*1+5
  let max=[lv*(race+31)/50]*1+[lv*(252)/100]*1+5
  return min+"~"+max
}