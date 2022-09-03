function onClick(element) 
{
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}
         
window.onload = function() {
  document.getElementById("aboutme").innerHTML = "Hello and Namaste! I am Aayush Kumar Mishra, currently working as a Technical Consultant for Salesforce. My current role involves providing Data Consultancy for Salesforce Clients. I have a Bachelors of Technology in Computer Sciences from The LNM Institute of Information Technology. I have been a part of several technical projects during my college and some of them are listed down below. Some of my co-curricular activities include being a Teaching Assistant for the CSE104 course and being the Team Lead for solving the Audacity's Bug 2125 P3. Some of my extracurricular activities include being a part of the Media Cell LNMIIT and the MUN Society LNMIIT for a while. Apart from this, I am an avid reader and I write as well. I love playing chess, drawing, sketching, and cooking. I religiously follow La Liga (Spanish League Football) and I enjoy playing and watching other sports as well. I am passionate about various social issues such as climate change, violent extremism, education, and sustainability, therefore I have been a part of forums and conferences regarding this around the world.";

  document.getElementById("idyfme").innerHTML = "International Development Youth Forum was a wonderful and unique experience for me. It gave me an insight into development issues outside of India. I got the opportunity to share my ideas on issues that I am passionate about and work towards implementing those ideas for a stronger global society. It was a week of learning, gaining new insights, and making new friends. IDYF's goal is to create a better future based on the diverse values and experiences of youth from around the world. We aim to empower youth, and shape them into leaders of a fairer, more sustainable future, through debates, problem-solving, and networking with peers from a variety of backgrounds. In the forum, we were divided into 6-7 teams and each team will analyze one of the case studies and offer solutions. Case studies were 'Bringing education to children in Dharavi, India' and 'Developing water infrastructure in Kibera, Kenya'. I was a part of the Dharavi Project.";

  document.getElementById("hpairme").innerHTML = "The Harvard College Project for Asian and International Relations (HPAIR) was founded to create a forum of exchange for students and young professionals to discuss and learn about the most important economic, political, and social issues facing the Asia-Pacific region. Asia’s astounding growth over the past decade has not been without challenges. Solutions to sustainable development remain elusive; alarming human rights abuses against women, refugees, and the LGBTQ community remain unanswered; rising wealth inequality, catalyzed by globalization, remain unaddressed. The 2019 HPAIR Harvard College Conference gave me a platform to cooperatively confront these emerging challenges in Asia through dialogue and exchange that transcend geographical and cultural borders. Also, for students like me who are unable to totally fund their way into this conference, HPAIR provides scholarships to 20-25 delegates. I am honored to be selected among one of those few delegates. Those few days at Harvard gave my life a new perspective and purpose. I am very thankful to the staff for giving me this opportunity.";

  document.getElementById("icme").innerHTML = "The Emerging Markets & Venture Capital Pitch Impact Challenge was a challenge for us to pursue a rational exploration into different emerging markets across Asia. Teams of delegates were supposed to showcase comprehensive research and collaboration skills, effectively describe innovative ideas, and introduce specific qualities of an emerging market that would make the market attractive to investors. After a day of preparation and opportunities to consult with accomplished mentors, this Impact Challenge culminated in a presentation of an emerging market that is predicted to yield high investment returns to a panel of professional venture capitalists, some of which include Manu Goswami, Richard Robinson, and Scott McNally. It was a proud moment for me to have won this challenge.";

  document.getElementById("voiceplus").innerHTML = "Developing counter-narratives by promoting non-discrimination, tolerance, and respect, including through awareness-raising activities is an essential remedy to hate or extremist speech. ORF along with Facebook India organized and conducted a Voice+ Challenge for higher educational institutions to help students develop and execute campaigns and social media strategies against extremism that are credible, authentic, and believable to their peers and resonate within their communities in India. We developed social and digital media initiatives to push back on extremism. Extreme posts were often met with disagreement, derision, and counter-campaigns. Combating extremism in this way had some advantages: it was faster, more flexible and responsive, and capable of dealing with extremism from anywhere and in any language, and retained the principle of free and open public spaces for debate. Our team made it among the top 10 finalists in India and were invited to the 'Tackling Insurgent Ideologies' Conference.";
};

window.onscroll = function() {myFunction()};

function myFunction() 
{
    var navbar = document.getElementById("myNavbar");

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) 
    {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    }
    else 
    {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", " w3-hide");
    }
}
         
function toggleFunction() 
{
    var x = document.getElementById("navDemo");
    
    if (x.className.indexOf("w3-show") == -1) 
    {
        x.className += " w3-show";
    } 
    else 
    {
        x.className = x.className.replace(" w3-show", "");
    }
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) 
{
  showDivs(slideIndex += n);
}

function currentDiv(n) 
{
  showDivs(slideIndex = n);
}

function showDivs(n) 
{
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) 
  {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) 
  {
    dots[i].className = dots[i].className.replace(" w3-black", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-black";
}

$.getJSON('https://api.chess.com/pub/player/ruined_toucan/stats', function(data) 
{
    document.getElementById("chess-bullet-last").innerHTML = `${data.chess_bullet.last.rating}`;
    document.getElementById("chess-bullet-best").innerHTML = `${data.chess_bullet.best.rating}`;
    document.getElementById("chess-bullet-played").innerHTML = +`${data.chess_bullet.record.win}` + +`${data.chess_bullet.record.loss}` + +`${data.chess_bullet.record.draw}`;
        
    document.getElementById("chess-blitz-last").innerHTML = `${data.chess_blitz.last.rating}`;
    document.getElementById("chess-blitz-best").innerHTML = `${data.chess_blitz.best.rating}`;
    document.getElementById("chess-blitz-played").innerHTML = +`${data.chess_blitz.record.win}` + +`${data.chess_blitz.record.loss}` + +`${data.chess_blitz.record.draw}`;

    document.getElementById("chess-rapid-last").innerHTML = `${data.chess_rapid.last.rating}`;
    document.getElementById("chess-rapid-best").innerHTML = `${data.chess_rapid.best.rating}`;
    document.getElementById("chess-rapid-played").innerHTML = +`${data.chess_rapid.record.win}` + +`${data.chess_rapid.record.loss}` + +`${data.chess_rapid.record.draw}`;
});

$.getJSON('https://lichess.org/api/user/ruined_toucan', function(data) 
{
    document.getElementById("lichess-bullet-curr").innerHTML = `${data.perfs.bullet.rating}`;
    document.getElementById("lichess-bullet-played").innerHTML = `${data.perfs.bullet.games}`;
        
    document.getElementById("lichess-blitz-curr").innerHTML = `${data.perfs.blitz.rating}`;
    document.getElementById("lichess-blitz-played").innerHTML = `${data.perfs.blitz.games}`;

    document.getElementById("lichess-rapid-curr").innerHTML = `${data.perfs.rapid.rating}`;
    document.getElementById("lichess-rapid-played").innerHTML = `${data.perfs.rapid.games}`;
});
