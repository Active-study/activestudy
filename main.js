const class9 = {
    // {"class": ["class 9"]},
    subject: ["Select Subject","Science", "SST", "Math", "English", "Hindi"],
    // English
    Math: ["Select Subject","Math ch 1 to 7", "Math ch 8 to 15"],
    Hindi: ["Select Subject","Hindi-Grammar", "Hin-kshitij", "Hin-kritika"],
    English: ["Select Subject","Eng-Beehive", "Eng-Moments", "Eng-Grammar"],
    "Eng-Moments": [
        "The Lost Child", "Iswaran the Storyteller", "The Adventures of Toto", 
        "In the Kingdom of Fools", "The Happy Prince", "Weathering the Storm in Ersama", 
        "The Last Leaf", "A House is Not a Home", "The Accidental Tourist", "The Beggar"
    ],
    "Eng-Beehive": [
        "The Fun They Had", "The Sound of Music", "The Little Girl", "A Truly Beautiful Mind", 
        "The Snake and the Mirror", "My Childhood", "Packing", "Reach for the Top", 
        "The Bond of Love", "Kathmandu", "If I Were You"
    ],
    "Eng-Grammar": [
        "Nouns", "Verbs", "Adjectives", "Adverbs", "Prepositions", "Conjunctions", 
        "Interjections", "Sentence Structure", "Tenses", "Active and Passive Voice"
    ],
    // Hindi Start
    "Hin-kshitij": ["kavya khand", "gadya khand"],
    "Hin-kritika": [
        "Is Jal Pralay Mein", "Mati Wali", "Reedh Ki Haddi", "Mera Chhotta Sa Niji Pustakalaya", 
        "Hamid Khan"
    ],
    "kavya khand": [
        "Sakhiyaan evam Shabd", "Vaka", "Saavya", "Qaidi aur Kokila", "Gram Shree", "Meghayen", 
        "Bacche Kaam par Ja Rahe Hain"
    ],
    "gadya khand": [
        "Do Bailon ki Katha", "Lhasa ki Or", "Upabhoktavaad ki Sanskriti", "Sanwale Sapnon ki Yaad", 
        "Premchand ke Fate Joote", "Mere Bachpan ke Din"
    ],
    // Math Start
    "Math ch 1 to 7": [
        "Number Systems", "Polynomials", "Coordinate Geometry", "Linear Equations in Two Variables", 
        "Introduction to Euclid's Geometry", "Lines and Angles", "Triangles"
    ],
    "Math ch 8 to 15": [
        "Quadrilaterals", "Areas of Parallelograms and Triangles", "Circles", "Constructions", 
        "Heron s Formula", "Surface Areas and Volumes", "Statistics", "Probability"
    ],
    "Number Systems": ["Number System Ex 1.1", "Number System Ex 1.2", "Number System Ex 1.3", "Number System Ex 1.4"],
    Polynomials: ["Polynomials Ex 2.1", "Polynomials Ex 2.2", "Polynomials Ex 2.3", "Polynomials Ex 2.4"],
    "Coordinate Geometry": ["Coordinate Geometry Ex 3.1", "Coordinate Geometry Ex 3.2"],
    "Linear Equations in Two Variables": ["Linear Equations Ex 4.1", "Linear Equations Ex 4.2", "Linear Equations Ex 4.3"],
    "Introduction to Euclid's Geometry": ["Euclid's Geometry Ex 5.1"],
    "Lines and Angles": ["Lines and Angles Ex 6.1", "Lines and Angles Ex 6.2"],
    Triangles: ["Triangles Ex 7.1", "Triangles Ex 7.2", "Triangles Ex 7.3", "Triangles Ex 7.4", "Triangles Ex 7.5"],
    Quadrilaterals: ["Quadrilaterals Ex 8.1", "Quadrilaterals Ex 8.2"],
    "Areas of Parallelograms and Triangles": [
        "Areas of Parallelograms and Triangles Ex 9.1", "Areas of Parallelograms and Triangles Ex 9.2", 
        "Areas of Parallelograms and Triangles Ex 9.3"
    ],
    Circles: ["Circles Ex 10.1", "Circles Ex 10.2", "Circles Ex 10.3"],
    Constructions: ["Constructions Ex 11.1"],
    "Heron s Formula": ["Heron s Formula Ex 12.1", "Heron s Formula Ex 12.2"],
    "Surface Areas and Volumes": [
        "Surface Areas and Volumes Ex 13.1", "Surface Areas and Volumes Ex 13.2", "Surface Areas and Volumes Ex 13.3", 
        "Surface Areas and Volumes Ex 13.4", "Surface Areas and Volumes Ex 13.5"
    ],
    Statistics: ["Statistics Ex 14.1", "Statistics Ex 14.2", "Statistics Ex 14.3", "Statistics Ex 14.4"],
    Probability: ["Probability Ex 15.1"],
    // Science Start
    Science: ["Select Subject","Chemistry", "Biology", "Physics"],
    Chemistry: ["Matter in Our Surroundings", "Is Matter Around Us Pure?", "Atoms and Molecules", "Structure of the Atom"],
    Biology: ["The Fundamental Unit of Life", "Tissues", "Diversity in Living Organisms"],
    Physics: ["Motion", "Force and Laws of Motion", "Gravitation", "Work and Energy", "Sound"],
    SST: ["Select Subject","History", "Geography", "Political Science", "Economics"],
    History: [
        "The French Revolution", "Socialism in Europe and the Russian Revolution", "Nazism and the Rise of Hitler", 
        "Forest Society and Colonialism", "Pastoralists in the Modern World"
    ],
    Geography: [
        "India - Size and Location", "Physical Features of India", "Drainage", "Climate", "Natural Vegetation and Wildlife", 
        "Population"
    ],
    "Political Science": [
        "What is Democracy? Why Democracy?", "Constitutional Design", "Electoral Politics", "Working of Institutions", 
        "Democratic Rights"
    ],
    Economics: [
        "The Story of Village Palampur", "People as Resource", "Poverty as a Challenge", "Food Security in India"
    ]
};


