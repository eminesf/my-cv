import Typewriter from "typewriter-effect";

export function TypewriterEffect() {
  return (
    <div className="text-xl">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Olá, me chamo <strong>Emiliano</strong>")
            .pauseFor(3000)
            .deleteAll()
            .typeString("Sou desenvolvedor <strong>Frontend</strong>")
            .pauseFor(5000)
            .deleteAll()
            .typeString("Fique a vontade :)")
            .pauseFor(300)
            .start();
        }}
      />
    </div>
  );
}
