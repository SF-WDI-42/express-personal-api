// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var characters = [
	{
		name: "Spider-Man",
		abilities: ["Web-Slinger", "Swingin'", "Thwip, Thwip, Pow!"], 
		image: "/images/Spider-Man-Free-Download-PNG.png"
	}, {
		name: "Iron-Man",
		abilities: ["Repulsor Ray", "Uni-Beam", "Billion-Dollar Punch"], 
		image: "/images/Iron-Man-PNG-Image.png"
	}, {
		name: "Captain-America",
		abilities: ["Shield Bash", "Shield Toss", "American Justice"], 
		image: "/images/Doctor-Strange-PNG-Image.png"
	}, {
		name: "Dead-Pool",
		abilities: ["Spinning Groin Punch", "Spinny Sword Attack", "Hold Up"], 
		image: "/images/5863ef947d90850fc3ce2974.png"
	}, {
		name: "Ultron",
		abilities: ["Encephalo-Ray", "Eradication"], 
		image: "/images/Ultron-PNG-Image.png"
	}, {
		name: "Black-Panther",
		abilities: ["Roundhouse Tactical Strikes", "Panther Strike", "For Wakanda!"], 
		image: "/images/Black-Panther-PNG-Clipart.png"	
	}, {
		name: "Guillotine",
		abilities: ["La Force d'Ancetres", "Coup de Massue", "Coup de Grace"], 
		image: "/images/GachaChasePrize_256x256_guillotine.png"	
	}, {
		name: "Storm",
		abilities: ["Lightning Strike", "Gale", "Tempest"], 
		image: "/images/Storm.png"	
	}, {
		name: "Winter-Soldier",
		abilities: ["Deuces are wild", "Fist of the Red Army"], 
		image: "/images/Doctor-Strange-PNG-Image.png"	
	}, {
		name: "Groot",
		abilities: ["Grow limbs into Earth", "I am Groot"], 
		image: "/images/groot_render_by_maydaypayday-d9pjic2.png"	
	}, {
		name: "DareDevil",
		abilities: ["Stick Strike", "Flash Kick", "Deliverance"], 
		image: "/images/Daredevil-PNG.png"	
	}
];



db.Character.remove({}, function(err, response){
	db.Character.create(characters, function(err, characters){
	  if (err){
	    return console.log("Error:", err);
	  }
	  console.log("all characters: ", characters)
	  process.exit(); // we're all done! Exit the program.
	});
	

});



