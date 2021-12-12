import Typewriter from "typewriter-effect";

export function TypewriterEffect() {
  return (
    <div className="text-xl mt-6 text-center">
      <p>Hi, i'm Emiliano</p>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("and i'm <strong>Frontend software engineer</strong>")
            .pauseFor(4000)
            .deleteAll()
            .typeString("Be welcome :)")
            .pauseFor(300)
            .start();
        }}
      />
    </div>
  );
}
