window.onload=function(){
	//获取a标签
	var oDiv=document.getElementById("con")
	var aLi=oDiv.getElementsByTagName("li")
	var ikey=true;
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onclick=function(){
			
			var index=this.index;
		
		
			if(ikey){
				ikey=false;
				aLi[index+1].style.display="block"
				
			}else{
				ikey=true
				aLi[index+1].style.display="none"
			}
		}
		
	}
	
	
}
