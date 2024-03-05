import React from 'react'
import experience from '../assets/experience.png'
import bg from '../assets/dot-bg.png'
import tech1 from '../assets/tech1.png'
import tech2 from '../assets/tech2.png'
import tech3 from '../assets/tech3.png'
import tech4 from '../assets/tech4.png'
import '../styles/About.css'
import '../styles/Experience.css'


function Skills() {
  return (
    <>
      <section class="section__container about__container" id="experience">
        <div class="about__image">

          <img src={experience} alt="about" />
        </div>
        <div class="about__content">
          <h2 class="section__header">Experience</h2>
          <p class="section__description">
            "Welcome to my 'Achievements' corner, where I proudly present some notable milestones in my academic and professional journey. These accomplishments showcase my dedication to continuous improvement, problem-solving, and my commitment to excellence:"
          </p>
          <div class="about__grid">
            <div class="about__card">
              <div>
                <h4>Tata Imaginative Challenge (Round 1 Qualifier) - September 2023:</h4>
                <p>
                  Successfully qualified for Round 1 in the Tata Imaginative Challenge organized by unstop, demonstrating my innovative thinking and problem-solving skills.
                </p>
              </div>
            </div>
            <div class="about__card">

              <div>
                <h4>Newton School Coding Contest - July 2022:</h4>
                <p>
                  Ranked among the top 500 students in Newton's Coding Challenge, a nationwide competition, showcasing my coding prowess and dedication to improving my skills.
                </p>
              </div>
            </div>
            <div class="about__card">

              <div>
                <h4>Aarambh'2022 - SIET (Shambhunath Institute of Engineering and Technology):</h4>
                <p>
                  Secured a commendable 38th rank in Aarambh, an event organized by Shambhunath Institute of Engineering and Technology, Prayagraj, reflecting my academic excellence and competitive spirit.
                </p>
              </div>
            </div>

            <div class="about__card">
              <div>
                <h4>Job-A-Thon 23 Hiring Challenge:</h4>
                <p>
                  Achieved an impressive 144th rank out of a competitive pool of 9000 participants in the Job-A-Thon 23 Hiring Challenge, emphasizing my ability to excel in challenging job-related assessments.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>



      <section class="section__container project__container" id="skills">
        <h2 class="section__header">Social Media</h2>
        <p class="section__description">
          Welcome to my Social Media corner! This is where you'll find links to my coding profiles on platforms like GeeksforGeeks, LeetCode, and HackerRank. These are not just profiles; they represent my journey through the exciting world of problem-solving, coding challenges, and continuous learning. Whether it's tackling algorithmic puzzles, improving my data structures knowledge, or showcasing my coding skills, you can explore it all right here. Feel free to connect with me on these platforms to see my coding progress and share in the joy of problem-solving
        </p>

        <div class="skill__grid">


          <div class="skill__card">
            <a href="https://auth.geeksforgeeks.org/user/hasira804/" target='_blank'>
              <img src={bg} alt="bg" class="skill__bg" />
              <img src={tech1} alt="bg" />
              <div class="skill__content">
                <h4>GeeksForGeeks</h4>
                <p>GeeksForGeeks</p>
              </div>
            </a>
          </div>

          <div class="skill__card">
            <a href="https://leetcode.com/hasira804/" target='_blank'>
              <img src={bg} alt="bg" class="skill__bg" />
              <img src={tech2} alt="bg" />
              <div class="skill__content">
                <h4>LeetCode</h4>
                <p>LeetCode </p>
              </div>
            </a>
          </div>

          <div class="skill__card">
            <a href="https://www.hackerrank.com/hasira804" target='_blank'>
              <img src={bg} alt="bg" class="skill__bg" />
              <img src={tech4} alt="bg" />
              <div class="skill__content">
                <h4>HackerRank</h4>
                <p>HackerRank</p>
              </div>
            </a>
          </div>

          <div class="skill__card">
            <a href="https://github.com/hasirali" target='_blank'>
              <img src={bg} alt="bg" class="skill__bg" />
              <img src={tech3} alt="bg" />
              <div class="skill__content">
                <h4>Github</h4>
                <p>Github</p>
              </div>
            </a>
          </div>




        </div>
      </section>
    </>
  )
}

export default Skills