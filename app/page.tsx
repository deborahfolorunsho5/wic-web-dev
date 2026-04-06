export default function Home() {
  return (
   
    <main>
    <section id="home">
    
      <h1 className="text-6xl font-bold text-blue-900 text-center"> Deborah Folorunsho </h1>
      <p className = "text-center"> a computer science student interested in software engineering and AI/ML  </p>
      <p className = "text-center"> studying at the University of Illinois Chicago </p>
      
      {/* <img src="https://placehold.co/200x200" alt="profile pic" className = "block mx-auto" /> */}
    
    </section>
  
    <section id="about" className = "mt-20 text-center text-4xl font-bold text-blue-900">
      <h1>About Me!</h1>
    </section>

    <section id = "about content">
      <p> I'm a sophomore at the University of Illinois Chicago studying Computer Science with a minor in Finance. I'm passionate about building tech solutions that make a real impact — from developing UI features for social platforms to analyzing multimodal datasets for anomaly detection research.I've interned as a Software Engineer at Rituals, where I built core features for a social accountability app, and as a Data Science Intern at UIC's College of Engineering, where I co-authored a journal paper submission using AI-driven data analysis. I also spent a summer at USC's HaRVI Lab researching VR interaction mechanics and immersive environment design. Outside of work, I co-founded Quaddle, a student marketplace web app built during a 24-hour hackathon that helps college students showcase their small businesses and services. I'm also involved in NSBE, Women in Computer Science, and ColorStack on campus.</p>
    </section>
  
    {/* export default function Home(){
      const experiences = [
      {
        title: "Rituals",
        role:
        date:
        description:

      },
      ];
    } */}

    
   
    <section id="contact" className = "mt-20 text-center text-4xl font-bold text-blue-900">
      <h1>Contact me!</h1>

    </section>
    <section id = "contact section">
        <p> gmail - deborahfolorunsho43@gmail.com </p>
        <p> Linkdin -  </p>
    </section>
  </main>
  )
}
