let Obj=function(){
	this.arr=[
	  // 普 火 水 草 电 冰 斗 毒 地 飞 超 虫 岩 鬼 龙 恶 钢 妖
  /*普*/[1, 1, 1, 1,1, 1, 1,1, 1, 1,1, 1,.5,0, 1,1,.5, 1],
  /*火*/[1,.5,.5, 2,1, 2, 1,1, 1, 1,1, 2,.5,1,.5,1, 2, 1],
  /*水*/[1, 2,.5,.5,1, 1, 1,1, 2, 1,1, 1, 2,1,.5,1, 1, 1],
  /*草*/[1,.5, 2,.5,1, 1, 1,.5,2,.5,1,.5, 2,1,.5,1,.5, 1],
  /*电*/[1, 1, 2,.5,.5,1, 1,1, 0, 2,1, 1, 1,1,.5,1, 1, 1],
  /*冰*/[1,.5,.5, 2,1,.5, 1,1, 2, 2,1, 1, 1,1, 2,1,.5, 1],
  /*斗*/[2, 1, 1, 1,1, 2, 1,.5,1,.5,.5,.5,2,0, 1,2, 2,.5],
  /*毒*/[1, 1, 1, 2,1, 1, 1,.5,.5,1,1, 1,.5,.5,1,1, 1, 1],
  /*地*/[1, 2, 1,.5,2, 1, 1,2, 1, 0,1,.5, 2,1, 1,1, 2, 1],
  /*飞*/[1, 1, 1, 2,.5,1, 2,1, 1, 1,1, 2,.5,1, 1,1,.5, 1],
  /*超*/[1, 1, 1, 1,1, 1, 2,2, 1, 1,.5,1, 1,1, 1,0,.5, 1],
  /*虫*/[1,.5, 1, 2,1, 1,.5,.5,1,.5,2, 1, 1,.5,1,2,.5,.5],
  /*岩*/[1, 2, 1, 1,1, 2,.5,1,.5, 2,1, 2, 1,1, 1,1,.5, 1],
  /*鬼*/[0, 1, 1, 1,1, 1, 1,1, 1, 1,2, 1, 1,2, 1,.5,1, 1],
  /*龙*/[1, 1, 1, 1,1, 1, 1,1, 1, 1,1, 1, 1,1, 2,1,.5, 0],
  /*恶*/[1, 1, 1, 1,1, 1,.5,1, 1, 1,2, 1, 1,2, 1,.5,1,.5],
  /*钢*/[1,.5,.5, 1,.5,2, 1,1, 1, 1,1, 1, 2,1, 1,1,.5, 2],
  /*妖*/[1,.5, 1, 1,1, 1, 2,.5,1, 1,1, 1, 1,1, 2,2,.5, 1],
	]
}
Obj.prototype={
	natureRelation(nature,nature2){
	 	let x = this.judgeNature(nature)
	 	if(nature2){
	 		y = this.judgeNature(nature2)
	 	}else{
	 		y=1
	 	}
	 	let array=this.relation(x,y)
	 	return array
	 },
	judgeNature(nature){	
		switch (nature) {
			case '普':return 0;
				break;
			case '火':return 1;
				break;
			case '水':return 2;
				break;
			case '草':return 3;
				break;
			case '电':return 4;
				break;
			case '冰':return 5;
				break;
			case '斗':return 6;
				break;
			case '毒':return 7;
				break;
			case '地':return 8;
				break;
			case '飞':return 9;
				break;
			case '超':return 10;
				break;
			case '虫':return 11;
				break;
			case '岩':return 12;
				break;
			case '鬼':return 13;
				break;
			case '龙':return 14;
				break;
			case '恶':return 15;
				break;
			case '钢':return 16;
				break;
			case '妖':return 17;
				break;
			default: return -1;
				break;
		}
	},
	relation(a,b){
		let array=[]
		for(i=0;i<18;i++){
			array.push(this.arr[i][a]*this.arr[i][b])
		}
		return array

	}
}
let count = new Obj()
module.exports = count