import Typewriter from "typewriter-effect";

export function TypewriterEffect() {
  return (
    <div className="text-xl mt-6 text-center">
      <p>Olá, me chamo Emiliano</p>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("sou desenvolvedor <strong>Frontend</strong></br>")
            .pauseFor(3000)
            .typeString("Fique a vontade :)")
            .pauseFor(300)
            .start();
        }}
      />
    </div>
  );
}