document.addEventListener("DOMContentLoaded", function () {
    const subjectSelect = document.getElementById("subjectSelect");
    const Sub_subjectSelect = document.getElementById("Sub_subjectSelect");
    const chapterSelect = document.getElementById("chapterSelect"); // Assuming a separate chapter select element
    
    // Adding subjects to the first select
    let i = 0;
    while (i < class9.subject.length) {
      console.log(class9.subject[i]);
      const newOption = document.createElement("option");
      newOption.value = class9.subject[i];
      newOption.textContent = class9.subject[i];
      i = i + 1;
  
      // Append the new option to the <select>
      subjectSelect.appendChild(newOption);
    }
    i = 0; // Reset i for next loop
  
    // Event listener for subject select change
    subjectSelect.addEventListener("change", function () {
      console.log(this.value);
      
      // Clear existing options
      Sub_subjectSelect.innerHTML = '';
      chapterSelect.innerHTML = ''; // Clear chapters if subject changes
  
      // Check if the selected subject exists in class9
      if (class9[this.value]) {
        const subSubjects = class9[this.value];
        for (let i = 0; i < subSubjects.length; i++) {
          console.log(subSubjects[i]);
          const newOption = document.createElement("option");
          newOption.value = subSubjects[i];
          newOption.textContent = subSubjects[i];
  
          // Append the new option to the <select>
          Sub_subjectSelect.appendChild(newOption);
        }
      }
    });
  
    // Event listener for Sub_subjectSelect change (for chapters)
    Sub_subjectSelect.addEventListener("change", function () {
      console.log(this.value);
  
      // Clear existing chapter options
      chapterSelect.innerHTML = '';
  
      // Check if the selected sub-subject exists in class9
      if (class9[this.value]) {
        const chapters = class9[this.value];
        for (let i = 0; i < chapters.length; i++) {
          console.log(chapters[i]);
          const newOption = document.createElement("option");
          newOption.value = chapters[i];
          newOption.textContent = chapters[i];
  
          // Append the new option to the <select>
          chapterSelect.appendChild(newOption);
        }
      }
    });
  });
// Import necessary Firebase SDK modules

// Function to fetch data from Firebase Realtime Database

  
  
  function openModal(modalId) {
    document.getElementById("notesModal").style.display = 'block';
    document.getElementById("element").innerText=modalId;
    var a="e";
    if(modalId=="Hindi_book"){
    a= "Hindi Book";
    }
    else if (modalId=="ncertbook") {
      a="NCERT Book";
    }
    else if (modalId=="ncertsol") {
      a="NCERT Solution";
    }
    else if (modalId=="notes") {
      a="Notes";
    }
    else if (modalId=="worksheet") {
      a="Worksheet";
    }
    else if (modalId=="questions") {
      a="PRACTICE QUESTION";
    }
    else if (modalId=="quiz") {
      a="Quiz";
      
    }
    else if (modalId=="questionsPDF") {
      a="Question";
    }


    document.getElementById("h3").innerText=a;
  }
  
  function closeModal() {
    document.getElementById("notesModal").style.display = 'none';
  }
  function closeModalsel() {
    document.getElementById("select").style.display = 'none';
  }
  