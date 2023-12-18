//Animation

let colors = 
["#F4991A","#321313","#F4991A","#321313","#321313","#F4991A","#321313","#F4991A"]
gsap.to(".box", { 
    y:150,
    duration:0.5,
    opacity:1,
    rotation: 360,
    stagger:1,
    backgroundColor: function(i){
        return colors[i%8]
    }
})
gsap.to(".boxSmall", { 
    duration:0.5,
    opacity:1,
    rotation: 360,
    stagger:1,
    backgroundColor: function(i){
        return colors[i%8]
    }
})

const bowlsAnimation = gsap.utils.toArray("#bowlAnimate");
bowlsAnimation.forEach(bowlAnimate => {
    gsap.to(bowlAnimate,{
        rotation: 1760,
        duration: 40,
    })
    
});

//CREATE POKE BOWL

//Set up an associative array
//The keys represent the base of the bowl
//The values represent the cost of the base

var bowlBase_prices = new Array();
bowlBase_prices["Sushi"]=2;
bowlBase_prices["Wild"]=2.5;
bowlBase_prices["Leaf"]=2;

//Set up an associative array
//The keys represent the protein of the bowl
//The values represent the cost of the protein

var protein_prices = new Array();
protein_prices["None"]=0;
protein_prices["salmon"]=2;
protein_prices["tuna"]=2;
protein_prices["prawns"]=2;
protein_prices["chicken"]=1.5;
protein_prices["tofu"]=1.5;
protein_prices["zalmon"]=1.5;

//Set up an associative array
//The keys represent the flavor of the bowl
//The values represent the cost of the flavor

let flavor_prices = new Array();
flavor_prices["None"]=0;
flavor_prices["sesame"]=1;
flavor_prices["truffle"]=1;
flavor_prices["peanutButterCream"]=1.5;
flavor_prices["wasabiMayo"]=1;
flavor_prices["sweetSour"]=1;

//Set up an associative array
//The keys represent the mix-in in the bowl
//The values represent the cost of the mix-in

let mixIn1_price = new Array();
mixIn1_price["None"]=0;
mixIn1_price["cucumber"]=0.5;
mixIn1_price["spinach"]=0.5;
mixIn1_price["edamame"]=1;
mixIn1_price["wakame"]=1;
mixIn1_price["redonion"]=1;

//mix-in2

let mixIn2_price = new Array();
mixIn2_price["None"]=0;
mixIn2_price["youngonion"]=0.5;
mixIn2_price["maize"]=1;
mixIn2_price["kimchi"]=1;
mixIn2_price["salsa"]=1;
mixIn2_price["sweetpotato"]=1;

//mix-in3

let mixIn3_price = new Array();
mixIn3_price["None"]=0;
mixIn3_price["avocado"]=2;
mixIn3_price["mango"]=2;
mixIn3_price["pineapple"]=2;
mixIn3_price["caviar"]=2;
mixIn3_price["honeycarrots"]=2;

//mix-in4

let mixIn4_price = new Array();
mixIn4_price["None"]=0;
mixIn4_price["redslaw"]=1;
mixIn4_price["pickledginger"]=1;
mixIn4_price["smallmozarella"]=2;
mixIn4_price["koriander"]=0.5;
mixIn4_price["melon"]=1;

//mix-in5

let mixIn5_price = new Array();
mixIn5_price["None"]=0;
mixIn5_price["peanutss"]=1;
mixIn5_price["kidneybeans"]=0.5;
mixIn5_price["driedcrust"]=0.5;
mixIn5_price["peas"]=1;
mixIn5_price["apple"]=1;

//Set up an associative array
//The keys represent the toping in the bowl
//The values represent the cost of the toping

//toping1 

let toping1_price = new Array();
toping1_price["None"]=0;
toping1_price["chilliflakes"]=0.5;
toping1_price["crispyonion"]=0.5;
toping1_price["roastedpeanuts"]=1;
toping1_price["crispyshallots"]=0.5;
toping1_price["seaweed"]=1;

//toping2 

let toping2_price = new Array();
toping2_price["None"]=0;
toping2_price["wasabinuts"]=2;
toping2_price["coconutchips"]=1;
toping2_price["pomergranate"]=1;
toping2_price["crispycorn"]=1;
toping2_price["driedmango"]=1;

// getBowlPrice() finds the price based on the base of the bowl.
// Here, we need to take user's the selection from radio button selection
var user_input;

function getBaseBowlPrice(){
    var bowlRadio = document.getElementsByName("selectedBase");

    for(i=0; i < bowlRadio.length; i++){
        if(bowlRadio[i].checked){ 
            user_input = bowlRadio[i].value;
        }
    }
    return bowlBase_prices[user_input];

}

// getProteinPrice() finds the price based on the protein in the bowl.
// Here, we need to take user's the selection from selection list

function getProteinPrice() {
	var proteinSelect = document.querySelector("#protein");

	return protein_prices[proteinSelect.value];
}

// getFlavorPrice() finds the price based on the flavor in the bowl.
// Here, we need to take user's the selection from selection list

function getFlavorPrice() {
	var flavorSelect = document.querySelector("#flavor");

	return flavor_prices[flavorSelect.value];
}

// getMixInPrice() finds the price based on the mix-ins in the bowl.
// Here, we need to take user's the selection from selection list

function getMixIn1Price() {
	var mixIn1Select = document.querySelector("#mixIn1_price");

	return mixIn1_price[mixIn1Select.value];
}

function getMixIn2Price() {
	var mixIn2Select = document.querySelector("#mixIn2_price");

	return mixIn2_price[mixIn2Select.value];
}

function getMixIn3Price() {
	var mixIn3Select = document.querySelector("#mixIn3_price");

	return mixIn3_price[mixIn3Select.value];
}

function getMixIn4Price() {
	var mixIn4Select = document.querySelector("#mixIn4_price");

	return mixIn4_price[mixIn4Select.value];
}

function getMixIn5Price() {
	var mixIn5Select = document.querySelector("#mixIn5_price");

	return mixIn5_price[mixIn5Select.value];
}

// getTopingPrice() finds the price based on the toping in the bowl.
// Here, we need to take user's the selection from selection list

function getToping1Price() {
	var toping1Select = document.querySelector("#toping1_price");

	return toping1_price[toping1Select.value];
}

function getToping2Price() {
	var toping2Select = document.querySelector("#toping2_price");

	return toping2_price[toping2Select.value];
}




//real-time calc

function calculateTotal(){
    let total = getBaseBowlPrice()+getProteinPrice()+getFlavorPrice()+getMixIn1Price()+getMixIn2Price()+getMixIn3Price()+getMixIn4Price()+getMixIn5Price()+getToping1Price()+getToping2Price()
    document.querySelector("#totalPrice").innerHTML =  total +"€";
    if (isNaN(total)) {
        Swal.fire({
            title: 'Hi :-)',
            text: 'Choose 1 Base for your Bowl, please.',
            imageUrl: '10.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            color: "#321313",
            background: "#F2EAD3",
            confirmButtonColor: "#F4991A",
          })
    }

}