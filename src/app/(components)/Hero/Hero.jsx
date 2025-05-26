export default function Hero() {
  return (
    <section className="text-white py-10">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Hey, I’m <span className="text-teal-500">Rijusmit Biswas</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed">
          I’m a <span className="font-medium text-gray3500">21-year-old</span> tech enthusiast diving into{" "}
          <span className="font-medium text-teal-500">Full Stack</span> and{" "}
          <span className="font-medium text-teal-500">Machine Learning</span>.
        </p>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
          I’m passionate about building a career in <span className="font-medium text-gray-200">MLOps</span>, currently working on projects and research in{" "}
          <span className="font-medium text-teal-500">Legal AI</span> and{" "}
          <span className="font-medium text-teal-500">Environmental Data Science</span>.
        </p>
      </div>
    </section>
  );
}