
var makeCandidate = function (name, partyColor){ 
    var politician = {}; 
    politician.name = name; 
     politician.electionResults = null; 
      politician.partyColor = partyColor;
    politician.totalVotes = 0;
    politician.announce = function()
    { 
      console.log(name + " is running for president."); 
    }; 
    politician.announce(); 
      
      var setStateResults = function(state)
    {
      theStates[state].winner = null;
      if (tobi.electionResults[state] > henry.electionResults[state]){
        theStates[state].winner = tobi;
      }
      else if (henry.electionResults[state] > tobi.electionResults[state]){
        theState[state].winner = henry;
      }
      else{
        theState[state].winner = "Draw";
      }
      var stateWinner = theStates[state].winner;
      if (theStates[state].winner !== null){
        theStates[state].rgbColor = stateWinner.partyColor
      }
      else{
        theStates[state].rgbColor = [11, 32, 57]
      }
    }
     politician.tallyUpTotalVotes = function()
    {
      this.totalVotes = 0;
      for (var i = 0; i < this.electionResults.length; i++)
        {
          this.totalVotes = this.totalVotes + this.electionResults[i];
        }
    };
      
      return politician; 
    }; 
    
    var henry = makeCandidate("Henry Salliss", [132, 17, 11]); 
    var tobi = makeCandidate("Tobi Omotayo", [245, 141, 136]); 
    
    henry.electionResults = [5, 1, 7 , 2 , 17, 6, 4, 2, 1, 1, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7 , 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 11, 3, 2, 11, 1, 3, 7, 2]; 
    
    tobi.electionResults = [4, 2, 4, 4, 38, 3, 3, 1, 2, 28, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7 ,8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 27, 3, 1, 2, 11, 2, 3, 1]; 
    
    henry.tallyUpTotalVotes();
    tobi.tallyUpTotalVotes();
    
    var winner = ""; 
    
    if (henry.totalVotes > tobi.totalVotes){
      winner = henry.name;
    }
    else if (tobi.totalVotes > henry.totalVotes){
      winner = tobi.name;
    }
    
    var table = documentGetElementById(countryr)
    
    
    
    console.log(henry.totalVotes);
    console.log(tobi.totalVotes);
    
   

var countryInfoTable = document.getElementById('countryResults');

var row = countryInfoTable.children[0].children[0]

row.children[0].innerText = henry.name;
row.children[1].innerText = henry.totalVotes;
row.children[2].innerText = tobi.name;
row.children[3].innerText = tobi.totalVotes;
row.children[5].innerText = winner;



