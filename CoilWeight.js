/* Including a copy of the form that this code was developed for

	21-Apr-2015:  If the weight of a coil is known, convert to "parts"
	
	*/
function MaterialChange(){
	// 24-Apr-2015:  Added Material Selection
	// alert("MaterialChange");
	var MaterialList = document.getElementById("MaterialType");
	var MaterialIndex = MaterialList.selectedIndex;
	var MaterialType = MaterialList.options[MaterialIndex].text;
	(document.getElementById('Density').value)=MaterialList.options[MaterialIndex].value;
	//alert(MaterialType);
}

function coilData() {
	'use strict';
	
	var CoilVolume;
	var CoilWeight;
	var BlankWeight;
	var StripWeight;
	var PartYield;
	var CoilLength;
	var OuterWrap;
	var InnerWrap;
	var WrapWeight;
	var PartCount;
	var Coil_Quantity;
	
	//var MaterialList = document.getElementById("MaterialType");
	//var MaterialIndex = MaterialList.selectedIndex;
	//var MaterialType = MaterialList.options[MaterialIndex].text;
	//alert(MaterialType);
	
	var CoilWraps;
	
	var Coil_Count = parseFloat(document.getElementById('Coil_Count').value);
	var Coil_OD = parseFloat(document.getElementById('Coil_OD').value);
	var Coil_ID = parseFloat(document.getElementById('Coil_ID').value);
	var Coil_Width = parseFloat(document.getElementById('Coil_Width').value);
	var Density = parseFloat(document.getElementById('Density').value);
	var PartCount = parseFloat(document.getElementById('Part_Quantity').value);
	var CoilYield = parseFloat(document.getElementById("CoilPercent").value);
	
	var Progression = parseFloat(document.getElementById('Progression').value);
	var Makes=parseFloat(document.getElementById("Makes").value);
	var Thickness = parseFloat(document.getElementById('Thickness').value);
	var StripLength = parseFloat(document.getElementById("StripLength").value);
	var StripCount = parseFloat(document.getElementById("StripCount").value);

	var WrapCheck = document.getElementById("WrapCheck").checked;
	var StripCheck = document.getElementById("StripCheck").checked;
	
	/* alert(document.getElementByName("YesNo").value); */
	
	CoilWraps = (Coil_OD - Coil_ID)/Thickness;
	document.getElementById('CoilWraps').value = CoilWraps.toFixed(4);
	
	CoilVolume = Coil_Width*Math.PI*(Math.pow(Coil_OD,2)-Math.pow(Coil_ID,2))/4;
	CoilWeight = CoilVolume*Density;
	document.getElementById('CoilWeight').value = CoilWeight.toFixed(4);
	document.getElementById('TotalWeight').value = (Coil_Count*CoilWeight).toFixed(4);
	
	BlankWeight = Coil_Width*Progression*Thickness*Density;
	document.getElementById('BlankWeight').value = BlankWeight.toFixed(6);
	
	document.getElementById("PartWeight").value = (BlankWeight/Makes).toFixed(6);

	StripWeight = StripLength*Coil_Width*Thickness*Density;
	document.getElementById("StripWeight").value = StripWeight.toFixed(4);
	
	OuterWrap = Coil_Width*Math.PI*(Math.pow(Coil_OD,2)-Math.pow((Coil_OD-Thickness),2))/4;
	OuterWrap *= Density;
	document.getElementById('OuterWrap').value = OuterWrap.toFixed(4);
		
	InnerWrap = Coil_Width*Math.PI*(Math.pow(Coil_ID+Thickness,2)-Math.pow(Coil_ID,2))/4;	
	InnerWrap *= Density;
	document.getElementById('InnerWrap').value = InnerWrap.toFixed(4);

	// OFFAL Calculations !!!!!!
	
	WrapWeight = InnerWrap+OuterWrap;
	// alert(WrapWeight);
	
	if (!WrapCheck){
		CoilWeight -= (InnerWrap+OuterWrap);	
	    //alert("WrapCheck is false, Wraps NOT included");
	}
	
	if (!StripCheck){
		//alert("StripCheck is false, Strips NOT Included");
		CoilWeight -=(StripWeight*StripCount);
	}
		
	document.getElementById("Pounds").value = (InnerWrap+OuterWrap).toFixed(4);
	document.getElementById("Offal").value = (100*(InnerWrap+OuterWrap)/CoilWeight).toFixed(4);

	PartYield = Math.floor(Makes * (CoilWeight / BlankWeight) * CoilYield/100);
	document.getElementById('PartYield').value = PartYield;	
	
	CoilLength = CoilVolume/(Thickness*Coil_Width);
	document.getElementById('CoilLength').value = CoilLength.toFixed(4);	

	Coil_Quantity = (PartCount*BlankWeight/(CoilWeight*(CoilYield/100)*Makes));
	document.getElementById('CoilVolume').value = Coil_Quantity.toFixed(2);
	
	document.getElementById('TotalPieces').value = Math.floor(Coil_Count*PartYield);
	document.getElementById('TotalLengthIN').value = (Coil_Count*CoilLength).toFixed(4);
	document.getElementById('TotalLengthFT').value = (Coil_Count*CoilLength/12).toFixed(4);
	
	document.getElementById("WeightToParts").value = Math.floor((parseFloat(document.getElementById("KnownWeight").value))/BlankWeight);
	
	/* 
	We return "false" to prevent actual submission of the form
	to the page named by the form's action attribute.
	*/
	
	/*
	document.getElementById("CoilForm").style.visibility="hidden";
	document.getElementById("CoilResults").style.visibility="visible";
	*/
	
	return false;
}

function init() {
	'use strict';
	document.getElementById('CoilForm').onsubmit = coilData;
} // End of init() function.

window.onload = init;