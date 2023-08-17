function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Hello, I am Sergey Zelman Junior, a passionate and skilled full stack
          developer who has recently graduated from CDI College. With a strong
          foundation in web development, I possess the expertise to create
          dynamic and responsive websites. My experience encompasses a wide
          range of tools and technologies spanning both the frontend and backend
          domains. Proficient in languages such as HTML5, CSS,
          JavaScript/TypeScript, node.js, and Java, I am capable of crafting
          engaging user interfaces and seamless user experiences. On the
          backend, I am well-versed in languages like C#, Python, and possess
          the ability to work with databases such as MySQL and MongoDB, handling
          data efficiently and securely.
        </p>
        <br />
        <p className="text-xl">
          My problem-solving skills and creative mindset enable me to devise
          innovative solutions to complex challenges. I pride myself on my
          reliability and dedication to producing high-quality work. As a full
          stack developer, I am excited to continue my journey of growth and
          contribute my expertise to innovative projects.
        </p>
      </div>
    </div>
  );
}

export default About;
